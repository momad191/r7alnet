import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';
import ConfirmButton from "./ConfirmButton";
import "./styles.css";
     
const PostItem = ({
  addLike,
  removeLike, 
  deletePost,
  auth,
  post: { _id, title_article,title_journal,volume,pages,DOI,ISSN, name, avatar, user, likes, comments, date,URL },
  showActions
}) => 
 
 
  // !auth.loading && user === auth.user._id && 
  (
  <Fragment>
  <div style={{border:"1px solid #000" , backgroundColor:"#E0E3E5"}} className='post bg-white p-1 my-1'>
    <div>
      <Link to={`/profile/${user}`}>
        <img className='round-img' src={avatar} alt='' />
        <h4 style={{ color:"#000" , fontSize:"15px", fontWeight:'bold'}} >{name}</h4>
      </Link>
    </div>
    <div>
      
 
      <Link to={`/posts/${_id}`} >  
      <p style={{color:"#000",fontSize:"19px" ,fontWeight:'bold'}} className='my-1'>
        <span style={{color:"#0D33B6",fontSize:"15px" ,fontWeight:'bold'}}>Article Title:</span>{title_article}</p>
      </Link>

      <Link to={`/posts/${_id}`} >
      <p style={{color:"#000",fontSize:"19px" ,fontWeight:'bold'}} className='my-1'>
        <span style={{color:"#0D33B6",fontSize:"15px",fontWeight:'bold'}}>Journal Title:</span>{title_journal}</p>
      </Link>
 

      <a href={URL} >
      {/* <p style={{color:"#000",fontSize:"19px" ,fontWeight:'bold'}} className='my-1'>
      <span style={{color:"#0D33B6",fontSize:"15px",fontWeight:'bold'}}>URL:</span>{URL}</p> */}
      <p style={{color:"#000",fontSize:"19px" ,fontWeight:'bold'}} className='my-1'>
      <span style={{color:"#0D33B6",fontSize:"15px",fontWeight:'bold'}}>URL:</span>Link</p>
      </a>


 
      <Fragment>
      <p style={{color:"#000",fontSize:"19px" ,fontWeight:'bold'}} className='my-1'>

        <span style={{color:"#0D33B6",fontSize:"15px",fontWeight:'bold'}}>Volume:</span>{volume} &nbsp;&nbsp; 
        <span style={{color:"#0D33B6",fontSize:"15px",fontWeight:'bold'}}>Pages:</span>{pages} &nbsp;&nbsp;
        <span style={{color:"#0D33B6",fontSize:"15px",fontWeight:'bold'}}>DOI:</span>{DOI} &nbsp;&nbsp;
        <span style={{color:"#0D33B6",fontSize:"15px",fontWeight:'bold'}}>ISSN:</span>{ISSN}
        </p>


        </Fragment>


      <p  style={{ color:"#000" , fontSize:"13px", fontWeight:'bold'}} className='post-date '>
        Posted on <Moment  format='YYYY/MM/DD'>{date}</Moment>
      </p>
     
      {showActions && (
        <Fragment>
          <button
            onClick={() => addLike(_id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-thumbs-up' />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            onClick={() => removeLike(_id)}
            type='button'
            className='btn btn-light'
          > 
            <i className='fas fa-thumbs-down' />
          </button>
          <Link to={`/posts/${_id}`} className='btn btn-primary'>
            Discussion{' '}
            {comments.length > 0 && (
              <span className='comment-count'>{comments.length}</span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            // <button
            //   onClick={() => deletePost(_id)}
            //   type='button'
            //   className='btn btn-danger'
            // >
            //   <i className='fas fa-times' />
            // </button>
 
            <ConfirmButton
            dialog={["Delete", "Are You Sure?", "Once more to delete"]}
            action={() => deletePost(_id)}
            />

          )}
          
        </Fragment>
      )}
     
    </div>
  </div>

  
</Fragment>
   
   )

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
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
)(PostItem);
