import React ,{  } from 'react';
//import { Link } from 'react-router-dom';
//mport Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/QuestionAction';
import PostItem from './PostItem';

const Posts = ({ posts, loading ,


}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  
 
  return (
  
    <div className='posts'>
    {posts
    
    .map(post => (
      <PostItem key={post._id} post={post} loading={loading} />
     
    ))}
    
 
  </div>
 
 
         
         ); 
   
 
}



Posts.defaultProps = {
    showActions: true
  };
  
  Posts.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    showActions: PropTypes.bool
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { addLike, removeLike, deletePost }
  )(Posts);
