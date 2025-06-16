const catchAsync = require("../utils/catchAsync");

const CreateInvoice = catchAsync(async (req, res, next) => {
  req.app.locals.invoiceClient.CreateInvoice(req.body, (error, response) => {
    if (error) return next(error);
    res.status(200).json(response);
  });
});

const GetInvoiceById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  req.app.locals.invoiceClient.GetInvoiceById({ id: parseInt(id) }, (error, response) => {
    if (error) return next(error);
    res.status(200).json(response);
  });
});

const UpdateInvoice = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  req.app.locals.invoiceClient.UpdateInvoice({ id: parseInt(id), ...req.body }, (error, response) => {
    if (error) return next(error);
    res.status(200).json(response);
  });
});

const DeleteInvoice = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  req.app.locals.invoiceClient.DeleteInvoice({ id: parseInt(id) }, (error, response) => {
    if (error) return next(error);
    res.status(204).json({});
  });
});

const ListInvoices = catchAsync(async (req, res, next) => {
  req.app.locals.invoiceClient.ListInvoices({}, (error, response) => {
    if (error) return next(error);
    res.status(200).json(response);
  });
});

const invoiceService = {
  CreateInvoice,
  GetInvoiceById,
  UpdateInvoice,
  DeleteInvoice,
  ListInvoices,
};

module.exports = invoiceService;
