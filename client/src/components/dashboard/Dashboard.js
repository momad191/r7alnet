import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import ccv from './ccv.png';
import uuser from './uuser.png';


  
  
//import Experience from './Experience';
//import Education from './Education';
//import Sidebar from './Sidebar';


import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
 
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
 <div className='ssd'>
  
      <h1 className='large text-primary'>Dashboard</h1>
      
      <p className='lead'>
        <i className='fas fa-user' /> Welcome {user && user.name}
      </p>

      {/* <p className='lead'>  <h1> {user.cv}</h1> </p> */}

 
      {profile !== null ? (
        <Fragment>
<table>
  <tr>
    <td>
     <Link to={"/EdituserImg/"+user._id}><img src={user.avatar} width='150' height='120' alt="Clik on Picture To Change" /></Link>
      <p style={{ fontSize:'11px', fontWeight:'Bold'}}>Clik on Picture To Change it</p>
      </td>

       
     

       

      <td>
      <Link to={"/Editusercv/"+user._id}><img src={ccv} width='150' height='120' alt="Upload Yor CV" /></Link>

      <p className='lead' style={{ fontSize:'11px', fontWeight:'Bold',width:'100%'}}>  <a href= {user.cv}   > {user.cv} </a> </p>
     
      {/* <p className='lead' style={{ fontSize:'11px', fontWeight:'Bold',width:'100%'}}>  {user.cv}  </p> */}

      </td>


      {/* <td>
     <Link to={"/profile/"+user._id}><img src={uuser} width='150' height='120' alt="profile" /></Link>
      <p style={{ fontSize:'11px', fontWeight:'Bold'}}>profile</p>
      </td> */}

 
      

      </tr>
</table>

          <DashboardActions />

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
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>


        </Fragment>
      )}



       </div>
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
