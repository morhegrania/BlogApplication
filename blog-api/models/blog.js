const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    default:"https://www.ludosln.net/wp-content/uploads/2022/12/comment-ecrire-un-article-de-blog-cover.jpg", },
  vote: { 
    type: Number, 
    default: 0 },

});

module.exports = mongoose.model("Blogs", blogsSchema);
