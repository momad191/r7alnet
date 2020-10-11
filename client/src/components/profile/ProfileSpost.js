import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
  
const ProfileSpost = ({
  
  
  spost: { 
   
    first_name, last_name, year, title_article, title_journal, volume, pages, DOI, ISSN, URL }

  
}) => (
  <div> 
 
    
   <p>
      <strong> first name: </strong> {first_name} 
    </p>
      
    <p>
      <strong>last name: </strong> {last_name}
    </p>
    <p>
      <strong> year: </strong> {year}
    </p>
    <p>
      <strong> article title : </strong> {title_article}
    </p>

    <p>
      <strong>journal title : </strong> {title_journal}
    </p>

    <p>
      <strong>volume: </strong> {volume}
    </p>

    <p>
      <strong>pages: </strong> {pages}
    </p>

    <p>
      <strong>DOI: </strong> {DOI}
    </p>


    <p>
      <strong>ISSN: </strong> {ISSN}
    </p>


    <p>
      <strong>URL: </strong> {URL}
    </p>

     
  </div>
);

ProfileSpost.propTypes = {
  spost: PropTypes.object.isRequired
};

export default ProfileSpost;
