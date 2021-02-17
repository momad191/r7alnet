import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';
 
const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');
 
  return (
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8"  style={{float:'right'}}> 
   
 
      <div className=''
       style={{textAlign:'right',fontFamily:'Markazi Text',fontSize:'44px',fontWeight:'bold',color:'#fff',backgroundColor:'#ECB22E',borderRadius:'0%',borderRight:'10px solid #000',borderLeft:'10px solid #000'}}>
        <h3 
       style={{textAlign:'right',fontFamily:'Markazi Text',fontSize:'34px',fontWeight:'bold',color:'#000',marginRight:'0px'}} 
       >التعليقات</h3>
      </div>
      

      <form
      
        className='login-form'
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      > 

<div class="col-lg-12 col-md-12 col-sm-12">
   <div class="input-group form-group">
        <textarea
        style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control"
          name='text'
          maxlength="141"
          cols='10'
          rows='5'
          placeholder='اكتب تعليقا'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        /> 
      <span class="input-group-addon" id="basic-addon1">
      <button type='submit'  value='اضافة ' 
         style={{fontFamily:'Markazi Text',fontSize:'32px',backgroundColor:'#404040',padding:'38px',color:'#ECB22E'}}
         
        >
         <i style={{fontSize:'30px',color:'#ECB22E'}} className='fas fa-plus' /> أضف</button>
         </span>

        </div>
        </div>
        <div clsaa="row"> 
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"  style={{float:'right'}}> 
       
         
        
        </div>
        </div>
      </form>
    
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentForm);
