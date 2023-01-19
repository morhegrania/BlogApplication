const Blogs = require("../models/blog");

const addBlog = async (req, res) => {
  try{
    const blogs = await Blogs.create(req.body);
    return res.status(201).json(blogs);
} catch (error){
  res.status(500).json(error);
}
};
  

const getAllBlogs = async (req, res) => {
  const author = req.query.author;
  const title = req.query.title;

  try {
    let blogs = await Blogs.find();
  
    return res.status(200).json({ blogs });
  } catch (error) {
    res.status(500).json(error);
  }
};


const getSingleBlog = async (req, res) => {
  try {
    const blog = await Blogs.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Post does not exist" });
    }
    return res.status(200).json({ blog });
  } catch (error) {
    res.status(500).json(error);
  }
};
const voteBlog = async (req, res) => {
  try {
    const blog = await Blogs.findById(req.params.id);
  
      try {
        const updatedPost = await Blogs.findByIdAndUpdate(
          req.params.id,
         {$set:{vote: req.body.vote + blog.vote}},
          {
            new: true,
            runValidators: true,
          }
        );
        if (!blog) {
          return res.status(404).json({ error: "Post does not exist" });
        }
        return res.status(200).json({ updatedPost });
      } catch (error) {
        return res.status(500).json(error);
      }
   
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAllBlogs, addBlog, voteBlog,  getSingleBlog };
