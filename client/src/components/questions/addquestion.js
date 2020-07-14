import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/QuestionAction';
  
   class LuminariesRegistration extends React.Component {
     constructor(props) {
      super(props);
      this.state = {
        text: '',
        body: '',
        
         
     };
 
  this.onChangetext = this.onChangetext.bind(this);
  this.onChangebody = this.onChangebody.bind(this);

  // this.onChangeL_contribution = this.onChangeL_contribution.bind(this);
  // this.onChangeL_Website = this.onChangeL_Website.bind(this);
 
  this.onSubmit = this.onSubmit.bind(this);
  }


 

  onChangetext = e => {
   this.setState({ text: e.target.value });
  };

  onChangebody = e => {
    this.setState({ body: e.target.value });
   };

  //  onChangeL_contribution = e => {
  //   this.setState({ L_contribution: e.target.value });
  //  };

  
  //  onChangeL_Website = e => {
  //   this.setState({ L_Website: e.target.value });
  //  };

 
  
   
  onSubmit(e) {
  e.preventDefault();

  
  let formData = new FormData();
  formData.append('text', this.state.text);
  formData.append('body', this.state.body);

  // formData.append('L_contribution', this.state.L_contribution);
  // formData.append('L_Website', this.state.L_Website);
 
  this.props.addPost(formData);
  
 
 
 }
 


  render() {
   return (

   <div className="form-container">
   <form className="form"  onSubmit={this.onSubmit}> 

   
   <h1 className="middle text-primary"><i className="fas fa-star"></i>  Add Question </h1>	 

   
   <div className="form-group">
   <label className="form-label">Question Title </label>
   <input  className="form-contact" placeholder="" type="text" value={this.state.text} onChange={this.onChangetext} required/>
   </div>



   <div className="form-group">
   <label className="form-label">Body</label>
   <input  className="form-contact" placeholder="" type="text"value={this.state.body} onChange={this.onChangebody} required/>
   </div>


  

<div className="form-group">
  <button style={{width :'500px' , height:'50px', background:'#257E83', color:'#fff', cursor:'pointer' }}  type="submit" className="submit-btn">Insert</button>
  </div>
  </form>
  </div>
 
 
  );
    }
  }
export default connect(null,{ addPost })(LuminariesRegistration);


