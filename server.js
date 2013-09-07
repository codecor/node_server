var http = require("http");

function dbg(out)
{
    console.log(out);
}

function onRequest (request, response)
{
    dbg("Request received.");
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("sup?");
    response.end();
}

function start()
{
    http.createServer(onRequest).listen(8888,"0.0.0.0");
    dbg("server listening on 0.0.0.0:8888");
}

exports.start = start;
