import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { DataTypes, Model } from 'sequelize';

import { Message } from '@massino/api-interfaces';
import { sequelize } from './app/orm';

const app: Application = express();

// important to use before
app.use(bodyParser.json());

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});


class ClientModel extends Model {}

ClientModel.init({
  id: DataTypes.NUMBER,
  name: DataTypes.STRING,
  email: DataTypes.STRING,
}, { sequelize, modelName: 'Client' });

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
