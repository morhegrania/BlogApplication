
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


  const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
const AddBlog = () => {

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    imageURL: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/blog/add", {
        title: inputs.title,
        content: inputs.content,
         image: inputs.imageURL,
        author: inputs.author,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/"));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          border={3}
          borderColor="linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={"auto"}
          marginTop={3}
          display="flex"
          flexDirection={"column"}
          width={"80%"}
        >
          <Typography
          
            fontWeight={"bold"}
            padding={3}
            color="grey"
            variant="h2"
            textAlign={"center"}
          >
            Post Your Blog
          </Typography>
          <InputLabel  sx={labelStyles}>
            Title
          </InputLabel>
          <TextField
          
            name="title"
            onChange={handleChange}
            value={inputs.title}
            margin="auto"
            variant="outlined"
          />
            <InputLabel  sx={labelStyles}>
            Author
          </InputLabel>
          <TextField
          
            name="author"
            onChange={handleChange}
            value={inputs.author}
            margin="auto"
            variant="outlined"
          />
          <InputLabel  sx={labelStyles}>
            Description
          </InputLabel>
          <TextField
          
            name="content"
            onChange={handleChange}
            value={inputs.content}
            margin="auto"
            variant="outlined"
          />
          <InputLabel  sx={labelStyles}>
            ImageURL
          </InputLabel>
          <TextField
           
            name="imageURL"
            onChange={handleChange}
            value={inputs.imageURL}
            margin="auto"
            variant="outlined"
          />
          <Button
            sx={{ mt: 2, borderRadius: 4 }}
            variant="contained"
            color="warning"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBlog;