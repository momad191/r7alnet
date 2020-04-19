import React from 'react';
//import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addWebinars } from '../../actions/webinarsAction';

   class WebinarsRegistration extends React.Component {
     constructor(props) {
      super(props);
      this.state = {
        Surname: '',
        first_name: '',
        Title: '',
        Gender: '',
        Email: '',
        Website: '',
        Phone: '',
        Academic_affiliation: '',
        Country: '',
        Nationality: '',
        Key_academic: '',
        Research_Field: '',
        Specialization: '',
        Potential_talk_title: '',
        other_information: '',
        WebinarImg: ''
       // date: ''
        
     };


  this.onChangeSurname = this.onChangeSurname.bind(this);
  this.onChangefirst_name = this.onChangefirst_name.bind(this);
  this.onChangeTitle = this.onChangeTitle.bind(this);
  this.onChangeGender = this.onChangeGender.bind(this);
  this.onChangeEmail = this.onChangeEmail.bind(this);
  this.onChangeWebsite = this.onChangeWebsite.bind(this);
  this.onChangePhone = this.onChangePhone.bind(this);
  this.onChangeAcademic_affiliation = this.onChangeAcademic_affiliation.bind(this);
  this.onChangeCountry = this.onChangeCountry.bind(this);
  this.onChangeNationality = this.onChangeNationality.bind(this);
  this.onChangeKey_academic = this.onChangeKey_academic.bind(this);
  this.onChangeResearch_Field = this.onChangeResearch_Field.bind(this);
  this.onChangeSpecialization = this.onChangeSpecialization.bind(this);
  this.onChangePotential_talk_title = this.onChangePotential_talk_title.bind(this);
  this.onChangeother_information = this.onChangeother_information.bind(this);
 // this.onChangedate = this.onChangedate.bind(this);
  this.onChangeWebinarImg = this.onChangeWebinarImg.bind(this);

  this.onSubmit = this.onSubmit.bind(this);
  }


  onChangeSurname = e => {
   this.setState({ Surname: e.target.value });
  };

  onChangefirst_name = e => {
    this.setState({ first_name: e.target.value });
   };

   onChangeTitle = e => {
    this.setState({ Title: e.target.value });
   };

   onChangeGender = e => {
    this.setState({ Gender: e.target.value });
   };

   onChangeEmail = e => {
    this.setState({ Email: e.target.value });
   };

   onChangeWebsite = e => {
    this.setState({ Website: e.target.value });
   };

   onChangePhone = e => {
    this.setState({ Phone: e.target.value });
   };

   onChangeAcademic_affiliation = e => {
    this.setState({ Academic_affiliation: e.target.value });
   };

   onChangeCountry = e => {
    this.setState({ Country: e.target.value });
   };

   onChangeNationality = e => {
    this.setState({ Nationality: e.target.value });
   };

   onChangeKey_academic = e => {
    this.setState({ Key_academic: e.target.value });
   };

   onChangeResearch_Field = e => {
    this.setState({ Research_Field: e.target.value });
   };

   onChangeSpecialization = e => {
    this.setState({ Specialization: e.target.value });
   };

   onChangePotential_talk_title = e => {
    this.setState({ Potential_talk_title: e.target.value });
   };

   onChangeother_information = e => {
    this.setState({ other_information: e.target.value });
   };

  //  onChangedate = e => {
  //   this.setState({ date: e.target.value });
  //  };


  onChangeWebinarImg = e => {
   this.setState({ WebinarImg: e.target.files[0] });
   };


   
  onSubmit(e) {
  e.preventDefault();
  let formData = new FormData();
  formData.append('Surname', this.state.Surname);
  formData.append('first_name', this.state.first_name);
  formData.append('Title', this.state.Title);
  formData.append('Gender', this.state.Gender);
  formData.append('Email', this.state.Email);
  formData.append('Website', this.state.Website);
  formData.append('Phone', this.state.Phone);
  formData.append('Academic_affiliation', this.state.Academic_affiliation);
  formData.append('Country', this.state.Country);
  formData.append('Nationality', this.state.Nationality);
  formData.append('Key_academic', this.state.Key_academic);
  formData.append('Research_Field', this.state.Research_Field);
  formData.append('Specialization', this.state.Specialization);
  formData.append('Potential_talk_title', this.state.Potential_talk_title);
  formData.append('other_information', this.state.other_information);
  //formData.append('date', this.state.date);
  formData.append('WebinarImg', this.state.WebinarImg);
  this.props.addWebinars(formData);
  
  this.setState({

    Surname: '',
    first_name: '',
    Title: '',
    Gender: '',
    Email: '',
    Website: '',
    Phone: '',
    Academic_affiliation: '',
    Country: '',
    Nationality: '',
    Key_academic: '',
    Research_Field: '',
    Specialization: '',
    Potential_talk_title: '',
    other_information: '',
    WebinarImg: ''
   // date: ''
   
   
  });
  
 }
 


  render() {
   return (

    
   <div className="form-container">
   <form className="form" encType="multipart/form-data" onSubmit={this.onSubmit}> 

   
   <h1 className="middle text-primary"><i className="fas fa-star"></i> Webinars Registration</h1>	 

   
   <div className="form-group">
   <label className="form-label">Surname</label>
   <input  className="form-contact" placeholder="" type="text" value={this.state.Surname} onChange={this.onChangeSurname} required/>
   </div>



   <div className="form-group">
   <label className="form-label">Given(first)name </label>
   <input  className="form-contact" placeholder="" type="text"value={this.state.first_name} onChange={this.onChangefirst_name} required/>
   </div>


   <div className="form-group">
   <label className="form-label">Title</label>
   <select  className="form-contact" placeholder="" type="select" value={this.state.Title} onChange={this.onChangeTitle} required>
     <option>Select Title </option>
     <option>Mr / Miss / Mrs </option>
     <option>Dr</option>
     <option>Prof</option>
     <option>Other</option>
   </select>
   </div>


   <div className="form-group">
   <label className="form-label">Gender</label>
   <select  className="form-contact" placeholder="" type="select"value={this.state.Gender} onChange={this.onChangeGender} required>
     <option>Select Title </option>
     <option> male </option>
     <option>female</option>
 
   </select>
   </div>




   <div className="form-group">
   <label className="form-label">Email </label>
   <input  className="form-contact" placeholder="" type="email"value={this.state.Email} onChange={this.onChangeEmail} required />
   </div>


   <div className="form-group">
   <label className="form-label">Website </label>
   <input  className="form-contact" placeholder="" type="text"value={this.state.Website} onChange={this.onChangeWebsite} required/>
   </div>


   <div className="form-group">
   <label className="form-label">   Phone with country code </label>
   <input  className="form-contact" placeholder="" type="text"value={this.state.Phone} onChange={this.onChangePhone} required/>
   </div>


   <div className="form-group">
   <label className="form-label">    Academic affiliation </label>
   <input  className="form-contact" placeholder="" type="text"value={this.state.Academic_affiliation} onChange={this.onChangeAcademic_affiliation} required/>
   </div>


  

   <div className="form-group">
   <label className="form-label">  Country of Residence </label>
   <input  className="form-contact" placeholder="" type="text"value={this.state.Country} onChange={this.onChangeCountry} required/>
   </div>


 
   <div className="form-group">
   <label className="form-label">   Nationality </label>
   <input  className="form-contact" placeholder="" type="text"value={this.state.Nationality} onChange={this.onChangeNationality} required />
   </div>







 
   <div className="form-group">
   <span>Key academic credentials (e.g. professional responsibilities, major awards, previous academic affiliations etc.)</span>
        <input type="text"   name="name"   value={this.state.Key_academic} onChange={this.onChangeKey_academic} required />
      </div>
 
 
   <div className="form-group">
   <span>Research Field *</span>
   <select type="select"   name="channel"  value={this.state.Research_Field} onChange={this.onChangeResearch_Field}  required > 
   <option>Select Research Field  </option>
   <option>Natural sciences </option>
   <option>Medicine </option>
   <option>Engineering</option>
   <option> Law</option>
   <option>Economics </option>
   <option> international Relations / politics </option>
   <option>Other arts and humanities </option>
   <option>Other</option>
   </select>
   </div>
 
 
 
 
    <div className="form-group">
   <span>Specialization (e.g. Cancer Biology, Contract Law etc.) *</span>
         <input type="text"   name="name"  value={this.state.Specialization} onChange={this.onChangeSpecialization} required/>
       </div>
 
 
    <div className="form-group">
   <span> Potential talk title *</span>
         <input type="text"   name="name"  value={this.state.Potential_talk_title} onChange={this.onChangePotential_talk_title} required />
     </div>
 
 
   <div className="form-group">
   <span> Any other information you would like to share </span>
         <input type="text"   name="name"  value={this.state.other_information} onChange={this.onChangeother_information} required />
       </div>
 
 
   {/* <div class="form-group">
   <span> Is there any specific time that would be most suitable for us to contact you and/or for the webinar itself? </span>
         <input type="text"   name="name"  value={this.state.date} onChange={this.onChangedate} />
      </div> */}


<div className="form-group">
   <label className="form-label">Choose Image For Webinar </label>
  <input type="file"
  className="form-input"
  
  onChange={this.onChangeWebinarImg} required />
</div>

<div className="form-group">
  <button style={{width :'500px' , height:'50px', background:'#257E83', color:'#fff', cursor:'pointer' }}  type="submit" className="submit-btn">Submit!</button>
  </div>
  </form>
  </div>
  );
    }
  }
export default connect(null,{ addWebinars })(WebinarsRegistration);




// import React, { Fragment } from 'react';

 
// const WebinarsRegistration = () => {
//   return (
//     <Fragment>

// <h1 class="middle text-primary"><i class="fas fa-star"></i>  Webinars Registeration</h1>


// <form class="form" action="create-profile.html">
 
//      <div class="form-group">
//      <span>Surname*</span>
//        <input type="text"  class="form-contact"  name="name" required />
//      </div>
 
 
//  <div class="form-group">
//  <span>Given(first)name *</span>
//        <input type="text"  class="form-contact"  name="name" required />
//      </div>
 
 
//  <div class="form-group">
//   <span>Title *</span>
//        <select type="select"   name="channel" required > 
//    <option>Select Title </option>
//    <option>Mr / Miss / Mrs </option>
//    <option>Dr</option>
//    <option>Prof</option>
//    <option>Other</option>

//    </select>
//      </div>
 
 
//  <div class="form-group">
//   <span>Gender *</span>
//        <select type="select"   name="channel" required > 
//    <option>Select Gender </option>
//    <option>Male </option>
//    <option>Female</option>
//    </select>
//      </div>
 
 
 
//      <div class="form-group">
//    <span>Email</span>
//        <input type="email"   name="email" />
      
//      </div>
 
 
//  <div class="form-group">
//  <span>Website</span>
//        <input type="text"   name="email" />
//      </div>
 
 
//  <div class="form-group">
//  <span>Phone with country code</span>
//        <input type="text"   name="email" />
//      </div>
 
 
//  <div class="form-group">
//  <span>Academic affiliation *</span>
//        <input type="text"   name="email" />
//      </div>
 
 
//  <div class="form-group">
//  <span>Country of Residence *</span>
//        <input type="text"   name="email" />
//      </div>
 

 
//   <div class="form-group">
//  <span>Nationality</span>
//        <input type="text"   name="name" required />
//      </div>
 
 
 
//   <div class="form-group">
//  <span>Key academic credentials (e.g. professional responsibilities, major awards, previous academic affiliations etc.)</span>
//        <input type="text"   name="name" required />
//      </div>
 
 
//  <div class="form-group">
//  <span>Research Field *</span>
//      <select type="select"   name="channel" required > 
//  <option>Select Research Field  </option>
//  <option>Natural sciences </option>
//  <option>Medicine </option>
//  <option>Engineering</option>
//  <option> Law</option>
//  <option>Economics </option>
//  <option> international Relations / politics </option>
//  <option>Other arts and humanities </option>
//  <option>Other  </option>
//    </select>
//      </div>
 
 
 
 
//   <div class="form-group">
//  <span>Specialization (e.g. Cancer Biology, Contract Law etc.) *</span>
//        <input type="text"   name="name" required />
//      </div>
 
 
//   <div class="form-group">
//  <span> Potential talk title *</span>
//        <input type="text"   name="name" required />
//      </div>
 
 
//  <div class="form-group">
//  <span> Any other information you would like to share </span>
//        <input type="text"   name="name" required />
//      </div>
 
 
//  <div class="form-group">
//  <span> Is there any specific time that would be most suitable for us to contact you and/or for the webinar itself? </span>
//        <input type="text"   name="name" required />
//      </div>


 

//      <input type="submit" class="btn btn-primary" value="Send" />
//    </form>


 

//     </Fragment>
//   );
// };






// export default WebinarsRegistration;
