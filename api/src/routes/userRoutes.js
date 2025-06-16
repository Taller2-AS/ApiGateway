const { Router } = require('express');
const {
  CreateUser,
  GetUser,
  UpdateUser,
  DeleteUser,
  ListUsers
} = require('../services/usersService');

const authMiddleware = require('../middlewares/authMiddleware');

const userRouter = Router();

userRouter.route('/')
  .post(authMiddleware, CreateUser)
  .get(authMiddleware, ListUsers);

  userRouter.route('/:id')
  .get(authMiddleware, GetUser)
  .patch(authMiddleware, UpdateUser)
  .delete(authMiddleware, DeleteUser);

module.exports = userRouter;
