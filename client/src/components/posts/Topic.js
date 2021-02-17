import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import test from './googleads.jpg';
import moment from 'moment';
import 'moment/locale/ar';
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
                            <a href={`/Topic/${props.exercise._id}`} >
                            <img alt="" src={props.exercise.image} /></a></div>

                           

                             
                        </div>
                        <div className="portfolio-content">
                          <div class=" col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{float:'right',marginBottom:'0px'}}>
                            <center> 

                            <a  href={`/posts/${props.exercise._id}#/${props.exercise.body}`}   className='btn btn-success fontnty-font'
                             style={{ padding:'4px 8px', cursor: '' ,color:'#000',backgroundColor:'#cacaca',fontWeight:'bold',fontSize:'13px',fontFamily:'',textAlign:'center', marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'8%'}}
                            >
                             <i  style={{fontSize:'13px'}} className='fas fa-thumbs-up'/> {''}
                             {props.exercise.likes.length} 
                            </a>

                            
 

                            <a  href={`/posts/${props.exercise._id}#/${props.exercise.body}`}   className='btn btn-success fontnty-font'
                             style={{ padding:'4px 8px', cursor: '' ,color:'#2D6FCD',backgroundColor:'#cacaca',fontWeight:'bold',fontSize:'13px',fontFamily:'',textAlign:'center', marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'8%'}}
                             >
                             <i  style={{fontSize:'13px'}} className='fa fa-comments'/>{''}
                             {props.exercise.comments.length} 
                            </a>
                             

                             
                             

                            <a href={`/posts/${props.exercise._id}#/${props.exercise.body}`}  className='btn btn-success fontnty-font'
                             style={{ padding:'4px 10px', cursor: '' ,color:'#000',backgroundColor:'#fff',fontWeight:'bold',fontSize:'13px',fontFamily:'',textAlign:'center', marginTop:'5px' ,borderColor:'#fff',borderRadius:'1%'}}
                             >
                             <i  style={{fontSize:'15px'}} className='fa fa-calendar'/>
                             
                             
                             {/* { moment(props.exercise.date).calendar()}      */}

                             {
                              
                             moment(props.exercise.date).startOf('minut').fromNow()}   

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
    //this.onClick = this.onClick.bind(this);
    // this.deleteExercise = this.deleteExercise.bind(this)
    this.onChangetitle = this.onChangetitle.bind(this);
    this.onChangebody = this.onChangebody.bind(this);
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
    this.loadMore = this.loadMore.bind(this);

    
 

    this.state = {
      exercises:[],
      exercises11:[],
      Social:[],
      search:"",
      todos: ['a','b','c','d','e','f','g','h','i','j','k'],
      currentPage: 1,
      todosPerPage:50,
      NewsLetter: '',
      msgSuccessful:'',
      hideform:false,
      visible:15,


      _id:'',
      name:'',
      title: '',
      body:'',
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


      title1:'',
      title2:'',
      title3:'',
      title4:'',
      title5:'',
      title6:'',
      title7:'',
      title8:'',
      title9:'',
      title10:'',
      title11:'',
      title12:'',
      title13:'',
      title14:'',
      title15:'',
      title16:'',
      title17:'',
      title18:'',
      title19:'',
      title20:'',
      title21:'',
      title22:'',
      title23:'',
      title24:'',
      title25:'',
      title26:'',
      title27:'',
      title28:'',
      title29:'',
      title30:'',


      Paragraph1:'',
      Paragraph2:'',
      Paragraph3:'',
      Paragraph4:'',
      Paragraph5:'',
      Paragraph6:'',
      Paragraph7:'',
      Paragraph8:'',
      Paragraph9:'',
      Paragraph10:'',
      Paragraph11:'',
      Paragraph12:'',
      Paragraph13:'',
      Paragraph14:'',
      Paragraph15:'',
      Paragraph16:'',
      Paragraph17:'',
      Paragraph18:'',
      Paragraph19:'',
      Paragraph20:'',
      Paragraph21:'',
      Paragraph22:'',
      Paragraph23:'',
      Paragraph24:'',
      Paragraph25:'',
      Paragraph26:'',
      Paragraph27:'',
      Paragraph28:'',
      Paragraph29:'',
      Paragraph30:'',


      pic1:'',
      pic2:'',
      pic3:'',
      pic4:'',
      pic5:'',
      pic6:'',
      pic7:'',
      pic8:'',
      pic9:'',
      pic10:'',
      pic11:'',
      pic12:'',
      pic13:'',
      pic14:'',
      pic15:'',
      pic16:'',
      pic17:'',
      pic18:'',
      pic19:'',
      pic20:'',
      pic21:'',
      pic22:'',
      pic23:'',
      pic24:'',
      pic25:'',
      pic26:'',
      pic27:'',
      pic28:'',
      pic29:'',
      pic30:'',



      
      link1 : '',
      link2 : '',
      link3 : '',
      link4 : '',
      link5 : '',
      link6 : '',
      link7 : '',
      link8 : '',
      link9 : '',
      link10 : '',
      link11 : '',
      link12 : '',
      link13 : '',
      link14 : '',
      link15 : '',
      link16 : '',
      link17 : '',
      link18 : '',
      link19 : '',
      link20 : '',
      link21 : '',
      link22 : '',
      link23 : '',
      link24 : '',
      link25 : '',
      link26 : '',
      link27 : '',
      link28 : '',
      link29 : '',
      link30 : '',



      
      lt1 : '',
      lt2 : '',
      lt3 : '',
      lt4 : '',
      lt5 : '',
      lt6 : '',
      lt7 : '',
      lt8 : '',
      lt9 : '',
      lt10 : '',
      lt11 : '',
      lt12 : '',
      lt13 : '',
      lt14 : '',
      lt15 : '',
      lt16 : '',
      lt17 : '',
      lt18 : '',
      lt19 : '',
      lt20 : '',
      lt21 : '',
      lt22 : '',
      lt23 : '',
      lt24 : '',
      lt25 : '', 
      lt26 : '',
      lt27 : '',
      lt28 : '',
      lt29 : '',
      lt30 : '',





       
 
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


onChangebody(e) {
  this.setState({
    body: e.target.value
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



    
   
 
  componentDidMount() {

 
    axios.get('/api/posts/'+this.props.match.params.id)
    .then(response => {
      this.setState({
        _id: response.data._id,
        name: response.data.name,
        title: response.data.title,
        body: response.data.body,
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

        title1 : response.data.title1,
        title2 : response.data.title2,
        title3 : response.data.title3,
        title4 : response.data.title4,
        title5 : response.data.title5,
        title6 : response.data.title6,
        title7 : response.data.title7,
        title8 : response.data.title8,
        title9 : response.data.title9,
        title10 : response.data.title10,
        title11 : response.data.title11,
        title12 : response.data.title12,
        title13 : response.data.title13,
        title14 : response.data.title14,
        title15 : response.data.title15,
        title16 : response.data.title16,
        title17 : response.data.title17,
        title18 : response.data.title18,
        title19 : response.data.title19,
        title20 : response.data.title20,
        title21 : response.data.title21,
        title22 : response.data.title22,
        title23 : response.data.title23,
        title24 : response.data.title24,
        title25 : response.data.title25,
        title26 : response.data.title26,
        title27 : response.data.title27,
        title28 : response.data.title28,
        title29 : response.data.title29,
        title30 : response.data.title30,


        Paragraph1 : response.data.Paragraph1,
        Paragraph2 : response.data.Paragraph2,
        Paragraph3 : response.data.Paragraph3,
        Paragraph4 : response.data.Paragraph4,
        Paragraph5 : response.data.Paragraph5,
        Paragraph6 : response.data.Paragraph6,
        Paragraph7 : response.data.Paragraph7,
        Paragraph8 : response.data.Paragraph8,
        Paragraph9 : response.data.Paragraph9,
        Paragraph10 : response.data.Paragraph10,
        Paragraph11 : response.data.Paragraph11,
        Paragraph12 : response.data.Paragraph12,
        Paragraph13 : response.data.Paragraph13,
        Paragraph14 : response.data.Paragraph14,
        Paragraph15 : response.data.Paragraph15,
        Paragraph16 : response.data.Paragraph16,
        Paragraph17 : response.data.Paragraph17,
        Paragraph18 : response.data.Paragraph18,
        Paragraph19 : response.data.Paragraph19,
        Paragraph20 : response.data.Paragraph20,
        Paragraph21 : response.data.Paragraph21,
        Paragraph22 : response.data.Paragraph22,
        Paragraph23 : response.data.Paragraph23,
        Paragraph24 : response.data.Paragraph24,
        Paragraph25 : response.data.Paragraph25,
        Paragraph26 : response.data.Paragraph26,
        Paragraph27 : response.data.Paragraph27,
        Paragraph28 : response.data.Paragraph28,
        Paragraph29 : response.data.Paragraph29,
        Paragraph30 : response.data.Paragraph30,


        pic1 : response.data.pic1,
        pic2 : response.data.pic2,
        pic3 : response.data.pic3,
        pic4 : response.data.pic4,
        pic5 : response.data.pic5,
        pic6 : response.data.pic6,
        pic7 : response.data.pic7,
        pic8 : response.data.pic8,
        pic9 : response.data.pic9,
        pic10 : response.data.pic10,
        pic11 : response.data.pic11,
        pic12 : response.data.pic12,
        pic13 : response.data.pic13,
        pic14 : response.data.pic14,
        pic15 : response.data.pic15,
        pic16 : response.data.pic16,
        pic17 : response.data.pic17,
        pic18 : response.data.pic18,
        pic19 : response.data.pic19,
        pic20 : response.data.pic20,
        pic21 : response.data.pic21,
        pic22 : response.data.pic22,
        pic23 : response.data.pic23,
        pic24 : response.data.pic24,
        pic25 : response.data.pic25,
        pic26 : response.data.pic26,
        pic27 : response.data.pic27,
        pic28 : response.data.pic28,
        pic29 : response.data.pic29,
        pic30 : response.data.pic30,


        link1 : response.data.link1,
        link2 : response.data.link2,
        link3 : response.data.link3,
        link4 : response.data.link4,
        link5 : response.data.link5,
        link6 : response.data.link6,
        link7 : response.data.link7,
        link8 : response.data.link8,
        link9 : response.data.link9,
        link10 : response.data.link10,
        link11 : response.data.link11,
        link12 : response.data.link12,
        link13 : response.data.link13,
        link14 : response.data.link14,
        link15 : response.data.link15,
        link16 : response.data.link16,
        link17 : response.data.link17,
        link18 : response.data.link18,
        link19 : response.data.link19,
        link20 : response.data.link20,
        link21 : response.data.link21,
        link22 : response.data.link22,
        link23 : response.data.link23,
        link24 : response.data.link24,
        link25 : response.data.link25,
        link26 : response.data.link26,
        link27 : response.data.link27,
        link28 : response.data.link28,
        link29 : response.data.link29,
        link30 : response.data.link30,


        lt1 : response.data.lt1,
        lt2 : response.data.lt2,
        lt3 : response.data.lt3,
        lt4 : response.data.lt4,
        lt5 : response.data.lt5,
        lt6 : response.data.lt6,
        lt7 : response.data.lt7,
        lt8 : response.data.lt8,
        lt9 : response.data.lt9,
        lt10 : response.data.lt10,
        lt11 : response.data.lt11,
        lt12 : response.data.lt12,
        lt13 : response.data.lt13,
        lt14 : response.data.lt14,
        lt15 : response.data.lt15,
        lt16 : response.data.lt16,
        lt17 : response.data.lt17,
        lt18 : response.data.lt18,
        lt19 : response.data.lt19,
        lt20 : response.data.lt20,
        lt21 : response.data.lt21,
        lt22 : response.data.lt22,
        lt23 : response.data.lt23,
        lt24 : response.data.lt24,
        lt25 : response.data.lt25,
        lt26 : response.data.lt26,
        lt27 : response.data.lt27,
        lt28 : response.data.lt28,
        lt29 : response.data.lt29,
        lt30 : response.data.lt30,









         
        
      })   
    })
    .catch(function (error) {
      console.log(error);
    })


    axios.get('/api/posts/topics')
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


  // exerciseList11() {
  //   return this.state.exercises11
  //   .map(currentexercise => {
  //   return (
  //                     <h1
  //                     style={{fontFamily:'Markazi Text', fontSize:'60px',fontWeight:'bold',color:'#000',float:'right',marginRight:'25px'}}
  //                      >  {currentexercise.text}    </h1> 
  //                      )
  //   })
  // }


 
  Social() {
    return this.state.Social
    .map(currentSocial => {
    return (

      <Fragment> 
      {currentSocial.title && (  
                       
     <div class="portfolio-one" style={{ backgroundColor:'#58ACFA'}}>
       <p
    style={{ color:'#fff',backgroundColor:'#363636',fontWeight:'normal',fontSize:'24px',fontFamily:'Markazi Text',textAlign:'center',padding:'10px'}}
     >  كن على تواصل </p>  
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

                )
    })
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
    // const indexOfLastTodo = currentPage * todosPerPage;
    // const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    // const currentTodos = exercises.slice(indexOfFirstTodo, indexOfLastTodo);
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
     <title>{this.state.title}</title>    
    <meta name="description" content= {this.state.short}  />
    <meta name="keywords" content={this.state.Keywords} />
    <meta name="author" content={this.state.name}/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <meta property="og:site_name" content='رحـــال '/>
    <meta property="og:title" content={this.state.title}/>
    <meta property="og:description" content={this.state.short}/>
    <meta property="og:image" content={this.state.image}/>
    <meta property="og:url" content= {`http://localhost:3000/Topic/${this.state._id}#/${this.state.body}`}/>

    <meta name="twitter:title" content={this.state.title}/>
    <meta name="twitter:description" content={this.state.short}/>
    <meta name="twitter:image" content={this.state.image}/>
    <meta name="twitter:card" content= {this.state.image} /> 
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
    {/* { this.exerciseList11() } */}
    </div>

  {/* -----------------------------   -------------------------------------------------------- */}

 
       

  {/* -----------------------------منطقة اعلانات -------------------------------------------------------- */}
     <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 portfolio-item" style={{float:'left'}}>


     { this.Social() }
 





      {/* -----------------------هنا ادسنس للربح ان شاء الله ----------------اعلان قوقل ادسنس -------------------------------------------------------- */}
 


      {/* <div class="portfolio-one" style={{ height:'auto',backgroundColor:'#fff'}}>
          <div class="portfolio-content"style={{height:'auto',paddingRight:'10px',paddingLeft:'10px'}}>

          <div class="portfolio-img" style={{height:'auto'}}>
            <h1 style={{fontSize:'17px',fontFamily:'Markazi Text',fontWeight:'bold'}} >إعلان</h1>
             <a href="#" >
           <img style={{height:'auto'}} alt="" src={test} /></a></div> 


          </div>
          </div> */}

     {/* ---------------------------------------اعلان قوقل ادسنس -------------------------------------------------------- */}






    {/* <div class="portfolio-one" style={{ backgroundColor:'#AB3E3A'}}>
    <form className="login-form"  onSubmit={this.onSubmit}>
   
    {this.state.hideform === false ? (
     <div class="portfolio-content"style={{height:'230px',paddingRight:'10px',paddingLeft:'10px'}}>
     <h1
    style={{ color:'#000',backgroundColor:'',fontWeight:'bold',fontSize:'24px',fontFamily:'Markazi Text',textAlign:'center'}}
     >  النشرة البريدية  </h1>   

     <h1
    style={{ direction:'rtl', color:'#fff',backgroundColor:'',fontWeight:'normal',fontSize:'19px',fontFamily:'Markazi Text',textAlign:'center'}}
     >  اشترك في إشعاراتنا الأسبوعية
     حتى لا تفوتك أروع مقالاتنا.
      </h1>  


      <h1
    style={{ direction:'rtl', color:'#fff',backgroundColor:'',fontWeight:'normal',fontSize:'18px',fontFamily:'Markazi Text',textAlign:'center'}}
     >   
      ادخل بريدك الالكتروني
      </h1>
  
      

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
         </div> */}
         
 
          </div>
				 


     {/* -----------------------------  منطقة الخبر المحدد لللقراءة  -------------------------------------------------------- */}
     

           
     
<Fragment>

 


<div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 portfolio-item" style={{float:'right',height:'auto',borderRadius:'0%'}}>
<div class="portfolio-one-details" style={{height:'auto'}}>
<div class="portfolio-content-article1" style={{height:'auto' ,borderRadius:'0%'}}>
<h1 style={{fontFamily:'Markazi Text',fontSize:'50px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} >  {this.state.title} </h1>


<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
<Fragment>
<p style={{fontFamily:' ', color:'#000',fontWeight:'bold'}}>
       
       <span>

       <a className='btn btn-success'
     href={`https://www.facebook.com/sharer/sharer.php?title=${this.state.title}&u=https://r7al.net/Topic/${this.state._id}&description=${this.state.short}&picture=${this.state.image}`} 

        style={{ width:'auto', cursor: '' ,color:'#fff',backgroundColor:'#1876f2',fontWeight:'bold',fontSize:'22px',fontFamily:'Markazi Text',textAlign:'center',marginTop:'2px' ,borderColor:'#cacaca',borderRadius:'5%'}}
        > <i  style={{fontSize:'20px'}} className='fa fa-facebook' /> شارك بالفيسبوك</a>
 
       <a className='btn btn-success'
       href={`https://twitter.com/intent/tweet?text=${this.state.title}&url=https://r7al.net/Topic/${this.state._id}`} 
 
        style={{ width:'auto', cursor: '' ,color:'#fff',backgroundColor:'#19a0f2',fontWeight:'bold',fontSize:'22px',fontFamily:'Markazi Text',textAlign:'center',marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'5%'}}

       ><i  style={{fontSize:'20px'}} class="fa fa-twitter"></i> شارك بتويتر</a>




   <Link className='btn btn-success'
       to={`/posts/${this.state._id}#/${this.state.body}`}  
        style={{ width:'auto', cursor: '' ,color:'#000',backgroundColor:'#ECB22E',fontWeight:'bold',fontSize:'22px',fontFamily:'Markazi Text',textAlign:'center',marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'5%'}}

       ><i  style={{fontSize:'20px'}} class="fa fa-comments"></i>أضف تعليق  {this.state.comments.length > 0 && (
        <span className='comment-count'>({this.state.comments.length})</span>
      )}</Link>

 

<a className='btn btn-success'
       href={`/answerCompetitions/${this.state._id}#/${this.state.body}`}  
        style={{ width:'auto', cursor: '' ,color:'#fff',backgroundColor:'#8A0886',fontWeight:'bold',fontSize:'22px',fontFamily:'Markazi Text',textAlign:'center',marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'5%'}}

       ><i  style={{fontSize:'20px'}} class="fa fa-question"></i>المسابقة  {this.state.comments.length > 0 && (
        <span className='comment-count'>({this.state.comments.length})</span>
      )}
      </a>

      
       </span>
       </p> 

       
     </Fragment>
     </div>





       
  
<div class="portfolio-img-article1">  <img alt={this.state.title} src={this.state.image} style={{width:'100%'}}/></div>                    

</div>

 
  
<div class="portfolio-content-wide ">

<div class="portfolio-hover11">
    
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'19px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl',marginBottom:'20px'}}>
      {this.state.Main_paragraph}          		
      </p>
       


      {this.state.title1 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'19px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title1} </h1>
      )}

       {this.state.pic1 && (
      <img alt={this.state.title1}
      src={this.state.pic1} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {this.state.Paragraph1 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'19px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph1}          		
      </p>
      )}


      {this.state.link1 && (
      <p> 
       <a href={this.state.link1}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt1}</a>
       </p>
      )}



       {this.state.title2 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title2} </h1>
       )}

       {this.state.pic2 && (
      <img alt={this.state.title2} 
      src={this.state.pic2} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {this.state.Paragraph2 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph2}          		
      </p>
      )}

      {this.state.link2 && (
       <p>
      <a href={this.state.link2}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt2}</a>
       </p>
      )}




       {this.state.title3 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title3} </h1>
       )}

       {this.state.pic3 && (
      <img alt={this.state.title3} 
      src={this.state.pic3} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {this.state.Paragraph3 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph3}          		
      </p>
      )}


      {this.state.link3 && (
      <p>
      <a href={this.state.link3}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt3}</a>
       </p>
      )}



       {this.state.title4 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title4} </h1>
       )}

       {this.state.pic4 && (
      <img alt={this.state.title4}
      src={this.state.pic4} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}


{this.state.Paragraph4 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph4}          		
      </p>
)}


      {this.state.link4 && (
      <p>
      <a href={this.state.link4}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt4}</a>
       </p>
      )}





       {this.state.title5 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title5} </h1>
       )}

       {this.state.pic5 && (
      <img alt={this.state.title5}
      src={this.state.pic5} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}


      {this.state.Paragraph5 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph5}          		
      </p>
        )}

      {this.state.link5 && (
      <p>
      <a href={this.state.link5}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt5}</a>
       </p>
      )}





       {this.state.title6 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title6} </h1>
       )}

       {this.state.pic6 && (
      <img alt={this.state.title6}
      src={this.state.pic6} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}


      {this.state.Paragraph6 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph6}          		
      </p>
      )}


      {this.state.link6 && (
      <p>
      <a href={this.state.link6}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt6}</a>
       </p>
      )}



       {this.state.title7 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title7} </h1>
       )}



       {this.state.pic7 && (
      <img alt={this.state.title7}
      src={this.state.pic7} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}


      {this.state.Paragraph7 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph7}          		
      </p>
      )}


      {this.state.link7 && (
      <p>
      <a href={this.state.link7}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt7}</a>
       </p>
      )}




       {this.state.title8 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title8} </h1>
       )}

       {this.state.pic8 && (
      <img alt={this.state.title8} 
      src={this.state.pic8} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {this.state.Paragraph8 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph8}          		
      </p>
      )}


      {this.state.link8 && (
      <p>
      <a href={this.state.link8}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt8}</a>
       </p>
      )}




       {this.state.title9 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title9} </h1>
       )}

       {this.state.pic9 && (
      <img alt={this.state.title9} 
      src={this.state.pic9} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {this.state.Paragraph9 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph9}          		
      </p>
      )}


      {this.state.link9 && (
      <p>
      <a href={this.state.link9}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt9}</a>
       </p>
      )}




       {this.state.title10 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title10} </h1>
       )}

       {this.state.pic10 && (
      <img alt={this.state.title10}
      src={this.state.pic10} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}


      {this.state.Paragraph10 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph10}          		
      </p>
      )}


      {this.state.link10 && (
      <p>
      <a href={this.state.link10}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt10}</a>
       </p>
      )}





       {this.state.title11 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title11} </h1>
       )}


       {this.state.pic11 && (
      <img alt={this.state.title11} 
      src={this.state.pic11} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}


      {this.state.Paragraph11 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph11}          		
      </p>
      )}

      {this.state.link11 && (
      <p>
      <a href={this.state.link11}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt11}</a>
       </p>
      )}



       {this.state.title12 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title12} </h1>
       )}

       {this.state.pic12 && (
      <img alt={this.state.title12}
      src={this.state.pic12} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {this.state.Paragraph12 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph12}          		
      </p>
      )}


      {this.state.link12 && (
      <p>
      <a href={this.state.link12}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt12}</a>
       </p>
      )}



       {this.state.title13 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title13} </h1>
       )}

       {this.state.pic13 && (
      <img alt={this.state.title13} 
      src={this.state.pic13} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}


      {this.state.Paragraph13 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph13}          		
      </p>
       )}

      {this.state.link13 && (
      <p>
      <a href={this.state.link13}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt13}</a>
       </p>
      )}






       {this.state.title14 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title14} </h1>
       )}


       {this.state.pic14 && (
      <img alt={this.state.title14}
      src={this.state.pic14} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}


      {this.state.Paragraph14 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph14}          		
      </p>
        )}

      {this.state.link14 && (
      <p>
      <a href={this.state.link14}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt14}</a>
       </p>
      )}



        
       {this.state.title15 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title15} </h1>
       )}

       {this.state.pic15 && (
      <img alt={this.state.title15} 
      src={this.state.pic15} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}


      {this.state.Paragraph15 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph15}          		
      </p>
        )}


      {this.state.link15 && (
      <p>
      <a href={this.state.link15}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt15}</a>
       </p>
      )}





       {this.state.title16 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title16} </h1>
       )}

       {this.state.pic16 && (
      <img alt={this.state.title16}
      src={this.state.pic16} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}


      {this.state.Paragraph16 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph16}          		
      </p>
      )}

      {this.state.link16 && (
      <p>
      <a href={this.state.link16}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt16}</a>
       </p>
      )}




       {this.state.title17 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title17} </h1>
       )}


       {this.state.pic17 && (
      <img alt={this.state.title17} 
      src={this.state.pic17} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}


      {this.state.Paragraph17 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph17}          		
      </p>
      )}


      {this.state.link17 && (
      <p>
      <a href={this.state.link17}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt17}</a>
       </p>
      )}




       {this.state.title18 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title18} </h1>
       )}


       {this.state.pic18 && (
      <img alt={this.state.title18}
      src={this.state.pic18} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {this.state.Paragraph18 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph18}          		
      </p>
      )}

      {this.state.link18 && (
      <p>
      <a href={this.state.link18}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt18}</a>
       </p>
      )}




       {this.state.pic19 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title19} </h1>
       )}


       {this.state.pic19 && (
      <img alt={this.state.title19}
      src={this.state.pic19} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}


      {this.state.Paragraph19 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph19}          		
      </p>
      )}


      {this.state.link19 && (
      <p>
      <a href={this.state.link19}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt19}</a>
       </p>
      )}




       {this.state.title20 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title20} </h1>
       )}

       {this.state.pic20 && (
      <img alt={this.state.title20} 
      src={this.state.pic20} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}


      {this.state.Paragraph20 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph20}          		
      </p>
      )}


      {this.state.link20 && (
      <p>
      <a href={this.state.link20}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt20}</a>
       </p>
      )}




       {this.state.title21 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title21} </h1>
       )}

       {this.state.pic21 && (
      <img alt={this.state.title21}
      src={this.state.pic21} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {this.state.Paragraph21 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph21}          		
      </p>
      )}


      {this.state.link21 && (
      <p>
      <a href={this.state.link21}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt21}</a>
       </p>
      )}





       {this.state.title22 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title22} </h1>
       )}

       {this.state.pic22 && (
      <img alt={this.state.titl22}
      src={this.state.pic22} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}


      {this.state.Paragraph22 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph22}          		
      </p>
      )}


      {this.state.link22 && (
      <p>
      <a href={this.state.link22}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt22}</a>
       </p>
      )}





       {this.state.title23 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title23} </h1>
       )}

       {this.state.pic23 && (
      <img alt={this.state.title23} 
      src={this.state.pic23} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {this.state.Paragraph23 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph23}          		
      </p>
      )}


      {this.state.link23 && (
      <p>
      <a href={this.state.link23}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt23}</a>
       </p>
      )}



       {this.state.title24 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title24} </h1>
       )}

       {this.state.pic24 && (
      <img alt={this.state.title24} 
      src={this.state.pic24} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {this.state.Paragraph24 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph24}          		
      </p>
      )}


      {this.state.link24 && (
      <p>
      <a href={this.state.link24}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt24}</a>
       </p>
      )}




       {this.state.title25 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title25} </h1>
       )}


       {this.state.pic25 && (
      <img alt={this.state.title25} 
      src={this.state.pic25} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}


      {this.state.Paragraph25 && (
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph25}          		
      </p>
      )}


      {this.state.link25 && (
      <p>
      <a href={this.state.link25}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt25}</a>
       </p>
      )}




       {this.state.title26 &&(
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title26} </h1>
       )}

       {this.state.pic26 &&(
      <img alt={this.state.title26} 
      src={this.state.pic26} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}


      {this.state.Paragraph26  &&(
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph26}          		
      </p>
      )}


      {this.state.link26 &&(
      <p>
      <a href={this.state.link26}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt26}</a>
       </p>
      )}




       {this.state.title27 &&(
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title27} </h1>
       )}

       {this.state.pic27 &&(
      <img alt={this.state.title27}
      src={this.state.pic27} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {this.state.Paragraph27 &&(
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph27}          		
      </p>
      )}

      {this.state.link27 &&(
      <p>
      <a href={this.state.link27}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt27}</a>
       </p>
      )}




       {this.state.title28 &&(
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title28} </h1>
       )}


       {this.state.pic28 &&(
      <img alt={this.state.title28} 
      src={this.state.pic28} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}


      {this.state.Paragraph28 &&(
            <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
            {this.state.Paragraph28}          		
            </p>
      )}

      {this.state.link28 &&(
      <p>
      <a href={this.state.link28}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt28}</a>
       </p>
      )}






       {this.state.title29 &&(
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title29} </h1>
       )}

       {this.state.pic29 &&(
      <img alt={this.state.title29}
      src={this.state.pic29} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

 
      {this.state.Paragraph29 &&(
      <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {this.state.Paragraph29}          		
      </p>
        )}

      {this.state.link29 &&(
      <p>
      <a href={this.state.link29}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt29}</a>
       </p>
        )}


 


       {this.state.title30 &&(
      <h1 style={{fontFamily:'Markazi Text',fontSize:'25px',textAlign:'center',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {this.state.title30} </h1>
       )}
       {this.state.pic30 &&(
      <img alt={this.state.title30}
      src={this.state.pic30} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {this.state.Paragraph30 &&(
            <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'18px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl'}}>
            {this.state.Paragraph30}          		
            </p>
      )}

      {this.state.link30 &&(
      <p>
      <a href={this.state.link30}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt30}</a>
       </p>

      )}


{this.state.link30 &&(
      <p>
      <a href={this.state.link30}
       style={{float:'',fontsize:'20px',fontWeight:'bold',color:'blue',fontFamily:'Markazi Text'}}
       > {this.state.lt30}</a>
       </p>

      )}



{this.state.video &&(
       <iframe width="100%" height="615"
       src={`https://www.youtube.com/embed/${this.state.video}`}>
       </iframe>
       

      )}
     
        
       

      

     

        
{/* <p  style={{ fontFamily:'Changa' ,color:"#000" , fontSize:"13px", fontWeight:'bold'}} className='post-date '>
          نشر بتاريخ <Moment  format='YYYY/MM/DD'>{this.state.date}</Moment>
        </p>
        <p style={{fontFamily:'Changa', color:'#0431B4',fontWeight:'bold'}}>الكاتب:<span>{this.state.name}</span></p> */}

       

      
    
          </div>
  
   


 
<Fragment>
   

 

   
<p style={{fontFamily:' ', color:'#000',fontWeight:'bold'}}>
       
       <span>

       <a className='btn btn-success'
        href={`https://www.facebook.com/sharer/sharer.php?title=${this.state.title}&u=https://r7al.net/Topic/${this.state._id}&description=${this.state.short}&picture=${this.state.image}`} 
        
         
       
        style={{ width:'auto', cursor: '' ,color:'#fff',backgroundColor:'#1876f2',fontWeight:'bold',fontSize:'22px',fontFamily:'Markazi Text',textAlign:'center',marginTop:'2px' ,borderColor:'#cacaca',borderRadius:'5%'}}
        > <i  style={{fontSize:'20px'}} className='fa fa-facebook' /> شارك بالفيسبوك</a>
 
       <a className='btn btn-success'

        href={`https://twitter.com/intent/tweet?text=${this.state.title}&url=https://r7al.net/Topic/${this.state._id}`} 
 

        style={{ width:'auto', cursor: '' ,color:'#fff',backgroundColor:'#19a0f2',fontWeight:'bold',fontSize:'22px',fontFamily:'Markazi Text',textAlign:'center',marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'5%'}}

       ><i  style={{fontSize:'20px'}} class="fa fa-twitter"></i> شارك بتويتر</a>




   <a className='btn btn-success'
       href={`/posts/${this.state._id}#/${this.state.body}`}  
        style={{ width:'auto', cursor: '' ,color:'#000',backgroundColor:'#ECB22E',fontWeight:'bold',fontSize:'22px',fontFamily:'Markazi Text',textAlign:'center',marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'5%'}}

       ><i  style={{fontSize:'20px'}} class="fa fa-comments"></i>أضف تعليق  {this.state.comments.length > 0 && (
        <span className='comment-count'>{this.state.comments.length}</span>
      )}</a>




      
<a className='btn btn-success'
       href={`/answerCompetitions/${this.state._id}#/${this.state.body}`}  
        style={{ width:'auto', cursor: '' ,color:'#fff',backgroundColor:'#8A0886',fontWeight:'bold',fontSize:'22px',fontFamily:'Markazi Text',textAlign:'center',marginTop:'5px' ,borderColor:'#cacaca',borderRadius:'5%'}}

       ><i  style={{fontSize:'20px'}} class="fa fa-question"></i>  المسابقة  {this.state.comments.length > 0 && (
        <span className='comment-count'>({this.state.comments.length})</span>
      )}
      </a>

      
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
</div>



 

</Fragment>
 


  {/* ----------------------------- نهاية منطقة الخبر المحدد  -------------------------------------------------------- */}

         
          
     
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
 