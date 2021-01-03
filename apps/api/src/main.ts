import express, { Application } from 'express';
import bodyParser from 'body-parser';
import { DataTypes, Model } from 'sequelize';

import { Message } from '@massino/api-interfaces';
import { sequelize } from './app/orm';

const app: Application = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});


// class ClientModel extends Model {}

// ClientModel.init({
//   id: DataTypes.NUMBER,
//   name: DataTypes.STRING,
//   email: DataTypes.STRING,
// }, { sequelize, modelName: 'Client' });

const PORT = process.env.port || 3333;
const server = app.listen(PORT, () => {
  console.log('Listening at http://localhost:' + PORT + '/api');
});

server.on('error', console.error);
