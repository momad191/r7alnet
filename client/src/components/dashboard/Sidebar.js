import React from 'react';
import { Link } from 'react-router-dom';
import ss from '../layout/ss.png';

const Sidebar = () => {
  return (
    <div className='sidenav'>

      <Link to='/'>
        <img className='imglogo' src={ss} width="60px" height="40px"/>
        </Link>
<ul>


    
    <li><Link to="dashboard.html" title="Dashboard"><i class="fas fa-square"></i> <span class="hide-sm">Add Webinars</span></Link></li>
    <li><Link to="dashboard.html" title="Dashboard"><i class="fas fa-square"></i> <span class="hide-sm">Add Luminaries</span></Link></li>
    <li><Link to="dashboard.html" title="Dashboard"><i class="fas fa-square"></i> <span class="hide-sm">Add Members</span></Link></li>
    <li><Link to="dashboard.html" title="Dashboard"><i class="fas fa-square"></i> <span class="hide-sm">Add Questions</span></Link></li>
    <li><Link to="dashboard.html" title="Dashboard"><i class="fas fa-sign-out-alt"></i> <span class="hide-sm">Logout</span></Link></li>


    <li><Link to="dashboard.html" title="Dashboard"><span class="hide-sm">.</span></Link></li>

    </ul>
    </div>
  );
};

export default Sidebar;




 
// <ul>
//   <li><a href="#about">-</a></li>
//   <li><a href="#about">.</a></li>
//   <li><a href="dashboard.html" title="Dashboard"><i class="fas fa-square"></i> <span class="hide-sm">Add Webinars</span></a></li>
//   <li><a href="dashboard.html" title="Dashboard"><i class="fas fa-square"></i> <span class="hide-sm">Add Luminaries</span></a></li>
//   <li><a href="dashboard.html" title="Dashboard"><i class="fas fa-square"></i> <span class="hide-sm">Add Members</span></a></li>
//   <li><a href="dashboard.html" title="Dashboard"><i class="fas fa-square"></i> <span class="hide-sm">Add Questions</span></a></li>
//   <li><a href="dashboard.html" title="Dashboard"><i class="fas fa-sign-out-alt"></i> <span class="hide-sm">Logout</span></a></li>

// </ul>  
 