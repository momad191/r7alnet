import React, { Component ,Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { addLike, removeLike, deletePost } from '../../actions/post';
 
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

export default class Editwebinars extends Component {
  constructor(props) {
    super(props);
     
   

    this.onChangetitle = this.onChangetitle.bind(this);
    this.onChangePublish = this.onChangePublish.bind(this);
    this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
    this.onChangeCategoryid = this.onChangeCategoryid.bind(this);

    this.onChangeSubName = this.onChangeSubName.bind(this);
    this.onChangeSubid = this.onChangeSubid.bind(this);

    
    this.onChangevideo = this.onChangevideo.bind(this);
    this.onChangeKeywords = this.onChangeKeywords.bind(this);
    this.onChangeshort = this.onChangeshort.bind(this);
    this.onChangeMain_paragraph = this.onChangeMain_paragraph.bind(this);
    this.onChangeimage = this.onChangeimage.bind(this);
    this.onChangeid = this.onChangeid.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangelikes = this.onChangelikes.bind(this);
    this.onChangecomments = this.onChangecomments.bind(this);

    

    

    this.onSubmit = this.onSubmit.bind(this);
  
    this.state = {
      _id:'',
      name:'',
      title: '',
      Publish: '',
      CategoryName: '',
      Categoryid: '',
      SubName:'',
      Subid:'',
      video: '',
      Keywords:'',
      short:'',
      Main_paragraph:'',
      image:'',
      likes:'',
      comments:'',

      exercises: [],
      exercises11 : [],
      
     
      
    }
  }
   
  componentDidMount() {
    axios.get('/api/posts/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          _id: response.data._id,
          name: response.data.name,
          title: response.data.title,
          Publish: response.data.Publish,
          CategoryName: response.data.CategoryName,
          Categoryid: response.data.Categoryid,

          SubName: response.data.SubName,
          Subid: response.data.Subid,

          video: response.data.video,
          Keywords: response.data.Keywords,
          short: response.data.short,
          Main_paragraph: response.data.Main_paragraph,
          image: response.data.image,
          likes: response.data.likes,
          comments : response.data.comments,

          
          
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    
       
      axios.get('/api/categories/')
      .then(response => {
        this.setState({ exercises11: response.data })

      })
      .catch((error) => {
        console.log(error);
      })



      axios.get('/api/categories/sumsub')
      .then(response => {
        this.setState({ exercises: response.data })

      })
      .catch((error) => {
        console.log(error);
      })


  }


  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
 
   

  onChangecomments(e) {
    this.setState({
      comments: e.target.value
    })
  }


  onChangelikes(e) {
    this.setState({
      likes: e.target.value
    })
  }


  onChangeid(e) {
    this.setState({
      _id: e.target.value
    })
  }

  onChangename(e) {
    this.setState({
      name: e.target.value
    })
  }


  onChangetitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangePublish(e) {
    this.setState({
      Publish: e.target.value
    })
  }

  onChangeCategoryName(e) {
    this.setState({
      CategoryName: e.target.value
    })
  }

  onChangeCategoryid(e) {
    this.setState({
      Categoryid: e.target.value
    })
  }

  onChangeSubName(e) {
    this.setState({
      SubName: e.target.value
    })
  }

  onChangeSubid(e) {
    this.setState({
      Subid: e.target.value
    })
  }



  onChangevideo(e) {
    this.setState({
      video: e.target.value
    })
  }


  onChangeKeywords(e) {
    this.setState({
      Keywords: e.target.value
    })
  }


  onChangeshort(e) {
    this.setState({
      short: e.target.value
    })
  }


  onChangeMain_paragraph(e) {
    this.setState({
      Main_paragraph: e.target.value
    })
  }

  onChangeimage(e) {
    this.setState({
      image: e.target.value
    })
  }
 
 
 
  onSubmit(e,id) {
    e.preventDefault();

    const contact = {
      // title: this.state.title,
      // Publish: this.state.Publish,
      // CategoryName: this.state.CategoryName,
      // Categoryid: this.state.Categoryid,

      // SubName: this.state.SubName,
      // Subid: this.state.Subid,

      // video: this.state.video,
      // Keywords: this.state.Keywords,
      // short: this.state.short,
      // Main_paragraph: this.state.Main_paragraph,
      // image: this.state.image,
      
      // comments: this.state.comments,
      // name: this.state.name
      likes: this.state.likes

      
    }
    
  
    axios.put('/api/posts/like/'+this.state._id, contact)
    .then(res => console.log(res.data));

   window.location = '/posts';
  }




  exerciseList1() {
    return this.state.exercises11
    .map(currentexercise => {
       return <option value= {currentexercise.text}>
                       {currentexercise.text}
                      </option>
    })
  }

  exerciseList2() {
    return this.state.exercises11
    .map(currentexercise => {
       return <option value= {currentexercise._id}>
                       {currentexercise.text}
                      </option>
    })
  }


  exerciseList3() {
    return this.state.exercises
    .map(currentexercise => {
       return <option value= {currentexercise.subCategory}>
                       {currentexercise.subCategory}
                      </option>
    })
  }




  exerciseList4() {
    return this.state.exercises
    .map(currentexercise => {
       return <option value= {currentexercise._id}>
                       {currentexercise.subCategory}
                      </option>
    })
  }



  render() {

    return (
     
      
    <section id="portfolio">
    <div class="row">  
<Fragment>

 


<div class="col-xs-12 col-sm-8 col-md-8 col-lg-10 portfolio-item" style={{float:'right',height:'auto',borderRadius:'0%'}}>
<div class="portfolio-one-details" style={{height:'auto'}}>
<div class="portfolio-content-article1" style={{height:'auto' ,borderRadius:'0%'}}>
<h1 style={{fontFamily:'Markazi Text',fontSize:'50px',textAlign:'right',fontWeight:'bold',color:'#000'}} >  {this.state.title} </h1>


<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
<Fragment>
<p style={{fontFamily:' ', color:'#000',fontWeight:'bold'}}>
       
       <span>

       <a className='btn btn-success'
        href={`https://www.facebook.com/sharer/sharer.php?u=momad.com/Topic/${this.state._id}`} target="_blank"
        style={{ width:'auto', cursor: '' ,color:'#fff',backgroundColor:'#1876f2',fontWeight:'bold',fontSize:'22px',fontFamily:'Markazi Text',textAlign:'center',marginTop:'2px' ,borderColor:'#cacaca',borderRadius:'5%'}}
        > <i  style={{fontSize:'20px'}} className='fa fa-facebook' /> شارك بالفيسبوك</a>
 
       <a className='btn btn-success'
       href="#"  
        style={{ width:'auto', cursor: '' ,color:'#fff',backgroundColor:'#19a0f2',fontWeight:'bold',fontSize:'22px',fontFamily:'Markazi Text',textAlign:'center',marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'5%'}}

       ><i  style={{fontSize:'20px'}} class="fa fa-twitter"></i> شارك بتويتر</a>




   <Link className='btn btn-success'
       to={`/posts/${this.state._id}`}  
        style={{ width:'auto', cursor: '' ,color:'#000',backgroundColor:'#ECB22E',fontWeight:'bold',fontSize:'22px',fontFamily:'Markazi Text',textAlign:'center',marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'5%'}}

       ><i  style={{fontSize:'20px'}} class="fa fa-comments"></i>أضف تعليق  {this.state.comments.length > 0 && (
        <span className='comment-count'>({this.state.comments.length})</span>
      )}</Link>

      
       </span>
       </p> 

       
     </Fragment>
     </div>





       
  
<div class="portfolio-img-article1">  <img alt="" src={this.state.image}/></div>                    

</div>


 
<div class="portfolio-content-wide ">
         
        <p style={{fontFamily:'Changa', color:'#000',fontSize:'13px',fontWeight:'bold'}}>
        {this.state.Main_paragraph}          		
        </p>
        
       

      

     

        
{/* <p  style={{ fontFamily:'Changa' ,color:"#000" , fontSize:"13px", fontWeight:'bold'}} className='post-date '>
          نشر بتاريخ <Moment  format='YYYY/MM/DD'>{this.state.date}</Moment>
        </p>
        <p style={{fontFamily:'Changa', color:'#0431B4',fontWeight:'bold'}}>الكاتب:<span>{this.state.name}</span></p> */}

       

      
    
          </div>
  
   


 
<Fragment>
   



   
<p style={{fontFamily:' ', color:'#000',fontWeight:'bold'}}>
       
       <span>

       <a className='btn btn-success'
        href={`https://www.facebook.com/sharer/sharer.php?u=momad.com/Topic/${this.state._id}`} target="_blank"
        style={{ width:'auto', cursor: '' ,color:'#fff',backgroundColor:'#1876f2',fontWeight:'bold',fontSize:'22px',fontFamily:'Markazi Text',textAlign:'center',marginTop:'2px' ,borderColor:'#cacaca',borderRadius:'5%'}}
        > <i  style={{fontSize:'20px'}} className='fa fa-facebook' /> شارك بالفيسبوك</a>
 
       <a className='btn btn-success'
       href="#"  
        style={{ width:'auto', cursor: '' ,color:'#fff',backgroundColor:'#19a0f2',fontWeight:'bold',fontSize:'22px',fontFamily:'Markazi Text',textAlign:'center',marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'5%'}}

       ><i  style={{fontSize:'20px'}} class="fa fa-twitter"></i> شارك بتويتر</a>




   <a className='btn btn-success'
       href={`/posts/${this.state._id}`}  
        style={{ width:'auto', cursor: '' ,color:'#000',backgroundColor:'#ECB22E',fontWeight:'bold',fontSize:'22px',fontFamily:'Markazi Text',textAlign:'center',marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'5%'}}

       ><i  style={{fontSize:'20px'}} class="fa fa-comments"></i>أضف تعليق  {this.state.comments.length > 0 && (
        <span className='comment-count'>{this.state.comments.length}</span>
      )}</a>

      
       </span>
       </p> 




 
    {/* <a href={`/posts/${this.state._id}`} 
    // to={`/posts/${this.state._id}`} 
     onClick={() => addLike(this.state._id)}
    
    type='button'
  
    style={{ padding:'4px 10px', cursor: '' ,color:'#000',backgroundColor:'#cacaca',fontWeight:'bold',fontSize:'19px',fontFamily:'',textAlign:'center', marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'8%',marginLeft:''}}

  >  
    <i  style={{fontSize:'20px'}} className='far fa-grin-alt'/>  
   
   {this.state.likes.length > 0 && (
     <span className='comment-count'>{this.state.likes.length}</span>
   )}
   
  </a>   


 
  <a href={`/posts/${this.state._id}`} 
    // onClick={() => removeLike(_id)}
    type='button'
  
    style={{ padding:'4px 10px', cursor: '' ,color:'#000',backgroundColor:'#cacaca',fontWeight:'bold',fontSize:'19px',fontFamily:'',textAlign:'center', marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'8%',marginLeft:''}}

  >  
   <i  style={{fontSize:'20px'}} className='fa fa-frown'/>
    
  </a>  


  <a href={`/posts/${this.state._id}`} 
  style={{ padding:'4px 10px', cursor: '' ,color:'#2D6FCD',backgroundColor:'#cacaca',fontWeight:'bold',fontSize:'19px',fontFamily:'',textAlign:'center', marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'8%'}}
  >
  <i  style={{fontSize:'20px'}} className='fa fa-comments'/>   {' '}
    {this.state.comments.length > 0 && (
      <span className='comment-count'>{this.state.comments.length}</span>
    )}
  </a>  */}

 
  {/* {!auth.loading && user === auth.user._id && (
    // <button
    //   onClick={() => deletePost(_id)}
    //   type='button'
    //   className='btn btn-danger'
    // >
    //   <i className='fas fa-times' />
    // </button>

    <ConfirmButton
    dialog={["", "Are You Sure?", "Once more to delete"]}
    action={() => deletePost(_id)}
    />

  )} */}
  
</Fragment>
</div>
</div>



 

</Fragment>
</div>
</section>



    )
  }
}
