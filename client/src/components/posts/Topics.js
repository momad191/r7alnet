import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment/locale/ar';
import test from './googleads.jpg';
import {Helmet} from "react-helmet";

 
 
// import { addLike, removeLike, deletePost } from '../../actions/post';
//import Spinner from '../layout/Spinner';
//import './App.css';
   
     const inputTextStyle ={
      display: 'block',
      width: '60%',
      fontsize: '13px',
      lineheight: '1.82857143',
      color: '#000',
      borderradius: '10px',
      background: '#C5D5D5',
      marginright:'0px',
      height:'35px',
      border: '0.5px solid #09CAD3'
     }

 

const Exercise = props => (

<Fragment>
  
{/* <div class="col-xs-12 col-sm-12 col-md-8 col-lg-4 portfolio-item" style={{float:'right'}} > */}
<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item" style={{float:'right'}} >

  
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <div class="portfolio-img">
                            <a href={`/Topic/${props.exercise._id}#/${props.exercise.body}`} >
                            <img alt="" src={props.exercise.image} /></a></div>        
                        </div>

                        <div className="portfolio-content">
                          <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{float:'right',marginBottom:'0px'}}>
                            <center> 
                             <Link  to={`/posts/${props.exercise._id}`}   className='btn btn-success fontnty-font'
                             style={{ padding:'4px 8px', cursor: '' ,color:'#000',backgroundColor:'#cacaca',fontWeight:'bold',fontSize:'13px',fontFamily:'',textAlign:'center', marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'8%'}}
                            >
                             <i  style={{fontSize:'13px'}} className='fas fa-thumbs-up'/> {''}
                             {props.exercise.likes.length} 
                            </Link>

                            
 

                            <Link to={`/posts/${props.exercise._id}`}  className='btn btn-success fontnty-font'
                             style={{ padding:'4px 8px', cursor: '' ,color:'#2D6FCD',backgroundColor:'#cacaca',fontWeight:'bold',fontSize:'13px',fontFamily:'',textAlign:'center', marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'8%'}}
                             >
                             <i  style={{fontSize:'13px'}} className='fa fa-comments'/>{''}
                             {props.exercise.comments.length} 
                            </Link>

 

                            <a href={`/Topic/${props.exercise._id}#/${props.exercise.body}`}  className='btn btn-success fontnty-font'
                             style={{ padding:'4px 10px', cursor: '' ,color:'#000',backgroundColor:'#fff',fontWeight:'bold',fontSize:'13px',fontFamily:'',textAlign:'center', marginTop:'5px' ,borderColor:'#fff',borderRadius:'1%'}}
                             >
                             <i  style={{fontSize:'15px'}} className='fa fa-calendar'/>
                             
                             
                             {/* { moment(props.exercise.date).calendar()}      */}

                             {moment(props.exercise.date).startOf('minut').fromNow()}   

                            </a>
                            


 
                            </center>

                            </div> 

 
                             <a href={`/Topic/${props.exercise._id}#/${props.exercise.body}`}  
                             style={{fontFamily:'Markazi Text', fontSize:'19px',fontWeight:'bold',color:'#000',textAlign:'right',float:'right',padding:'5px'}}
                             >  {props.exercise.title} </a>

                           

							  {/* <p style={{fontFamily:'Markazi Text', fontSize:'19px',fontWeight:'bold',color:'#453453'}} >الكاتب:<span>{props.exercise.name}</span></p> */}
							 
							 {/* <p>
							 مشاركة الموضوع:
							 <span>
							 <a href="#"><i class="fa fa-facebook"></i></a>
							 <a href="#"><i class="fa fa-twitter"></i></a>
							 <a href="#"><i class="fa fa-instagram"></i></a>
							 <a href="#"><i class="fa fa-envelope"></i></a>
							 <a href="#"><i class="fa fa-linkedin"></i></a>
							 <a href="#"><i class="fa fa-google"></i></a>
							 <a href="#"><i class="fa fa-whatsapp"></i></a>
							 </span>
							 </p> */}



                 {/* <p style={{fontFamily:'Markazi Text', fontSize:'19px',fontWeight:'bold',color:'#cac0011'}}>
                  {props.exercise.short}
			     		  </p> */}
							 
							
							{/* <a href={`/posts/${props.exercise._id}`} style={{fontFamily:'Markazi Text', fontSize:'19px',fontWeight:'bold',color:'#4B76FF'}}
              > <i class="fa fa-caret-left"></i> اقرأ المزيد</a> */}
                     
                     
                        </div>
						 
                       
                    </div>
               
                </div>
				
  
   

</Fragment>



)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.onChangeNewsLetter = this.onChangeNewsLetter.bind(this);
    this.onChangeLikes = this.onChangeLikes.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.loadMore = this.loadMore.bind(this);
    // this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {
      exercises:[],
      exercises11:[],
      Social:[],
      search:"",
      todos: ['a','b','c','d','e','f','g','h','i','j','k'],
      currentPage: 1,
      todosPerPage:100,
      likes:'',
      id:'',
      NewsLetter: '',
      msgSuccessful:'',
      hideform:false,
      visible:15

       
 
    };

   

  }

 
  onChangeLikes(e) {
    this.setState({
      likes: e.target.value
    })
  }


  onChangeNewsLetter(e) {
    this.setState({
      NewsLetter: e.target.value
    })
  }

  searchChanged = event => {
    this.setState({ search: event.target.value })
}


handleClick(event) {
  this.setState({
    currentPage: Number(event.target.id)
  });
}

    
   

  componentDidMount() {
    axios.get('/api/posts/topics11/'+this.props.match.params.id)
      .then(response => {
        this.setState({ exercises: response.data })
  
      })
      .catch((error) => {
        console.log(error);
      })
 

      axios.get('/api/categories/nave/'+this.props.match.params.id)
      .then(response => {
        this.setState({ exercises11: response.data })

      })
      .catch((error) => {
        console.log(error);
      })



      axios.get('/api/posts/Social')
      .then(response => {
        this.setState({ Social: response.data })

      })
      .catch((error) => {
        console.log(error);
      })


  }

  // deleteExercise(id) {
  //   axios.delete('/api/categories/'+id)
  //     .then(response => { console.log(response.data)});

  //   this.setState({
  //     exercises: this.state.exercises.filter(el => el._id !== id)
  //   })
  // }
   
  // exerciseList() {
  //   return this.state.exercises


  //   // .filter(luminaries => luminaries.text.includes(this.state.search))

  //   .filter(post=>{

  //     return post.SubName.toLowerCase().indexOf(this.state.search.toLowerCase())>=0

  //   })
 
  //   .map(currentexercise => {
  //     return <Exercise exercise={currentexercise}  deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
  //   })
  // }

  exerciseList11() {
    return this.state.exercises11
    .map(currentexercise => {
    return (
                      <h1
                      style={{fontFamily:'Markazi Text', fontSize:'30px',fontWeight:'bold',color:'#000',float:'right',marginRight:'25px'}}
                       >  {currentexercise.text}    </h1> 
               )
    })
  }

  

  Social() {
    return this.state.Social
    .map(currentSocial => {
    return (
 
      <Fragment> 
      {currentSocial.title && (                
     <div class="portfolio-one" style={{ backgroundColor:'#58ACFA'}}>
       <p
    style={{ color:'#fff',backgroundColor:'#363636',fontWeight:'normal',fontSize:'24px',fontFamily:'Markazi Text',textAlign:'center',padding:'10px'}}
     > كن على تواصل</p> 

     {/* <h1
    style={{ color:'#fff',backgroundColor:'',fontWeight:'bold',fontSize:'24px',fontFamily:'Markazi Text',textAlign:'center'}}
     > !انضم إلينا</h1>      */}
     <div class="portfolio-content" style={{height:'120px'}}>
     <center> 
<div className="row"> 
 
   


{currentSocial.Paragraph1 && (
     <a href={currentSocial.Paragraph1} className='btn btn-success fontnty-font'
      style={{ width:'40%', cursor: '' ,color:'#0040FF',backgroundColor:'#fff',fontWeight:'bold',fontSize:'13px',fontFamily:'',textAlign:'center',marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'0%'}}
      >
      <i  style={{fontSize:'19px'}} className='fa fa-facebook' />
      </a>
      )}
     
      </div>


      {currentSocial.Paragraph2 && (
      <a href={currentSocial.Paragraph2} className='btn btn-success fontnty-font'
      style={{ padding:'5px 30px', cursor: '' ,color:'#4381DA',backgroundColor:'#fff',fontWeight:'bold',fontSize:'19px',fontFamily:'',textAlign:'center',marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'0%'}}
      >
      <i  style={{fontSize:'19px'}} className='fa fa-twitter' />
      </a>
      )}

    {currentSocial.Paragraph3 && (
      <a href={currentSocial.Paragraph3} className='btn btn-success fontnty-font'
      style={{ padding:'5px 30px', cursor: '' ,color:'#DF0101',backgroundColor:'#fff',fontWeight:'bold',fontSize:'19px',fontFamily:'',textAlign:'center', marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'0%'}}
      >
      <i  style={{fontSize:'19px'}} className='fa fa-youtube-play' />
      </a>
       )}
 


      {currentSocial.Paragraph4 && (
      <a href={currentSocial.Paragraph4} className='btn btn-success fontnty-font'
      style={{ padding:'5px 30px', cursor: '' ,color:'#000',backgroundColor:'#fff',fontWeight:'bold',fontSize:'19px',fontFamily:'',textAlign:'center',marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'0%'}}
      >
      <i  style={{fontSize:'19px'}} className='fa fa-instagram' />
      </a>
      )}

      </center>
    
  
      </div>    
    </div>

     )}
</Fragment>
     )}

                )
     
  }


  onSubmit(e) {
    e.preventDefault();
    const contact = { email: this.state.NewsLetter,}
    axios.post('/api/contact/',contact)
    .then(res => console.log(res.data));

    this.setState({
      NewsLetter: "",
      msgSuccessful:"شكرا لاشتراكك بالقائمة البريدية ",
      hideform :true
    })
   //window.location = '/posts';

   
  }
 
   
   
  loadMore() {
    this.setState({
      visible:this.state.visible+10
    })
  }


  render() {

 
    const { exercises, currentPage, todosPerPage,visible } = this.state;

    // Logic for displaying todos
    //const indexOfLastTodo = currentPage * todosPerPage;
    //const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = exercises.slice(0,visible);
 
    const renderTodos =   currentTodos
    .filter(post=>{

      return post.title.toLowerCase().indexOf(this.state.search.toLowerCase())>=0

    })
 
    .map(currentexercise => {
      return <Exercise exercise={currentexercise}  deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
     
    

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(exercises.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
 
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <Link  className="page-link" 
          style={{width :'auto' ,padding:'5px', background:'#656565',float:'right' ,color:'#fff' , fontSize:'13px',fontWeight:'bold',marginRight:'5px',alignContent:'right'  }}
         key={number} id={number} onClick={this.handleClick} >  {number} </Link>
      );
    });
 
  
 
    return (
<Fragment> 
<Helmet>
    
    <meta charSet="utf-8" />
     <title> موقع رحـال للسفر والسياحة والرحلات  واستكشاف اشهر المعالم حول العالم</title>    
    <meta name="description" content="موقع رحـال للسفر والسياحة والرحلات  واستكشاف اشهر المعالم حول العالم"  />
    <meta name="keywords" content= "سياحة,معالم سياحية,أماكن سياحية,أماكن,مطاعم,فنادق,أسواق,مناظر طبيعية,حدائق," />
    <meta name="author" content= "MOMAD"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <meta property="og:title" content="موقع رحـال للسفر والسياحة والرحلات  واستكشاف اشهر المعالم حول العالم" />
    <meta property="og:description" content="موقع رحـال للسفر والسياحة والرحلات  واستكشاف اشهر المعالم حول العالم"  />
    <meta property="og:image" content=""/>
    <meta property="og:url" content=""/>


    <meta name="twitter:title" content="موقع رحـال للسفر والسياحة والرحلات  واستكشاف اشهر المعالم حول العالم"  />
    <meta name="twitter:description" content="موقع رحـال للسفر والسياحة والرحلات  واستكشاف اشهر المعالم حول العالم"  />
    <meta name="twitter:image" content=""/>
    <meta name="twitter:card" content= "" /> 
    <meta name="twitter:site" content="@r7al"/>

    {/* <meta property="https://r7al.net" content="https://r7al.net" /> */}

 


      
   </Helmet>

 
    {/* <Fragment> 
          
                

              <div class="col-lg-4 col-md-12 col-sm-12" style={{float:'right'}}>
              <div class="input-group form-group">
              <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text"  
              onChange={this.searchChanged} value={this.state.search}
              autocomplete="off"
              placeholder="البحث"
              />
              <span class="input-group-addon" id="basic-addon1"><label className="form-label">البحث </label></span>
              </div>
              </div>
              </Fragment> */}


 
                 
    <section id="portfolio">
     
    <div class="row"> </div>
    <div class="row">

    <div class="row">
    { this.exerciseList11() }
    </div>

  {/* -----------------------------   -------------------------------------------------------- */}


     

  {/* -----------------------------منطقة اعلانات -------------------------------------------------------- */}
     <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 portfolio-item" style={{float:'left'}}>

     { this.Social() }




         {/* --------------------هنا ادسنس للربح ان شاء الله-------------------اعلان قوقل ادسنس -------------------------------------------------------- */}



         {/* <div class="portfolio-one" style={{ height:'auto',backgroundColor:'#fff'}}>
          <div class="portfolio-content"style={{height:'auto',paddingRight:'10px',paddingLeft:'10px'}}>

          <div class="portfolio-img" style={{height:'auto'}}>
            <h1 style={{fontSize:'17px',fontFamily:'Markazi Text',fontWeight:'bold'}} >إعلان</h1>
             <a href="#" >
           <img style={{height:'auto'}} alt="" src={test} /></a></div> 


          </div>
          </div> */}

     {/* ---------------------------------------اعلان قوقل ادسنس -------------------------------------------------------- */}





  
    <div class="portfolio-one" style={{ backgroundColor:'#58ACFA'}}>
    <p
    style={{ color:'#fff',backgroundColor:'#363636',fontWeight:'normal',fontSize:'24px',fontFamily:'Markazi Text',textAlign:'center',padding:'10px'}}
     >  النشرة البريدية </p>
      <form className="login-form"  onSubmit={this.onSubmit}>  
    {this.state.hideform === false ? (
     <div class="portfolio-content"style={{height:'200px',paddingRight:'10px',paddingLeft:'10px'}}>
      

     <p
    style={{ direction:'rtl', color:'#000',backgroundColor:'',fontWeight:'bold',fontSize:'19px',fontFamily:'Markazi Text',textAlign:'center'}}
     >  اشترك في إشعاراتنا الأسبوعية
     حتى لا تفوتك أروع مقالاتنا.
      </p>  


      <p
    style={{ direction:'rtl', color:'#000',backgroundColor:'',fontWeight:'bold',fontSize:'18px',fontFamily:'Markazi Text',textAlign:'center'}}
     >   
      ادخل بريدك الالكتروني
      </p>
  
      

     <div class="col-lg-12 col-md-12 col-sm-12">
       <div class="row"> 
       
   <div class="input-group form-group">
 
   <input  style={{width:'100%',height:'60px',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" 
   type="email"
    name='NewsLetter'    
     autocomplete="off"
     value={this.state.NewsLetter} 
     onChange={this.onChangeNewsLetter}
     />
   <span class="input-group-addon" id="basic-addon1"><label className="form-label"> 
   
   <button type="submit"
       style={{width:'40px',height:'40px',color:'#000',fontSize:'12px',fontWeight:'bold'}}
       > <center> <i style={{fontSize:'22px'}} className='fas fa-angle-right' /> </center> </button>

<i class="fas fa-arrow-alt-square-right"></i>
    
    </label></span>
    
   </div>
  
  
       
   </div>
   
   </div>

  
  
    

    
     </div>   
      ):(
    <p
    style={{ direction:'rtl', color:'#fff',backgroundColor:'',fontWeight:'normal',fontSize:'18px',fontFamily:'Markazi Text',textAlign:'center'}}
    >{this.state.msgSuccessful}</p>
   ) }
     </form> 
         </div>
        
         




 
          </div>
				 
         


     
     
     
          {renderTodos}     

     
 
{/* ----------------------------- نهاية استعراض الاخبار -------------------------------------------------------- */}
 
  

     

</div>

      {this.state.visible < this.state.exercises.length && (
        <button className='momadbtn'
        style={{backgroundColor:'#363636',fontSize:'22px',fontFamily:'Markazi Text',fontWeight:'normal',width:'100%',float:'right',marginLeft:'10px',direction:'rtl'}}
        onClick={this.loadMore}>المزيد .... </button>
      )}


{/* <div className="row" style={{float:'right'}} dir="rtl">  {renderPageNumbers} </div> */}
</section>
</Fragment> 

 

       
    )
  }
}
 