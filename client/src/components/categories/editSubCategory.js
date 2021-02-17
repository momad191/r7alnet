import React, { Component ,Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
 
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

export default class Editwebinars extends Component {
  constructor(props) {
    super(props);
     
 
    this.onChangesubCategory = this.onChangesubCategory.bind(this);
 

    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      subCategory: '',
       
      
    }
  }
  
  componentDidMount() {
    axios.get('/api/categories/sub2/'+this.props.match.params.id)
      .then(response => {
        this.setState({
            mainCategoryID: response.data.mainCategoryID,
            mainCategoryName: response.data.mainCategoryName,
            subCategory: response.data.subCategory
          
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

   

  onChangesubCategory(e) {
    this.setState({
      subCategory: e.target.value
    })
  }

 
 
  onSubmit(e) {
    e.preventDefault();

    const contact = {
        
      subCategory: this.state.subCategory
    }
   
 
    axios.post('/api/categories/sub/update/'+ this.props.match.params.id, contact)
    .then(res => console.log(res.data));

   window.location = '/categories';
  }

  render() {
    return (
    
<Fragment>

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
                       تعديل التصنيف الفرعي   <i class="fa fa-edit"></i>
                       </div>
                   </div>


                   <div class="form-bottom">
                   <form className="login-form" encType="multipart/form-data" onSubmit={this.onSubmit} > 
                  


                    <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" 
                    name='subCategory'  
                    autocomplete="off"
                    value={this.state.subCategory} 
                    onChange={this.onChangesubCategory}
                    />
                    <span class="input-group-addon" id="basic-addon1"><label className="form-label">اسم التصنيف  </label></span>
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
