import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
 
import axios from 'axios';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

export default class Editwebinars extends Component {
  constructor(props) {
    super(props);
     

    this.onChangeL_Img = this.onChangeL_Img.bind(this);
    this.onChangeL_name = this.onChangeL_name.bind(this);
    this.onChangeL_specialty = this.onChangeL_specialty.bind(this);
    this.onChangeL_contribution = this.onChangeL_contribution.bind(this);
    //this.onChangeL_date = this.onChangeL_date.bind(this);
    this.onChangeL_Website = this.onChangeL_Website.bind(this);
    this.onChangeL_biography = this.onChangeL_biography.bind(this);



    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

        L_Img: '',
        L_name: '',
        L_specialty: '',
        L_contribution: '',
        L_Website: '',
        //L_date: '',
        L_biography: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/Luminaries/'+this.props.match.params.id)
      .then(response => {
        this.setState({

          L_Img: response.data.L_Img,
          L_name: response.data.L_name,
          L_specialty: response.data.L_specialty,
         L_contribution: response.data.L_contribution,
         L_Website: response.data.L_Website,
         // L_date: response.data.L_date,
         L_biography: response.data.L_biography

        

          
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/api/users/')
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

   

  onChangeL_name(e) {
    this.setState({
      L_name: e.target.value
    })
  }

  onChangeL_specialty(e) {
    this.setState({
      L_specialty: e.target.value
    })
  }

  onChangeL_contribution(e) {
    this.setState({
      L_contribution: e.target.value
    })
  }

  // onChangeL_date(e) {
  //   this.setState({
  //     L_date: e.target.value
  //   })
  // }


  onChangeL_Website(e) {
    this.setState({
      L_Website: e.target.value
    })
  }

  onChangeL_biography(e) {
    this.setState({
      L_biography: e.target.value
    })
  }

 

  onChangeL_Img(e) {
    this.setState({ L_Img: e.target.files[0] });
  }

  onSubmit(e) {
    e.preventDefault();

    const luminaries = {
      L_Img: this.state.L_Img,
      L_name: this.state.L_name,
      L_specialty: this.state.L_specialty,
      L_contribution: this.state.L_contribution,
      L_Website: this.state.L_Website,
      //L_date: this.state.L_date,
      L_biography: this.state.L_biography

    }

    console.log(luminaries);

    axios.post('http://localhost:5000/api/Luminaries/update/' + this.props.match.params.id, luminaries)
    .then(res => console.log(res.data));

   window.location = '/Allluminaries';
  }

  render() {
    return (
 <Fragment>
 
      <div class="profile-grid my-1">
         {/* <!-- Top --> */}
        <div class="profile-top bg-primary p-2">
          <img
            class="round-img my-1"
            src={this.state.L_Img}
            alt=""
          />
          <h1 class="large"> {this.state.L_name} </h1>
          <p class="lead"> {this.state.L_specialty}</p>
          <p>{this.state.L_contribution}</p>
          <div class="icons my-1">
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-globe fa-2x"></i>
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-twitter fa-2x"></i>
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook fa-2x"></i>
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin fa-2x"></i>
            </Link>
             <Link to="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-youtube fa-2x"></i>
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram fa-2x"></i>
            </Link>
          </div>
        </div>

        {/* <!-- About --> */}
        <div class="profile-about bg-light p-2">
          <h2 class="text-primary"> {this.state.L_name} Biography</h2>
          <p style={{ margin: '1rem 2' ,textAlign:'justify' , fontSize:'18px', fontWeight:''  }}>
          {this.state.L_biography}
          </p>
          <div class="line"></div>
          {/* <h2 class="text-primary">Skill Set</h2>
          <div class="skills">
            <div class="p-1"><i class="fa fa-check"></i> HTML</div>
            <div class="p-1"><i class="fa fa-check"></i> CSS</div>
            <div class="p-1"><i class="fa fa-check"></i> JavaScript</div>
            <div class="p-1"><i class="fa fa-check"></i> Python</div>
            <div class="p-1"><i class="fa fa-check"></i> C#</div>
          </div> */}
        </div>

        {/* <!-- Experience --> */}
        {/* <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">Experience</h2>
          <div>
            <h3 class="text-dark">Microsoft</h3>
            <p>Oct 2011 - Current</p>
            <p><strong>Position: </strong>Senior Developer</p>
            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p>
          </div>
          <div>
            <h3 class="text-dark">Sun Microsystems</h3>
            <p>Nov 2004 - Nov 2011</p>
            <p><strong>Position: </strong>Systems Admin</p>
            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p>
          </div>
        </div> */}

        {/* <!-- Education --> */}
        {/* <div class="profile-edu bg-white p-2">
          <h2 class="text-primary">Education</h2>
          <div>
            <h3>University Of Washington</h3>
            <p>Sep 1993 - June 1999</p>
            <p><strong>Degree: </strong>Masters</p>
            <p><strong>Field Of Study: </strong>Computer Science</p>
            <p>
              <strong>Description: </strong>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
              ipsam, sapiente suscipit dicta eius velit amet aspernatur
              asperiores modi quidem expedita fugit.
            </p>
          </div>
        </div> */}

        {/* <!-- Github --> */}
        {/* <div class="profile-github">
          <h2 class="text-primary my-1">
            <i class="fab fa-github"></i> Github Repos
          </h2>
          <div class="repo bg-white p-1 my-1">
            <div>
              <h4><a href="#" target="_blank"
                  rel="noopener noreferrer">Repo One</a></h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, laborum!
              </p>
            </div>
            <div>
              <ul>
                <li class="badge badge-primary">Stars: 44</li>
                <li class="badge badge-dark">Watchers: 21</li>
                <li class="badge badge-light">Forks: 25</li>
              </ul>
            </div>
          </div>
          <div class="repo bg-white p-1 my-1">
            <div>
              <h4><a href="#" target="_blank"
                  rel="noopener noreferrer">Repo Two</a></h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, laborum!
              </p>
            </div>
            <div>
              <ul>
                <li class="badge badge-primary">Stars: 44</li>
                <li class="badge badge-dark">Watchers: 21</li>
                <li class="badge badge-light">Forks: 25</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
      </Fragment>
    )
  }
}
