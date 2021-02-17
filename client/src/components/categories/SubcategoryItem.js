import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileItem = ({
  profile: {
    mainCategoryID: {  body, text },
    subCategory,
    date,
    name,avatar,_id
    
  }
}) => {
  return (
     
    <div className="card">
      <Link to={`/profile/${_id}`} > <img src={avatar} alt="" style={{width:'200px', height:'150px'}} /></Link>     
        <h1 style={{fontSize:'13px' , fontWeight:'Bold', color:'#000'}}>{text}----{body}</h1>
         <h1 style={{fontSize:'13px' , fontWeight:'Bold', color:'#000'}}> {subCategory}</h1>
        <p style={{fontSize:'13px' , fontWeight:'Bold', color:'#000'}}> Member Since: <Moment format='YYYY/MM/DD'>{date}</Moment> </p>
         <p> <Link to={`/profile/${_id}`}><button className="button-card">View Profile</button></Link></p>

        

  


      {/* <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' /> {skill}
          </li>
        ))}
      </ul> */}

    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
