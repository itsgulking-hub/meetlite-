// MeetLite signalling server (PeerJS). It only helps devices find each other.
// Video and audio do NOT pass through it, so it is tiny and free hosting is enough.
const { PeerServer } = require("peer");
const port = Number(process.env.PORT) || 9000;
PeerServer({
  port,
  path: "/",
  key: "peerjs",
  proxied: true,            // required behind Render / Fly / Koyeb proxies
  allow_discovery: false,   // nobody can list the class codes
  alive_timeout: 60000,
  concurrent_limit: 5000,
  corsOptions: { origin: true }
});
console.log("MeetLite signalling server listening on port " + port);
