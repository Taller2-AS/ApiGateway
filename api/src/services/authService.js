const catchAsync = require("../utils/catchAsync")

const Login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    const { authClient } = req.app.locals;


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
        password,
        newPassword,
        confirmPassword
    } = req.body;
    const { id: userIdChange } = req.params;
    const { id: userId, email: userEmail, role: userRole } = req.user;

    authClient.UpdatePassword({ 
        userId,
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

    authClient.Logout({ 
        userId,
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