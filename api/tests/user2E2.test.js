const request = require("supertest");
const { faker } = require("@faker-js/faker");
const app = require("../app"); // Asegúrate de que este path es correcto

const api = request(app);

function createFakeUser() {
  const password = "Password123";
  return {
    name: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email().toLowerCase(),
    password,
    confirmationPassword: password,
    role: "Cliente",
  };
}

describe("🔁 E2E: CRUD de Usuarios vía API Gateway", () => {
  let createdUserId;

  // 2. Crear usuario
  describe("POST /api/users", () => {
    test("✅ Crear usuario exitosamente", async () => {
      const newUser = createFakeUser();
      const res = await api.post("/api/users").send(newUser);
      expect(res.status).toBe(201);
      expect(res.body.data.name).toBe(newUser.name);
      expect(res.body.data.email).toBe(newUser.email);
      createdUserId = res.body.data.id;
    });

    test("❌ Error al crear usuario sin campos", async () => {
      const res = await api.post("/api/users").send({});
      expect(res.status).toBeGreaterThanOrEqual(400);
    });
  });

  // 3. Obtener usuario
  describe("GET /api/users/:id", () => {
    test("✅ Obtener usuario exitosamente", async () => {
      const res = await api.get(`/api/users/${createdUserId}`);
      expect(res.status).toBe(200);
      expect(res.body.data.id).toBe(createdUserId);
    });

    test("❌ Error al obtener usuario inexistente", async () => {
      const res = await api.get("/api/users/invalid-id-123");
      expect(res.status).toBeGreaterThanOrEqual(400);
    });
  });

  // 4. Actualizar usuario
  describe("PATCH /api/users/:id", () => {
    test("✅ Actualizar usuario exitosamente", async () => {
      const res = await api.patch(`/api/users/${createdUserId}`).send({
        name: "Actualizado",
        lastName: "Apellido",
        email: `actualizado_${Date.now()}@test.com`,
      });
      expect(res.status).toBe(200);
      expect(res.body.data.name).toBe("Actualizado");
    });

    test("❌ Error al actualizar usuario inexistente", async () => {
      const res = await api.patch("/api/users/invalido").send({
        name: "Fail",
      });
      expect(res.status).toBeGreaterThanOrEqual(400);
    });
  });

  // 5. Eliminar usuario
  describe("DELETE /api/users/:id", () => {
    test("✅ Eliminar usuario exitosamente", async () => {
      const res = await api.delete(`/api/users/${createdUserId}`);
      expect(res.status).toBe(204);
    });

    test("❌ Error al eliminar usuario inexistente", async () => {
      const res = await api.delete("/api/users/invalido");
      expect(res.status).toBeGreaterThanOrEqual(400);
    });
  });

  // 6. Listar usuarios
  describe("GET /api/users", () => {
    test("✅ Listar usuarios", async () => {
      const res = await api.get("/api/users");
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body.data.users)).toBe(true);
    });

    test("❌ Error al listar con filtro inválido", async () => {
      const res = await api.get("/api/users?email=null&name=123");
      expect(res.status).toBeGreaterThanOrEqual(400);
    });
  });
});
