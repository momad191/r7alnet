import React from 'react';
import { connect } from 'react-redux';
import { addLuminaries } from '../../actions/LuminariesAction';
  
   class LuminariesRegistration extends React.Component {
     constructor(props) {
      super(props);
      this.state = {
        L_Img: '',
        L_name: '',
        L_specialty: '',
        L_contribution: '',
        L_Website: '',
        L_date: '',
        L_biography: ''  
     };
  this.onChangeL_Img = this.onChangeL_Img.bind(this);
  this.onChangeL_name = this.onChangeL_name.bind(this);
  this.onChangeL_specialty = this.onChangeL_specialty.bind(this);
  this.onChangeL_contribution = this.onChangeL_contribution.bind(this);
  this.onChangeL_Website = this.onChangeL_Website.bind(this);
  this.onChangeL_biography = this.onChangeL_biography.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  }


  onChangeL_Img = e => {
    this.setState({ L_Img: e.target.files[0] });
    };

  onChangeL_name = e => {
   this.setState({ L_name: e.target.value });
  };

  onChangeL_specialty = e => {
    this.setState({ L_specialty: e.target.value });
   };

   onChangeL_contribution = e => {
    this.setState({ L_contribution: e.target.value });
   };

  
   onChangeL_Website = e => {
    this.setState({ L_Website: e.target.value });
   };

   onChangeL_date = e => {
    this.setState({ L_date: e.target.value });
   };


   onChangeL_biography = e => {
    this.setState({ L_biography: e.target.value });
   };

   
  onSubmit(e) {
  e.preventDefault();
  let formData = new FormData();

  formData.append('L_Img', this.state.L_Img);
  formData.append('L_name', this.state.L_name);
  formData.append('L_specialty', this.state.L_specialty);
  formData.append('L_contribution', this.state.L_contribution);
  formData.append('L_Website', this.state.L_Website);
  //formData.append('L_date', this.state.L_date);
  formData.append('L_biography', this.state.L_biography);

 
  this.props.addLuminaries(formData);
  
  // this.setState({
        
  //       L_Img: '',
  //       L_name: '',
  //       L_specialty: '',
  //       L_contribution: '',
  //       L_Website: '',
  //       L_date: '',
  //       L_biography: ''
   
  // });
 
 }
 


  render() {
   return (

   <div className="form-container">
   <form className="form" encType="multipart/form-data" onSubmit={this.onSubmit}> 

   
   <h1 className="middle text-primary"><i className="fas fa-star"></i> Luminaries Registration</h1>	 

   
   <div className="form-group">
   <label className="form-label">The Name</label>
   <input  className="form-contact" placeholder="" type="text" value={this.state.L_name} onChange={this.onChangeL_name} required/>
   </div>



   <div className="form-group">
   <label className="form-label">Specialty</label>
   <input  className="form-contact" placeholder="" type="text"value={this.state.L_specialty} onChange={this.onChangeL_specialty} required/>
   </div>



   <div className="form-group">
   <label className="form-label">contribution</label>
   <input  className="form-contact" placeholder="" type="text"value={this.state.L_contribution} onChange={this.onChangeL_contribution} required/>
   </div>

  
   <div className="form-group">
   <span> Website </span>
         <input type="text"   name="name"  value={this.state.L_Website} onChange={this.onChangeL_Website} required />
     </div>
 



    <div className="form-group">
    <label className="form-label">biography </label>
    <input  className="form-contact" placeholder="" type="text"value={this.state.L_biography} onChange={this.onChangeL_biography} required />
    </div>

  
      <div className="form-group">
        <label className="form-label"> Image  </label>
        <input type="file"
        className="form-input"
        
        onChange={this.onChangeL_Img} required />
      </div>

<div className="form-group">
  <button style={{width :'500px' , height:'50px', background:'#257E83', color:'#fff', cursor:'pointer' }}  type="submit" className="submit-btn">Insert</button>
  </div>
  </form>
  </div>
 
 
  );
    }
  }
export default connect(null,{ addLuminaries })(LuminariesRegistration);


