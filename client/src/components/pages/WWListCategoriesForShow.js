import React  from 'react';
import { Link} from 'react-router-dom';
import Moment from 'react-moment';
 
  
const Posts = ({ posts, loading}) => {
  // if (loading) {
  //   return <h2> مرحبا بك ... </h2>;
  // }
 

  return (

 
    
  posts.map(pd => (
  
    
  
 
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item" style={{marginTop:'22px'}}>

                    <div class="portfolio-one" style={{width:'100%',height:'250px'}} > 
                        <div class="portfolio-head">
                            <a href={`/Topics/${pd._id}#/${pd.body}`}> 
                            <div class="portfolio-img" >
                              <img style={{width:'100%',height:'200px' ,borderRadius:'50%'}} alt="" src={pd.image}/></div></a>
                        </div>
                        <div class="portfolio-content" style={{textAlign:'center'}}>
                         <a className="momadbtn" 
                         href={`/Topics/${pd._id}#/${pd.body}`}
                         style={{backgroundColor:'#fff', color:'#000',fontSize:'22px',fontWeight:'bold',width:'100%',borderRadius:'0%',textAlign:'center'}} > {pd.text}</a>
                         {/* <p>
                       						
                      	</p> */}
                        {/* <a href="#"> <i class="fa fa-caret-left"></i>  </a> */}
                        </div>
						 
                     </div>
                     </div>

 
 






   
   
 ))

          ); 
    
  
 }
 
 

 export default Posts;
 