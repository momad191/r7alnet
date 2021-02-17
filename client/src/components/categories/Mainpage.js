import React, { Component ,Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
 
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

export default class Editwebinars extends Component {
  constructor(props) {
    super(props);
     
 
    this.onChangetext = this.onChangetext.bind(this);
    this.onChangebody = this.onChangebody.bind(this);
    this.onChangeimage = this.onChangeimage.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
        text: '',
        body: '',
        image:''
      
    }
  }
  
  componentDidMount() {
    axios.get('/api/categories/')
      .then(response => {
        this.setState({
            text: response.data.text,
            body: response.data.body,
            image: response.data.image
          
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

   

  onChangetext(e) {
    this.setState({
        text: e.target.value
    })
  }

  onChangebody(e) {
    this.setState({
        body: e.target.value
    })
  }
 
 

  onChangeimage(e) {
    this.setState({
      image: e.target.value
    })
  }
 
 
 
  onSubmit(e) {
    e.preventDefault();

    const contact = {
        text: this.state.text,
        body: this.state.body,
        image: this.state.image
    }
   
 
    axios.post('/api/categories/update/'+ this.props.match.params.id, contact)
    .then(res => console.log(res.data));

   window.location = '/categories';
  }

  render() {
    return (
     
<Fragment>
{this.state.text}
<Fragment>
<Link to='/categories' className='btn btn-primary fontnty-font'
      style={{color:'#fff',fontWeight:'bold',float:''}}
      
      >
      <i className='fas fa-backward' /> التصنيفات 
      </Link>
</Fragment>

 

               <section id="login-reg" >
               <div class="row">
               <div class="col-lg-12 col-md-12 col-sm-12">
             

               <div class="form-box">



                   <div class="form-top">
                       <div class="form-top-left">  
                       </div>
                       <div class="form-top-right">
                       تعديل التصنيف   <i class="fa fa-edit"></i>
                       </div>
                   </div>


                   <div class="form-bottom">
                   <form className="login-form" encType="multipart/form-data" onSubmit={this.onSubmit} > 
                  


                    <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='text'  
                    autocomplete="off"
                    value={this.state.text} 
                    onChange={this.onChangetext}
                    />
                    <span class="input-group-addon" id="basic-addon1"><label className="form-label">اسم التصنيف  </label></span>
                    </div>
                    </div>


 




                    <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="input-group form-group">
                    <select  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}} id='Publish'    className=""    name='body' 
                    value={this.state.body} 
                    onChange={this.onChangebody}
                    >
                    <option value="اختر التصنيف">
                      اختر التصنيف
                    </option>
                    <option value="yes" > 
                    مفعل
                    </option>
                    <option value="no">
                    غير مفعل

                    </option>
                      </select>
                    <span class="input-group-addon" id="basic-addon1"><label className="form-label">الحاله  </label></span>
                    </div>
                    </div>


                    <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}} className="form-control" placeholder="" type="text" name='Keywords' 
                      aria-describedby="basic-addon1" autocomplete="off"
                      value={this.state.image} 
                      onChange={this.onChangeimage}
                      />
                    <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة  </label></span>
                    </div>
                    </div>


                    <div className="form-group">
                    <button  type="submit" className="momadbtn">تحديث</button>
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
