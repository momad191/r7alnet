import React, { Component ,Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
 
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

export default class Editwebinars extends Component {
  constructor(props) {
    super(props);
     
    
    this.onChangemainCategoryID = this.onChangemainCategoryID.bind(this);
    this.onChangemainCategoryName = this.onChangemainCategoryName.bind(this);

    this.onChangesubCategory = this.onChangesubCategory.bind(this);

 
    this.onChangetext = this.onChangetext.bind(this);
    this.onChangebody = this.onChangebody.bind(this);
    this.onChangeimage = this.onChangeimage.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {

      mainCategoryID:'',
      mainCategoryName:'',
      subCategory:'',
        text: '',
        body: '',
        image:'',
        _id: '',
      
    }
  }
  
  componentDidMount() {
    axios.get('/api/categories/'+this.props.match.params.id)
      .then(response => {
        this.setState({

          
            _id: response.data._id,
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

  
  onChangeid(e) {
    this.setState({
      _id: e.target.value
    })
  }

  onChangemainCategoryID(e) {
    this.setState({
      mainCategoryID: e.target.value
    })
  }

  onChangemainCategoryName(e) {
    this.setState({
      mainCategoryName: e.target.value
    })
  }


  onChangesubCategory(e) {
    this.setState({
      subCategory: e.target.value
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

        mainCategoryID: this.state._id,
        mainCategoryName: this.state.text,
        subCategory: this.state.subCategory,
      
    }
   
 
    axios.post('/api/categories/subcategory/'+this.props.match.params.id, contact)
    .then(res => console.log(res.data));

   window.location = '/AllSubCategories/'+this.props.match.params.id;
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
                       إضافة تصنيف فرعي    <i class="fa fa-plus"></i>
                       </div>
                   </div>
 
 
                   <div class="form-bottom">
                   <form className="login-form" encType="multipart/form-data" onSubmit={this.onSubmit} > 
                  
 

                    <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <input readOnly  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='text'  
                    autocomplete="off"
                    
                    value={this.state.text} 
                    onChange={this.onChangetext}
                    />
                    <span class="input-group-addon" id="basic-addon1"><label className="form-label">اسم التصنيف  </label></span>
                    </div>
                    </div>


                    {/* <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='mainCategoryName'  
                    autocomplete="off"
                    value={this.state.mainCategoryID} 
                    onChange={this.onChangemainCategoryID}
                    />
                    <span class="input-group-addon" id="basic-addon1"><label className="form-label">اساسي   </label></span>
                    </div>
                    </div>  */}



                    





                    <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='subCategory'  
                    autocomplete="off"
                    value={this.state.subCategory} 
                    onChange={this.onChangesubCategory}
                    />
                    <span class="input-group-addon" id="basic-addon1"><label className="form-label">اسم الفرعي الجديد   </label></span>
                    </div>
                    </div>

 

                    <div className="form-group">
                    <button  type="submit" className="momadbtn"><i className='fas fa-plus' /> اضف</button>
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
