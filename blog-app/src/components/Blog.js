
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import React from 'react'
import { useNavigate } from 'react-router-dom';


const Blog = ({title, content, author, image, vote, id}) => {
  const navigate = useNavigate();
  const handleDetails =(e) => {
    navigate(`/blogDetail/${id}`)
  }
 
 const cc = vote>0 ? '1px solid red' : '1px solid green'

  return (
    <div>
      <Card sx={{ width: '70%'  , margin:'auto', mt:6, pading:2 ,  border: cc , boxShadow: "x 5px 10px #ccc",
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          }, }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
     
        title={title}
        subheader={author}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          
       {content.substr(0,349)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
          <ExpandMoreIcon  onClick={handleDetails}/>
     read and vote
      </CardActions>
     
    </Card>
    

    </div>
  )
}

export default Blog