import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

class Search extends Component {
    constructor(props) {
        super(props);
        this.deleteExercise = this.deleteExercise.bind(this)

    };

    
    state = {
        users:[]
        
    };


    searchChanged = event => {
        this.setState({ search: event.target.value })
    }

    async componentDidMount() {
        const { data: users } = await axios.get(
            `http://localhost:5000/api/webinars/`
        );
        this.setState({ users });
    }


    deleteExercise(id) {
        axios.delete('http://localhost:5000/api/webinars/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
            deleteExercise: this.state.deleteExercise.filter(el => el._id !== id)
        })
      }


    render() {
        return (
            <div>
                <h3 style={{ textAlign: "center" }}> Activities</h3>

                <Link to="/Listwebinars" title="Dashboard" className=''><i className="fas fa-plus text-primary"></i> <span className="hide-sm">Listwebinars </span></Link>
 
                <input type='text' onChange={this.searchChanged} value={this.state.search}/>
                <br/>

                 
                {this.state.users
                 .filter(user => user.Surname.includes(this.state.search))
                  .map(pd => (
                
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

                    )
)}
                </div>
            
        );
    }
}

export default Search;
