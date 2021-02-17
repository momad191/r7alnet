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

   window.location = '/';
  }
 
  render() {
    return (


      <Fragment>
       
    
       
      <section id="login-reg" >
              
              <div class="row">
                 
                  <div class="col-lg-12 col-md-12 col-sm-12">
                     <div class="form-box">
                         <div class="form-top" style={{backgroundColor:'#363636'}}>
                             <div class="form-top-left">
                                  
                             </div>
                             <div class="form-top-right">
                             كلمة المرور الجديدة <i class="fa fa-key"></i>
                             </div>
                         </div> 

          <div class="form-bottom"  style={{backgroundColor:'#58ACFA'}}>
        <form role="form" action="" class="login-form"  encType="multipart/form-data" onSubmit={this.onSubmit}>


 
                            <div class="input-group form-group">

                               <input type="text" class="form-control" placeholder=" البريد الالكتروني" aria-describedby="basic-addon1" autocomplete="off"
                                name='name'
                                value={this.state.email}
                                onChange={this.onChangeemail}
                                style={{color:'#000',fontWeight:'bold',float:'right',direction:'rtl'}}
                                required
                             />
                        <span class="input-group-addon" id="basic-addon1"><i class="fa fa-user"></i></span>
                           </div>


                           
                           <div class="input-group form-group">
                          <input type="password" class="form-control" placeholder=" كلمة المرور " aria-describedby="basic-addon1" autocomplete="off"
                          name='name'
                          value={this.state.password}
                          onChange={this.onChangepassword}
                          style={{color:'#000',fontWeight:'bold',float:'right',direction:'rtl'}}
                          required
                          />
                          <span class="input-group-addon" id="basic-addon1"><i class="fa fa-user"></i></span>
                          </div>
    
  


      <div className="form-group">
      {/* <label className="form-label">reset Token</label> */}
      <input  className="form-contact" placeholder="" type="hidden" value={this.state.resetToken} onChange={this.onChangeresetToken} required/>
      </div>
 
 
      <button style={{backgroundColor:'#363636'}} type="submit" class="momadbtn">أرسل</button>



     </form>
     </div>
     </div>
     </div>
     </div>
     </section>
     
     </Fragment>


    )
  }
}
