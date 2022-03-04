const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// This is a class that is being used as a way to tell sequelize how we want the data
// by creating a model that will be used in the database

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);

module.exports = Comment;
