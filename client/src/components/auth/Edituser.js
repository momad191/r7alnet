import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

export default class Editwebinars extends Component {
  constructor(props) {
    super(props);
       

    //this.onChangeL_Img = this.onChangeL_Img.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
 
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

       // L_Img: '',
        name: '', 
        email: ''
    }
  }
 
  componentDidMount() {
    axios.get('/api/users/'+this.props.match.params.id)
      .then(response => {
        this.setState({

          avatar: response.data.avatar,
          name: response.data.name, 
          email: response.data.email
          
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

   

  onChangename(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }

  
 


   

 

  // onChangeL_Img(e) {
  //   this.setState({ L_Img: e.target.files[0] });
  // }
 
  onSubmit(e) {
    e.preventDefault();

    const user = {
     // L_Img: this.state.L_Img,
      name: this.state.name,
      email: this.state.email
      
    }

    console.log(user);

    axios.post('/api/users/update/'+ this.props.match.params.id, user)
    .then(res => console.log(res.data));

   window.location = '/Allmembers';
  }
 
  render() {
    return (
 

      <div className="form-container">
      <form className="form" encType="multipart/form-data" onSubmit={this.onSubmit}> 
   
      
      <h1 className="middle text-primary"><i className="fas fa-star"></i> Edit User </h1>	 
   
      
      <div className="form-group">
      <label className="form-label">The Name</label>
      <input  className="form-contact" placeholder="" type="text" value={this.state.name} onChange={this.onChangename} required/>
      </div>
   
   
   
      <div className="form-group">
      <label className="form-label">email</label>
      <input  className="form-contact" placeholder="" type="text"value={this.state.email} onChange={this.onChangeemail} required/>
      </div>
   
 
 

{/* 
        <div className="form-group">
      <span> Date </span>
            <input type="date"   name="name"  value={this.state.L_date} onChange={this.onChangeL_date}  />
        </div>
        <div className="form-group">
        <Moment format='YYYY/MM/DD'>{this.state.date}</Moment>
        </div> */}



    
   
   {/* <div className="form-group">
      <label className="form-label"> Image  </label>
     <input type="file"
     className="form-input"
      
     onChange={this.onChangeL_Img}  />
   </div> */}

   <img width="200" height="120" src= {this.state.avatar} alt=" avatar" />
  
   
   <div className="form-group">
     <button style={{width :'500px' , height:'50px', background:'#257E83', color:'#fff', cursor:'pointer' }}  type="submit" className="submit-btn">Update</button>
     </div>
     </form>
     </div>

    )
  }
}
