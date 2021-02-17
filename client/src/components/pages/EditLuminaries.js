import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

export default class Editwebinars extends Component {
  constructor(props) {
    super(props);
      

    //this.onChangeL_Img = this.onChangeL_Img.bind(this);
    this.onChangeL_name = this.onChangeL_name.bind(this);
    this.onChangeL_specialty = this.onChangeL_specialty.bind(this);
    this.onChangeL_contribution = this.onChangeL_contribution.bind(this);
    this.onChangeL_date = this.onChangeL_date.bind(this);
    this.onChangeL_Website = this.onChangeL_Website.bind(this);
    this.onChangeL_biography = this.onChangeL_biography.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

       // L_Img: '',
        L_name: '',
        L_specialty: '',
        L_contribution: '',
        L_Website: '',
        L_date: '',
        L_biography: ''
    }
  }
 
  componentDidMount() {
    axios.get('/api/Luminaries/'+this.props.match.params.id)
      .then(response => {
        this.setState({

          L_Img: response.data.L_Img,
          L_name: response.data.L_name,
          L_specialty: response.data.L_specialty,
          L_contribution: response.data.L_contribution,
          L_Website: response.data.L_Website,
          L_date: response.data.L_date,
          L_biography: response.data.L_biography
          
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('/api/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

   

  onChangeL_name(e) {
    this.setState({
      L_name: e.target.value
    })
  }

  onChangeL_specialty(e) {
    this.setState({
      L_specialty: e.target.value
    })
  }

  onChangeL_contribution(e) {
    this.setState({
      L_contribution: e.target.value
    })
  }

  onChangeL_date(e) {
    this.setState({
      L_date: e.target.value
    })
  }


  onChangeL_Website(e) {
    this.setState({
      L_Website: e.target.value
    })
  }

  onChangeL_biography(e) {
    this.setState({
      L_biography: e.target.value
    })
  }

 

  // onChangeL_Img(e) {
  //   this.setState({ L_Img: e.target.files[0] });
  // }
 
  onSubmit(e) {
    e.preventDefault();
 
    const luminaries = {
     // L_Img: this.state.L_Img,
      L_name: this.state.L_name,
      L_specialty: this.state.L_specialty,
      L_contribution: this.state.L_contribution,
      L_Website: this.state.L_Website,
      L_date: this.state.L_date,
      L_biography: this.state.L_biography

    }

    console.log(luminaries);

    axios.post('/api/Luminaries/update/' + this.props.match.params.id, luminaries)
    .then(res => console.log(res.data));

   window.location = '/Allluminaries';
  }
 
  render() {
    return (
 

      <div className="form-container">
      <form className="form" encType="multipart/form-data" onSubmit={this.onSubmit}> 
   
      
      <h1 className="middle text-primary"><i className="fas fa-star"></i> Edit Luminaries </h1>	 
   
      
      <div className="form-group">
      <label className="form-label">The Name</label>
      <input  className="form-contact" placeholder="" type="text" value={this.state.L_name} onChange={this.onChangeL_name} required/>
      </div>
   
   
   
      <div className="form-group">
      <label className="form-label">Specialty</label>
      <input  className="form-contact" placeholder="" type="text"value={this.state.L_specialty} onChange={this.onChangeL_specialty} required/>
      </div>
   
   
   
      <div className="form-group">
      <label className="form-label">contribution</label>
      <input  className="form-contact" placeholder="" type="text"value={this.state.L_contribution} onChange={this.onChangeL_contribution} required/>
      </div>
   
  
 
       <div className="form-group">
      <span> Website </span>
            <input type="text"   name="name"  value={this.state.L_Website} onChange={this.onChangeL_Website} required />
        </div>


        <div className="form-group">
      <span> Biography </span>
            <input type="text"   name="name"  value={this.state.L_biography} onChange={this.onChangeL_biography} required />
        </div>


        <div className="form-group">
      <span> Date </span>
            <input type="date"   name="name"  value={this.state.L_date} onChange={this.onChangeL_date}  />
        </div>
        <div className="form-group">
        <Moment format='YYYY/MM/DD'>{this.state.date}</Moment>
        </div>



    
   
   {/* <div className="form-group">
      <label className="form-label"> Image  </label>
     <input type="file"
     className="form-input"
      
     onChange={this.onChangeL_Img}  />
   </div> */}

   <img src= {this.state.L_Img} alt=" Luminars" />
  
   
   <div className="form-group">
     <button style={{width :'500px' , height:'50px', background:'#257E83', color:'#fff', cursor:'pointer' }}  type="submit" className="submit-btn">Update</button>
     </div>
     </form>
     </div>

    )
  }
}
