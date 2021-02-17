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
    this.onChangeavatar = this.onChangeavatar.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      password: '',
      validity: '',
      avatar:''
      
    }
  }
  
  componentDidMount() {
    axios.get('/api/users/'+this.props.match.params.id)
      .then(response => {
        this.setState({

          avatar: response.data.avatar,
          name: response.data.name,
          email: response.data.email,
          password: response.data.password,
          validity: response.data.validity,
         
          
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

  onChangeavatar(e) {
    this.setState({
      avatar: e.target.value
    })
  }
 
 

  onSubmit(e) {
    e.preventDefault();

    const contact = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      validity: this.state.validity,
      avatar: this.state.avatar
    }
  

    axios.post('/api/users/update/' + this.props.match.params.id, contact)
    .then(res => console.log(res.data));

   window.location = '/AllLUser';
  }

  render() {
    return (
 
             
<section id="login-reg" >
        
        <div class="row">
           
            <div class="col-lg-12 col-md-12 col-sm-12">
               <div class="form-box">
                   <div class="form-top">
                       <div class="form-top-left">
                          
                       </div>
                       <div class="form-top-right">
                       تعديل الصلاحية <i class="fa fa-pencil"></i>
                       </div>
                   </div>
                   <div class="form-bottom">
                   <form role="form" action="" class="login-form"  encType="multipart/form-data" onSubmit={this.onSubmit}> 


                   <div class="input-group form-group">    
                    <select class="form-contact"  style={{width:'50%',border:'1px #cacaca',fontSize:'19px',textAlign:'right'}}
                     name='validity'
                    value={this.state.validity}
                    onChange={this.onChangevalidity}
                   >
                   <option value="admin">admin</option>
                   <option value="normal">normal</option>
                   <option value="super">super</option>
                   </select>
                   <span class="input-group-addon" id="basic-addon1">الصلاحية</span>
                   </div>

                     
                   <div class="input-group form-group">    
                    <input type="text" class="form-control" placeholder=" الاسم" aria-describedby="basic-addon1" autocomplete="off"
                     name='name'
                    value={this.state.name}
                    onChange={this.onChangename}
                   />
                   <span class="input-group-addon" id="basic-addon1">الاسم</span>
                   </div>



                   <div class="input-group form-group">    
                    <input type="text" class="form-control" placeholder=" البريد الالكتروني" aria-describedby="basic-addon1" autocomplete="off"
                     name='email'
                    value={this.state.email}
                    onChange={this.onChangeemail}
                   />
                   <span class="input-group-addon" id="basic-addon1">البريد الالكتروني</span>
                   </div>



                   <div class="input-group form-group">    
                    <input type="text" class="form-control" placeholder="كلمة المرور" aria-describedby="basic-addon1" autocomplete="off"
                     name='password'
                    value={this.state.password}
                    onChange={this.onChangepassword}
                   />
                   <span class="input-group-addon" id="basic-addon1">كلمة المرور </span>
                   </div>



                  


                   <div class="input-group form-group">    
                    <input type="text" class="form-control" placeholder="الصورة" aria-describedby="basic-addon1" autocomplete="off"
                     name='avatar'
                    value={this.state.avatar}
                    onChange={this.onChangeavatar}
                   />
                   <span class="input-group-addon" id="basic-addon1">الصورة</span>
                   </div>



                   <div class="input-group form-group">   
                   <a href={"/EdituserImg/"+ this.props.match.params.id}
                    style={{color:'#000',fontWeight:'bold',float:'right'}}
                    >
                      <img width="50" height="50" src= {this.state.avatar}  alt="اضغط هنا لتعديل الصورة" />

                    </a>
                    <span class="input-group-addon" id="basic-addon1">لتعديل الصورة</span>
                    </div>

                   
 
                    <button type="submit" class="momadbtn">تحديث</button>
                         
     
 
     </form>
     </div>
     </div>
     </div>
     </div>
     
     </section>

    )
  }
}
