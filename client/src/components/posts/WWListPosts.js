import React ,{  } from 'react';
//import { Link } from 'react-router-dom';
//mport Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/QuestionAction';
import PostItem from './PostItem';
// const thStyle =
//     {  
//          background:'#cacaca',
//          verticalalign: 'middle',
//          fontweight: '600',
//          color:'#000',
//          textalign:'center',
//          border: '1px solid #000'
//      }
 
//      const tdStyle = {
//       background:'#FAFAFA',
//       verticalalign: 'middle',
//       fontWeight:'bold',
//       color:'#000',
//       textAlign:'center'
       

//      }



     
const Posts = ({ posts, loading ,

    search,
    addLike,
    removeLike,
    deletePost,
    auth,
    showActions,
    _id,
    likes,
    comments,
    user


 

}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

   
 
  return (
  
    <div  className='posts'>
    {posts
    
    .map(post => (
      
        <PostItem key={post._id} post={post} />
     
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
