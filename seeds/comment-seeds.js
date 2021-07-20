const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Integer commodo gravida arcu, et egestas ligula pellentesque ac.",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Phasellus pharetra sodales odio, in tempus leo auctor in.",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "Proin vulputate tellus nec eros feugiat, non pharetra turpis tincidunt.",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Sed scelerisque interdum luctus.",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "Nullam pharetra elementum risus.",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "Vestibulum dignissim lectus vel metus porttitor, in facilisis nulla ultrices.",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;