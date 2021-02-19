import React, { Fragment,useState, useEffect } from 'react';
import Posts from './WWListCategoriesForShow';
import Pagination from './Pagination';
import axios from 'axios';
import './App.css';
import {Helmet} from "react-helmet";
          
const ListMy = () => {
 
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(100);

      
 
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`/api/categories/show`);
       
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  

  
  return (

    <Fragment> 
<Helmet>
       
      <meta charSet="utf-8" />
       <title>موقع رحال للسفر والسياحة حول العالم</title>    
      <meta name="description" content= "مختص بالسفر والسياحة واستكشاف الأماكن والمعالم حول دول العالم وتفاصيل عن كل دولة "  />
      <meta name="keywords" content="السفر,السياحة,الترحال,الممطارات,الهجرة,التأشيرات,تجهيزات السفر,شركات السفر والسياحة,شركات الطيران" />
      <meta name="author" content="MOMAD"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
   
      <meta property="og:site_name" content='رحـــال '/>
      <meta property="og:title" content="موقع رحال للسفر والسياحة حول العالم"/>
      <meta property="og:description" content="السفر,السياحة,الترحال,الممطارات,الهجرة,التأشيرات,تجهيزات السفر,شركات السفر والسياحة,شركات الطيران" />
      <meta property="og:image" content="https://res.cloudinary.com/momad191/image/upload/v1613715163/r7al_profile_pictures/funnyr7al_xdnuwl.jpg"/>
      <meta property="og:url" content= "https://r7al.net"/>
  
      <meta name="twitter:title" content="موقع رحال للسفر والسياحة حول العالم"/>
      <meta name="twitter:description" content="السفر,السياحة,الترحال,الممطارات,الهجرة,التأشيرات,تجهيزات السفر,شركات السفر والسياحة,شركات الطيران"/>
      <meta name="twitter:image"  content="https://res.cloudinary.com/momad191/image/upload/v1613715163/r7al_profile_pictures/funnyr7al_xdnuwl.jpg"/>
      <meta name="twitter:card"  content="https://res.cloudinary.com/momad191/image/upload/v1613715163/r7al_profile_pictures/funnyr7al_xdnuwl.jpg"/>
      <meta name="twitter:site" content="@r7al"/>
  
      {/* <meta property="https://r7al.net" content="https://r7al.net" /> */}
  
   
  
  
        
     </Helmet>
  
 
    
    <section id="portfolio">
    <div class="container" >
    <div class="row"> </div>
   
  
 
{/* <h1 class="middle text-primary"><i class="fas fa-star"></i>  Members</h1> */}
 
      <Posts posts={currentPosts} loading={loading}   />
       <div><hr style={{ border: '2px solid #000', width:'100%'}}></hr></div>
     
      {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      /> */}
      
      
      </div>
    </section>
    </Fragment> 
  );
};

export default ListMy;
