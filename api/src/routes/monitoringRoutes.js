const { Router } = require("express");
const {
  ListActions,
  ListErrors,
} = require("../services/monitoringService");

const monitoringRouter = Router();

monitoringRouter.get("/acciones", ListActions);
monitoringRouter.get("/errores", ListErrors);

module.exports = monitoringRouter;
