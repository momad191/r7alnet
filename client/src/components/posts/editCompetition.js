import React, { Component ,Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
 
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

export default class Editwebinars extends Component {
  constructor(props) {
    super(props);
     
 
    this.onChangemainq = this.onChangemainq.bind(this);

    this.onChangea1 = this.onChangea1.bind(this);
    this.onChangea2 = this.onChangea2.bind(this);
    this.onChangea3 = this.onChangea3.bind(this);
    this.onChangea4 = this.onChangea4.bind(this);

    this.onChangei1 = this.onChangei1.bind(this);
    this.onChangei2 = this.onChangei2.bind(this);
    this.onChangei3 = this.onChangei3.bind(this);
    this.onChangei4 = this.onChangei4.bind(this);


    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      mainq:'',
      a1:'',
      a2:'',
      a3:'',
      a4:'',

      i1:'',
      i2:'',
      i3:'',
      i4:'',
      
    }
  }
   
  componentDidMount() {
    axios.get('/api/Competitions/onequestion/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          mainq: response.data.mainq,

          a1: response.data.a1,
          a2: response.data.a2,
          a3: response.data.a3,
          a4: response.data.a4,

          i1: response.data.i1,
          i2: response.data.i2,
          i3: response.data.i3,
          i4: response.data.i4,
            
          
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

   

  onChangemainq(e) {
    this.setState({
      mainq: e.target.value
    })
  }


  onChangea1(e) {
    this.setState({
      a1: e.target.value
    })
  }


  onChangea2(e) {
    this.setState({
      a2: e.target.value
    })
  }



  onChangea3(e) {
    this.setState({
      a3: e.target.value
    })
  }


  onChangea4(e) {
    this.setState({
      a4: e.target.value
    })
  }



  onChangei1(e) {
    this.setState({
      i1: e.target.value
    })
  }


  onChangei2(e) {
    this.setState({
      i2: e.target.value
    })
  }


  onChangei3(e) {
    this.setState({
      i3: e.target.value
    })
  }


  onChangei4(e) {
    this.setState({
      i4: e.target.value
    })
  }




  
 
  onSubmit(e) {
    e.preventDefault();

    const contact = {
        
      mainq: this.state.mainq,

      a1: this.state.a1,
      a2: this.state.a2,
      a3: this.state.a3,
      a4: this.state.a4,

      i1: this.state.i1,
      i2: this.state.i2,
      i3: this.state.i3,
      i4: this.state.i4,

    }
   
 
    axios.post('/api/Competitions/update/'+ this.props.match.params.id, contact)
    .then(res => console.log(res.data));

   window.location = '/editCompetition/'+ this.props.match.params.id;
  }

  render() {
    return (
    
<Fragment>

{/* <Fragment>
<a href='/posts' className='btn btn-primary fontnty-font'
      style={{color:'#fff',fontWeight:'bold',float:''}}
      
      >
      <i className='fas fa-backward' /> الاسئلة 
      </a>
</Fragment> */}


<h1  style={{width:'100%',color:'#000',fontSize:'19px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control">{this.state.mainq}  </h1>


               <section id="login-reg" >
               <div class="row">
               <div class="col-lg-12 col-md-12 col-sm-12">
             

               <div class="form-box">



                   <div class="form-top"  style={{backgroundColor:'#363636'}}>
                       <div class="form-top-left">  
                       </div>
                       <div class="form-top-right">
                       تعديل سؤال   <i class="fa fa-edit"></i>
                       </div>
                   </div>


                   <div class="form-bottom" style={{backgroundColor:'#58ACFA'}}>
                   <form className="login-form" encType="multipart/form-data" onSubmit={this.onSubmit} > 
                  


                    <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" 
                    name='mainq'  
                    autocomplete="off"
                    value={this.state.mainq} 
                    onChange={this.onChangemainq}
                    />
                    <span class="input-group-addon" id="basic-addon1"><label className="form-label">السؤال  </label></span>
                    </div>
                    </div>





 
                    <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <select  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="" placeholder="" type="text" name='subCategory'  
                    autocomplete="off"
                    value={this.state.i1} 
                    onChange={this.onChangei1}
                    >
                    <option value="">اختر</option>
                    <option value="no">لا</option>
                    <option value="yes">نعم</option>
                    </select>

                    <span class="input-group-addon" id="basic-addon1"
                    style={{backgroundColor:'#000',color:'#fff'}}
                    ><label className="form-label"  >  هل 1 صحيحه    </label></span>
                    </div>
                    </div>


                    <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" 
                    name='a1'  
                    autocomplete="off"
                    value={this.state.a1} 
                    onChange={this.onChangea1}
                    />
                    <span class="input-group-addon" id="basic-addon1"
                     style={{backgroundColor:'#000',color:'#fff'}}
                    ><label className="form-label">الاجابة الاولى  </label></span>
                    </div>
                    </div>






 
                     

                    <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <select  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="" placeholder="" type="text" name='subCategory'  
                    autocomplete="off"
                    value={this.state.i2} 
                    onChange={this.onChangei2}
                    >
                   <option value="">اختر</option>
                    <option value="no">لا</option>
                    <option value="yes">نعم</option>

                    </select>
                    <span class="input-group-addon" id="basic-addon1"
                    style={{backgroundColor:'#000',color:'#fff'}}
                    ><label className="form-label"  >   هل 2 صحيحه   </label></span>
                    </div>
                    </div>




                    <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" 
                    name='a2'  
                    autocomplete="off"
                    value={this.state.a2} 
                    onChange={this.onChangea2}
                    />
                    <span class="input-group-addon" id="basic-addon1"
                     style={{backgroundColor:'#000',color:'#fff'}}
                    ><label className="form-label">الاجابة الثانية   </label></span>
                    </div>
                    </div>




                   





                   

                    <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <select  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="" placeholder="" type="text" name='subCategory'  
                    autocomplete="off"
                    value={this.state.i3} 
                    onChange={this.onChangei3}
                    >

                  
                    <option value="">اختر</option> 
                    <option value="no">لا</option>
                    <option value="yes">نعم</option>

                    
                     </select>
                    <span class="input-group-addon" id="basic-addon1"
                    style={{backgroundColor:'#000',color:'#fff'}}
                    ><label className="form-label"  >  هل 3 صحيحة     </label></span>
                    </div>
                    </div>




                    <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" 
                    name='a3'  
                    autocomplete="off"
                    value={this.state.a3} 
                    onChange={this.onChangea3}
                    />
                    <span class="input-group-addon" id="basic-addon1"
                     style={{backgroundColor:'#000',color:'#fff'}}
                    ><label className="form-label"> الاجابة الثالثة   </label></span>
                    </div>
                    </div>





  

                    <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <select  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="" placeholder="" type="text" name='subCategory'  
                    autocomplete="off"
                    value={this.state.i4} 
                    onChange={this.onChangei4}
                    >

                    <option value="">اختر</option> 
                    <option value="no">لا</option>
                    <option value="yes">نعم</option>
                      </select>
                    <span class="input-group-addon" id="basic-addon1"
                    style={{backgroundColor:'#000',color:'#fff'}}
                    ><label className="form-label"  >   هل 4 صحيحة     </label></span>
                    </div>
                    </div>



                    

                    <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" 
                    name='a4'  
                    autocomplete="off"
                    value={this.state.a4} 
                    onChange={this.onChangea4}
                    />
                    <span class="input-group-addon" id="basic-addon1"
                     style={{backgroundColor:'#000',color:'#fff'}}
                    ><label className="form-label">   لاجابة الرابعة   </label></span>
                    </div>
                    </div>



                  
                    





 

 
                    <div className="form-group">
                    <button 
                     style={{backgroundColor:'#363636'}}
                    type="submit" className="momadbtn">تحديث</button>
                    </div>

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
