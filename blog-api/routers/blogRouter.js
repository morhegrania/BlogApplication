const express = require('express');
const {
  addBlog,
  getAllBlogs,
  getSingleBlog,
  voteBlog,
} =  require("../controllers/blog-controller");
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
 blogRouter.put("/vote/:id", voteBlog);
 blogRouter.get("/:id", getSingleBlog);


module.exports = blogRouter;

