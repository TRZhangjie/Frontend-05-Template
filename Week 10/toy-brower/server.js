var http = require("http");
http
  .createServer((request, response) => {
    let body = [];
    request
      .on("error", (error) => console.log(error))
      .on("data", (chunk) => {
        console.log("chunk:", chunk);
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        console.log("body:", body);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(
          `<head>
            <style>
            body #myid{ 
                font-weight: bold;
              }
              body div span{
                color: red;
                background-color: #123123;
              }
            </style>
          </head>
          <body>
            <span id="myid">
              Hello Node
            </span>
            <div>
              <span>i am span</span>
            </div>
            <input bala='text' />
          </body>
          `
        );
      });
  })
  .listen(3000);
console.log("Server running at http://127.0.0.1:3000/");
