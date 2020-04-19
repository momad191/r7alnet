import React from 'react';
//import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import { addQuestion } from '../../actions/QuestionAction';

   class QuestionRegistration extends React.Component {
     constructor(props) {
      super(props);
      this.state = {
        q_title: '',
       // q_date: '',
        q_img: ''
       
        
     };

 
  this.onChangeq_title = this.onChangeq_title.bind(this);
  //this.onChangeq_date = this.onChangeq_date.bind(this);
  this.onChangeq_img = this.onChangeq_img.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  }


  onChangeq_title = e => {
   this.setState({ q_title: e.target.value });
  };

  // onChangeq_date = e => {
  //   this.setState({ q_date: e.target.value });
  //  };



   onChangeq_img = e => {
   this.setState({ q_img: e.target.files[0] });
   };


   
  onSubmit(e) {
  e.preventDefault();
  let formData = new FormData();
  formData.append('q_title', this.state.q_title);
  //formData.append('q_date', this.state.q_date);
  formData.append('q_img', this.state.q_img);
  this.props.addQuestion(formData);
  
  this.setState({

    q_title: '',
    //q_date: '',
    q_img: ''
   
  });

 
 
 
 }
 


  render() {
   return (

    
   <div className="form-container">
   <form className="form" encType="multipart/form-data" onSubmit={this.onSubmit}> 

   
   <h1 className="middle text-primary"><i className="fas fa-star"></i> Question Registration</h1>	 

   
   <div className="form-group">
   <label className="form-label">q_title</label>
   <input  className="form-contact" placeholder="" type="text" value={this.state.q_title} onChange={this.onChangeq_title} required/>
   </div>


{/* 
   <div className="form-group">
   <label className="form-label">q_date </label>
   <input  className="form-contact" placeholder="" type="text"value={this.state.q_date} onChange={this.onChangeq_date} required/>
   </div> */}
 
 
 

<div className="form-group">
   <label className="form-label">Choose Image </label>
  <input type="file"
  className="form-input"
  
  onChange={this.onChangeq_img} required />
</div>

<div className="form-group">
  <button style={{width :'500px' , height:'50px', background:'#257E83', color:'#fff', cursor:'pointer' }}  type="submit" className="submit-btn">Submit!</button>
  </div>
  </form>
  </div>
  );
    }
  }
//export default connect(null,{ addQuestion })(QuestionRegistration);




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
