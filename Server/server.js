const http = require("http");
const app = require("./app");
const server = http.createServer(app);

// set port, listen for requests
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
