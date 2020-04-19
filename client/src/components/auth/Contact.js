import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
//import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/qqauth';
import PropTypes from 'prop-types';
 
const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    channel: '',
    subject: '',
    msg:'',

  });
  
  const { name, email, channel, subject, msg } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
  
      register({ name, email, channel, subject, msg  });

      setAlert('MSG Sent Sucsessfuly', 'success');

      setFormData({ ...formData, 
      
        name: '',
        email: '',
        channel: '',
        subject: '',
        msg:''
          
      
      
      });
   
  };

  // if (isAuthenticated) {
  //   return <Redirect to='/dashboard' />;
  // }

  return (
    <Fragment>
      <h1 className='large text-primary'>Contact Us</h1>
      <p className='lead'>
        <i className='fas fa-mobile' /> Get in touch
      </p>
 
      <form className='form' onSubmit={e => onSubmit(e)}>

        <div className='form-group'>Name
          <input
            type='text'
            placeholder=''
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>Email
          <input
            type='email'
            placeholder=''
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
           
        </div>


        <div className='form-group'>channel
          <select
            type='select'
            placeholder=''
            name='channel'
            value={channel}
            onChange={e => onChange(e)}
          >
          <option>Select contact channel</option>
          <option>General inquiries</option>
          <option>become SRF partner</option>
          <option>Relation Team</option>
          <option>Tech Geeks</option>
          <option>Mentoring</option>
          </select>

        </div>



        <div className='form-group'>subject
          <input
            type='text'
            placeholder=''
            name='subject'
            value={subject}
            onChange={e => onChange(e)}
          />
        </div>

        <div className='form-group'>msg
          <textarea
            type='textarea'
            placeholder=''
            name='msg'
            value={msg}
            onChange={e => onChange(e)}
          />
        </div>


         
        
        <input type='submit' className='btn btn-primary' value='Send' />
      </form>
       
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
