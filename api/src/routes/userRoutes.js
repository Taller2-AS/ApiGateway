const { Router } = require('express');
const {
  CreateUser,
  GetUser,
  UpdateUser,
  DeleteUser,
  ListUsers
} = require('../services/usersService');

const userRouter = Router();

userRouter.route('/')
  .post(CreateUser)
  .get(ListUsers);

userRouter.route('/:id')
  .get(GetUser)
  .patch(UpdateUser)
  .delete(DeleteUser);

module.exports = userRouter;
