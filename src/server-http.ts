import * as http from 'http'
import * as url from 'url'

const port: number = 4000

const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    const parsedUrl: url.UrlWithParsedQuery = url.parse(req.url || '', true);
    const path: string = parsedUrl.pathname || '';

    if (path === '/') {
        res.end('<h1>home page</h1>')
    } else if (path === '/about') {
        res.end('<h1>about page</h1>')
    } else if (path === '/contact') {
        res.end('<h1>contact page</h1>')
    } else {
        res.end('<h1>404: page not found</h1>')
    }

});

server.listen(port, () => {
    console.log(`Server Listening at port ${port}`)
});