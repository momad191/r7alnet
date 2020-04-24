import React, { useState, useEffect } from 'react';
import Posts from './WWListLuminariesForShow';
import Pagination from './Pagination';
import axios from 'axios';

import './App.css';

const ListMy = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(100);

 

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://s-rf-heroku.herokuapp.com:5000/api/Luminaries/show`);
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
    
    <div >

 
<h1 class="middle text-primary"><i class="fas fa-star"></i> Sudanese Luminaries</h1>
 

      <Posts posts={currentPosts} loading={loading} />
       <div><hr style={{ border: '2px solid #0E8A8A', width:'100%'}}></hr></div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      
    </div>
  );
};

export default ListMy;
