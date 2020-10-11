import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ccv from './ccv.png';
//import DashboardActions from './DashboardActions';

 
 
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
  
      <h1 className='large text-primary'>Step 2: Upload Your Profile Picture</h1>
      
      <p className='lead'>
        <i className='fas fa-user' /> Welcome {user && user.name}
      </p>
  
      {profile !== null ? (
        <Fragment>
     <table>
       <tr>
         <td>
     <Link to={"/EdituserImg/"+user._id}><img src={user.avatar} width='200' height='150' alt="Upload Your Profile Picture" /></Link>
      <p style={{ fontSize:'11px', fontWeight:'Bold'}}>Click Here To Upload Your Profile Picture</p>
      </td>
      <td>

      {/* <Link to={"/Editusercv/"+user._id}><img src={ccv} width='150' height='120' alt="Upload Yor CV" /></Link>
      <p style={{ fontSize:'11px', fontWeight:'Bold'}}> Upload Yor CV </p> */}
      </td>
      </tr>
      </table>   


      <Link to='/' className='btn btn-dark'>
          Go to dashboard
          </Link>
 
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
