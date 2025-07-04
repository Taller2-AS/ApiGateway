const { config } = require("dotenv");
const request = require("supertest");
const { faker } = require("@faker-js/faker");

config({ path: "./.env" });

const apiUrl = process.env.API_GATEWAY_URL || "http://localhost:3000";
const requestToAPI = request(apiUrl);

function generateFakeUser() {
  return {
    name: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: "Password123",
    confirmationPassword: "Password123",
    role: "Cliente",
  };
}

describe("E2E - Crear usuario a través de API Gateway", () => {
  test("Creación exitosa de usuario Cliente sin autenticación", async () => {
  const user = generateFakeUser();

    try {
      const response = await requestToAPI.post("/api/users").send(user);

      console.log("🟢 Respuesta completa:", response.body);

      expect(response.statusCode).toBe(201);
      expect(response.body.data.name).toBe(user.name);
      expect(response.body.data.email).toBe(user.email);
      expect(response.body.data).not.toHaveProperty("password");
    } catch (error) {
      console.error("❌ Error capturado en el test:", error);
      throw error; // para que Jest lo marque como fallido con más contexto
    }
  });
});
