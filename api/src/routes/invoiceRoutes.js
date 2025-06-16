const { Router } = require("express");
const {
  CreateInvoice,
  GetInvoiceById,
  UpdateInvoice,
  DeleteInvoice,
  ListInvoices,
} = require("../services/invoiceService");

const invoiceRouter = Router();

invoiceRouter.route("/")
  .get(ListInvoices)
  .post(CreateInvoice);

invoiceRouter.route("/:id")
  .get(GetInvoiceById)
  .patch(UpdateInvoice)
  .delete(DeleteInvoice);

module.exports = invoiceRouter;
