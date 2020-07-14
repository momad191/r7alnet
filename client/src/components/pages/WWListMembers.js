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
      verticalAlign: 'middle',
      fontWeight: 'bold',
      color:'#000',
      textAlign:'center',
      border: '0.2px solid #000',
      //border: "0.5px solid #000"

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
              <th style={thStyle}>Country</th>
              <th style={thStyle}>Specialization</th>
              <th style={thStyle}>Work Place</th>
              <th style={thStyle}>Date</th>
              <th colspan="3" style={thStyle}>Action</th>
            </tr>
          </thead>

 
            
          <tbody  style={{ width:'100%' , fontSize:'13px' }}>
       
 {posts.map(pd => (


    <tr >
    <td style={tdStyle}><Link to={"/EdituserImg/"+pd.user._id}><img src={pd.user.avatar} width='100' height='55' alt="" /></Link></td>
    <td style={tdStyle}>{pd.user.name}</td>
    <td style={tdStyle}>{pd.location}</td>
    <td style={tdStyle}>{pd.department}</td>
    <td style={tdStyle}>{pd.company}</td>
    <td style={tdStyle}><Moment format='YYYY/MM/DD'>{pd.date}</Moment></td>

    <td style={tdStyle}>
        <Link to={"/Edituser/"+pd.user._id} className="hide-sm text-dark">Update name and Email </Link>  
      </td>

      <td style={tdStyle}>
        <Link to={"/EditProfileInfo/user/"+pd._id} className="hide-sm text-dark">Update profile </Link>  
      </td>

      

    {/* <td style={tdStyle}>
      
      <Link to={"/Edituser/"+pd.user._id}>Edit</Link>  
      </td> */}
    
 
</tr>
))}

</tbody>

</table>
         
         ); 
   
 
}

export default Posts;
