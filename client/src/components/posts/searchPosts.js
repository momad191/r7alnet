import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
//import Spinner from '../layout/Spinner';
//import './App.css';
 
// const thStyle =
//     { 
//          background:'#cacaca',
//          verticalalign: 'middle',
//          fontweight: '600',
//          color:'#000',
//          textalign:'center',
//          border: '1px solid #000'
//      }

//      const tdStyle = {
//       background:'#FAFAFA',
//       verticalAlign: 'middle',
//       fontWeight: 'bold',
//       color:'#000',
//       textAlign:'center'
//       //border: "0.5px solid #000"

//      }

     const inputTextStyle ={
      display: 'block',
      width: '60%',
      fontsize: '13px',
      lineheight: '1.82857143',
      color: '#000',
      borderradius: '10px',
      background: '#C5D5D5',
      marginright:'0px',
      height:'25px',
      border: '0.5px solid #09CAD3'
     }

    

const Exercise = props => (

//  <tr>
//    <td style={tdStyle}><Link to={"/EditLuminariesImg/"+props.exercise._id}><img src={props.exercise.L_Img} width='80' height='55' alt="" /></Link></td>
//    <td style={tdStyle}>{props.exercise.L_name}</td>
//    <td style={tdStyle}>{props.exercise.L_specialty}</td>
//    <td style={tdStyle}>{props.exercise.L_contribution}</td>
//    <td style={tdStyle}><Moment format='YYYY/MM/DD'>{props.exercise.L_date}</Moment></td>
//    <td style={tdStyle}>
//    <Link to={"/EditLuminaries/"+props.exercise._id}>Edit</Link> | 
//    <Link to="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</Link>
//     </td>
//   </tr>



<div style={{border:"1px solid #000" , backgroundColor:"#E0E3E5"}} className='post bg-white p-1 my-1'>
    <div>
      <Link to={"/profile/"+props.exercise.user}>
        <img className='round-img' src={props.exercise.avatar} alt='' />
        <h4>{props.exercise.name}</h4>
      </Link>
    </div>
    <div>
      < Link to={"/posts/"+props.exercise._id} >
      <p style={{color:"#000",fontSize:"19px"}} className='my-1'>{props.exercise.text}</p>
      </Link>
      <p className='post-date'>
        Posted on <Moment format='YYYY/MM/DD'>{props.exercise.date}</Moment>
      </p>



      {/* {showActions && (
        <Fragment>
          <button
            onClick={() => addLike(_id)}
            type='button'
            className='btn btn-light'
          > 
            <i className='fas fa-thumbs-up' />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            onClick={() => removeLike(_id)}
            type='button'
            className='btn btn-light'
          > 
            <i className='fas fa-thumbs-down' />
          </button>
          <Link to={`/posts/${_id}`} className='btn btn-primary'>
            Discussion{' '}
            {comments.length > 0 && (
              <span className='comment-count'>{comments.length}</span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            // <button
            //   onClick={() => deletePost(_id)}
            //   type='button'
            //   className='btn btn-danger'
            // >
            //   <i className='fas fa-times' />
            // </button>

            <ConfirmButton
            dialog={["Delete", "Are You Sure?", "Once more to delete"]}
            action={() => deletePost(_id)}
            />

          )}
        </Fragment>
      )} */}



    </div>
  </div>




)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {
      exercises: [],
      search:[],
       
     

     

    
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
    axios.get('/api/posts/')
      .then(response => {
        this.setState({ exercises: response.data })

      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('/api/posts/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }
  
  exerciseList() {
    return this.state.exercises
    .filter(luminaries => luminaries.text.includes(this.state.search))
    .map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }







  render() {
    return (
      <div>
        <h1>Search Posts</h1>

        <input  style={inputTextStyle} type='text' placeholder="Search by article" onChange={this.searchChanged} value={this.state.search}/>
       
        { this.exerciseList() }
      </div>
      
    )
  }
}
