import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import axios from 'axios';
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
      height:'25px',
      border: '0.5px solid #09CAD3'
     }

    

const Exercise = props => (

   <tr>
    <td style={tdStyle}>{props.exercise.name}</td>
   <td style={tdStyle}>{props.exercise.email}</td>
    {/* <td>{props.exercise.Title}</td>
    <td>{props.exercise.Gender}</td>
    <td>{props.exercise.Email}</td>
    <td>{props.exercise.Website}</td>
    <td>{props.exercise.Phone}</td>
    <td>{props.exercise.Academic_affiliation}</td>
    <td>{props.exercise.Country}</td>
    <td>{props.exercise.Nationality}</td>
    <td>{props.exercise.Key_academic}</td> */}
    <td style={tdStyle}>{props.exercise.channel}</td>
    <td style={tdStyle}>{props.exercise.subject}</td>
    <td style={tdStyle}><Moment format='YYYY/MM/DD'>{props.exercise.date}</Moment></td>

    {/* <td style={tdStyle}>{props.exercise.Potential_talk_title}</td> */}

    {/* <td style={tdStyle}>{props.exercise. other_information}</td>
    <td style={tdStyle}>{props.exercise. date}</td> */}
    
     
     
    <td style={tdStyle}>
      <Link to={"/EditContact/"+props.exercise._id}>Edit</Link> | 
     
       <Link to="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</Link>
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
    axios.get('/api/contact/')
      .then(response => {
        this.setState({ exercises: response.data })

       


      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('/api/contact/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises

    
    // .filter(Luminaries => Luminaries.name.includes(this.state.search))

    .filter(luminaries=>{

      return luminaries.name.toLowerCase().indexOf(this.state.search.toLowerCase())>=0
    })


    .map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }


  render() {

  
    
    return (
      <div>
        
        <h1> Search Contact </h1>
        {/* <Link to="/LuminariesRegistration" title="Dashboard" className=''><i className="fas fa-plus text-primary"></i> <span className="hide-sm">Add </span></Link> <br/> */}

        {/* <Link to="/Search" title="Dashboard" className=''><i className="fas fa-search text-primary"></i> <span className="hide-sm">Search </span></Link> */}

        <input  style={inputTextStyle} type='text' placeholder="Search here" onChange={this.searchChanged} value={this.state.search}/>

        <div className="table-responsive">
        <table  style={{ width:"100%", fontSize:"13px" }}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Channel</th>
              {/* <th><h1 className="middle text-dark">Title</h1></th>
              <th><h1 className="middle text-dark">Gender</h1></th>
              <th><h1 className="middle text-dark">Email</h1></th>
              <th><h1 className="middle text-dark">Website</h1></th>
              <th><h1 className="middle text-dark">Phone</h1></th>
              <th><h1 className="middle text-dark">Academic_affiliation</h1></th>
              <th><h1 className="middle text-dark">Country</h1></th>
              <th><h1 className="middle text-dark">Nationality</h1></th>
              <th><h1 className="middle text-dark">Key_academic</h1></th> */}
              <th style={thStyle}>subject</th>
              <th style={thStyle}>Date</th>
              {/* <th style={thStyle}>Potential_talk_title</th> */}
              {/* <th style={thStyle}>other_information</th>
              <th style={thStyle}>date</th> */}
              <th style={thStyle}>Action</th>
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
