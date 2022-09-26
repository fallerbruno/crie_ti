import { Sequelize, Model, Optional } from 'sequelize';
export const db = new Sequelize('votes', 'postgres', '123456', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

db.sync();