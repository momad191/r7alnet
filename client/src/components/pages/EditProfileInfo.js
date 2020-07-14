import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

export default class Editwebinars extends Component {
  constructor(props) {
    super(props);
        
 
    
    this.onChangestatus = this.onChangestatus.bind(this);
    this.onChangecompany = this.onChangecompany.bind(this);
    this.onChangedepartment = this.onChangedepartment.bind(this);
    this.onChangelocation = this.onChangelocation.bind(this);
    this.onChangeskills = this.onChangeskills.bind(this);
    this.onChangebio = this.onChangebio.bind(this);
 
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
       user:'',
       status: '', 
       company: '',
       department: '',
       location: '',
       skills: '',
       bio: ''   
    }
  }
 
  componentDidMount() {
    axios.get('/api/profile/pro/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          user: response.data.user, 
          status: response.data.status, 
          company: response.data.company, 
          department: response.data.department, 
          location: response.data.location, 
          skills: response.data.skills, 
          bio: response.data.bio

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

   

  onChangestatus(e) {
    this.setState({
      status: e.target.value
    })
  }

  onChangecompany(e) {
    this.setState({
      company: e.target.value
    })
  }


  onChangedepartment(e) {
    this.setState({
      department: e.target.value
    })
  }



  onChangelocation(e) {
    this.setState({
      location: e.target.value
    })
  }



  onChangeskills(e) {
    this.setState({
      skills: e.target.value
    })
  }



  onChangebio(e) {
    this.setState({
      bio: e.target.value
    })
  }

 
 
  onSubmit(e) {
    e.preventDefault();

    const user = {
      status: this.state.status,
      company: this.state.company,
      department: this.state.department,
      location: this.state.location,
      skills: this.state.skills,
      bio: this.state.bio,
    }

    console.log(user);

    axios.post('/api/profile/update/'+ this.props.match.params.id, user)
    .then(res => console.log(res.data));

   window.location = '/Allmembers';
  }
 
  render() {
    return (
 

      <div className="form-container">
      <form className="form" encType="multipart/form-data" onSubmit={this.onSubmit}> 
   
      
      <h1 className="middle text-primary"><i className="fas fa-star"></i> Edit Profile </h1>	 
   
      
      <div className='form-group'>
        Professional status 
          <select onChange={this.onChangestatus}  name='status' value={this.state.status}>
          
          <option value="High school">High school</option>
          <option value="Undergraduate">Undergraduate</option>
          <option value="Graduate student">Graduate student</option>
          <option value="Postgraduate researchers">Postgraduate researchers</option>
          <option value="Lecturer">Lecturer</option>
          <option value="Assistant professor">Assistant professor</option>
          <option value="Professor">Professor</option>
          <option value="Professor Emeritus">Professor Emeritus</option>
          <option value="Admin">Admin</option>
          <option value="Specialist">Specialist</option>
          <option value="Policy maker">Policy maker</option>
          </select>
          <small className='form-text'>
          Give us an idea of where you are at in your career
          </small>
        </div>



      {/* <div className="form-group">
      <label className="form-label">status</label>
      <input  className="form-contact" placeholder="" type="text" value={this.state.status} onChange={this.onChangestatus} required/>
      </div>
    */}
   
   

   <div className='form-group'>
      Place of work 
          <select onChange={this.onChangecompany}  name='company' value={this.state.company} >
          <option>{this.state.company}</option>
          <option value="University">University</option>
          <option value="Institute">Institute</option>
          <option value="School">School</option>
          <option value="Think Tank">Think Tank</option>
          <option value="NGO">NGO</option>
          <option value="Government">Government</option>

          </select>
          <small className='form-text'>
          Could be your own company or one you work for
          </small>
        </div>




        <div className='form-group'>
        Place of work (What else ? )
          <input
            type='text'
            placeholder='Company'
            name='company'
            value={this.state.company}
            onChange={this.onChangecompany}
          />
          <small className='form-text'>
            Could be your own company or one you work for
          </small>
        </div>
      {/* <div className="form-group">
      <label className="form-label">Company</label>
      <input  className="form-contact" placeholder="" type="text" value={this.state.company} onChange={this.onChangecompany} required/>
      </div> */}



      <div className="form-group">
      <label className="form-label"> Specialization</label>
      <input  className="form-contact" placeholder="" type="text"value={this.state.department} onChange={this.onChangedepartment} required/>
      </div>




  <div className='form-group'>
    Country
   <select id='country' name='location'  value={this.state.location} onChange={this.onChangelocation} >
   <option value="Afganistan">Afghanistan</option>
   <option value="Albania">Albania</option>
   <option value="Algeria">Algeria</option>
   <option value="American Samoa">American Samoa</option>
   <option value="Andorra">Andorra</option>
   <option value="Angola">Angola</option>
   <option value="Anguilla">Anguilla</option>
   <option value="Antigua & Barbuda">Antigua & Barbuda</option>
   <option value="Argentina">Argentina</option>
   <option value="Armenia">Armenia</option>
   <option value="Aruba">Aruba</option>
   <option value="Australia">Australia</option>
   <option value="Austria">Austria</option>
   <option value="Azerbaijan">Azerbaijan</option>
   <option value="Bahamas">Bahamas</option>
   <option value="Bahrain">Bahrain</option>
   <option value="Bangladesh">Bangladesh</option>
   <option value="Barbados">Barbados</option>
   <option value="Belarus">Belarus</option>
   <option value="Belgium">Belgium</option>
   <option value="Belize">Belize</option>
   <option value="Benin">Benin</option>
   <option value="Bermuda">Bermuda</option>
   <option value="Bhutan">Bhutan</option>
   <option value="Bolivia">Bolivia</option>
   <option value="Bonaire">Bonaire</option>
   <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
   <option value="Botswana">Botswana</option>
   <option value="Brazil">Brazil</option>
   <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
   <option value="Brunei">Brunei</option>
   <option value="Bulgaria">Bulgaria</option>
   <option value="Burkina Faso">Burkina Faso</option>
   <option value="Burundi">Burundi</option>
   <option value="Cambodia">Cambodia</option>
   <option value="Cameroon">Cameroon</option>
   <option value="Canada">Canada</option>
   <option value="Canary Islands">Canary Islands</option>
   <option value="Cape Verde">Cape Verde</option>
   <option value="Cayman Islands">Cayman Islands</option>
   <option value="Central African Republic">Central African Republic</option>
   <option value="Chad">Chad</option>
   <option value="Channel Islands">Channel Islands</option>
   <option value="Chile">Chile</option>
   <option value="China">China</option>
   <option value="Christmas Island">Christmas Island</option>
   <option value="Cocos Island">Cocos Island</option>
   <option value="Colombia">Colombia</option>
   <option value="Comoros">Comoros</option>
   <option value="Congo">Congo</option>
   <option value="Cook Islands">Cook Islands</option>
   <option value="Costa Rica">Costa Rica</option>
   <option value="Cote DIvoire">Cote DIvoire</option>
   <option value="Croatia">Croatia</option>
   <option value="Cuba">Cuba</option>
   <option value="Curaco">Curacao</option>
   <option value="Cyprus">Cyprus</option>
   <option value="Czech Republic">Czech Republic</option>
   <option value="Denmark">Denmark</option>
   <option value="Djibouti">Djibouti</option>
   <option value="Dominica">Dominica</option>
   <option value="Dominican Republic">Dominican Republic</option>
   <option value="East Timor">East Timor</option>
   <option value="Ecuador">Ecuador</option>
   <option value="Egypt">Egypt</option>
   <option value="El Salvador">El Salvador</option>
   <option value="Equatorial Guinea">Equatorial Guinea</option>
   <option value="Eritrea">Eritrea</option>
   <option value="Estonia">Estonia</option>
   <option value="Ethiopia">Ethiopia</option>
   <option value="Falkland Islands">Falkland Islands</option>
   <option value="Faroe Islands">Faroe Islands</option>
   <option value="Fiji">Fiji</option>
   <option value="Finland">Finland</option>
   <option value="France">France</option>
   <option value="French Guiana">French Guiana</option>
   <option value="French Polynesia">French Polynesia</option>
   <option value="French Southern Ter">French Southern Ter</option>
   <option value="Gabon">Gabon</option>
   <option value="Gambia">Gambia</option>
   <option value="Georgia">Georgia</option>
   <option value="Germany">Germany</option>
   <option value="Ghana">Ghana</option>
   <option value="Gibraltar">Gibraltar</option>
   <option value="Great Britain">Great Britain</option>
   <option value="Greece">Greece</option>
   <option value="Greenland">Greenland</option>
   <option value="Grenada">Grenada</option>
   <option value="Guadeloupe">Guadeloupe</option>
   <option value="Guam">Guam</option>
   <option value="Guatemala">Guatemala</option>
   <option value="Guinea">Guinea</option>
   <option value="Guyana">Guyana</option>
   <option value="Haiti">Haiti</option>
   <option value="Hawaii">Hawaii</option>
   <option value="Honduras">Honduras</option>
   <option value="Hong Kong">Hong Kong</option>
   <option value="Hungary">Hungary</option>
   <option value="Iceland">Iceland</option>
   <option value="Indonesia">Indonesia</option>
   <option value="India">India</option>
   <option value="Iran">Iran</option>
   <option value="Iraq">Iraq</option>
   <option value="Ireland">Ireland</option>
   <option value="Isle of Man">Isle of Man</option>
   <option value="Israel">Israel</option>
   <option value="Italy">Italy</option>
   <option value="Jamaica">Jamaica</option>
   <option value="Japan">Japan</option>
   <option value="Jordan">Jordan</option>
   <option value="Kazakhstan">Kazakhstan</option>
   <option value="Kenya">Kenya</option>
   <option value="Kiribati">Kiribati</option>
   <option value="Korea North">Korea North</option>
   <option value="Korea Sout">Korea South</option>
   <option value="Kuwait">Kuwait</option>
   <option value="Kyrgyzstan">Kyrgyzstan</option>
   <option value="Laos">Laos</option>
   <option value="Latvia">Latvia</option>
   <option value="Lebanon">Lebanon</option>
   <option value="Lesotho">Lesotho</option>
   <option value="Liberia">Liberia</option>
   <option value="Libya">Libya</option>
   <option value="Liechtenstein">Liechtenstein</option>
   <option value="Lithuania">Lithuania</option>
   <option value="Luxembourg">Luxembourg</option>
   <option value="Macau">Macau</option>
   <option value="Macedonia">Macedonia</option>
   <option value="Madagascar">Madagascar</option>
   <option value="Malaysia">Malaysia</option>
   <option value="Malawi">Malawi</option>
   <option value="Maldives">Maldives</option>
   <option value="Mali">Mali</option>
   <option value="Malta">Malta</option>
   <option value="Marshall Islands">Marshall Islands</option>
   <option value="Martinique">Martinique</option>
   <option value="Mauritania">Mauritania</option>
   <option value="Mauritius">Mauritius</option>
   <option value="Mayotte">Mayotte</option>
   <option value="Mexico">Mexico</option>
   <option value="Midway Islands">Midway Islands</option>
   <option value="Moldova">Moldova</option>
   <option value="Monaco">Monaco</option>
   <option value="Mongolia">Mongolia</option>
   <option value="Montserrat">Montserrat</option>
   <option value="Morocco">Morocco</option>
   <option value="Mozambique">Mozambique</option>
   <option value="Myanmar">Myanmar</option>
   <option value="Nambia">Nambia</option>
   <option value="Nauru">Nauru</option>
   <option value="Nepal">Nepal</option>
   <option value="Netherland Antilles">Netherland Antilles</option>
   <option value="Netherlands">Netherlands (Holland, Europe)</option>
   <option value="Nevis">Nevis</option>
   <option value="New Caledonia">New Caledonia</option>
   <option value="New Zealand">New Zealand</option>
   <option value="Nicaragua">Nicaragua</option>
   <option value="Niger">Niger</option>
   <option value="Nigeria">Nigeria</option>
   <option value="Niue">Niue</option>
   <option value="Norfolk Island">Norfolk Island</option>
   <option value="Norway">Norway</option>
   <option value="Oman">Oman</option>
   <option value="Pakistan">Pakistan</option>
   <option value="Palau Island">Palau Island</option>
   <option value="Palestine">Palestine</option>
   <option value="Panama">Panama</option>
   <option value="Papua New Guinea">Papua New Guinea</option>
   <option value="Paraguay">Paraguay</option>
   <option value="Peru">Peru</option>
   <option value="Phillipines">Philippines</option>
   <option value="Pitcairn Island">Pitcairn Island</option>
   <option value="Poland">Poland</option>
   <option value="Portugal">Portugal</option>
   <option value="Puerto Rico">Puerto Rico</option>
   <option value="Qatar">Qatar</option>
   <option value="Republic of Montenegro">Republic of Montenegro</option>
   <option value="Republic of Serbia">Republic of Serbia</option>
   <option value="Reunion">Reunion</option>
   <option value="Romania">Romania</option>
   <option value="Russia">Russia</option>
   <option value="Rwanda">Rwanda</option>
   <option value="St Barthelemy">St Barthelemy</option>
   <option value="St Eustatius">St Eustatius</option>
   <option value="St Helena">St Helena</option>
   <option value="St Kitts-Nevis">St Kitts-Nevis</option>
   <option value="St Lucia">St Lucia</option>
   <option value="St Maarten">St Maarten</option>
   <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
   <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
   <option value="Saipan">Saipan</option>
   <option value="Samoa">Samoa</option>
   <option value="Samoa American">Samoa American</option>
   <option value="San Marino">San Marino</option>
   <option value="Sao Tome & Principe">Sao Tome & Principe</option>
   <option value="Saudi Arabia">Saudi Arabia</option>
   <option value="Senegal">Senegal</option>
   <option value="Seychelles">Seychelles</option>
   <option value="Sierra Leone">Sierra Leone</option>
   <option value="Singapore">Singapore</option>
   <option value="Slovakia">Slovakia</option>
   <option value="Slovenia">Slovenia</option>
   <option value="Solomon Islands">Solomon Islands</option>
   <option value="Somalia">Somalia</option>
   <option value="South Africa">South Africa</option>
   <option value="Spain">Spain</option>
   <option value="Sri Lanka">Sri Lanka</option>
   <option value="Sudan">Sudan</option>
   <option value="Suriname">Suriname</option>
   <option value="Swaziland">Swaziland</option>
   <option value="Sweden">Sweden</option>
   <option value="Switzerland">Switzerland</option>
   <option value="Syria">Syria</option>
   <option value="Tahiti">Tahiti</option>
   <option value="Taiwan">Taiwan</option>
   <option value="Tajikistan">Tajikistan</option>
   <option value="Tanzania">Tanzania</option>
   <option value="Thailand">Thailand</option>
   <option value="Togo">Togo</option>
   <option value="Tokelau">Tokelau</option>
   <option value="Tonga">Tonga</option>
   <option value="Trinidad & Tobago">Trinidad & Tobago</option>
   <option value="Tunisia">Tunisia</option>
   <option value="Turkey">Turkey</option>
   <option value="Turkmenistan">Turkmenistan</option>
   <option value="Turks & Caicos Is">Turks & Caicos Is</option>
   <option value="Tuvalu">Tuvalu</option>
   <option value="Uganda">Uganda</option>
   <option value="United Kingdom">United Kingdom</option>
   <option value="Ukraine">Ukraine</option>
   <option value="United Arab Erimates">United Arab Emirates</option>
   <option value="United States of America">United States of America</option>
   <option value="Uraguay">Uruguay</option>
   <option value="Uzbekistan">Uzbekistan</option>
   <option value="Vanuatu">Vanuatu</option>
   <option value="Vatican City State">Vatican City State</option>
   <option value="Venezuela">Venezuela</option>
   <option value="Vietnam">Vietnam</option>
   <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
   <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
   <option value="Wake Island">Wake Island</option>
   <option value="Wallis & Futana Is">Wallis & Futana Is</option>
   <option value="Yemen">Yemen</option>
   <option value="Zaire">Zaire</option>
   <option value="Zambia">Zambia</option>
   <option value="Zimbabwe">Zimbabwe</option>
</select>

          <small className='form-text'>
            Country (eg. Canada, USA, SUDAN)
          </small>
        </div>



      
      {/* <div className="form-group">
      <label className="form-label">location</label>
      <input  className="form-contact" placeholder="" type="text"value={this.state.location} onChange={this.onChangelocation} required/>
      </div> */}

 

<div className='form-group'>
        Hobbies
          <input
            type='text'
            placeholder='* Hobbies'
            name='skills'
            value={this.state.skills}
            onChange={this.onChangeskills}
          />
          <small className='form-text'>
            Please use comma separated values (eg. Reading,Writing,Swimming,Football)
          </small>
        </div>


      {/* <div className="form-group">
      <label className="form-label">Hobbies</label>
      <input  className="form-contact" placeholder="" type="text" value={this.state.skills} onChange={this.onChangeskills} required/>
      </div> */}





<div className='form-group'>
        Bio
          <textarea
            placeholder='A short bio of yourself'
            name='bio'
            value={this.state.bio}
            onChange={this.onChangebio}
          />
          <small className='form-text'>Tell us a little about yourself</small>
        </div>


      {/* <div className="form-group">
      <label className="form-label">bio</label>
      <input  className="form-contact" placeholder="" type="text"value={this.state.bio} onChange={this.onChangebio} required/>
      </div> */}
   
 

   <img width="200" height="120" src= {this.state.user.avatar} alt=" avatar" />
  
   
   <div className="form-group">
     <button style={{width :'500px' , height:'50px', background:'#257E83', color:'#fff', cursor:'pointer' }}  type="submit" className="submit-btn">Update</button>
     </div>
     </form>
     </div>

    )
  }
}
