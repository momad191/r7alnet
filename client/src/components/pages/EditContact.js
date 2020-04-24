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
    this.onChangechannel = this.onChangechannel.bind(this);
    this.onChangesubject = this.onChangesubject.bind(this);
    this.onChangemsg = this.onChangemsg.bind(this);
    this.onChangedate = this.onChangedate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      channel: '',
      subject: '',
      msg: '',
      date: ''
    }
  }
 
  componentDidMount() {
    axios.get('/api/contact/'+this.props.match.params.id)
      .then(response => {
        this.setState({

          name: response.data.name,
          email: response.data.email,
          channel: response.data.channel,
          subject: response.data.subject,
          msg: response.data.msg,
          date: response.data.date

        

          
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

  onChangechannel(e) {
    this.setState({
      channel: e.target.value
    })
  }

  onChangesubject(e) {
    this.setState({
      subject: e.target.value
    })
  }

 

  onChangemsg(e) {
    this.setState({
      msg: e.target.value
    })
  }

 
  onChangedate(e) {
    this.setState({ date: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const contact = {
      name: this.state.name,
      email: this.state.email,
      channel: this.state.channel,
      subject: this.state.subject,
      msg: this.state.msg,
      date: this.state.date

    }


    axios.post('/api/contact/update/' + this.props.match.params.id, contact)
    .then(res => console.log(res.data));

   window.location = '/AllLContact';
  }

  render() {
    return (
 

      <div className="form-container">
      <form className="form" encType="multipart/form-data" onSubmit={this.onSubmit}> 
   
      
      <h1 className="middle text-primary"><i className="fas fa-mobile"></i> Edit Contact </h1>	 
   
      
      <div className="form-group">
      <label className="form-label">The Name</label>
      <input  className="form-contact"  type="text" value={this.state.name} onChange={this.onChangename} required/>
      </div>
   
   
   
      <div className="form-group">
      <label className="form-label">email</label>
      <input  className="form-contact"  type="text" value={this.state.email} onChange={this.onChangeemail} required/>
      </div>
   
   
   
      <div className="form-group">
      <label className="form-label">channel</label>
      <input  className="form-contact"   type="text" value={this.state.channel} onChange={this.onChangechannel} required/>
      </div>
   
  
 
       <div className="form-group">
      <span> subject </span>
            <input type="text"     value={this.state.subject} onChange={this.onChangesubject} required />
        </div>

 
        <div className="form-group">
      <span> msg </span>
            <textarea type="textarea"     value={this.state.msg} onChange={this.onChangemsg} required />
        </div>
 
 
        <div className="form-group">
      <span> date </span>
            <input type="date"  value={this.state.date} onChange={this.onChangedate}  />
        </div>

        


        <Moment format='YYYY/MM/DD'>{this.state.date}</Moment>
   
 
   
   <div className="form-group">
     <button style={{width :'500px' , height:'50px', background:'#257E83', color:'#fff', cursor:'pointer' }}  type="submit" className="submit-btn">Update</button>
     </div>
     </form>
     </div>

    )
  }
}
