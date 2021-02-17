import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    validity:'',
   
  });
  
  const { validity,name, email, password, password2 , location,cv } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password, validity,location, cv });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
 
  return (
    <Fragment>
       
    
       
<section id="login-reg" >
        
        <div class="row">
           
            <div class="col-lg-12 col-md-12 col-sm-12">
               <div class="form-box">
                   <div class="form-top" style={{backgroundColor:'#363636'}}>
                       <div class="form-top-left">
                            
                       </div>
                       <div class="form-top-right">
                       إنشاء حساب <i class="fa fa-pencil"></i>
                       </div>
                   </div> 
                   <div class="form-bottom"  style={{backgroundColor:'#58ACFA'}}>
                       <form role="form" action="" class="login-form" onSubmit={e => onSubmit(e)}>

                            
                       <div class="input-group form-group">
                               
                               <input type="text" class="form-control" placeholder=" الاسم" aria-describedby="basic-addon1" autocomplete="off"
                                name='name'
                                value={name}
                                onChange={e => onChange(e)}
                                style={{color:'#000',fontWeight:'bold',float:'right',direction:'rtl'}}
                               />
                        <span class="input-group-addon" id="basic-addon1"><i class="fa fa-user"></i></span>
                           </div>

                           {/* <div class="input-group form-group">
                               
                               <input type="text" class="form-control" placeholder="الاسم الثاني " aria-describedby="basic-addon1"/>
             <span class="input-group-addon" id="basic-addon1"><i class="fa fa-user"></i></span>
                           </div> */}


                           <div class="input-group form-group">
                               
                               <input type="text" class="form-control" placeholder="البريد الالكتروني" aria-describedby="basic-addon1" autocomplete="off"
                                name='email'
                                value={email}
                                onChange={e => onChange(e)}
                                style={{color:'#000',fontWeight:'bold',float:'right',direction:'rtl'}}
                               />
             <span class="input-group-addon" id="basic-addon1"><i class="fa fa-envelope"></i></span>
                           </div>

                           <div class="input-group form-group">
                               
                               <input type="password" class="form-control" placeholder="كلمة المرور" aria-describedby="basic-addon1" autocomplete="off"
                               name='password'
                               value={password}
                               onChange={e => onChange(e)}
                               style={{color:'#000',fontWeight:'bold',float:'right',direction:'rtl'}}
                               />
             <span class="input-group-addon" id="basic-addon1"><i class="fa fa-key"></i></span>
                           </div>


                           <div class="input-group form-group">
                               
                               <input type="password" class="form-control" placeholder="تأكيد كلمة المرور" aria-describedby="basic-addon1" autocomplete="off"
                                name='password2'
                                value={password2}
                                onChange={e => onChange(e)}
                                style={{color:'#000',fontWeight:'bold',float:'right',direction:'rtl'}}
                               />
                          <span class="input-group-addon" id="basic-addon1"><i class="fa fa-key"></i></span>
                           </div>


                           



                           






                           <div class="input-group form-group">
                               
                               <input type="hidden" class="form-control" placeholder="الصلاحية" aria-describedby="basic-addon1"
                               name='validity'
                               value={validity}
                               onChange={e => onChange(e)}
                               style={{color:'#000',fontWeight:'bold',float:'right',direction:'rtl'}}
                               />
                            </div>
 
        
                        
           
                           <button style={{backgroundColor:'#363636'}} type="submit" class="momadbtn">إشترك</button>
                           <a href="/login"><h3>تسجيل الدخول  </h3></a>
                            
                           <a href="/reset"><h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                  </h3></a>

                                <a href="/reset" ><h3>شروط وأحكام   </h3></a>
                            
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
