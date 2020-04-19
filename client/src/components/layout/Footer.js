	  import React, { Fragment } from 'react';
	  import { Link } from 'react-router-dom';
 
      const Footer = () => {
		return (
		  <Fragment>
			    <div className="footer bg-dark">
				<ul>
					<li>2015 ~ 2020 © All Rights Reserved</li>
					<li> Concept and Vision By: Hisham Musa | Designed and Developed by: Mohammed Emad</li>
					</ul> 
					<ul>
					<Link to="https://www.facebook.com/sudanSRI/" className="fa fa-facebook"></Link >
					<Link  to="https://twitter.com/SudanResearcher" className="fa fa-twitter"></Link >
					<Link  to="https://www.youtube.com/channel/UCILMurMqj9alaqP7h6Q_K1A" className="fa fa-youtube"></Link>
					<Link  to="https://plus.google.com/u/1/+SudaneseResearchersFoundation" className="fa fa-google"></Link >
				</ul>
   				 </div>
		 
		  </Fragment>
		);
	  };




    

export default Footer;
 