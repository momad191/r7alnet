import React, { Fragment,useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Lala from '../layout/Lala';
import DashboardActions from './DashboardActions';
import ccv from './ccv.png';
import uuser from './uuser.png';
import axios from 'axios';

 
    
  
//import Experience from './Experience';
//import Education from './Education';
//import Sidebar from './Sidebar';


import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import { loadUser } from '../../actions/auth';

 
const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user ,loading},
 // profile: { profile, loading }
}) => {

  const [countposts,posts11]= useState([])
  const [categories,categories11]= useState([])
  const [users,users11]= useState([])



  

  useEffect(() => {


    axios.get('/api/posts')
    .then(res => {
      console.log(res);
    posts11(res.data)
    })
    .catch((err) => {
      console.log(err);
    })



    axios.get('/api/categories')
    .then(res => {
      console.log(res);
    categories11(res.data)
    })
    .catch((err) => {
      console.log(err);
    })




    axios.get('/api/users')
    .then(res => {
      console.log(res);
    users11(res.data)
    })
    .catch((err) => {
      console.log(err);
    })


    getCurrentProfile();
  }, [getCurrentProfile]);
 
  return loadUser && user === null ? (
     <Lala />
    
  ) : (
    <Fragment>

  
  
 {/* <div className=' '> */}

 {/* <center>  */}

      {/* <div class="col-lg-3 col-md-12 col-sm-12">
      <div  className='btn btn-success fontnty-font'
      style={{ padding:'20px', cursor: 'wait' ,color:'#fff',backgroundColor:'#0174DF',fontWeight:'bold',fontSize:'19px',fontFamily:'',textAlign:'center'}}
      >
     ({countposts.length}) عدد المنشورات   <i  style={{fontSize:'26px'}} className='fas fa-bell' />
      </div>
    </div> */}



    {/* <div class="col-lg-3 col-md-12 col-sm-12">
      <div  className='btn btn-success fontnty-font'
      style={{ padding:'20px', cursor: 'wait' ,color:'#fff',backgroundColor:'#4C0B5F',fontWeight:'bold',fontSize:'19px',fontFamily:'',textAlign:'center'}}
      >
       (0) عدد الاجابات   <i  style={{fontSize:'26px'}} className='fas fa-star' />
      </div>
    </div> */}


 

    {/* <div class="col-lg-3 col-md-12 col-sm-12">
      <div  className='btn btn-success fontnty-font'
      style={{ padding:'20px', cursor: 'wait' ,color:'#fff',backgroundColor:'#1C1C1C',fontWeight:'bold',fontSize:'19px',fontFamily:'',textAlign:'center'}}
      >
       ({categories.length}) عدد التصنيفات <i style={{fontSize:'26px'}} className='fas fa-list' />

       
      </div>
    </div> */}



    {/* <div class="col-lg-3 col-md-12 col-sm-12">
      <div  className='btn btn-success fontnty-font'
      style={{ padding:'20px', cursor: 'wait' ,color:'#fff',backgroundColor:'#298A08',fontWeight:'bold',fontSize:'19px',fontFamily:'',textAlign:'center'}}
      >
       ({users.length})  عدد المستخدمين <i style={{fontSize:'26px'}} className='fas fa-users' />
      </div>
    </div> */}


     
    {/* </center> */}


  


 

     
        <Fragment>
 
 
 {/* <div style={{color:'#000',fontWeight:'bold',float:'right',width:'100%'}}> */}



     
       
 
       
     

       
       

      
      {/* <Link to={"/Editusercv/"+user._id}><img src={ccv} width='150' height='120' alt="Upload Yor CV" /></Link> */}

      {/* <p className='lead' style={{ fontSize:'11px', fontWeight:'Bold',width:'100%'}}>  <a href= {user.cv}   > {user.cv} </a> </p> */}
     
      {/* <p className='lead' style={{ fontSize:'11px', fontWeight:'Bold',width:'100%'}}>  {user.cv}  </p> */}

     


      {/* <td>
     <Link to={"/profile/"+user._id}><img src={uuser} width='150' height='120' alt="profile" /></Link>
      <p style={{ fontSize:'11px', fontWeight:'Bold'}}>profile</p>
      </td> */}

 
      
 
     
 
 
         

          {/* <Experience experience={profile.experience} />
          <Education education={profile.education} /> */}

          {/* <div className='my-2'>
            <button className='btn btn-danger' onClick={() => deleteAccount()}>
              <i className='fas fa-user-minus' /> Delete My Account
            </button>
          </div> */}

            {/* <div className='my-2'>
            <button className='btn btn-danger' onClick={() => deleteAccount()}>
              <i className='fas fa-user-minus' /> Delete My Account
            </button>
            </div> */}
            {/* </div> */}

 <Fragment>
 <DashboardActions/>

 </Fragment>
 
 

{/* <Experience experience={profile.experience} />
<Education education={profile.education} /> */}

{/* <div className='my-2'>
  <button className='btn btn-danger' onClick={() => deleteAccount()}>
    <i className='fas fa-user-minus' /> Delete My Account
  </button>
</div> */}

  {/* <div className='my-2'>
  <button className='btn btn-danger' onClick={() => deleteAccount()}>
    <i className='fas fa-user-minus' /> Delete My Account
  </button>
  </div> */}

 
</Fragment>

{/* <Fragment>
<p className=''style={{fontWeight:'bold',float:'right',width:'100%',direction:'rtl',fontFamily:'Changa',color:'#000'}}>    
لم تقم باعداد ملفك الشخصي بعد قم باضافة بعض المعلومات لاعداده
 </p>

 
    <Link to='/create-profile'  class="button192 fontnty-font " 
 style={{verticalAlign:'middle',borderBottom:'',backgroundColor:'#51c5dc',color:'#000',fontSize:'15px',float:'right'}}
>
  انشئ ملف
</Link>


</Fragment> */}


  

{/* </div> */}
</Fragment>
);
};

Dashboard.propTypes = {
getCurrentProfile: PropTypes.func.isRequired,
deleteAccount: PropTypes.func.isRequired,
auth: PropTypes.object.isRequired,
profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
auth: state.auth,
profile: state.profile
});

export default connect(
mapStateToProps,
{ getCurrentProfile, deleteAccount }
)(Dashboard);
