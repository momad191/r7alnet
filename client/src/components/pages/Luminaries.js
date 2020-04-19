import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import s1 from '../../img/Luminaries/1.jpg';
import s2 from '../../img/Luminaries/2.jpg';
import s3 from '../../img/Luminaries/3.jpg';

 
const Luminaries = () => {
  return (
    <Fragment>

                <h1 className="middle text-primary"><i className="fas fa-star"></i> Luminaries</h1>	  
 
                     <div className="card">
						 <Link to=""> <img src={s1} alt="Tayeb Salih" style={{width:'200px', height:'130px'}} /></Link>
						  <h1>Tayeb Salih</h1>
						  <p className="title-card">Writer (Literature & Fiction, Short Stories, Politics)	</p>
						  <p>Nominated on:25/12/2016</p>
						  <div>
							<Link className="Link-card" href="#"><i className="fa fa-dribbble"></i></Link> 
							<Link className="Link-card" href="#"><i className="fa fa-twitter"></i></Link>  
							<Link className="Link-card" href="#"><i className="fa fa-linkedin"></i></Link>  
							<Link className="Link-card" href="#"><i className="fa fa-facebook"></i></Link> 
						  </div>
						  <p><button className="button-card">Details</button></p>
						</div>

                        {/*    *****************************************************************************************    */}
                        

                        <div className="card">
						 <Link to=""> <img src={s2} alt="Tayeb Salih" style={{width:'200px', height:'130px'}} /></Link>
						  <h1>Tayeb Salih</h1>
						  <p className="title-card">Writer (Literature & Fiction, Short Stories, Politics)	</p>
						  <p>Nominated on:25/12/2016</p>
						  <div>
							<Link className="Link-card" href="#"><i className="fa fa-dribbble"></i></Link> 
							<Link className="Link-card" href="#"><i className="fa fa-twitter"></i></Link>  
							<Link className="Link-card" href="#"><i className="fa fa-linkedin"></i></Link>  
							<Link className="Link-card" href="#"><i className="fa fa-facebook"></i></Link> 
						  </div>
						  <p><button className="button-card">Details</button></p>
						</div>



                   {/*    *****************************************************************************************    */}

 

                     <div className="card">
						 <Link to=""> <img src={s3} alt="Tayeb Salih" style={{width:'200px', height:'130px'}} /></Link>
						  <h1>Tayeb Salih</h1>
						  <p className="title-card">Writer (Literature & Fiction, Short Stories, Politics)	</p>
						  <p>Nominated on:25/12/2016</p>
						  <div>
							<Link className="Link-card" href="#"><i className="fa fa-dribbble"></i></Link> 
							<Link className="Link-card" href="#"><i className="fa fa-twitter"></i></Link>  
							<Link className="Link-card" href="#"><i className="fa fa-linkedin"></i></Link>  
							<Link className="Link-card" href="#"><i className="fa fa-facebook"></i></Link> 
						  </div>
						  <p><button className="button-card">Details</button></p>
						</div>




    </Fragment>
  );
};






export default Luminaries;
