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
 

    <section id="portfolio">
  
            <div class="row">  
  <Fragment>




     <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 portfolio-item" style={{float:'right',height:'auto',borderRadius:'0%'}}>
     <div class="portfolio-one-details" style={{height:'auto'}}>
     <div class="portfolio-content-article1" style={{height:'auto' ,borderRadius:'0%'}}>
     <h1 style={{fontFamily:'Markazi Text',fontSize:'30px',textAlign:'right',fontWeight:'bold',color:'#000'}} >  {title} </h1>

     

          
       <div class="portfolio-img-article1">  <img alt="" src={image}/></div>                    

       </div>

       
         
       <div class="portfolio-content-wide ">
                 
                <p style={{fontFamily:'Changa', color:'#000',fontSize:'13px',fontWeight:'bold'}}>
                {Main_paragraph}          		
                </p>
                
               

							

             

                
<p  style={{ fontFamily:'Changa' ,color:"#000" , fontSize:"13px", fontWeight:'bold'}} className='post-date '>
                  نشر بتاريخ <Moment  format='YYYY/MM/DD'>{date}</Moment>
                </p>
                <p style={{fontFamily:'Changa', color:'#0431B4',fontWeight:'bold'}}>الكاتب:<span>{name}</span></p>

							

                {/* <p style={{fontFamily:'Changa', color:'#000',fontWeight:'bold'}}>
							 مشاركة الموضوع:
							 <span>
							 <a href={`https://www.facebook.com/sharer/sharer.php?u=momad.com/${_id}`} target="_blank" style={{color:'#2E9AFE'}}><i class="fa fa-facebook"></i></a>
							 <a href="#" style={{color:'#2E9AFE'}}><i class="fa fa-envelope"></i></a>
               <a href="#" style={{color:'#2E9AFE'}}><i class="fa fa-twitter"></i></a>
							 <a href="#" style={{color:'#2E9AFE'}}><i class="fa fa-whatsapp"></i></a>
							 </span>
							 </p>  */}
               
						
				          </div>
          
           
 
     
         
        <Fragment>
           

           <a  
            onClick={() => addLike(_id)}
            href={`/posts/${_id}`} 
            type='button'
          
            style={{ padding:'4px 10px', cursor: '' ,color:'#000',backgroundColor:'#cacaca',fontWeight:'bold',fontSize:'19px',fontFamily:'',textAlign:'center', marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'8%',marginLeft:''}}

          >  
            <i  style={{fontSize:'20px'}} className='far fa-grin-alt'/>  
           
           {likes.length > 0 && (
             <span className='comment-count'>{likes.length}</span>
           )}
            {/* <i className='fas fa-thumbs-down' /> */}
          </a>


         
          <a
            onClick={() => removeLike(_id)}
            type='button'
            href={`/posts/${_id}`} 
            style={{ padding:'4px 10px', cursor: '' ,color:'#000',backgroundColor:'#cacaca',fontWeight:'bold',fontSize:'19px',fontFamily:'',textAlign:'center', marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'8%',marginLeft:''}}

          >  
           <i  style={{fontSize:'20px'}} className='fa fa-frown'/>
            {/* <i className='fas fa-thumbs-down' /> */}
          </a>
  

          <a href={`/posts/${_id}`} 
          style={{ padding:'4px 10px', cursor: '' ,color:'#2D6FCD',backgroundColor:'#cacaca',fontWeight:'bold',fontSize:'19px',fontFamily:'',textAlign:'center', marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'8%'}}
          >
          <i  style={{fontSize:'20px'}} className='fa fa-comments'/>   {' '}
            {comments.length > 0 && (
              <span className='comment-count'>{comments.length}</span>
            )}
          </a>
          {!auth.loading && user === auth.user._id && (
            // <button
            //   onClick={() => deletePost(_id)}
            //   type='button'
            //   className='btn btn-danger'
            // >
            //   <i className='fas fa-times' />
            // </button>
 
            <ConfirmButton
            dialog={["", "Are You Sure?", "Once more to delete"]}
            action={() => deletePost(_id)}
            />

          )}
          
        </Fragment>
      
     

   
  </div>
  </div>




</Fragment>

</div>

</section>
   
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
