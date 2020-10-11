import React,{ Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const DashboardActions = ({
  auth,
  auth: { user }
  

}) => {
  return (
    <div className=''>
     
   

      <Link to='/edit-profile' className='btn-momadlist'>
        <i className='fas fa-square text-primary' /> Edit Profile
      </Link>
      <Link to='/add-experience' className='btn-momadlist'>
        <i className='fas fa-square text-primary' /> Add Experience
      </Link>
      <Link to='/add-education' className='btn-momadlist'>
        <i className='fas fa-square text-primary' /> Add Education
      </Link>
      
       <Link to="/questions" title="Dashboard" className='btn-momadlist'><i className="fas fa-square text-primary"></i> <span className="hide-sm">Questions</span></Link>
      <Link to="/posts" title="Dashboard" className='btn-momadlist'><i className="fas fa-square text-primary"></i> <span className="hide-sm">Posts</span></Link>
      <Link to={"/profile/"+user._id} title="Dashboard" className='btn-momadlist'><i className="fas fa-square text-primary"></i> <span className="hide-sm">Veiw My Profile Page </span></Link>

     
      {/* {!auth.loading && user === auth.user._id && ( */}

      {!auth.loading && auth.user.validity ==="admin"  && (
      <Fragment>
      <Link to="/AllWebinars" title="Dashboard" className='btn-momadlist'><i className="fas fa-square text-primary"></i> <span className="hide-sm"> Webinars</span></Link>
      <Link to="/AllLuminaries" title="Dashboard" className='btn-momadlist'><i className="fas fa-square text-primary"></i> <span className="hide-sm"> Luminaries</span></Link>
      <Link to="/Allmembers" title="Dashboard" className='btn-momadlist'><i className="fas fa-square text-primary"></i> <span className="hide-sm"> Members</span></Link>
      <Link to="/AllLContact" title="Dashboard" className='btn-momadlist'><i className="fas fa-square text-primary"></i> <span className="hide-sm">Contact</span></Link>
      </Fragment>
      )}

 
    {!auth.loading && auth.user.validity ==="super"  && (
      <Fragment>
      <Link to="/AllWebinars" title="Dashboard" className='btn-momadlist'><i className="fas fa-square text-primary"></i> <span className="hide-sm"> Webinars</span></Link>
      <Link to="/AllLuminaries" title="Dashboard" className='btn-momadlist'><i className="fas fa-square text-primary"></i> <span className="hide-sm"> Luminaries</span></Link>
      <Link to="/Allmembers" title="Dashboard" className='btn-momadlist'><i className="fas fa-square text-primary"></i> <span className="hide-sm"> Members</span></Link>
      <Link to="/AllLContact" title="Dashboard" className='btn-momadlist'><i className="fas fa-square text-primary"></i> <span className="hide-sm">Contact</span></Link>
      <Link to="/AllLUser" title="Dashboard" className='btn-momadlist'><i className="fas fa-square text-primary"></i> <span className="hide-sm"> Users Access Managing  </span></Link>
      </Fragment>
      )}
 

    </div>
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
  mapStateToProps
  // { addLike, removeLike, deletePost }
)(DashboardActions);

// export default DashboardActions;
