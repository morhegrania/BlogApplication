import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <AppBar
    position='sticky'
    >
        <Toolbar>
           <Typography variant="h4">
               BlogsApp
               </Typography> 
               <Box display="flex" marginLeft="auto">
                   <Button 
                   LinkComponent={Link} to ="/add"
                   variant="contained" color= "success"> Add blog </Button>
               </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header