const catchAsync = require("../utils/catchAsync")
const { authClient } = req.app.locals;

const Login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    authClient.Login({ email, password }, (error, response) => {
        if (error) {
            return next(error);
        }
        res.status(200).json({
            status: 'success',
            data: response
        });
    });
});
const UpdatePassword = catchAsync(async (req, res, next) => {
    const {
        userIdChange,
        password,
        newPassword,
        confirmPassword
    } = req.body;

    const { id: userId, email: userEmail, role: userRole } = req.user;

    authClient.UpdatePassword({ userId,
        userRole,
        userEmail,
        userIdChange,
        password,
        newPassword,
        confirmPassword 
    }, (error, response) => {
        if (error) {
            return next(error);
        }
        res.status(200).json({
            status: 'success',
            data: response
        });
    });
}); 
const Logout = catchAsync(async (req, res, next) => {
    const { userId, userEmail } = req.body;

    const token = req.headers.authorization.split(' ')[1];

    authClient.Logout({ userId,
    userEmail,
    token
    }, (error, response) => {
        if (error) {
            return next(error);
        }
        res.status(200).json({
            status: 'success',
            data: response
        });
    });
});

const authService = {
    Login,
    UpdatePassword,
    Logout
};

module.exports = authService;