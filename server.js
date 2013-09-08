var http = require("http");
var url = require("url");

function dbg(out)
{
    console.log(out);
}

function start(route, handle)
{
    function onRequest (request, response)
    {
        var pathname = url.parse(request.url).pathname;
        dbg("Request received " + pathname +".");

        route(handle,pathname,response);
        response.end();
    }

    http.createServer(onRequest).listen(8888,"0.0.0.0");
    dbg("server listening on 0.0.0.0:8888");
}

exports.start = start;
