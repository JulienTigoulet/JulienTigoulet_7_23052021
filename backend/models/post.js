'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Post.belongsTo(models.User, {foreignKey: 'userId', as:'user'})
      models.Post.hasMany(models.Comment, {foreignKey:'postId', as:'comments', onDelete: 'cascade', hooks:true});
    }
    toJSON(){
      return {...this.get(), id: undefined, userId:undefined}
    }
  };
  Post.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    body: {
      type: DataTypes.STRING,
      allowNull : false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull : true,
    }
  }, {
    sequelize,
    tableName: 'posts',
    modelName: 'Post',
  });
  return Post;
};