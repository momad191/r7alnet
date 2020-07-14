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
              <th style={thStyle}>Picture</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Specialty</th>
              <th style={thStyle}>Contribution</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Action</th>
            </tr>
 
          </thead>

 
            
          <tbody  style={{ width:'100%' , fontSize:'13px' }}>
       
 {posts.map(pd => (

 
    <tr >
    <td style={tdStyle}><Link to={"/EditLuminariesImg/"+pd._id}><img src={pd.L_Img} width='100' height='55' alt="" /></Link></td>
    <td style={tdStyle}>{pd.L_name}</td>
    <td style={tdStyle}>{pd.L_specialty}</td>
    <td style={tdStyle}>{pd.L_contribution}</td>
    <td style={tdStyle}><Moment format='YYYY/MM/DD'>{pd.L_date}</Moment></td>
    <td style={tdStyle}>
      <Link to={"/EditLuminaries/"+pd._id}>Edit</Link>  
      </td>
   
 
</tr>
))}

</tbody>

</table>
         
         ); 
   
 
}

export default Posts;
