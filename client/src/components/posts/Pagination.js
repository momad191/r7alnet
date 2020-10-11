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
          <button style={{width :'25px' , background:'#257E83' }} key={number} >
            <Link style={{color:'#000' , fontSize:'15px',fontWeight:'bold'  }} onClick={() => paginate(number)} >
              {number}
            </Link>
          </button>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
