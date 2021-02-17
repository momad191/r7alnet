import React, { Fragment } from 'react';
import spinner from './aaaw1.jpg';

export default () => (
  <Fragment>
    <div class="row">
    <div style={{color:'#000',fontWeight:'bold',float:'left',width:'70%',marginBottom:'0px' ,marginLeft:'25px',marginTop:'10px'}}>

    <a href="/register"
     style={{color:'#2e6eb5',fontWeight:'bold',float:'left',fontSize:'34px'}}
     >
   <i class="fas fa-map-marker-alt"></i>
       {/* <img src={spinner} width='50px' height='50px' style={{borderRadius:'50%'}} alt="تسجيل جديد"  /> */}
    
     </a>

 

     {/* <a class=" fontnty-font " 
          style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#fff',color:'#000',fontSize:'13px',float:'left',marginLeft:'3px',padding:'8px'}}
          href="/login">
         <i className='fas fa-sign-in-alt' />{' '}
          <span className='hide-sm'>  الدخول</span>
        </a> 
  */}
 
        {/* <a class=" fontnty-font " 
          style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#fff',color:'#000',fontSize:'13px',float:'left',marginLeft:'3px',padding:'8px'}}
          href="/register">
         <i className='fa fa-user' />{' '}
          <span className='hide-sm'>  عضو جديد</span>
        </a>  */}


    </div>
    </div>
     
  </Fragment>
);
     