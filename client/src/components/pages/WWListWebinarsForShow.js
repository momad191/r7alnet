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
    <Link to={"/showWebinarsDtails/"+pd._id}> <img src={pd.WebinarImg} alt="Tayeb Salih" style={{width:'200px', height:'150px'}} /></Link>
    <h1 style={{fontSize:'13px' , fontWeight:'Bold', color:'#000'}}>{pd.Surname}</h1>
     <p className="title-card"> {pd.first_name}</p>
      

      

     <p> <Link to={"/showWebinarsDtails/"+pd._id}><button className="button-card">Details</button></Link></p>
   </div>
   
   
 ))
 
 
 
 
          
          ); 
    
  
 }
 
 export default Posts;
 