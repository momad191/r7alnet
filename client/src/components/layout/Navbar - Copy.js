import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
 import mi from './bv.jpg';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
 
     <>
     </>

   

  );

  const guestLinks = (
 
    <>
    </>



 );

  const navLinks = (
 
<Fragment>
  
<section id="top-header" style={{marginTop:'0',marginBottom:'0'}}>
<div class="container" style={{marginTop:'0',marginBottom:'0'}}>
    <div class="row">
       
        <div class="col-md-8 col-sm-8 col-xs-12 top-header-links">
            <ul class="contact_links">
   
                <li><i class="fa fa-phone"></i><a href="/Contact">اتصل بنا</a></li>
                {/* <li><i class="fa fa-envelope"></i><a href="#">contact@momadtech.com</a></li> */}
    <li><i class="fa fa-user"></i> <a href='/Login'>الدخول </a></li>
    
    <li><i class="fa fa-user"></i> <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>خروج</span>
        </a> </li>
    
    <li><i class="fa fa-users"></i><a href="/register">عضو جديد</a></li>
            </ul>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12 social">
            <ul class="social_links">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                <li><a href="#"><i class="fa fa-skype"></i></a></li>
            </ul>
        </div>
    </div>
    
 
     
          </div>
      
 
 
    
    <div class="vv" style={{verticalAlign:'1200px',backgroundColor:'#fff',marginBottom:'0px'}}>
    <nav class="navbar navbar-inverse">
	
   
					
    <a href="ful-menu-page.html" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                 </a>
                 
      <center>         
          <button class="button192 fontnty-font " style={{verticalAlign:'middle'}}><span>الفيدو  </span></button>
          <button class="button192 fontnty-font " style={{verticalAlign:'middle'}}><span> تنمية بشرية  </span></button>
          <button class="button192 fontnty-font " style={{verticalAlign:'middle'}}><span>تكنولوجيا  </span></button>
          <button class="button192 fontnty-font " style={{verticalAlign:'middle'}}><span>المطبخ  </span></button>
          <button class="button192 fontnty-font " style={{verticalAlign:'middle'}}><span>الرجيم والتخسيس  </span></button>
          <button class="button192 fontnty-font " style={{verticalAlign:'middle'}}><span>الرجل   </span></button>
          <button class="button192 fontnty-font " style={{verticalAlign:'middle'}}><span>المرأة  </span></button>
          <button class="button192 fontnty-font " style={{verticalAlign:'middle'}}><span>الصحة  </span></button>
  
          {/* <img style="float:right; margin-right:25px; margin-top:15px;" src="img/mi.png" width="80" height="55"/> */}

          </center>
         <a href="/">  <img style={{float:'right', marginRight:'10px', marginTop:'15px', right:'0'}} src={mi} width="166px" height="116px"/>
         </a>
          </nav>
          </div>
          </section>

          {/* اعلان قوقل ادسنس<center>
            <a href="http://localhost:3000/posts/5fdca727512ad5231831274c">
          <img src="https://res.cloudinary.com/momad191/image/upload/v1608296210/first_magazine/q9kw6crw8rgec8usvq9d.jpg" height="100px"  width="766px"/>
          </a>
          </center> */}

          
          </Fragment>
 
  );

  return (
    <Fragment>
      {navLinks}
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
