import { DataTypes, Model } from 'sequelize';
import { db } from '../db/index';

class Votes extends Model { };

Votes.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  candidate: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  party: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize: db,
  tableName: 'votes',
  modelName: 'votes',
  timestamps: false
});
Votes.sync()
module.exports = Votes;