import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import { Fragment } from 'react';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";
 
export default class Editwebinars extends Component {
  constructor(props) {
    super(props);
      
    this.onChange_id = this.onChange_id.bind(this);
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
      avatar:'',
      _id:'',
      users:'',
      UserCorrectAnswersCount:'',
      UserWrongAnswersCount:'',
     
      
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
          _id:response.data._id, 
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
 
    axios.get('/api/users/refuserCount/'+this.props.match.params.id)
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.refuser),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })



      axios.get('/api/Competitions/UserCorrectAnswersCount/'+this.props.match.params.id)
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            UserCorrectAnswersCount: response.data.map(correct => correct.choosenAnswer),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })



      axios.get('/api/Competitions/UserWrongAnswersCount/'+this.props.match.params.id)
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            UserWrongAnswersCount: response.data.map(correct => correct.choosenAnswer),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })





      



      

  }

   


  onChange_id(e) {
    this.setState({
      _id: e.target.value
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
      avatar: this.state.avatar,
    
      
    }
  

    axios.post('/api/users/update/' + this.props.match.params.id, contact)
    .then(res => console.log(res.data));

   window.location = '/';
  }

  render() {
    return (
 
             
<section id="login-reg" >
 
        <div class="row">
       
            <div class="col-lg-12 col-md-12 col-sm-12">
               <div class="form-box">
                   <div class="form-top" style={{backgroundColor:'#363636'}}>
                       <div class="form-top-left">
                          
                       </div>
                       <div class="form-top-right">
                       الملف الشخصي <i class="fa fa-file"></i>
                       </div>
                   </div>
                   <div class="form-bottom" style={{backgroundColor:'#58ACFA'}}>
                   <form role="form" action="" class="login-form"  encType="multipart/form-data" onSubmit={this.onSubmit}> 



                   <div class="input-group form-group"  style={{color:'#000',fontWeight:'bold',float:'right'}}>   
                   <a href={"/Edituser/"+ this.props.match.params.id}
                    style={{color:'#000',fontWeight:'bold',float:'right',marginRight:'15px',marginTop:''}}
                    >
                      <div class='row' style={{marginRight:'10px'}}> 
                      {this.state.name}
                      </div>
                      <div class='row' style={{color:'#FFFF00',marginTop:'10px',marginRight:'15px',fontSize:'25px'}}> 
                     
                      {this.state.users.length >=10000 && (
                        <Fragment> 
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    
                      </Fragment>
                      )}




                     {this.state.users.length >=1000 && (
                        <Fragment> 
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                
                      </Fragment>
                      )}


                    {this.state.users.length >=100 && (
                        <Fragment> 
                      <i class="fas fa-star"></i>
                      
                    
                      </Fragment>
                      )}


                  {this.state.users.length >=10 && (
                        <Fragment> 
                      <i class="fas fa-star"></i>
                    
                    
                      </Fragment>
                      )}
                     
                      </div>
                      

                    </a>
                    <span class="input-group-addon" id="basic-addon1"> 
                    <a href={"/EdituserImg/"+ this.props.match.params.id}
                    style={{color:'#000',fontWeight:'bold',float:'right',marginRight:'',marginTop:''}}
                    >
                    <img width="150" height="150" src= {this.state.avatar}  alt="" />
                    </a>
                    </span>
                    </div>



                    <div class="input-group form-group"  style={{color:'#000',fontWeight:'bold',float:'right'}}>    
                    <input type="hidden" class="form-control" placeholder=" الاسم" aria-describedby="basic-addon1" autocomplete="off"
                     name='name'
                    value={this.state.name}
                    onChange={this.onChangename}
                   />
                   {/* <span class="input-group-addon" id="basic-addon1"> الاسم</span> */}
                   </div>





                   <div class="input-group form-group">    
                    <input class="form-contact"  style={{width:'50%',border:'1px #cacaca',fontSize:'19px',textAlign:'right'}}
                    type="hidden"
                    name='validity'
                    value={this.state.validity}
                    onChange={this.onChangevalidity}
                   />
                  
                  
                   {/* <span class="input-group-addon" id="basic-addon1">الصلاحية</span> */}
                   </div>

                     
                   



                   <div class="input-group form-group" style={{color:'#000',fontWeight:'bold',float:'right'}}>    
                    <input readOnly  type="text" class="form-control" placeholder=" البريد الالكتروني" aria-describedby="basic-addon1" autocomplete="off"
                     name='email'
                    value={this.state.email}
                    onChange={this.onChangeemail}
                    style={{backgroundColor:'#fff',color:'#000',fontWeight:'bold',fontSize:'15px'}}

                   />
                   <span class="input-group-addon" id="basic-addon1"  style={{backgroundColor:'#fff',color:'#000',fontWeight:'bold'}}>البريد الالكتروني</span> 
                   </div>


 


                    
 

                   <div class="input-group form-group" style={{color:'#000',fontWeight:'bold',float:'right'}}>  
                  
                   <span class="input-group-addon" id="basic-addon1" style={{backgroundColor:'#cacaca'}} >
                  <a style={{backgroundColor:'#cacaca',color:'#000',fontWeight:'bold'}}
                   href={"/AnswerTrueCompetitionsForUser/"+ this.props.match.params.id}
                   > عرض الإجابات</a></span> 
  
                    <input readOnly  type="text" class="form-control" placeholder="" aria-describedby="basic-addon1" autocomplete="off"
                     name='UserCorrectAnswersCount'
                    value={this.state.UserCorrectAnswersCount.length}
                   // onChange={this.onChangeemail}
                    style={{backgroundColor:'#fff',color:'#000',fontWeight:'bold',fontSize:'15px'}}

                   />
                  
                   <span class="input-group-addon" id="basic-addon1"  style={{backgroundColor:'#fff',color:'#000',fontWeight:'bold'}}> الإجابات الصحيحة</span> 

                   
                   </div>

 
                   
                   <div class="input-group form-group" style={{color:'#000',fontWeight:'bold',float:'right'}}>    
                   
                   <span class="input-group-addon" id="basic-addon1" style={{backgroundColor:'#cacaca'}} >
                  <a style={{backgroundColor:'#cacaca',color:'#000',fontWeight:'bold'}}
                   href={"/AnswerFalseCompetitionsForUser/"+ this.props.match.params.id}
                   > عرض الإجابات</a></span> 

                    <input readOnly  type="text" class="form-control" placeholder=" " aria-describedby="basic-addon1" autocomplete="off"
                     name='UserWrongAnswersCount'
                    value={this.state.UserWrongAnswersCount.length}
                    //onChange={this.onChangeemail}
                    style={{backgroundColor:'#fff',color:'#000',fontWeight:'bold',fontSize:'15px'}}

                   />
                  
                 <span class="input-group-addon" id="basic-addon1"  style={{backgroundColor:'#fff',color:'#000',fontWeight:'bold'}}> الإجابات الخاطئة</span> 

                   </div>



                   
                   <div class="input-group form-group" style={{color:'#000',fontWeight:'bold',float:'right'}}>    
                    <input readOnly  type="text" class="form-control" placeholder=" البريد الالكتروني" aria-describedby="basic-addon1" autocomplete="off"
                     name='refuser'
                    value={this.state.users.length}
                     
                    onChange={this.onChangeemail}
                    style={{backgroundColor:'#fff',color:'#000',fontWeight:'bold',fontSize:'15px'}}

                   />
                   <span class="input-group-addon" id="basic-addon1"  style={{backgroundColor:'#fff',color:'#000',fontWeight:'bold'}}>  الانضمام عن طريق رابطك</span> 
                   </div>

 

                   <div class="input-group form-group" style={{color:'#fff',fontWeight:'bold',float:'right',fontSize:'13px',paddingBottom:'32px',width:'100%',height:'auto',overflow:'hidden',backgroundColor:''}}>    
                     <a href={`http://localhost:3000/registerbyUserRef/${this.state._id}#/${this.state.name}`} style={{width:'100%',height:'auto',overflow:'hidden'}}>

                 <div style={{color:'#000',fontWeight:'bold',float:'',fontSize:'15px',backgroundColor:'#fff',marginRight:'20px',width:'100%',height:'auto',overflow:'hidden'}}> 
                 {`http://localhost:3000/registerbyUserRef/${this.state._id}#/${this.state.name}`} </div>    


                     </a>

                   <span class="input-group-addon" id="basic-addon1"  style={{backgroundColor:'#fff',color:'#000',fontWeight:'bold'}}>  رابط الدعوة</span> 
                   </div>



                   <div class="input-group form-group">    
                    <input type="hidden" class="form-control" placeholder="كلمة المرور" aria-describedby="basic-addon1" autocomplete="off"
                     name='password'
                    value={this.state.password}
                    onChange={this.onChangepassword}
                   />
                   {/* <span class="input-group-addon" id="basic-addon1">كلمة المرور </span> */}
                   </div>



                  


                   <div class="input-group form-group">    
                    <input type="hidden" class="form-control" placeholder="الصورة" aria-describedby="basic-addon1" autocomplete="off"
                     name='avatar'
                    value={this.state.avatar}
                    onChange={this.onChangeavatar}
                   />
                   {/* <span class="input-group-addon" id="basic-addon1">الصورة</span> */}
                   </div>



                   

                   
 
                    <button    style={{backgroundColor:'#363636'}} type="" class="momadbtn"> </button>
                         
     
 
     </form>
     </div>
     </div>
     </div>
     </div>
     
     </section>

    )
  }
}
