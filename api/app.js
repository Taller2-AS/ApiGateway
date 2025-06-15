const express = require('express');
const morgan = require('morgan');
const { connect } = require('mongoose');
const { config } = require('dotenv');
const authRouter = require('./src/routes/authRoutes');

config({path : '.env'});

const loadClients = require('./grpcClient');








loadClients(app);

app.use('/auth', authRouter);

app.get('/', (req, res) => {
    res.send('El servidor está funcionando correctamente para ser evaluado.');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});