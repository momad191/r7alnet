import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
 
  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
 
<section id="login-reg">
             <div class="row">
                 <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-box">

                        <div class="form-top" style={{backgroundColor:'#363636'}}>
                              <div class="form-top-right">
                              الدخول   <i class="fa fa-key"></i>
                              </div>
                        </div>

                        <div class="form-bottom"  style={{backgroundColor:'#58ACFA'}}>
                            <form role="form" action="" class="login-form" onSubmit={e => onSubmit(e)}>
                                 
                                
                              <div class="input-group form-group">
                                    <input type="email" class="form-control" placeholder="البريد الالكتروني" aria-describedby="basic-addon1"
                                     name='email'
                                     value={email}
                                     onChange={e => onChange(e)}
                                     required
                                     style={{color:'#000',fontWeight:'bold',float:'right',direction:'rtl'}}
                                    />
								                  	<span class="input-group-addon" id="basic-addon1"><i class="fa fa-envelope"></i></span>
                              </div>


                              <div class="input-group form-group"> 
                                    <input type="password" class="form-control" placeholder="كلمة المرور" aria-describedby="basic-addon1"
                                    name='password'
                                    value={password}
                                    onChange={e => onChange(e)}
                                    minLength='6'
                                    style={{color:'#000',fontWeight:'bold',float:'right',direction:'rtl'}}
                                    />
							                    	<span class="input-group-addon" id="basic-addon1"><i class="fa fa-key"></i></span>
                              </div>
						
                             
								
                                <button style={{backgroundColor:'#363636'}} type="submit" class="momadbtn">دخول</button>
                                <a href="/reset"><h3>نسيت كلمة المرور  </h3></a> 
                                <a href="/reset"><h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                  </h3></a>
                                <a href="/register" ><h3>الإشتراك   </h3></a>
                             </form> 
                        </div>
                    </div>
                  </div>
                </div>
    </section>

      
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
