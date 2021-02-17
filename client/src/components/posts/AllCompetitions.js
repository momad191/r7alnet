import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
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
   
  <thead class=" text-primary">
  <th class="text-right" style={{fontFamily:'Changa',color:'#fff',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}></th>
  <th class="text-right" style={{fontFamily:'Changa',color:'#fff',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}>السؤال</th>
  <th class="text-right" style={{fontFamily:'Changa',color:'#fff',backgroundColor:'#424242',fontWeight:'bold',float:'',fontSize:'11px'}}>عنوان الموضوع</th>

 </thead>
 
  <tbody style={{borderBottom:'#000'}}>

   <tr>
 
      
   {/* <td >
        <Link to="#" onClick={() => { props.deleteExercise(props.exercise._id) }}  className='btn btn-primary fontnty-font'
        style={{color:'#fff',backgroundColor:'#DF0101',fontWeight:'bold',float:'',fontSize:'14px'}}
       
       > 
        <i className='fas fa-trash' /> الحذف 
       </Link> 
    </td> */}
     
    
     
   {/* <td>
     
       {!auth.loading && user === auth.user._id && (
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

          )}
 
           </td> */}



       <td>

      <a href={`/editCompetition/${props.exercise._id}`} className='btn btn-primary fontnty-font'
      style={{color:'#fff',fontWeight:'bold',float:'',fontSize:'14px'}}
       >
      <i className='fas fa-edit' /> التعديل 
      </a> 
     </td> 
 
    

 {/* <td><p style={{ fontFamily:'Changa' ,color:"#000" , fontSize:"13px", fontWeight:'bold'}} className='post-date '>   <Moment  format='YYYY/MM/DD'>{props.exercise.date}</Moment> </p></td>
 <td><p  style={{ fontFamily:'Changa' ,color:"#000" , fontSize:"13px", fontWeight:'bold'}}  > {props.exercise.name}</p></td>
 <td><p  style={{ fontFamily:'Changa' ,color:"#B40486" , fontSize:"18px", fontWeight:'bold'}} className='post-date '> {props.exercise.body}</p></td> */}
  <td><p  style={{ fontFamily:'Changa' ,color:"#B40486" , fontSize:"18px", fontWeight:'bold'}} className='post-date '> {props.exercise.mainq}</p></td>
 <td>   <h5  style={{fontFamily:'Changa' , fontSize:"18px", fontWeight:'bold',color:'#0101DF'}}>  {props.exercise.articletitle} </h5> </td>

 {/* <td> <div class="portfolio-img"> <img style={{width:'120px',height:'80px'}} alt="" src={props.exercise.image}/></div>   </td> */}
  

 
       

  </tr>
   </tbody>

</Fragment>





)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

//    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {
      exercises: [],
      search:"",
       
     

     

    
    };

    this.handlePageClick = this
            .handlePageClick
            .bind(this);

  }

 
  searchChanged = event => {
    this.setState({ search: event.target.value })
}


handlePageClick = (e) => {
  const selectedPage = e.selected;
  const offset = selectedPage * this.state.perPage;

  this.setState({
      currentPage: selectedPage,
      offset: offset
  }, () => {
      this.receivedData()
  });

};
 
   
   

  componentDidMount() {
    axios.get('/api/Competitions/'+this.props.match.params.id)
      .then(response => {
        this.setState({ exercises: response.data })
 
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
   
  exerciseList() {
    return this.state.exercises


    // .filter(luminaries => luminaries.text.includes(this.state.search))

    .filter(post=>{

      return post.mainq.toLowerCase().indexOf(this.state.search.toLowerCase())>=0

    })
 
    .map(currentexercise => {
      return <Exercise exercise={currentexercise}  deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }







  render() {
    return (
      <div>


           <Link to='/posts' className='btn btn-primary fontnty-font'
            style={{color:'#fff',fontWeight:'bold',float:''}}
            >
            <i className='fas fa-backward' /> رجوع 
            </Link>


          


     


        <h1 
        style={{fontFamily:'Changa',color:'#000',backgroundColor:'',fontWeight:'bold',float:'',fontSize:'22px'}}
        >  أسئلة المسابقة لهذا الموضوع   <i class="fa fa-search"></i> </h1>

      
       
 
             

        <div class="col-lg-12 col-md-12 col-sm-12">
                     
            

                    <Link to={`/AllSubCategories/`+this.props.match.params.id} title="Dashboard" className=''
                    style={{padding:'20px',marginRight:'3px', fontFamily:'Changa',color:'#fff',backgroundColor:'#0040FF',fontWeight:'bold',float:'',fontSize:'13px'}}
                    ><span  
                      >البحث  </span> </Link>


                    

</div>
          




       

              <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="input-group form-group">
              <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text"  
              onChange={this.searchChanged} value={this.state.search}
              autocomplete="off"
              placeholder="السؤال"
              />
              <span class="input-group-addon" id="basic-addon1"><label className="form-label">البحث </label></span>
              </div>
              </div>



          <section id="portfolio">
           <div class="container">
            <div class="row">
            <div class="card-body" style={{width:'100%'}}>
            <div class="table-responsive">
            <table class="table" >

             
               { this.exerciseList() }

            </table>
            </div>
            </div>
            </div>
            </div>
            </section>




      </div>
      
    )
  }
}
 