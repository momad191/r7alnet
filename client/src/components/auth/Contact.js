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

  
<section id="login-reg" >
        
        <div class="row">
           
            <div class="col-lg-12 col-md-12 col-sm-12">
               <div class="form-box">
                   <div class="form-top">
                       <div class="form-top-left">
                          
                       </div>
                       <div class="form-top-right">
                       اتصل بنا <i class="fa fa-phone"></i>   
                       </div>

                       

                   </div>
                   <div class="form-bottom">
                       <form role="form" action="" class="login-form">
                            
                       <div class="input-group form-group">
                               
                               <input type="text" class="form-control" placeholder="الاسم الاول" aria-describedby="basic-addon1"/>
             <span class="input-group-addon" id="basic-addon1"><i class="fa fa-user"></i></span>
                           </div>

                           <div class="input-group form-group">
                               
                               <input type="text" class="form-control" placeholder="الاسم الثاني " aria-describedby="basic-addon1"/>
             <span class="input-group-addon" id="basic-addon1"><i class="fa fa-user"></i></span>
                           </div>


                           <div class="input-group form-group">
                               
                               <input type="text" class="form-control" placeholder="البريد الالكتروني" aria-describedby="basic-addon1"/>
             <span class="input-group-addon" id="basic-addon1"><i class="fa fa-envelope"></i></span>
                           </div>

                           <div class="input-group form-group">
                               
                               <input type="number" class="form-control" placeholder="الهاتف" aria-describedby="basic-addon1"/>
             <span class="input-group-addon" id="basic-addon1"><i class="fa fa-phone"></i></span>
                           </div>

                           <div class="input-group form-group">
                               
                               <input type="text" class="form-control" placeholder="عنوان الرسالة" aria-describedby="basic-addon1"/>
             <span class="input-group-addon" id="basic-addon1"><i class="fa fa-pencil"></i></span>
                           </div>


                           <div class="input-group form-group">
                               
                               <textarea type="text" class="form-control" placeholder="الرسالة" aria-describedby="basic-addon1" rows="5"/>
             <span class="input-group-addon" id="basic-addon1"><i class="fa fa-envelope"></i></span>
                           </div>

                            

 
                        
           
                           <button type="submit" class="momadbtn">ارسل</button>
                             
                            
                        </form>
                      
                   </div>
               </div>

           </div>
           </div>
        
 
           

</section>

     
 
     
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
