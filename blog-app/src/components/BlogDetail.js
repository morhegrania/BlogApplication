import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const BlogDetail = () => {
  const navigate = useNavigate();
  const id = useParams().id;
  const [blogdetail, setBlog] = useState();
 

  const sendVote = async (num) => {
    const res = await axios
    axios.put(`http://localhost:5000/blog/vote/${id}`, {  
    vote: num,
  }).catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

    const sendRequest = async () => {
      const res = await axios
        .get(`http://localhost:5000/blog/${id}`)
        .catch((err) => console.log(err));
      const data = await res.data;

      return data;
    };
    useEffect(() => {
   
      sendRequest().then((data) => setBlog(data.blog));
     
      
    }, [blogdetail]);

   const  handelUpVote=  (e) => {
    
     sendVote(1).then((data) => console.log(data))
    .then(() => navigate("/"));}
    const  handelDownVote=  (e) => {
    
      sendVote(-1).then((data) => console.log(data))
     .then(() => navigate("/"));}
  return (
    <div>
      
     {blogdetail && (
   <Card sx={{ width: '90%'  , margin:'auto', mt:6, pading:2 }}>
   <CardHeader
     avatar={
       <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
         r
       </Avatar>
     }
  
     title={blogdetail.title}
    
   />
   <CardMedia
     component="img"
     height="194"
     image={blogdetail.image}
     alt="Paella dish"
   />
   <CardContent>
     <Typography variant="body2" color="text.secondary">
       
     <b>{blogdetail.author}</b> {": "} {blogdetail.content}
     </Typography>
   </CardContent>
   <CardActions disableSpacing>
     <IconButton >
       <ThumbUpOffAltIcon  color="success"  onClick={handelUpVote} />
       
     </IconButton>
     <IconButton >
       <ThumbDownOffAltIcon color="warning"  onClick={handelDownVote}/>
     </IconButton>

   </CardActions>
   <Collapse
 //    in={expanded} 
    timeout="auto" unmountOnExit>
     <CardContent>
       <Typography paragraph>Method:</Typography>
       <Typography paragraph>
         Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
         aside for 10 minutes.
       </Typography>
       <Typography paragraph>
         Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
         medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
         occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
         large plate and set aside, leaving chicken and chorizo in the pan. Add
         pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
         stirring often until thickened and fragrant, about 10 minutes. Add
         saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
       </Typography>
       <Typography paragraph>
         Add rice and stir very gently to distribute. Top with artichokes and
         peppers, and cook without stirring, until most of the liquid is absorbed,
         15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
         mussels, tucking them down into the rice, and cook again without
         stirring, until mussels have opened and rice is just tender, 5 to 7
         minutes more. (Discard any mussels that don&apos;t open.)
       </Typography>
       <Typography>
         Set aside off of the heat to let rest for 10 minutes, and then serve.
       </Typography>
     </CardContent>
   </Collapse>
 </Card>
     )}

    </div>
  )
}

export default BlogDetail