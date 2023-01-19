import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddBlog from './components/AddBlog';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Blogs from './components/Blogs';
import Header from './components/Header';

function App (){

  return (
   <React.Fragment>
     <header>
       <Header/>
     </header>
     <main>
       <Routes>
       <Route path="/" element={<Blogs />} />
       <Route path="/blog" element={<Blog />} />
       <Route path="/blogDetail/:id" element={<BlogDetail />} />
       <Route path="/add" element={<AddBlog />} />
       </Routes>
     </main>

   </React.Fragment>
    
  )

  
};

export default App;
