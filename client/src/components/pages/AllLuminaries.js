import React, { useState, useEffect } from 'react';
import Posts from './WWListLuminaries';
import Pagination from './Pagination';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';
    
const ListMy = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

    

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`/api/Luminaries/`);
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
    <div>

<h1>Luminaries</h1>
 
<Link to="/LuminariesRegistration" title="Dashboard" className=''><i className="fas fa-plus text-primary"></i> <span className="hide-sm">Add </span></Link> <br/>

        <Link to="/searchLuminaries" title="Dashboard" className=''><i className="fas fa-search text-primary"></i> <span className="hide-sm">Search </span></Link>

 

      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      
    </div>
  );
};

export default ListMy;
