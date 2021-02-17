import React, { useState,useEffect,Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';
import ConfirmButton from "./ConfirmButton";
import "./styles.css";
import Pagination from '../pages/Pagination';
import test from './googleads.jpg';
import axios from 'axios';


        
const PostItem = ({
  addLike,
  removeLike, 
  deletePost,
  auth,
  post: { _id, title,body,Publish,Category,video,Keywords,short, Main_paragraph,image,name, avatar, user, likes, comments, date},
  showActions
}) => {
 
  const [Social,setSocial]= useState([])

  useEffect(()=>{
     
 
    axios.get('/api/posts/Social')
    .then(res => {
      console.log(res);
    setSocial(res.data)
    })
    .catch((err) => {
      console.log(err);
    })


    
  
},[])

  
 
return (
  // !auth.loading && user === auth.user._id && 
  
 
  <Fragment>


 
     <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 portfolio-item" style={{float:'right',height:'auto',borderRadius:'0%'}}>
     <div class="portfolio-one-details" style={{height:'auto'}}>
     <div class="portfolio-content-article1" style={{height:'200px' ,borderRadius:'0%'}}>
     <h1 style={{fontFamily:'Markazi Text',fontSize:'40px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} >  {title} </h1>
    
     <Link to={`/Topic/${_id}#/${body}`}  style={{fontFamily:'Markazi Text',fontSize:'20px',textAlign:'right',fontWeight:'bold',color:'#000'}} >
     <i  style={{fontSize:'20px'}} className='fas fa-arrow-left'/> 
     
      قراءة الموضوع  </Link>

       {/* <div class="portfolio-img-article1">  <img alt="" src={image}/></div>                     */}
 
      

         
       
           
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
          
        
            {/* <h1 style={{fontFamily:'Changa', color:'#000',fontSize:'22px',fontWeight:'bold',direction:'rtl'}}>
            سجل اعجابك 
            </h1> */}
     
           <Link
            onClick={() => addLike(_id) }

            type='button'
          className="btn btn-success"
            style={{ padding:'5px', cursor: '' ,color:'#fff',backgroundColor:'',fontWeight:'bold',fontSize:'22px',fontFamily:'',textAlign:'center',width:'20%'}}
           
            // to={`/Comment/${_id}`} 
          >  
            {/* <i  style={{fontSize:'26px'}} className='far fa-grin-alt'/>   */}
            <i style={{fontSize:'22px',marginRight:'5px'}}className='fas fa-thumbs-up' />
             
             <span className=' ' style={{fontFamily:'Markazi Text',fontSize:'22px'}} >{likes.length}</span>
          
            {/* <i className='fas fa-thumbs-down' /> */}
           
          </Link>
            
           
          <Link
            onClick={() => removeLike(_id)}
            
            type='button'
          
            className="btn btn-danger fontnty-font"
            style={{ padding:'5px', cursor: '' ,color:'#fff',backgroundColor:'',fontWeight:'bold',fontSize:'22px',fontFamily:'',textAlign:'center',width:'20%'}}

            //  to={`/Comment/${_id}`} 
          >  
            {/* <i  style={{fontSize:'26px'}} className='fa fa-frown'/>  */}
            <i style={{fontSize:'22px'}}className='fas fa-thumbs-down' />
          </Link> 
          
           
               
       

           

          {/* {displaySocialInputs && (
            <h1>شكرا لتصويتك</h1>

          )} */}


         
        

 
          <Link
          type='button'
          to={`/posts/${_id}`} 
            className=""
            style={{ padding:'5px', cursor: 'wait' ,color:'#000',backgroundColor:'#fff',fontWeight:'bold',fontSize:'22px',fontFamily:'',textAlign:'center',width:'90%',marginTop:'5px'}}
             
            >
          <i  style={{fontSize:'26px'}} className='fa fa-comments'/>   {' '}
            {comments.length > 0 && (
              <span style={{fontFamily:'Markazi Text',fontSize:'22px'}}>{comments.length} عدد التعلقيات</span>
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
            dialog={["", "Are You Sure?", "Once more to delete"]}
            action={() => deletePost(_id)}
            />

          )}
          
          </div>
          </div>
      
       

   
  </div>
  </div>




  {/* -----------------------------منطقة اعلانات -------------------------------------------------------- */}
  
  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 portfolio-item" style={{float:'left'}}>

 
  {Social.map(catego=>(
    <Fragment> 

 
      {catego.title && (  

  <div class="portfolio-one" style={{ backgroundColor:'#2e6eb5'}}>
     {/* <h1
    style={{ color:'#fff',backgroundColor:'',fontWeight:'bold',fontSize:'24px',fontFamily:'Markazi Text',textAlign:'center'}}
     > !انضم إلينا</h1>      */}
     <div class="portfolio-content" style={{height:'150px',backgroundColor:'#58ACFA'}}>
     <p
    style={{ color:'#fff',backgroundColor:'#363636',fontWeight:'normal',fontSize:'24px',fontFamily:'Markazi Text',textAlign:'center',padding:'10px'}}
     > كن على تواصل</p> 

     <center> 
      <div className="row"> 
 
   


{catego.Paragraph1 && (
     <a href={catego.Paragraph1} className='btn btn-success fontnty-font'
      style={{ width:'40%', cursor: '' ,color:'#0040FF',backgroundColor:'#fff',fontWeight:'bold',fontSize:'13px',fontFamily:'',textAlign:'center',marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'0%'}}
      >
      <i  style={{fontSize:'19px'}} className='fa fa-facebook' />
      </a>
)}
     
      </div>


{catego.Paragraph2 && (
      <a href={catego.Paragraph2} className='btn btn-success fontnty-font'
      style={{ padding:'5px 30px', cursor: '' ,color:'#4381DA',backgroundColor:'#fff',fontWeight:'bold',fontSize:'19px',fontFamily:'',textAlign:'center',marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'0%'}}
      >
      <i  style={{fontSize:'19px'}} className='fa fa-twitter' />
      </a>
)}


{catego.Paragraph3 && (
      <a  href={catego.Paragraph3}  className='btn btn-success fontnty-font'
      style={{ padding:'5px 30px', cursor: '' ,color:'#DF0101',backgroundColor:'#fff',fontWeight:'bold',fontSize:'19px',fontFamily:'',textAlign:'center', marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'0%'}}
      >
      <i  style={{fontSize:'19px'}} className='fa fa-youtube-play' />
      </a>
)}


{catego.Paragraph4 && (
      <a  href={catego.Paragraph4}   className='btn btn-success fontnty-font'
      style={{ padding:'5px 30px', cursor: '' ,color:'#000',backgroundColor:'#fff',fontWeight:'bold',fontSize:'19px',fontFamily:'',textAlign:'center',marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'0%'}}
      >
      <i  style={{fontSize:'19px'}} className='fa fa-instagram' />
      </a>
)}


      


      </center>
    
      </div>    

    </div>
      )}

    </Fragment>
             ))}




          {/* ----------------------- هنا ادسنس للربح ان شاء الله ----------------اعلان قوقل ادسنس -------------------------------------------------------- */}



          {/* <div class="portfolio-one" style={{ height:'auto',backgroundColor:'#fff'}}>
          <div class="portfolio-content"style={{height:'auto',paddingRight:'10px',paddingLeft:'10px'}}>

          <div class="portfolio-img" style={{height:'auto'}}>
            <h1 style={{fontSize:'17px',fontFamily:'Markazi Text',fontWeight:'bold'}} >إعلان</h1>
             <a href="#" >
           <img style={{height:'auto'}} alt="" src={test} /></a></div> 


          </div>
          </div> */}

     {/* ---------------------------------------اعلان قوقل ادسنس -------------------------------------------------------- */}


     

     </div>
    





</Fragment>
   
   )
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
