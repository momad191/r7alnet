import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import ss from './ss.png';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>

       <li> 
        <Link to='/addpost'> <i class="fas fa-plus"></i> Add Publication</Link>
      </li>

      <li>
        <Link to='/profiles'>Members</Link>
      </li>
      <li>
        <Link to='/posts'>Publications</Link>
      </li>
 
      <li>
        <Link to='/questions'>Questions</Link>
      </li>

      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
        </li>
        {/* <li><Link to="dashboard.html" title="Dashboard"><i class="fas fa-square"></i> <span class="hide-sm">Add Webinars</span></Link></li>
        <li><Link to="dashboard.html" title="Dashboard"><i class="fas fa-square"></i> <span class="hide-sm">Add Luminaries</span></Link></li>
        <li><Link to="dashboard.html" title="Dashboard"><i class="fas fa-square"></i> <span class="hide-sm">Add Members</span></Link></li>
        <li><Link to="dashboard.html" title="Dashboard"><i class="fas fa-square"></i> <span class="hide-sm">Add Questions</span></Link></li> */}
       
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>

      <li>
        <Link to='/questions'>Questions</Link>
      </li>

      <li>
        <Link to='/profiles'>Members</Link>
      </li>

      <li>
        <Link to='/posts'>Publications</Link>
      </li>

       

      <li>
        <Link to='/showLuminaries'>Luminaries</Link>
      </li>

      <li>
        <Link to='/webinars'> Webinars </Link>
      </li>

      <li>
        <Link to='/Contact'> Contact </Link>
      </li>
      <li>
        <Link to='/about'> About</Link>
      </li>
      <li>
        <Link to='/reputations'> Reputations</Link>
      </li>

      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      {/* <li>
        <Link to='/AddImage'>AddImage</Link>
      </li>
      <li>
        <Link to='/AllImages'>AllImages</Link>
      </li> */}
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
        <img src={ss} width="60px" height="40px" alt="logo"/>
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
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
