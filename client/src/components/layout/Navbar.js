import React, { useState,useEffect ,Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
 import mi from './funnyr7al.jpg';
 import axios from 'axios';
 import Dashboard from '../dashboard/Dashboard';
  
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [categories11,setCategory11]= useState([])
  const [Social,setSocial]= useState([])
  const [displaySocialInputs, toggleSocialInputs] = useState(false);
 
    

  useEffect(()=>{
     
    axios.get('/api/categories/nave')
    .then(res => {
      console.log(res);
    setCategory11(res.data)
    })
    .catch((err) => {
      console.log(err);
    })


    axios.get('/api/posts/Social')
    .then(res => {
      console.log(res);
    setSocial(res.data)
    })
    .catch((err) => {
      console.log(err);
    })


    
  
},[])

 

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



<div class="col-md-12 col-sm-12 col-xs-12 col-lg-12 ">  
 
 
  
<section id="top-header" style={{marginTop:'0',marginBottom:'0',backgroundColor:'#363636'}}>
 
    <div class="row">
       
        <div class="col-md-8 col-sm-8 col-xs-12 top-header-links">
            <ul class="contact_links11">
   
         <li><i class="fa fa-user"></i> <Link to='/Login'>الدخول </Link></li>
    
    {/* <li><i class="fa fa-user"></i> <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>خروج</span>
        </a> </li> */}
    
    <li><Link to="/register">عضو جديد</Link></li>
    
    {/* <li><Link to="/PrivacyPolicy"> سياسة الخصوصية</Link></li>
    <li><Link to="/about">من نحن</Link></li>
    <li><Link to="/msg"> اتصل بنا </Link></li> */}


    {Social.map(catego=>(
             <Fragment>  
               
               {catego.Paragraph1 && (
               <li><a href={catego.Paragraph1}><i class={catego.pic1}></i></a></li>
               )}

              {catego.Paragraph2 && (
               <li><a href={catego.Paragraph2}><i class={catego.pic2}></i></a></li>
               )}

              {catego.Paragraph3 && (
               <li><a href={catego.Paragraph3}><i class={catego.pic3}></i></a></li>
               )}

              {catego.Paragraph4 && (
               <li><a href={catego.Paragraph4}><i class={catego.pic4}></i></a></li>
               )}

               {catego.Paragraph5 && (
               <li><a href={catego.Paragraph5}><i class={catego.pic5}></i></a></li>
               )}

               {catego.Paragraph6 && (
               <li><a href={catego.Paragraph6}><i class={catego.pic6}></i></a></li>
               )}


               {catego.Paragraph7 && (
               <li><a href={catego.Paragraph7}><i class={catego.pic7}></i></a></li>
               )}



               {catego.Paragraph8 && (
               <li><a href={catego.Paragraph8}><i class={catego.pic8}></i></a></li>
               )}


               {catego.Paragraph9 && (
               <li><a href={catego.Paragraph9}><i class={catego.pic9}></i></a></li>
               )}


               {catego.Paragraph10 && (
               <li><a href={catego.Paragraph10}><i class={catego.pic10}></i></a></li>
               )}



               {catego.Paragraph11 && (
               <li><a href={catego.Paragraph11}><i class={catego.pic11}></i></a></li>
               )}



{catego.Paragraph12 && (
<li><a href={catego.Paragraph12}><i class={catego.pic12}></i></a></li>
 )}


{catego.Paragraph13 && (
<li><a href={catego.Paragraph13}><i class={catego.pic13}></i></a></li>
 )}



{catego.Paragraph14 && (
<li><a href={catego.Paragraph14}><i class={catego.pic14}></i></a></li>
 )}


{catego.Paragraph15 && (
<li><a href={catego.Paragraph15}><i class={catego.pic15}></i></a></li>
 )}


{catego.Paragraph16 && (
<li><a href={catego.Paragraph16}><i class={catego.pic16}></i></a></li>
 )}


 
{catego.Paragraph17 && (
<li><a href={catego.Paragraph17}><i class={catego.pic17}></i></a></li>
 )}




{catego.Paragraph18 && (
<li><a href={catego.Paragraph18}><i class={catego.pic18}></i></a></li>
 )}



{catego.Paragraph19 && (
<li><a href={catego.Paragraph19}><i class={catego.pic19}></i></a></li>
 )}




{catego.Paragraph20 && (
<li><a href={catego.Paragraph20}><i class={catego.pic20}></i></a></li>
 )}




{catego.Paragraph21 && (
<li><a href={catego.Paragraph21}><i class={catego.pic21}></i></a></li>
 )}




{catego.Paragraph22 && (
<li><a href={catego.Paragraph22}><i class={catego.pic22}></i></a></li>
 )}





{catego.Paragraph23 && (
<li><a href={catego.Paragraph23}><i class={catego.pic23}></i></a></li>
 )}




{catego.Paragraph24 && (
<li><a href={catego.Paragraph24}><i class={catego.pic24}></i></a></li>
 )}



{catego.Paragraph25 && (
<li><a href={catego.Paragraph25}><i class={catego.pic25}></i></a></li>
 )}





{catego.Paragraph26 && (
<li><a href={catego.Paragraph26}><i class={catego.pic26}></i></a></li>
 )}



{catego.Paragraph27 && (
<li><a href={catego.Paragraph27}><i class={catego.pic27}></i></a></li>
 )}





{catego.Paragraph28 && (
<li><a href={catego.Paragraph28}><i class={catego.pic28}></i></a></li>
 )}


 

{catego.Paragraph29 && (
<li><a href={catego.Paragraph29}><i class={catego.pic29}></i></a></li>
 )}




{catego.Paragraph30 && (
<li><a href={catego.Paragraph30}><i class={catego.pic30}></i></a></li>
 )}














 







              </Fragment>
             ))}

            </ul>

           
               
           

        </div>
        
    </div>
    
    </section>
 
    <section id="top-header" style={{marginTop:'0',marginBottom:'0',backgroundColor:'#fff',height:'auto'}}>
     <a href="/" style={{float:'right'}}>  <img style={{float:'right', marginRight:'10px', marginTop:'0', marginBottom:'10px', right:'0'}} src={mi} width="220px" height="80px"/> 
          </a>
    
     <Fragment>
 <Dashboard/>
 </Fragment>
 

     </section>

     
 
  
      <section  id="top-header" style={{marginTop:'10px',marginBottom:'15px',backgroundColor:'#fff',borderRadius:'0%'}}>
        <div class="row">

 
        <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12 top-header-links">


               <center> 
            <ul class="contact_links" style={{float:'',marginRight:'0px',backgroundColor:'#fff'}} dir='rtl'>
           


            {categories11.map(catego=>(
              <Fragment> 
 

 
              <li>  <a className='momadbtnsmall' href={`/Topics/${catego._id}#/${catego.body}`}
                
              style={{fontFamily:'', backgroundColor:'#363636', color:'#fff' ,fontWeight:'bold',fontSize:'14px',textAlign:'right',width:'',marginLeft:'',float:'right',padding:'10px',borderRadius:'0%'}}>
                 {catego.text}  </a> 
              
              </li>
               </Fragment>
             
             ))}
 
             

               </ul>
              </center>
            </div>
              
        </div>

        <button className='momadbtnbig' 
       
       style={{fontFamily:'Markazi Text', backgroundColor:'#363636', color:'#fff' ,fontWeight:'normal',fontSize:'24px',textAlign:'center',width:'100%',marginLeft:'',float:'',
       padding:'5px',borderRadius:'0%',border:'1px fixed #cacaca'}}
       onClick={() => toggleSocialInputs(!displaySocialInputs)}
       > <i style={{fontSize:'17px',fontWeight:'bold'}} class="fas fa-angle-double-down"></i> القائمة </button>
       
       {displaySocialInputs && (

 
 
<Fragment> 


{categories11.map(catego=>(
<Fragment> 

 
  <a className='momadbtnbig' href={`/Topics/${catego._id}#/${catego.body}`}
 
 style={{fontFamily:'Markazi Text', backgroundColor:'#363636', color:'#fff' ,fontWeight:'normal',fontSize:'24px',textAlign:'center',width:'100%',marginLeft:'',float:'',padding:'5px',borderRadius:'0%'}}
>  
  {catego.text} </a>

 
</Fragment>

))}
</Fragment>
 


       )}

       
     </section>



    
   
          
        

        

          {/* اعلان قوقل ادسنس<center>
            <a href="http://localhost:3000/posts/5fdca727512ad5231831274c">
          <img src="https://res.cloudinary.com/momad191/image/upload/v1608296210/first_magazine/q9kw6crw8rgec8usvq9d.jpg" height="100px"  width="766px"/>
          </a>
          </center> */}
 

 
          </div>

 
 

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
