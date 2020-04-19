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

     
     


 

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }


  return (

   
 
 
        
  posts.map(pd => (
 
 
    <div className="card">
    <Link to={"/showLuminariesDtails/"+pd._id}> <img src={pd.L_Img} alt="Tayeb Salih" style={{width:'200px', height:'150px'}} /></Link>
    <h1 style={{fontSize:'13px' , fontWeight:'Bold', color:'#000'}}>{pd.L_name}</h1>
     <p className="title-card"> {pd.L_specialty}</p>
     <p>Nominated on: <Moment format='YYYY/MM/DD'>{pd.L_date}</Moment> </p>
     <div>
     <Link className="Link-card" href="#"><i className="fa fa-dribbble"></i></Link> 
     <Link className="Link-card" href="#"><i className="fa fa-twitter"></i></Link>  
     <Link className="Link-card" href="#"><i className="fa fa-linkedin"></i></Link>  
     <Link className="Link-card" href="#"><i className="fa fa-facebook"></i></Link> 
     </div>
     <p> <Link to={"/showLuminariesDtails/"+pd._id}><button className="button-card">Details</button></Link></p>
   </div>
   
   
 ))
 
 
 
 
          
          ); 
    
  
 }
 
 export default Posts;
 