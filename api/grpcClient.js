const { credentials } = require("@grpc/grpc-js");
const loadProto = require("./src/utils/loadproto")
const { config } = require("dotenv");

const loadClients = (app) => {
    const authProto = loadProto("auth");
    const playlistProto = loadProto("playlist");
    const userProto = loadProto("users");

    app.locals.authClient = new authProto.AuthService(
        process.env.AUTH_SERVICE_URL,
        credentials.createInsecure()
    );

    app.locals.playlistsClient = new playlistProto.PlaylistService(
        process.env.PLAYLIST_SERVICE_URL,
        credentials.createInsecure()
    );

    app.locals.usersClient = new userProto.Users(
        process.env.USER_SERVICE_URL,
        credentials.createInsecure()
    );
}

module.exports = loadProto;