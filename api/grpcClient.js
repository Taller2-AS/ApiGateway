const { credentials } = require("@grpc/grpc-js");
const loadProto = require("./src/utils/loadproto");
const { config } = require("dotenv");

config();

console.log("AUTH_SERVICE_URL:", process.env.AUTH_SERVICE_URL);
console.log("USER_SERVICE_URL:", process.env.USER_SERVICE_URL);
console.log("VIDEO_SERVICE_URL:", process.env.VIDEO_SERVICE_URL);
console.log("INVOICE_SERVICE_URL:", process.env.INVOICE_SERVICE_URL);
console.log("MONITORING_SERVICE_URL:", process.env.MONITORING_SERVICE_URL);
console.log("SOCIAL_SERVICE_URL:", process.env.SOCIAL_SERVICE_URL);
console.log("PLAYLIST_SERVICE_URL:", process.env.PLAYLIST_SERVICE_URL);



const loadClients = (app) => {
  /** 
  // Auth Service
  const authProto = loadProto("auth");
  app.locals.authClient = new authProto.AuthService(
    process.env.AUTH_SERVICE_URL,
    credentials.createInsecure()
  );*/

  // Playlist Service
  const playlistProto = loadProto("playlist");
  app.locals.playlistsClient = new playlistProto.PlaylistService(
    process.env.PLAYLIST_SERVICE_URL,
    credentials.createInsecure()
  );

  // Users Service
  const userProto = loadProto("users");
  app.locals.usersClient = new userProto.Users(
    process.env.USER_SERVICE_URL,
    credentials.createInsecure()
  );

  // Video Service
  const videoProto = loadProto("video");
  app.locals.videoClient = new videoProto.VideoService(
    process.env.VIDEO_SERVICE_URL,
    credentials.createInsecure()
  );

  // Invoice Service
  const invoiceProto = loadProto("invoice");
  app.locals.invoiceClient = new invoiceProto.InvoiceService(
    process.env.INVOICE_SERVICE_URL,
    credentials.createInsecure()
  );

  // Monitoring Service
  const monitoringProto = loadProto("monitoring");
  app.locals.monitoringClient = new monitoringProto.MonitoringService(
    process.env.MONITORING_SERVICE_URL,
    credentials.createInsecure()
  );

  // Social Service
  const socialProto = loadProto("social");
  app.locals.socialClient = new socialProto.SocialService(
    process.env.SOCIAL_SERVICE_URL,
    credentials.createInsecure()
  );
};

module.exports = loadClients;
