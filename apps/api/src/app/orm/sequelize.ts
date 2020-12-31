import { Sequelize } from 'sequelize';

const dbUrl = 'postgres://postgres:mysecretpassword@localhost:5432/massino';
const sequelize: Sequelize = new Sequelize(dbUrl);

export default sequelize;
