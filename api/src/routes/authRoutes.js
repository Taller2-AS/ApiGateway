const { Router } = require('express');
const { Login, UpdatePassword, Logout } = require('../services/authService');
const authMiddleware = require('../middlewares/authMiddleware');

const authRouter = Router();

authRouter.route('/').get(Login);

authRouter.route('/login').post(Login);
authRouter.route('/usuarios/:id')
    patch(authMiddleware, UpdatePassword)
authRouter.route('/logout').post(Logout);

module.exports = authRouter;