import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
 
const thStyle =
    {
         background:'#cacaca',
         verticalalign: 'middle',
         fontweight: '600',
         color:'#000',
         textalign:'center',
         border: '1px solid #000'
     }

     const tdStyle = {
      background:'#FAFAFA',
      verticalalign: 'middle',
      fontWeight:'bold',
      color:'#000',
      textAlign:'center'
       
      

     }

     
     


 

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }



  return (
   

   <table style={{ width:'100%' , fontSize:'13px' }}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Password</th>
              <th style={thStyle}>Validity</th>
              <th style={thStyle}>Action</th>
            </tr>
 
          </thead>


            
          <tbody  style={{ width:'100%' , fontSize:'13px' }}>
       
 {posts.map(pd => (


    <tr >
    <td style={tdStyle}>{pd.name}</td>
    <td style={tdStyle}>{pd.email}</td>
    <td style={tdStyle}>{pd.password}</td>
    <td style={tdStyle}>{pd.validity}</td>
    
    
    <td style={tdStyle}>
      <Link to={"/EdituserValidity/"+pd._id}>Edit</Link>  
      </td>
   
 
</tr>
))}

</tbody>

</table>
         
         ); 
   
 
}

export default Posts;
