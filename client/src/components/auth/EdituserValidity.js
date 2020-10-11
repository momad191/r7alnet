import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

export default class Editwebinars extends Component {
  constructor(props) {
    super(props);
     
 
    this.onChangename = this.onChangename.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onChangevalidity = this.onChangevalidity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      password: '',
      validity: ''
      
    }
  }
  
  componentDidMount() {
    axios.get('/api/users/'+this.props.match.params.id)
      .then(response => {
        this.setState({

          name: response.data.name,
          email: response.data.email,
          password: response.data.password,
          validity: response.data.validity
          
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

  onChangepassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onChangevalidity(e) {
    this.setState({
      validity: e.target.value
    })
  }

 

  onSubmit(e) {
    e.preventDefault();

    const contact = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      validity: this.state.validity,
    }
 

    axios.post('/api/users/update/' + this.props.match.params.id, contact)
    .then(res => console.log(res.data));

   window.location = '/AllLUser';
  }

  render() {
    return (
 
 
      <div className="form-container">
      <form className="form" encType="multipart/form-data" onSubmit={this.onSubmit}> 
   
      
      <h1 className="middle text-primary"><i className="fas fa-user"></i> Edit user  </h1>	 
   
      
      <div className="form-group">
      <label className="form-label">The Name</label>
      <input  className="form-contact"  type="text" value={this.state.name} onChange={this.onChangename} required/>
      </div>
   
   
   
      <div className="form-group">
      <label className="form-label">email</label>
      <input  className="form-contact"  type="text" value={this.state.email} onChange={this.onChangeemail} required/>
      </div>
   
   
   
      <div className="form-group">
      <label className="form-label">password</label>
      <input  className="form-contact"   type="text" value={this.state.password} onChange={this.onChangepassword} required/>
      </div>
   
  
 
       <div className="form-group">
      <span> validity </span>
            <input type="text"     value={this.state.validity} onChange={this.onChangevalidity} required />
        </div>

   
   
   <div className="form-group">
     <button style={{width :'500px' , height:'50px', background:'#257E83', color:'#fff', cursor:'pointer' }}  type="submit" className="submit-btn">Update</button>
     </div>
     </form>
     </div>

    )
  }
}
