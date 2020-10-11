import React, { Component , Fragment } from 'react';
import { Link } from 'react-router-dom';
 
import axios from 'axios';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

export default class Editwebinars extends Component {
  constructor(props) {
    super(props);
     

    this.onChangeWebinarImg = this.onChangeWebinarImg.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.onChangefirst_name = this.onChangefirst_name.bind(this);
    this.onChangeResearch_Field = this.onChangeResearch_Field.bind(this);
    //this.onChangeL_date = this.onChangeL_date.bind(this);
    this.onChangeSpecialization = this.onChangeSpecialization.bind(this);
    this.onChangePotential_talk_title = this.onChangePotential_talk_title.bind(this);



    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

      WebinarImg: '',
      Surname: '',
      first_name: '',
      Research_Field: '',
      Specialization: '',
        //L_date: '',
      Potential_talk_title: ''
    }
  }

  componentDidMount() {
    axios.get('/api/Webinars/'+this.props.match.params.id)
      .then(response => {
        this.setState({

          WebinarImg: response.data.WebinarImg,
          Surname: response.data.Surname,
          first_name: response.data.first_name,
          Research_Field: response.data.Research_Field,
          Specialization: response.data.Specialization,
         // L_date: response.data.L_date,
         Potential_talk_title: response.data.Potential_talk_title

        

          
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

   

  onChangeSurname(e) {
    this.setState({
      Surname: e.target.value
    })
  }

  onChangefirst_name(e) {
    this.setState({
      first_name: e.target.value
    })
  }

  onChangeResearch_Field(e) {
    this.setState({
      Research_Field: e.target.value
    })
  }

  // onChangeL_date(e) {
  //   this.setState({
  //     L_date: e.target.value
  //   })
  // }


  onChangePotential_talk_title(e) {
    this.setState({
      Potential_talk_title: e.target.value
    })
  }

  onChangeSpecialization(e) {
    this.setState({
      Specialization: e.target.value
    })
  }

 

  onChangeWebinarImg(e) {
    this.setState({ WebinarImg: e.target.files[0] });
  }

  onSubmit(e) {
    e.preventDefault();

    const luminaries = {
      WebinarImg: this.state.WebinarImg,
      Surname: this.state.Surname,
      first_name: this.state.first_name,
      Research_Field: this.state.Research_Field,
      Specialization: this.state.Specialization,
      //L_date: this.state.L_date,
      Potential_talk_title: this.state.Potential_talk_title

    }

    //console.log(luminaries);

    axios.post('/api/Webinars/update/' + this.props.match.params.id, luminaries)
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
            src={this.state.WebinarImg}
            alt=""
          />
          <h1 class="large">  {this.state.first_name} {this.state.Surname}</h1>
          <p class="lead"> Specialization:{this.state.Specialization}</p>
          <p>Research Field :{this.state.Research_Field}</p>
          <p>Potential talk title:{this.state.Potential_talk_title}</p>
           
        </div>
  
        {/* <!-- About --> */}
        <div class="profile-about bg-light p-2">
          <h2 class="text-primary"> {this.state.other_information}  information</h2>
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
