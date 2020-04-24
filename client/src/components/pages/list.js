import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import './App.css'
 

export default class App extends Component {
    constructor(props) {
        super(props);
        this.deleteExercise = this.deleteExercise.bind(this)
        this.state = {exercises: []};
        this.state = {
            offset: 0,
            data: [],
            perPage: 10,
            currentPage: 0,
            pageCount: null,
            search:''
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }

    
    receivedData() {
       
        axios
            .get(`/api/webinars/`)
            .then(res => {
               
                const data = res.data;
                console.log(data.length)
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(pd => <React.Fragment>


<tr>
    <td>{pd.Surname}</td>
    <td>{pd.first_name}</td>
    <td>{pd.Title}</td>
    {/* <td>{pd.WebinarImg}</td> */}
     <td><Link to={"/Editwebinars/"+pd._id}><img src={pd.WebinarImg} width='80' height='55' alt="" /></Link></td>
     
    <td>
      <Link to={"/Editwebinars/"+pd._id}>edit</Link> | <Link to="#" onClick={() => { this.state.deleteExercise(pd._id) }}>delete</Link>
    </td>
  </tr>



                     



                </React.Fragment>)

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    postData
                })
            });
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
        this.receivedData()
    }


    deleteExercise(id) {
      axios.delete('/api/webinars/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        exercises: this.state.exercises.filter(el => el._id !== id)
      })
    }

     

      UpdateSearch(event){
        this.setState({
          search: event.target.value.substr(0.20)

        });
      }


    render() {
        return (
            <div>
<Link to="/WebinarRegistration" title="Dashboard" className=''><i className="fas fa-square text-primary"></i> <span className="hide-sm">Add Webinars</span></Link>

<h3>webinars List</h3>

<input 
type="text"
value={this.state.search}
onChange={this.UpdateSearch.bind(this)}
/>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {this.state.postData}
          </tbody>
        </table>




               
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"......."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>

        )
    }
}