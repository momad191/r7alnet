import React from 'react';
import { Link } from 'react-router-dom';

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
              <th style={thStyle}>Surname</th>
              <th style={thStyle}>Firest Name</th>
              {/* <th><h1 className="middle text-dark">Title</h1></th>
              <th><h1 className="middle text-dark">Gender</h1></th>
              <th><h1 className="middle text-dark">Email</h1></th>
              <th><h1 className="middle text-dark">Website</h1></th>
              <th><h1 className="middle text-dark">Phone</h1></th>
              <th><h1 className="middle text-dark">Academic_affiliation</h1></th>
              <th><h1 className="middle text-dark">Country</h1></th>
              <th><h1 className="middle text-dark">Nationality</h1></th>
              <th><h1 className="middle text-dark">Key_academic</h1></th> */}
              <th style={thStyle}>Research_Field</th>
              <th style={thStyle}>Specialization</th>
              <th style={thStyle}>Potential_talk_title</th>
              {/* <th style={thStyle}>other_information</th>
              <th style={thStyle}>date</th> */}
              <th style={thStyle}>Action</th>
            </tr>
 
          </thead>


            
          <tbody  style={{ width:'100%' , fontSize:'13px' }}>
       
 {posts.map(pd => (


<tr >
<td style={tdStyle}><Link to={"/EditwebinarsImg/"+pd._id}><img src={pd.WebinarImg} width='100' height='55' alt="" /></Link></td>
<td style={tdStyle}>{pd.Surname}</td>
<td style={tdStyle}>{pd.first_name}</td>
 {/* <td>{props.exercise.Title}</td>
 <td>{props.exercise.Gender}</td>
 <td>{props.exercise.Email}</td>
 <td>{props.exercise.Website}</td>
 <td>{props.exercise.Phone}</td>
 <td>{props.exercise.Academic_affiliation}</td>
 <td>{props.exercise.Country}</td>
 <td>{props.exercise.Nationality}</td>
 <td>{props.exercise.Key_academic}</td> */}
 <td style={tdStyle}>{pd.Research_Field}</td>
 <td style={tdStyle}>{pd.Specialization}</td>
 <td style={tdStyle}>{pd.Potential_talk_title}</td>

 {/* <td style={tdStyle}>{props.exercise. other_information}</td>
 <td style={tdStyle}>{props.exercise. date}</td> */}
 
  
  
 <td style={tdStyle}>
   <Link to={"/Editwebinars/"+pd._id}>Edit</Link>  
  
  </td>
   
 
</tr>
))}

</tbody>

</table>
         
         ); 
   
 
}

export default Posts;
