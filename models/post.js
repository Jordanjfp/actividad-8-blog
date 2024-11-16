const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Author = require('./author');

const Post = sequelize.define('Post', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    category: { type: DataTypes.STRING },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { timestamps: false });

Post.belongsTo(Author, { foreignKey: 'author_id' });

module.exports = Post;
 
