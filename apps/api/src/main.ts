import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { Message } from '@massino/api-interfaces';

const app: Application = express();

// important to use before
app.use(bodyParser.json());

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
