const catchAsync = require('../utils/catchAsync');

const CreateUser = catchAsync(async (req, res, next) => {
    const { id, name, lastName, email, password, confirmationPassword, role } = req.body;
    const { id: userId } = req.user;
    const { usersClient } = req.app.locals;


    usersClient.CreateUser({ 
        userId,
        id, 
        name, 
        lastName, 
        email, 
        password, 
        confirmationPassword, 
        role
    }, (error, response) => {
        if (error) {
            return next(error);
        }
        res.status(201).json({
            status: 'success',
            data: response
        });
    });
});

const GetUser = catchAsync(async (req, res, next) => {
    const { id: userId, email: userEmail } = req.user;
    const { id } = req.params;

    usersClient.GetUser({ userId, userEmail, id }, (error, response) => {
        if (error) {
            return next(error);
        }
        res.status(200).json({
            status: 'success',
            data: response
        });
    });
});

const UpdateUser = catchAsync(async (req, res, next) => {
    const { id: userId, email: userEmail } = req.user;
    const { name, lastName, email, password } = req.body;
    const { id } = req.params;

    usersClient.UpdateUser({ userId, userEmail, id, name, lastName, email, password }, (error, response) => {
        if (error) {
            return next(error);
        }
        res.status(200).json({
            status: 'success',
            data: response
        });
    });
});

const DeleteUser = catchAsync(async (req, res, next) => {
    const { id: userId, email: userEmail } = req.user;
    const { id } = req.params;

    usersClient.DeleteUser({ userId, userEmail, id }, (error, response) => {
        if (error) {
            return next(error);
        }
        res.status(204).json({
            status: 'success',
            data: null
        });
    });
});

const ListUsers = catchAsync(async (req, res, next) => {
    const { id: userId, email: userEmail } = req.user;
    const { email, name, lastName } = req.body;

    usersClient.ListUsers({ userId, userEmail, email, name, lastName }, (error, response) => {
        if (error) {
            return next(error);
        }
        res.status(200).json({
            status: 'success',
            data: response
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
