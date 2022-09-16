const http = require("http");
const fs = require("fs");

const args = require("minimist")(process.argv.slice(1));

let homeContent = "";
let formContent = "";
let projectContent = "";

fs.readFile("home.html", function (err, home) {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("registration.html", function (err, home) {
  if (err) {
    throw err;
  }
  formContent = home;
});

fs.readFile("project.html", function (err, project) {
  if (err) {
    throw err;
  }
  projectContent = project;
});

http
  .createServer(function (request, response) {
    let url = request.url;
    response.writeHead(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registration":
        response.write(formContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(args["port"]);
