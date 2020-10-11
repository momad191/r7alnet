import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    youtube,
    user: { name, avatar,},
    
  },
   
 
}) => {
  return (
    <div className='profile-top bg-primary p-2'>
      <img className='round-img my-1' src={avatar} alt='' />
      <h1 className='large'>{name}</h1>
      
      <p className='lead'>
        {status} {company && <span> at {company}</span>}
      </p>
      <p> From:{location && <span>{location}</span>}</p>

      {/* <p> From:{social.youtube && <span>{social.youtube}</span>}</p> */}


      <div className='icons my-1'>
        {social.website && (
          <a href={social.website} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-globe fa-2x' />
          </a>
        )}
        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter fa-2x' />
          </a>
        )}
        {social && social.github && (
          <a href={social.github} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-github fa-2x' />
          </a>
        )}
        {social && social.linkedin && (
          <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin fa-2x' />
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-youtube fa-2x' />
          </a>
        )}

        {social && social.researchgate && (
          <a href={social.researchgate} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-researchgate fa-2x' />
          </a>
        )}


{social && social.stackoverflow && (
          <a href={social.stackoverflow} target='_blank' rel='noopener noreferrer'>
            stackoverflow
          </a>
        )}



        {social && social.orcid && (
          <a href={social.orcid} target='_blank' rel='noopener noreferrer'>
           Orcid
          </a>
        )}



      </div>

      <h2 className='text-dark'>-----</h2>


    </div>
  );
};
  
ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
