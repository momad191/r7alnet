import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul >
        {pageNumbers.map(number => (
           
            <Link style={{width :'auto' ,padding:'5px', background:'#0B0B61',float:'right' ,color:'#fff' , fontSize:'13px',fontWeight:'bold',marginRight:'5px',alignContent:'right'  }} onClick={() => paginate(number)} key={number}>
              {number}
            </Link>
           
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
 