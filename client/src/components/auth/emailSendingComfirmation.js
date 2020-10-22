import React, { Component } from 'react';
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
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

       // L_Img: '',
        
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
      
      email: this.state.email
      

    }
 
    console.log(user);

    axios.post('/api/auth/reset-password', user)
    .then(res => console.log(res.data));

   window.location = '/emailSendingComfirmation';
  }
 
  render() {
    return (
 
 
      <div className="form-container">
    
      
<br></br>
<h1 className="middle text-primary"><i className="fas fa-square"></i> Email Has been Sent | Chek Your Email Now </h1>	  

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
        </div>

    )
  }
}
