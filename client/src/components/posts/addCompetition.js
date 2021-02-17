import React, { Component ,Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
 
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

export default class Editwebinars extends Component {
  constructor(props) {
    super(props);
     
    this.onChangetitle = this.onChangetitle.bind(this);
    this.onChangeid = this.onChangeid.bind(this);

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
        title: '',
        _id: '',

        mainq:'',
         a1:'',
         a2:'',
         a3:'',
         a4:'',

         i1:'',
         i2:'',
         i3:'',
         i4:'',

         articletitle:'',
         articleid:'',

      
    }
  }
  
  componentDidMount() {
    axios.get('/api/posts/'+this.props.match.params.id)
      .then(response => {
        this.setState({

          
            _id: response.data._id,
            title: response.data.title,
         
          
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

  
  onChangeid(e) {
    this.setState({
      _id: e.target.value
    })
  }

 
  onChangetitle(e) {
    this.setState({
        title: e.target.value
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

      articleid: this.state._id,
      articletitle: this.state.title,
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
     
 
    axios.post('/api/competitions/addquestion/'+this.props.match.params.id, contact)
    .then(res => console.log(res.data));

   window.location = '/AllCompetitions/'+this.props.match.params.id;
  }
 
  render() {
    return (
    
<Fragment>

<Fragment>
<Link to='/posts' className='btn btn-primary fontnty-font'
      style={{color:'#fff',fontWeight:'bold',float:''}}
      
      >
      <i className='fas fa-backward' /> المنشورات 
      </Link>
</Fragment>

 

               <section id="login-reg" >
               <div class="row">
               <div class="col-lg-12 col-md-12 col-sm-12">
             

               <div class="form-box">



                   <div class="form-top"  style={{backgroundColor:'#363636'}}>
                       <div class="form-top-left">  
                       </div>
                       <div class="form-top-right">
                        سؤال المسابقة <i class="fa fa-plus"></i>
                       </div>
                   </div>
 
 
                   <div class="form-bottom"  style={{backgroundColor:'#58ACFA'}}>
                   <form className="login-form" encType="multipart/form-data" onSubmit={this.onSubmit} > 
                  
  




                   <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <input  readOnly style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='subCategory'  
                    autocomplete="off"
                    value={this.state._id} 
                    onChange={this.onChangeid}
                    />
                    <span class="input-group-addon" id="basic-addon1"><label className="form-label">رقم الموضوع   </label></span>
                    </div>
                    </div>

 

                    <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <input readOnly  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='text'  
                    autocomplete="off"
                    
                    value={this.state.title} 
                    onChange={this.onChangetitle}
                    />
                    <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الموضوع  </label></span>
                    </div>
                    </div>




                    <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='subCategory'  
                    autocomplete="off"
                    value={this.state.mainq} 
                    onChange={this.onChangemainq}
                    />
                    <span class="input-group-addon" id="basic-addon1"><label className="form-label">السؤال ؟   </label></span>
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
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='subCategory'  
                    autocomplete="off"
                    value={this.state.a1} 
                    onChange={this.onChangea1}
                    />
                    <span class="input-group-addon" id="basic-addon1"
                    style={{backgroundColor:'#000',color:'#fff'}}
                    ><label className="form-label"  >  الاجابة 1   </label></span>
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
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='subCategory'  
                    autocomplete="off"
                    value={this.state.a2} 
                    onChange={this.onChangea2}
                    />
                    <span class="input-group-addon" id="basic-addon1"
                    style={{backgroundColor:'#000',color:'#fff'}}
                    ><label className="form-label"  >  الاجابة 2   </label></span>
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
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='subCategory'  
                    autocomplete="off"
                    value={this.state.a3} 
                    onChange={this.onChangea3}
                    />
                    <span class="input-group-addon" id="basic-addon1"
                    style={{backgroundColor:'#000',color:'#fff'}}
                    ><label className="form-label"  >  الاجابة 3   </label></span>
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
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='subCategory'  
                    autocomplete="off"
                    value={this.state.a4} 
                    onChange={this.onChangea4}
                    />
                    <span class="input-group-addon" id="basic-addon1"
                    style={{backgroundColor:'#000',color:'#fff'}}
                    ><label className="form-label"  >     الاجابة 4       </label></span>
                    </div>
                    </div>


                 



                    





                   

 

                    <div className="form-group">
                    <button 
                    style={{backgroundColor:'#363636'}}
                    type="submit" className="momadbtn"><i className='fas fa-plus' /> اضف</button>
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
