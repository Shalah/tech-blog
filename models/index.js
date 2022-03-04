const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// this file connects all the models by the use of foreign keys.
// it also indicates other commands we want to set for the db

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Comment,
  Post
};