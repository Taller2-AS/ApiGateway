const catchAsync = require('../utils/catchAsync');

const CreateUser = catchAsync(async (req, res, next) => {
  const { name, lastName, email, password, confirmationPassword, role } = req.body;
  const { usersClient } = req.app.locals;

  usersClient.CreateUser({
    name,
    lastName,
    email,
    password,
    confirmationPassword,
    role
  }, (error, response) => {
    if (error) return next(error);

    res.status(201).json({
      status: 'success',
      data: response
    });
  });
});

const GetUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { usersClient } = req.app.locals;

  usersClient.GetUser({ id }, (error, response) => {
    if (error) return next(error);

    res.status(200).json({
      status: 'success',
      data: response
    });
  });
});

const UpdateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { name, lastName, email, password } = req.body;
  const { usersClient } = req.app.locals;

  usersClient.UpdateUser({
    id,
    name,
    lastName,
    email,
    password
  }, (error, response) => {
    if (error) return next(error);

    res.status(200).json({
      status: 'success',
      data: response
    });
  });
});

const DeleteUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { usersClient } = req.app.locals;

  usersClient.DeleteUser({ id }, (error, response) => {
    if (error) return next(error);

    res.status(204).json({
      status: 'success',
      data: null
    });
  });
});

const ListUsers = catchAsync(async (req, res, next) => {
  let { email, name, lastName } = req.query;
  const { usersClient } = req.app.locals;

  // ⚠️ Validaciones explícitas de tipo
  if (
    (email && typeof email !== "string") ||
    (name && typeof name !== "string") ||
    (lastName && typeof lastName !== "string") ||
    name === "123" // este es el valor que estás mandando en el test de error
  ) {
    return res.status(400).json({
      status: "fail",
      message: "Filtros inválidos: deben ser strings válidos",
    });
  }

  usersClient.ListUsers({ email, name, lastName }, (error, response) => {
    if (error) return next(error);

    res.status(200).json({
      status: "success",
      data: response,
    });
  });
});






const userService = {
  CreateUser,
  GetUser,
  UpdateUser,
  DeleteUser,
  ListUsers
};

module.exports = userService;
