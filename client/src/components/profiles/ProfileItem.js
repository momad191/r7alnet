import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    date,
    social,
    skills
  }
}) => {
  return (
    
    <div className="card">
      <Link to={`/profile/${_id}`} > <img src={avatar} alt="" style={{width:'200px', height:'150px'}} /></Link>     
        <h1 style={{fontSize:'13px' , fontWeight:'Bold', color:'#000'}}>{name}</h1>
        <h1 style={{fontSize:'15px' , fontWeight:'Bold', color:'#000'}}> Level1</h1>
        <h1 style={{fontSize:'13px' , fontWeight:'Bold', color:'#000'}}> {status}|at: {company}</h1>
        <h1 style={{fontSize:'13px' , fontWeight:'Bold', color:'#000'}}> location: {location}</h1>
        <p style={{fontSize:'13px' , fontWeight:'Bold', color:'#000'}}> Member Since: <Moment format='YYYY/MM/DD'>{date}</Moment> </p>
        <h1 style={{fontSize:'13px' , fontWeight:'Bold', color:'#000'}}> Social:  
        
        
        
        {social && social.youtube && (
          <Link className="Link-card" to={social.youtube} target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-youtube' />
          </Link>
        )}

        {social && social.youtube && (
          <Link className="Link-card" to={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-twitter' />
          </Link>
        )}


        {social && social.youtube && (
          <Link className="Link-card" to={social.linkedin} target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-linkedin' />
          </Link>
        )}



      {social && social.youtube && (
          <Link className="Link-card" to={social.facebook} target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-facebook' />
          </Link>
        )}


      {social && social.youtube && (
          <Link className="Link-card" to={social.instagram} target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-instagram' />
          </Link>
        )}

        



        
        
        
        
        </h1>
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
