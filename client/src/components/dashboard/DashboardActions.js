import React,{ Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

import { logout } from '../../actions/auth';
 
    
  
    const DashboardActions = ({ auth, auth: { isAuthenticated, loading, user }, logout }) => {
  return (
     
    <Fragment>
 
        <div class="row">

 

           
{/* <p className=''style={{color:'#000',fontWeight:'bold',float:'right',width:'100%',direction:'rtl',fontFamily:'Changa',color:'#3397d3'}}>    لوحة التحكم </p>  */}

 
<div style={{color:'#000',fontWeight:'bold',float:'left',width:'70%',marginBottom:'0px' ,marginLeft:'15px'}}>
     
    <a href={"/Edituser/"+user._id}
     style={{color:'#000',fontWeight:'bold',float:'left'}}
     ><img src={user.avatar} width='50px' height='50px'  style={{borderRadius:'50%'}} alt="Clik on Picture To Change" 
     />
     </a>

      {/* <span className='lead' style={{color:'#000',fontWeight:'bold',float:'left' ,fontSize:'11px'}}>
      {user && user.name}   
     </span>   */}
 
    

<a class=" fontnty-font " 
          style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#fff',color:'#000',fontSize:'13px',float:'left',marginLeft:'3px',padding:'8px'}}
         onClick={logout}  href={"/"}>
         <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>تسجيل الخروج</span>
        </a> 


       
        <a href={"/userProfile/"+user._id} class=" fontnty-font "
        style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#fff',color:'#000',fontSize:'13px',float:'left',marginLeft:'3px',padding:'8px'}}>
         <span>الملف الشخصي  </span></a>


       


  
  
 
       {/* <a href={"/Edituser/"+user._id} class=" fontnty-font "
        style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#fff',color:'#000',fontSize:'13px',float:'left',marginLeft:'3px',padding:'8px'}}>
         <span>تعديل الملف الشخصي  </span></a> */}


         {/* <Link to='/add-experience' class="button192 fontnty-font "
        style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#2d95d4',color:'#fff',fontSize:'15px',float:'right'}}>
         <span>Add Experience  </span></Link> */}


         {/* <Link to='/add-education' class="button192 fontnty-font "
        style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#2d95d4',color:'#fff',fontSize:'15px',float:'right'}}>
         <span>Add Education  </span></Link> */}



        {/* <Link  to={"/profile/"+user._id} class=" fontnty-font "
        style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#51c5dc',color:'#000',fontSize:'13px',float:'left',marginLeft:'3px',padding:'8px'}}>
         <span>معاينة الملف الشخصي  </span></Link> */}



        



       
     
      {/* {!auth.loading && user === auth.user._id && ( */}

      {!auth.loading && auth.user.validity ==="admin"  && (
      <Fragment>


      <Link to='/categories' class=" fontnty-font "
        style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#fff',color:'#000',fontSize:'13px',float:'left',marginLeft:'3px',padding:'8px'}}>
         <span>إدارة التصنيفات  </span></Link>



         <Link to='/posts' class=" fontnty-font "
        style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#fff',color:'#000',fontSize:'13px',float:'left',marginLeft:'3px',padding:'8px'}}>
         <span>إدارة المنشورات  </span></Link>

          {/* <Link to='/AllWebinars' className="button192 fontnty-font"
          style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#2d95d4',color:'#fff',fontSize:'15px',float:'right'}}>
          <span>Webinars  </span></Link> */}

          {/* <Link to='/AllLuminaries' class="button192 fontnty-font "
          style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#2d95d4',color:'#fff',fontSize:'15px',float:'right'}}>
          <span>Luminaries  </span></Link> */}


          <Link to='/Allmembers' class=" fontnty-font "
          style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#fff',color:'#fff',fontSize:'13px',float:'left',marginLeft:'3px',padding:'8px'}}>
          <span>إدارة العضوية  </span></Link>



          <Link to='/AllLContact' class=" fontnty-font "
          style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#fff',color:'#fff',fontSize:'13px',float:'left',marginLeft:'3px',padding:'8px'}}>
          <span>القائمة البريدية    </span></Link>




      </Fragment>
      )}

 
    {!auth.loading && auth.user.validity ==="super"  && (
      <Fragment>


       <Link to='/categories' class=" fontnty-font "
        style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#fff',color:'#000',fontSize:'13px',float:'left',marginLeft:'3px',padding:'8px'}}>
         <span>إدارة التصنيفات  </span></Link>



         <Link to='/posts' class=" fontnty-font "
        style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#fff',color:'#000',fontSize:'13px',float:'left',marginLeft:'3px',padding:'8px'}}>
         <span>إدارة المنشورات  </span></Link>


          {/* <Link to='/AllWebinars' className="button192 fontnty-font"
          style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#2d95d4',color:'#fff',fontSize:'15px',float:'right'}}>
          <span>Webinars  </span></Link> */}

          {/* <Link to='/AllLuminaries' class="button192 fontnty-font "
          style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#2d95d4',color:'#fff',fontSize:'15px',float:'right'}}>
          <span>Luminaries  </span></Link> */}


          <Link to='/Allmembers' class=" fontnty-font "
          style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#fff',color:'#000',fontSize:'13px',float:'left',marginLeft:'3px',padding:'8px'}}>
          <span>إدارة العضوية  </span></Link>
 
          <Link to='/AllLContact' class=" fontnty-font "
          style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#fff',color:'#000',fontSize:'13px',float:'left',marginLeft:'3px',padding:'8px'}}>
          <span>القائمة البريدية  </span></Link>

          <Link to='/AllLUser' class=" fontnty-font "
          style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#fff',color:'#000',fontSize:'13px',float:'left',marginLeft:'3px',padding:'8px'}}>
          <span>صلاحيات  </span></Link>

 
         

      
      
        
     
      </Fragment>
      )}
 
    </div>
    </div>
  
    </Fragment>
   
  );
};


DashboardActions.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
  // addLike: PropTypes.func.isRequired,
  // removeLike: PropTypes.func.isRequired,
  // deletePost: PropTypes.func.isRequired,
  // showActions: PropTypes.bool
};
const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(
  mapStateToProps,{ logout }
  // { addLike, removeLike, deletePost }
)(DashboardActions);

// export default DashboardActions;
