import React, { useState,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/QuestionAction';
import { Link } from 'react-router-dom';

const PostForm = ({ addPost }) => {
   
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
      text:'',
      body:'',
      section:'',

          });
          const {
            text,
            body,
            section
          } = formData;

          const onChange = e =>
          setFormData({ ...formData, [e.target.name]: e.target.value });
          const onChangeimage = e => {
            setImage({ image: e.target.files[0] });
            };
          
           const onSubmit = async e => {

          e.preventDefault();
            addPost({ 
              text,
              body,
              section,
              image

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

    <Fragment>
    <Link to='/categories' className='btn btn-primary fontnty-font'
          style={{color:'#fff',fontWeight:'bold',float:''}}
          >
          <i className='fas fa-backward' /> التصنيفات 
          </Link>
    </Fragment>


    <section id="login-reg" >
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
               <div class="form-box">

                   <div class="form-top">
                       <div class="form-top-left">
                       </div>
                       <div class="form-top-right">
                       اضافة تصنيف جديد   <i class="fa fa-plus"></i>
                       </div>
                   </div>

              <div class="form-bottom">
              <form className="login-form"   onSubmit={e => onSubmit(e)} > 
              

              <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="input-group form-group">
              <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='text' value={text} onChange={e => onChange(e)}    autocomplete="off"/>
              <span class="input-group-addon" id="basic-addon1"><label className="form-label">التصنيف </label></span>
              </div>
              </div>


              <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="input-group form-group">
              <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='body' value={body} onChange={e => onChange(e)}    autocomplete="off"/>
              <span class="input-group-addon" id="basic-addon1"><label className="form-label">اسم الرابط  </label></span>
              </div>
              </div>

 

              <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="input-group form-group">
              <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='section' value={section} onChange={e => onChange(e)}    autocomplete="off"/>
              <span class="input-group-addon" id="basic-addon1"><label className="form-label"> القسم  </label></span>
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

                  <div class="col-lg-6 col-md-12 col-sm-12" style={{float:"right"}}>
                        <div class="input-group form-group">
                          <input 
                          className="form-control"
                          placeholder="Upload an image"
                          type="file"
                          name="file"
                          //value={image} 
                          onChange={uploadImage} />
                        <span class="input-group-addon" id="basic-addon1"><label className="form-label">صورة التصنيف </label></span>
                        </div>
                        </div>
                      <div class="col-lg-4 col-md-12 col-sm-12">
                      
                    {loading ? (
                          <h3>Loading...</h3>
                        ) : (
                          <Fragment>
                          <img src={image} style={{ width: '120px', height:'80px',float:'right',marginBottom:'10px' }} />
                          <input   type="hidden" name='image' value={image}  onChange={onChangeimage} />
                          </Fragment>

                        )}
                      
                    </div>

{/* ------------------------------------------------------------------------------------ */}

 

            <div className="form-group">
              <button    type="submit" className="momadbtn">أضافة</button>
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
