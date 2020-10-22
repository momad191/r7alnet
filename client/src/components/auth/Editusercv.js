import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import Moment from 'react-moment';
//import { connect } from 'react-redux';
//import { addWebinars } from '../../actions/webinarsAction';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";
     
//class Editwebinars extends React.Component {
export default class EditLuminariesImg extends Component {
  constructor(props) {
    super(props);
    this.onChangeavatar = this.onChangeavatar.bind(this);
    this.onChangename = this.onChangename.bind(this);
    // this.onChangeL_name = this.onChangeL_name.bind(this);
    // this.onChangeL_specialty = this.onChangeL_specialty.bind(this);
    // this.onChangeL_contribution = this.onChangeL_contribution.bind(this);
    // this.onChangeL_Website = this.onChangeL_Website.bind(this);
    // this.onChangeL_biography = this.onChangeL_biography.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      cv: '',
        // L_specialty: '',
        // L_contribution: '',
        // L_Website: '',
        // L_date: '',
        // L_biography: ''  
 
       
    }
  }
  
  componentDidMount() {
    axios.get('/api/users/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
          cv: response.data.cv,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
 
  }
 
  
  onChangeavatar = e => {
    this.setState({ cv: e.target.files[0] });
    };

  onChangename = e => {
   this.setState({ name: e.target.value });
  };

  // onChangeL_specialty = e => {
  //   this.setState({ L_specialty: e.target.value });
  //  };

  //  onChangeL_contribution = e => {
  //   this.setState({ L_contribution: e.target.value });
  //  };

  
  //  onChangeL_Website = e => {
  //   this.setState({ L_Website: e.target.value });
  //  };

  //  onChangeL_date = e => {
  //   this.setState({ L_date: e.target.value });
  //  };


  //  onChangeL_biography = e => {
  //   this.setState({ L_biography: e.target.value });
  //  };
 
 
 
  onSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('cv', this.state.cv);
    formData.append('name', this.state.name);
    // formData.append('L_specialty', this.state.L_specialty);
    // formData.append('L_contribution', this.state.L_contribution);
    // formData.append('L_Website', this.state.L_Website);
    // formData.append('L_date', this.state.L_date);
    // formData.append('L_biography', this.state.L_biography);
 
    //this.props.addWebinars(formData);
   axios.post('/api/users/Editusercv/'+ this.props.match.params.id, formData)

  //  axios.post('http://localhost:5000/api/users/Editusercv/' + this.props.match.params.id, formData)

   .then(res => console.log(res.data));
    
   window.location = '/profile/'+ this.props.match.params.id;
    
   } 


  // onSubmit(e) {
  //   e.preventDefault();

  //   const webinars = {
  //     Surname: this.state.Surname,
  //     first_name: this.state.first_name,
  //     Title: this.state.Title,
  //     Gender: this.state.Gender,
  //     Email: this.state.Email,
  //     Website: this.state.Website,
  //     Phone: this.state.Phone,
  //     Academic_affiliation: this.state.Academic_affiliation,
  //     Country: this.state.Country,
  //     Nationality:this.state.Nationality,
  //     Key_academic: this.state.Key_academic,
  //     Research_Field: this.state.Research_Field,
  //     Specialization: this.state.Specialization,
  //     Potential_talk_title:this.state.Potential_talk_title,
  //     other_information: this.state.other_information,
  //     date: this.state.date,
  //     WebinarImg:this.state.WebinarImg
  //   }
 
  //   console.log(webinars);

  //   axios.post('http://localhost:5000/api/webinars/update/' + this.props.match.params.id, webinars)
  //   .then(res => console.log(res.data));

  //  window.location = '/AllWebinars';
  // }

  render() {
    return (

     
   <div className="form-container">
   <form className="form" encType="multipart/form-data" onSubmit={this.onSubmit}> 

   
   <h1 className="middle text-primary"><i className="fas fa-star"></i> UPLOAD YOUR CV  </h1>	 

   
   <div className="form-group">
   {/* <label className="form-label">The Name</label> */}
   <input  className="form-contact" placeholder="" type="hidden" value={this.state.name} onChange={this.onChangename} required/>
   </div>

  
  
      <div className="form-group">
        <label className="form-label"> Change  </label>
        <input type="file"
        className="form-input"
        
        onChange={this.onChangeavatar} required />
      </div>
      
     {/* <img src={this.state.cv} alt='' width='200px' height='200px' className='round-square' />  */}
     
     {/* <h1> {this.state.cv}</h1> */}

     {/* <a href={this.state.cv} className='btn btn-dark my-1'> dwonload </a> */}

<div className="form-group">
  <button style={{width :'500px' , height:'50px', background:'#257E83', color:'#fff', cursor:'pointer' }}  type="submit" className="submit-btn">Upload</button>
  </div>
  </form>
  <Link to='/' className='btn btn-dark my-1'>
            Back To dashboard
          </Link>
  </div>
  
        
    )
  }
}

//export default connect(null,{ addWebinars })(Editwebinars);