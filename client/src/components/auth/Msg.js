import React, { useState,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/qqauth';
import { Link } from 'react-router-dom';
  
const PostForm = ({ addPost }) => {
   
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
      name:'',
      email:'',
      title:'',
      msg:'',

          });
          const {
            name,
            email,
            title,
            msg
          } = formData;

          const onChange = e =>
          setFormData({ ...formData, [e.target.name]: e.target.value });

         
           const onSubmit = async e => {

          e.preventDefault();
            addPost({ 
              name,
              email,
              title,
              msg

          });
        };
          
        const uploadImage = async e => {
          const files = e.target.files
          const data = new FormData()
          data.append('file', files[0])
          data.append('upload_preset', 'magazine')
          setLoading(true)
          const res = await fetch(
            'https://api.cloudinary.com/v1_1/momad191/image/upload',
            {
              method: 'POST',
              body: data
            }
          )
          const file = await res.json()
      
          setImage(file.secure_url)
          setLoading(false)
        }

  return (
    <Fragment> 

    {/* <Fragment>
    <Link to='/' className='btn btn-primary fontnty-font'
          style={{color:'#fff',fontWeight:'bold',float:''}}
          >
          <i className='fas fa-backward' /> رجوع 
          </Link>
    </Fragment> */}
 

    <section id="login-reg" >
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
               <div class="form-box">

                   <div class="form-top" style={{backgroundColor:'#363636'}}>
                       <div class="form-top-left">
                       </div>
                       <div class="form-top-right">
                       ارسل رسالتك   <i class="fa fa-envelope"></i>
                       </div>
                   </div>

              <div class="form-bottom" style={{backgroundColor:'#58ACFA'}}>
              <form className="login-form"   onSubmit={e => onSubmit(e)} > 
              


              <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="input-group form-group">
              <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="email" name='email' value={email} onChange={e => onChange(e)}  required  autocomplete="off"/>
              <span class="input-group-addon" id="basic-addon1"><label className="form-label">البريد الالكتروني  </label></span>
              </div>
              </div>



              <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="input-group form-group">
              <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='name' value={name} onChange={e => onChange(e)}  required  autocomplete="off"/>
              <span class="input-group-addon" id="basic-addon1"><label className="form-label">الاسم  </label></span>
              </div>
              </div>


             


              <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="input-group form-group">
              <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='title' value={title} onChange={e => onChange(e)}  required  autocomplete="off"/>
              <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرسالة     </label></span>
              </div>
              </div>


              <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="input-group form-group">
              <textarea  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='msg' value={msg} onChange={e => onChange(e)}  required  autocomplete="off"/>
              <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرسالة     </label></span>
              </div>
              </div>
 

{/*         
              <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="input-group form-group">
              <select   style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}} id='body'    className=""    name='body'  value={body}  onChange={e => onChange(e)} required>
              <option value="اختر التصنيف">
                اختر الحالة   </option>
              <option value="yes"  > 
              مفعل
              </option>
              <option value="no">
                غير مفعل
              </option>
                </select>
              <span class="input-group-addon" id="basic-addon1"><label className="form-label">الحالة  </label></span>
              </div>
              </div>
 */}




 {/* ---------------------------------------------رفع الصورة الرئيسية --------------------------------------- */}

 
{/* ------------------------------------------------------------------------------------ */}

  

            <div className="form-group">
              <button style={{backgroundColor:'#363636'}}    type="submit" className="momadbtn">ارسال</button>
              </div>

           </form>              
    </div>
    </div>
    </div>
    </div>
    
    </section>
    </Fragment>

    
  );
  
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
