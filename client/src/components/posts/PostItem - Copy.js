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
  post: { _id, title,Publish,Category,video,Keywords,short, Main_paragraph,image,name, avatar, user, likes, comments, date},
  showActions
}) => 
 
  
  // !auth.loading && user === auth.user._id && 
  (
  <Fragment>
   
     <div class="col-xs-10 col-sm-10 col-md-12 col-lg-12 portfolio-item" style={{float:'right'}}>
     <div class="portfolio-one">
     <div class="portfolio-wide">
       <div class="portfolio-img"> <Link to={`/posts/${_id}`}> <img alt="" src={image}/></Link></div>                    
       </div>

       <Link to={`/posts/${_id}`}>
        <div>
       <div class="portfolio-content-wide ">
                             <h5  ><Link to={`/posts/${_id}`} style={{fontFamily:'Changa' , fontSize:"18px"}}>  {title}  </Link></h5>
							  <p style={{fontFamily:'Changa', color:'#0431B4',fontWeight:'bold'}}>الكاتب:<span>{name}</span></p>
							 
                <p  style={{ fontFamily:'Changa' ,color:"#000" , fontSize:"13px", fontWeight:'bold'}} className='post-date '>
                  نشر بتاريخ <Moment  format='YYYY/MM/DD'>{date}</Moment>
                </p>

							 {/* <p style={{fontFamily:'Changa', color:'#000',fontWeight:'bold'}}>
							 مشاركة الموضوع:
							 <span>
							 <a href={`https://www.facebook.com/sharer/sharer.php?u=momad.com/${_id}`} target="_blank" style={{color:'#0431B4'}}><i class="fa fa-facebook"></i></a>
							 <a href="#"><i class="fa fa-envelope"></i></a>
               <a href="#" style={{color:'#0431B4'}}><i class="fa fa-twitter"></i></a>
							 <a href="#" style={{color:'#088A08'}}><i class="fa fa-whatsapp"></i></a>
							 </span>
							 </p> */}

               <p style={{fontFamily:'Changa', color:'#000',fontSize:'11px',fontWeight:'bold'}}>
                {short}          		
                </p>

                
							
							
						
							
         <Link to={`/posts/${_id}`} style={{fontFamily:'Changa',color:'#000',fontSize:'13px',fontWeight:'bold'}}>  <i class="fa fa-caret-left"></i> اقرأ المزيد</Link>
          </div>
          </div>
          </Link>
 
     
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
          التعليقات{' '} 
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
