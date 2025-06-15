const { credentials } = require("@grpc/grpc-js");
const loadProto = require("./src/utils/loadproto")
const { config } = require("dotenv");

const loadClients = (app) => {
    const authProto = loadProto("auth");
    app.locals.authClient = new authProto.AuthService(
        process.env.AUTH_SERVICE_URL,
        credentials.createInsecure()
    );
}

module.exports = loadProto;