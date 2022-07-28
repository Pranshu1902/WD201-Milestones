const http = require("http");
const fs = require("fs");

let homeContent = "";
let formContent = "";
let projectContent = "";

fs.readFile("home.html", function (err, home) {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("survey/form.html", function (err, form) {
  if (err) {
    throw err;
  }
  formContent = form;
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
      case "/form":
        response.write(formContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(3000);
