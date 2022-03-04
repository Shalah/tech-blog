const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// This is a class that is being used as a way to tell sequelize how we want the data
// by creating a model that will be used in the database

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);

module.exports = Post;
