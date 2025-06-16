const catchAsync = require("../utils/catchAsync");

const ListActions = catchAsync(async (req, res, next) => {
  req.app.locals.monitoringClient.ListActions({}, (error, response) => {
    if (error) return next(error);
    res.status(200).json(response);
  });
});

const ListErrors = catchAsync(async (req, res, next) => {
  req.app.locals.monitoringClient.ListErrors({}, (error, response) => {
    if (error) return next(error);
    res.status(200).json(response);
  });
});

const monitoringService = {
  ListActions,
  ListErrors,
};

module.exports = monitoringService;
