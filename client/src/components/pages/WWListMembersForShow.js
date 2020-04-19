import React  from 'react';
import { Link} from 'react-router-dom';
import Moment from 'react-moment';
 

// const thStyle =
//     {
//          background:'#cacaca',
//          verticalalign: 'middle',
//          fontweight: '600',
//          color:'#000',
//          textalign:'center',
//          border: '1px solid #000'
//      }

//      const tdStyle = {
//       background:'#FAFAFA',
//       verticalalign: 'middle',
//       fontWeight:'bold',
//       color:'#000',
//       textAlign:'center'
       
      

//      }

     
     


 

const Posts = ({ posts, loading}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }


  return (

   
   
 
        
  posts.map(pd => (
  
    <div className="card">
    <Link to={"/profile/"+pd._id}> <img src={pd.user.avatar} alt="" style={{width:'200px', height:'150px'}} /></Link>
    <h1 style={{fontSize:'13px' , fontWeight:'Bold', color:'#000'}}>{pd.user.name}</h1>
    <h1 style={{fontSize:'15px' , fontWeight:'Bold', color:'#000'}}> Level1</h1>
     <h1 style={{fontSize:'13px' , fontWeight:'Bold', color:'#000'}}> location: {pd.location}</h1>
     <p style={{fontSize:'13px' , fontWeight:'Bold', color:'#000'}}> Member Since: <Moment format='YYYY/MM/DD'>{pd.date}</Moment> </p>
     <div>
     
     
     <Link className="Link-card" href={pd.youtube}><i className="fa fa-youtube"></i></Link> 
     <Link className="Link-card" href={pd.twitter}><i className="fa fa-twitter"></i></Link>  
     <Link className="Link-card" href={pd.linkedin}><i className="fa fa-linkedin"></i></Link>  
     <Link className="Link-card" href={pd.facebook}><i className="fa fa-facebook"></i></Link> 
     <Link className="Link-card" href={pd.instagram}><i className="fa fa-instagram"></i></Link> 
     </div>
     <p> <Link to={"/profile/"+pd._id}><button className="button-card">Details</button></Link></p>
   </div>
   
   
 ))
 
 
 
 
          
          ); 
    
  
 }
 
 

 export default Posts;
 