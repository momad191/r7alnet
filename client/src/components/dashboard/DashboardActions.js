import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
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
         
      <Link to="/AllWebinars" title="Dashboard" className='btn-momadlist'><i className="fas fa-square text-primary"></i> <span className="hide-sm"> Webinars</span></Link>
      <Link to="/AllLuminaries" title="Dashboard" className='btn-momadlist'><i className="fas fa-square text-primary"></i> <span className="hide-sm"> Luminaries</span></Link>
      <Link to="/Profiles" title="Dashboard" className='btn-momadlist'><i className="fas fa-square text-primary"></i> <span className="hide-sm"> Members</span></Link>
      <Link to="/AllLContact" title="Dashboard" className='btn-momadlist'><i className="fas fa-square text-primary"></i> <span className="hide-sm">Contact</span></Link>
      <Link to="/questions" title="Dashboard" className='btn-momadlist'><i className="fas fa-square text-primary"></i> <span className="hide-sm">Questions</span></Link>
      <Link to="/posts" title="Dashboard" className='btn-momadlist'><i className="fas fa-square text-primary"></i> <span className="hide-sm">Posts</span></Link>

    </div>
  );
};

export default DashboardActions;
