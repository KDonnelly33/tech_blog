const sequelize = require('../config/connection');
const {User, BlogPost, Comment} = require('../models');

const userData = require('./user.json');
const blogPostData = require('./blogpost.json');
const commentData = require('./comment.json');

const seedDatabase = async () => {
    await sequelize.sync({force: true});

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await BlogPost.bulkCreate(blogPostData);
    await Comment.bulkCreate(commentData);

    process.exit(0);
}

seedDatabase();