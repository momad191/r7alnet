import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
//import './App.css';
  
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


     const activetdStyle = {
      background:'#28a745',
      verticalAlign: 'middle',
      fontWeight: 'bold',
      color:'#000',
      textAlign:'center'
      //border: "0.5px solid #000"

     }

     const inputTextStyle ={
      display: 'block',
      width: '60%',
      fontsize: '13px',
      lineheight: '1.82857143',
      color: '#000',
      borderradius: '10px',
      background: '#C5D5D5',
      marginright:'0px',
      height:'35px',
      border: '0.5px solid #09CAD3'
     }

     

const Exercise = props => (

   <tr>
     
    <td style={tdStyle}><Link to={"/EdituserImg/"+props.exercise.user._id}><img src={props.exercise.user.avatar} width='100' height='55' alt="" /></Link></td>
    <td style={activetdStyle}>{props.exercise.user.name}</td>
    <td style={tdStyle}>{props.exercise.location}</td>
    <td style={tdStyle}>{props.exercise.department}</td>
    <td style={tdStyle}>{props.exercise.company}</td>
    <td style={tdStyle}><Moment format='YYYY/MM/DD'>{props.exercise.date}</Moment></td>
   
      
     
     
    <td style={tdStyle}>
        <Link to={"/Edituser/"+props.exercise.user._id} className="hide-sm text-dark">Update name and Email </Link>  
      </td>

      <td style={tdStyle}>
        <Link to={"/EditProfileInfo/user/"+props.exercise._id} className="hide-sm text-dark">Update profile </Link>  
      </td>

      <td style={tdStyle}>
       <Link to="#" onClick={() => { props.deleteExercise(props.exercise._id) }} className="hide-sm text-danger">Delete</Link>
    </td>
      
    
  </tr>

)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {
      exercises: [],
      search:"",
     

     

    
    };

    this.handlePageClick = this
            .handlePageClick
            .bind(this);

  }


  searchChanged = event => {
    this.setState({ search: event.target.value })
}


handlePageClick = (e) => {
  const selectedPage = e.selected;
  const offset = selectedPage * this.state.perPage;

  this.setState({
      currentPage: selectedPage,
      offset: offset
  }, () => {
      this.receivedData()
  });

};

 
 

  componentDidMount() {
    axios.get('/api/profile/')
      .then(response => {
        this.setState({ exercises: response.data })

      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('/api/profile/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }
   
  exerciseList() {
    return this.state.exercises

    // .filter(luminaries => luminaries.L_name.includes(this.state.search))

    .filter(profile=>{

      return profile.user.name.toLowerCase().indexOf(this.state.search.toLowerCase())>=0

    })

    .map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })

  }

 





  render() {


    
    return ( 
      <div>
        
        <h1>Search By Name </h1>
        {/* <Link to="/LuminariesRegistration" title="Dashboard" className=''><i className="fas fa-plus text-primary"></i> <span className="hide-sm">Add </span></Link> <br/> */}

        {/* <Link to="/Search" title="Dashboard" className=''><i className="fas fa-search text-primary"></i> <span className="hide-sm">Search </span></Link> */}

        {/* <Link to="/searchMembersByCountry" title="Dashboard" className=''><i className="fas fa-search text-primary"></i> <span className="hide-sm text-dark">By Country </span></Link>-- */}
        <Link to="/searchMembersBySpecialty" title="Dashboard" className=''><i className="fas fa-search text-primary"></i> <span className="hide-sm text-dark">By Specialization </span></Link>--
        <Link to="/searchMembersByName" title="Dashboard" className=''><i className="fas fa-search text-primary"></i> <span className="hide-sm text-success">By Name </span></Link>--
        <Link to="/searchMembersByWorkPlace" title="Dashboard" className=''><i className="fas fa-search text-primary"></i> <span className="hide-sm text-dark">By Work Place </span></Link>
 

        <input  style={inputTextStyle} type='text' placeholder="Type The Name" onChange={this.searchChanged} value={this.state.search}/>

        <div className="table-responsive">
        <table  style={{ width:"100%", fontSize:"13px" }}>
          <thead>
            <tr>
              <th style={thStyle}>Picture</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Country</th>
              <th style={thStyle}>Specialization</th>
              <th style={thStyle}>Work Place</th>
              <th style={thStyle}>Date</th>
              {/* <th><h1 className="middle text-dark">Title</h1></th>
              <th><h1 className="middle text-dark">Gender</h1></th>
              <th><h1 className="middle text-dark">Email</h1></th>
              <th><h1 className="middle text-dark">Website</h1></th>
              <th><h1 className="middle text-dark">Phone</h1></th>
              <th><h1 className="middle text-dark">Academic_affiliation</h1></th>
              <th><h1 className="middle text-dark">Country</h1></th>
              <th><h1 className="middle text-dark">Nationality</h1></th>
              <th><h1 className="middle text-dark">Key_academic</h1></th> */}
              {/* <th style={thStyle}>other_information</th>
              <th style={thStyle}>date</th> */}
              <th colspan="3" style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>

     

        

        </div>
      </div>
    )
  }
}
