import React, { useState,useEffect ,Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/QuestionAction';
import ConfirmButton from "./ConfirmButton";
import "./styles.css";
import axios from 'axios';

 
const sampleJSON = {
  "string": "PluralSight",
  "number": 1
};
 
      
const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, image ,body, name, avatar, user, likes, comments, date },
  showActions
}) =>{

  const [categories11,setCategory11]= useState([])
useEffect(()=>{
    
    axios.get('/api/categories/sumsub')
    .then(res => {
      console.log(res);
    setCategory11(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  
},[])



return (

<Fragment>
   <thead class=" text-primary">
   <th class="text-right" style={{fontFamily:'Changa',color:'#000',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}>  </th>
   <th class="text-right" style={{fontFamily:'Changa',color:'#000',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}>  </th>
   <th class="text-right" style={{fontFamily:'Changa',color:'#000',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}>  </th>
  <th class="text-right" style={{fontFamily:'Changa',color:'#000',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}>  </th>
  <th class="text-right" style={{fontFamily:'Changa',color:'#fff',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}>التاريخ</th>
  <th class="text-right" style={{fontFamily:'Changa',color:'#fff',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}>المستخدم  </th>
  <th class="text-right" style={{fontFamily:'Changa',color:'#fff',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}>	حالة  </th>
  <th class="text-right" style={{fontFamily:'Changa',color:'#fff',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}>اسم التصنيف</th>
  <th class="text-right" style={{fontFamily:'Changa', color:'#000',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}> </th>                       
 </thead>

  <tbody style={{borderBottom:'#000'}}>

   <tr>

      
  
     
    
     
   <td>
     
       {
      //  !auth.loading && user === auth.user._id && (
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

          // )
          }
  
           </td>


           <td>

     <Link to={`/AllSubCategories/${_id}`} className='btn btn-primary fontnty-font'
      style={{color:'#fff',fontWeight:'bold',float:'',fontSize:'14px'}}
          
      >
      <i className='fas fa-list' /> استعراض التصنيفات الفرعية  
      </Link>
     </td>



           <td>

     <Link to={`/addSubCategory/${_id}`} className='btn btn-primary fontnty-font'
      style={{color:'#fff',fontWeight:'bold',float:'',fontSize:'14px'}}
         
      >
       <i className='fas fa-plus' />  اضافة تصنيف فرعي 
      </Link>
     </td>




           <td>

     <Link to={`/editCategory/${_id}`} className='btn btn-primary fontnty-font'
      style={{color:'#fff',fontWeight:'bold',float:'',fontSize:'14px'}}
       
      >
      <i className='fas fa-edit' /> التعديل 
      </Link>
     </td>
 
 <td><p style={{ fontFamily:'Changa' ,color:"#000" , fontSize:"13px", fontWeight:'bold'}} className='post-date '>   <Moment  format='YYYY/MM/DD'>{date}</Moment> </p></td>
 <td><p  style={{ fontFamily:'Changa' ,color:"#000" , fontSize:"13px", fontWeight:'bold'}}  > {name}</p></td>
 <td><p  style={{ fontFamily:'Changa' ,color:"#B40486" , fontSize:"13px", fontWeight:'bold'}} className='post-date '> {body}</p></td>
 <td>   <h5  style={{fontFamily:'Changa' , fontSize:"13px", fontWeight:'bold',color:'#0101DF'}}>  {text} </h5> </td>
 <td> <div class="portfolio-img"> <img style={{width:'120px',height:'80px'}} alt="" src={image}/></div>   </td>
  
 
 
       

  </tr>
   </tbody>
 
</Fragment>

);
};

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
