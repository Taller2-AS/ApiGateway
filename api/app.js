const express = require('express');
const morgan = require('morgan');
const { connect } = require('mongoose');
const { config } = require('dotenv');
const authRouter = require('./src/routes/authRoutes');
const playlistRouter = require('./src/routes/playlistRoutes');

config({path : '.env'});

const loadClients = require('./grpcClient');
const userRouter = require('./src/routes/userRoutes');








loadClients(app);

app.use('/auth', authRouter);
app.use('/listas-reproduccion', playlistRouter)
app.use('/usuarios', userRouter);

app.get('/', (req, res) => {
    res.send('El servidor está funcionando correctamente para ser evaluado.');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});