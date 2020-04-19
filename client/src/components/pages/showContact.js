import React from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../actions/ContactAction';

   class showContact extends React.Component {
     constructor(props) {
      super(props);
      this.state = {
 
        c_name: '',
        c_mail: '',
        c_channel: '',
        c_subject: '',
        c_massage: ''
        //date: ''
        

        
     };

  this.onChangec_name = this.onChangec_name.bind(this);
  this.onChangec_mail = this.onChangec_mail.bind(this);
  this.onChangec_channel = this.onChangec_channel.bind(this);
  this.onChangec_subject = this.onChangec_subject.bind(this);
  this.onChangec_massage = this.onChangec_massage.bind(this);
  //this.onChangedate = this.onChangedate.bind(this); 
  this.onSubmit = this.onSubmit.bind(this);

  }



  onChangec_name = e => {
   this.setState({ c_name: e.target.value });
  };

  onChangec_mail = e => {
    this.setState({ c_mail: e.target.value });
   };

   onChangec_channel = e => {
    this.setState({ c_channel : e.target.value });
   };

  
   onChangec_subject = e => {
    this.setState({ c_subject: e.target.value });
   };

   onChangec_massage = e => {
    this.setState({ c_massage: e.target.value });
   };


  //  onChangec_date = e => {
  //   this.setState({ c_date: e.target.value });
  //  };

  onSubmit(e) {
  e.preventDefault();
  let formData = new FormData();
  formData.append('c_name', this.state.c_name);
  formData.append('c_mail', this.state.c_mail);
  formData.append('c_channel', this.state.c_channel);
  formData.append('c_subject', this.state.c_subject);
  formData.append('c_massage', this.state.c_massage);
 // formData.append('date', this.state.date);

  this.props.addContact(formData);
  this.setState({
        
     c_name: '',
     c_mail: '',
     c_channel: '',
     c_subject: '',
     c_massage: ''
     // date: ''
  });
 
 }
 
 

  render() {
   return (

   <div className="form-container">
   <form className="form" onSubmit={this.onSubmit}> 

   
   <h1 className="middle text-primary"><i className="fas fa-mobile"></i> Contact </h1>	 

   
   <div className="form-group">
   <label className="form-label">The Name</label>
   <input  className="form-contact" placeholder="" type="text" value={this.state.c_name} onChange={this.onChangec_name} required/>
   </div>


{/* 
   <div className="form-group">
   <label className="form-label">Email</label>
   <input  className="form-contact" placeholder="" type="email" value={this.state.c_mail} onChange={this.onChangec_mail} required/>
   </div> */}



   {/* <div className="form-group">
   <label className="form-label">Channel</label>
   <input  className="form-contact" placeholder="" type="text" value={this.state.c_channel} onChange={this.onChangec_channel} required/>
   </div> */}

  
   {/* <div className="form-group">
   <span> Subject </span>
         <input type="text"     value={this.state.c_subject} onChange={this.onChangec_subject} required />
     </div>
  */}



    {/* <div className="form-group">
    <label className="form-label">Massage </label>
    <input  className="form-contact" placeholder="" type="text"value={this.state.c_massage} onChange={this.onChangec_massage} required />
    </div>

   */}
     

<div className="form-group">
  <button style={{width :'300px' , height:'50px', background:'#257E83', color:'#fff', cursor:'pointer' }}  type="submit" className="submit-btn">Send</button>
  </div>
  </form>
  </div>


  );
    }
  }
export default connect(null,{ addContact })(showContact);


