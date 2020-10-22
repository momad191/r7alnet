import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

export default class Editwebinars extends Component {
  constructor(props) {
    super(props);
       

    //this.onChangeL_Img = this.onChangeL_Img.bind(this);
   // this.onChangename = this.onChangename.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onChangeresetToken = this.onChangeresetToken.bind(this);

    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

       // L_Img: '',
        email:'',
        password: '',
        resetToken:''
    }
  }
 
  componentDidMount() {
    axios.get('/api/users/'+this.props.match.params.id)
      .then(response => {
        this.setState({

         // password: response.data.password, 
          email: response.data.email,
          resetToken:response.data.resetToken,
          expireToken:response.data.expireToken
          
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('/api/auth/'+this.props.match.params.id)
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


  onChangeresetToken(e) {
    this.setState({
      resetToken: e.target.value
    })
  }
  
 


   

 

  // onChangeL_Img(e) {
  //   this.setState({ L_Img: e.target.files[0] });
  // }
  
  onSubmit(e) {
    e.preventDefault();

    const user = {
     // L_Img: this.state.L_Img,
      
     
      email: this.state.email,
      password: this.state.password,
      resetToken: this.state.resetToken

       

    }
 
    console.log(user);
 
    axios.post('/api/auth/new-password/'+this.props.match.params.id, user)
    .then(res => console.log(res.data));

   window.location = '/dashboard';
  }
 
  render() {
    return (
 
 
      <div className="form-container">
      <form className="form" encType="multipart/form-data" onSubmit={this.onSubmit}> 
   
      
      <h1 className="middle text-primary"><i className="fas fa-star"></i> New password  </h1>	 
   
      
      
   
   
   
      <div className="form-group">
      <label className="form-label">Email</label>
      <input  className="form-contact" placeholder="" type="text"value={this.state.email} onChange={this.onChangeemail} required disabled/>
      </div>
   
 

      <div className="form-group">
      <label className="form-label">Enter New Password</label>
      <input  className="form-contact" placeholder="" type="password" value={this.state.password} onChange={this.onChangepassword} required/>
      </div>


      <div className="form-group">
      {/* <label className="form-label">reset Token</label> */}
      <input  className="form-contact" placeholder="" type="hidden" value={this.state.resetToken} onChange={this.onChangeresetToken} required/>
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

   {/* <img width="200" height="120" src= {this.state.avatar} alt=" avatar" /> */}
  
   
   <div className="form-group">
     <button style={{width :'500px' , height:'50px', background:'#257E83', color:'#fff', cursor:'pointer' }}  type="submit" className="submit-btn">save</button>
     </div>
     </form>
     </div>

    )
  }
}
