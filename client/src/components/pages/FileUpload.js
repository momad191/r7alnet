import React, { Component } from 'react';
import axios from 'axios';

export default class FilesUpload extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
      

        this.state = {
            profileImg: '',
            username: '',
            email:''
        }
    }

    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }

    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
      }


      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        })
      }

    onSubmit(e) {
        e.preventDefault()
    
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg);
        formData.append("username", this.state.username);
        formData.append("email", this.state.email);
           
       
        axios.post("/api/user-profile", formData, {
        }).then(res => {
            console.log(res)

            this.setState({
                username: '',
                email:''
              })
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>

                           <input  type="text"
                            required
                            className="form-group"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            />


                            <input  type="text"
                            required
                            className="form-group"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            />




                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
