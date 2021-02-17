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
  
  post: { _id, title,Publish,CategoryName,Categoryid,SubName,Subid,video,Keywords,short, Main_paragraph,image,name, avatar, user, likes, comments, date},
  showActions
}) => 
 
  
  // !auth.loading && user === auth.user._id && 
  (
  <Fragment>
  
  <thead class=" text-primary">
 
   <th class="text-right" style={{fontFamily:'Changa',color:'#000',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}>  </th>
   <th class="text-right" style={{fontFamily:'Changa',color:'#000',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}>  </th>
  <th class="text-right" style={{fontFamily:'Changa',color:'#000',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}>  </th>
  <th class="text-right" style={{fontFamily:'Changa',color:'#fff',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}>التاريخ</th>
  <th class="text-right" style={{fontFamily:'Changa',color:'#fff',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}>المستخدم  </th>
  <th class="text-right" style={{fontFamily:'Changa',color:'#fff',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}>	حالة  </th>
  <th class="text-right" style={{fontFamily:'Changa',color:'#fff',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}>التصنيف الفرعي</th>
  <th class="text-right" style={{fontFamily:'Changa',color:'#fff',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}>التصنيف الاساسي</th>
  <th class="text-right" style={{fontFamily:'Changa',color:'#fff',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}>عنوان الخبر   </th>
  <th class="text-right" style={{fontFamily:'Changa', color:'#000',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}> </th>                       
 </thead>

  <tbody style={{borderBottom:'#000'}}>

   <tr>

      
  
     
    
     
   <td>
     
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
 
           </td>



           <td>
     <Link to={`/editPost/${_id}`} className='btn btn-primary fontnty-font'
      style={{backgroundColor:'#8A0868', color:'#fff',fontWeight:'bold',float:'',fontSize:'14px'}}
      
      >
      <i className='fas fa-edit' /> اضافة اسئلة المسابقة 
      </Link>
     </td>
          

           <td>

     <Link to={`/editPost/${_id}`} className='btn btn-primary fontnty-font'
      style={{color:'#fff',fontWeight:'bold',float:'',fontSize:'14px'}}
      
      >
      <i className='fas fa-edit' /> التعديل 
      </Link>
     </td>
  
 <td><p style={{ fontFamily:'Changa' ,color:"#000" , fontSize:"13px", fontWeight:'bold'}} className='post-date '>   <Moment  format='YYYY/MM/DD'>{date}</Moment> </p></td>
 <td><p  style={{ fontFamily:'Changa' ,color:"#31B404" , fontSize:"13px", fontWeight:'bold'}}  > {name}</p></td>
 <td><p  style={{ fontFamily:'Changa' ,color:"#000" , fontSize:"13px", fontWeight:'bold'}}  > {Publish}</p></td>
 <td><p  style={{ fontFamily:'Changa' ,color:"#B40486" , fontSize:"13px", fontWeight:'bold'}} className='post-date '> {SubName}</p></td>
 <td><p  style={{ fontFamily:'Changa' ,color:"#B40486" , fontSize:"13px", fontWeight:'bold'}} className='post-date '> {CategoryName}</p></td>
 <td>   <h5  ><Link to={`/posts/${_id}`} style={{fontFamily:'Changa' , fontSize:"13px", fontWeight:'bold',color:'#0101DF'}}>  {title}  </Link></h5> </td>
 <td> <div class="portfolio-img"> <Link to={`/posts/${_id}`}> <img style={{width:'120px',height:'80px'}} alt="" src={image}/></Link></div>                    
  </td>
  </tr> 
   </tbody>

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
