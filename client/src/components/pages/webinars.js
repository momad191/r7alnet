import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

 
const webinars = () => {
  return (
    <Fragment>



<h1 className="middle text-primary"><i className="fas fa-star"></i> SRF Webinars</h1>	  

<p className="my-1">
This webinar series is a collaborative initiative between TReND in Africa and the Sudanese Researchers Foundation. The goal is to bring together academic speakers in any discipline with University students and staff of Sudan and the wider region through moderated, interactive webinars that will later be archived on YouTube.

</p>

<p className="lead"><i class="fas fa-square"></i> Motivation and implementation </p>
<p className="my-1">
Not least following travel bans and restrictions lead by the United States, researchers in this part of the world are at a striking disadvantage not just economically, but by their enforced disconnect with world’s scientific powerhouses. However, the region is bustling with Universities and Institutes of Higher education, filled with enthusiastic students and staff eager to engage in the global production of knowledge.

SRF provide access to their existing substantial online following (>170,000 members, March 2017) and experience in organizing and hosting webinars (http://www.youtube.com/c/SudaneseResearchersFoundation). Through TReND's global academic network we aim to identify and invite suitable speakers who are prepared to spend one hour in front of a webcam to give an online presentation on their field of expertise.

Each session will be organized and moderated by a bilingual SRF volunteer with the relevant academic background. The webcast will be held in English and broadcast live, and SRF members will submit comments and questions through the moderator to form an interactive session. Afterwards, the video will be uploaded to YouTube to form a growing archive of research talks. Over time, selected popular talks will in addition be translated into Arabic to further increase their reach in the region.
  </p>

 
 
 <p className="lead"><i className="fas fa-square"></i>  Speaker registration of interest  </p>
 
 <p className="my-1">
 If you wish to register your interest to speak during a future webinar, please complete the below form indicating your field of expertise, academic background and availability. It should take no more than 5 mins!
  </p>


 
      <Link to='/WebinarRegistration' style={{
      width:'280px',
      height:'300px',
      textAlign:'center',
      fontSize:'17px',
      borderColor:'#5969ff',
      backgroundColor:'#505050',
      color:'#fff',
      paddingTop:'10px',
      paddingBottom:'25px',
      paddingRight:'20px',
      paddingLeft:'20px'

    
    }}> Register Now </Link>


 

    </Fragment>
  );
};






export default webinars;
