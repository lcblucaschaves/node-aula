import express, {NextFunction, Request, Response} from 'express'

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send("<h1>Welcome to my Express server</h1>")
});

//construcao incremental da resposta
app.get('/incremental', (req, res) => {
    res.status(200);
    res.write("<p>First Paragraph</p>");
    res.write("<p>Second Paragraph</p>");
    res.write("<p>Third Paragraph</p>");
    res.end();
});

app.get('/internal-error', (req, res) => {
    res.status(500).send('Internal Server Error')
});

app.get('/dangling', (req, res) => {
    res.write('Teste');
    console.log("Rota pendente");
});

app.get('/route1', (req, res) => {
    res.send('First-match');
});

app.get('/route1', (req, res) => {
    res.send('Second-match');
});


app.get('/route2', (req, res, next: NextFunction) => {
    res.write('First-match\n');
    next();
});

app.get('/route2', (req, res, next) => {
    res.write('Second-match\n');
    next();
});

app.get('/route2', (req, res) => {
    res.end('Third-match\n');
});


app.listen(port, () => {
    console.log("Server started at", port);
});