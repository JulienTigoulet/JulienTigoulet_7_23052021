'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      models.Comment.belongsTo(models.User, {foreignKey: 'userId', as:'user'})
      models.Comment.belongsTo(models.Post, {foreignKey: 'postId', as:'post'})
    }
    toJSON(){
      return {...this.get(), id: undefined, userId:undefined}
    }
  };
  Comment.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    body: {
      type: DataTypes.STRING,
      allowNull : false,
    },
  }, {
    sequelize,
    tableName:'comments',
    modelName: 'Comment',
  });
  return Comment;
};