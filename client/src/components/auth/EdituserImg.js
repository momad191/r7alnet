import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter ,Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
 
   
 
const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
  match,
  isAuthenticated
}) => {
  const [avatar, setImage] = useState('')
   const [waiting, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    avatar: ''
  });

  useEffect(() => {
    getCurrentProfile(match.params.id);
    setFormData({
    //  name: loading || !profile.name ? '' : profile.name,
    //  avatar: loading || !profile.avatar ? '' : profile.avatar,

    });
  }, [loading, getCurrentProfile]);

  
  const {
    name,
    // avatar
  } = formData;

  

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


    const onChangeimage = e => {
      setImage({ avatar: e.target.files[0] });
      };

  const onSubmit = e => {
    e.preventDefault();
   // createProfile(formData, history, true);

    createProfile({ 
        name,
        avatar
    })

   
      return <Redirect to='/' />;
  
  };
 


  
  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'r7alProfiles')
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
          
<section id="login-reg" >
        
        <div class="row">
           
            <div class="col-lg-12 col-md-12 col-sm-12">
               <div class="form-box">

                   <div class="form-top"  style={{backgroundColor:'#363636'}}>
                       <div class="form-top-left">
                          
                       </div>
                       <div class="form-top-right">
                       تعديل الصورة   <i class="fa fa-pencil"></i>
                       </div>
                   </div>

     <div class="form-bottom" style={{height:'250px',backgroundColor:'#58ACFA'}}>

      <form className='form' onSubmit={e => onSubmit(e)}>

    


        <div className='form-group'>
         
          <input
          
            type='hidden'
            placeholder='A short bio of yourself'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
          
        </div>


        {/* <div className='form-group'>
        avatar
          <input
            type='text'
            placeholder='A short bio of yourself'
            name='avatar'
            value={avatar}
            onChange={e => onChange(e)}
          />
          
        </div> */}


         {/* ---------------------------------------------رفع الصورة الرئيسية --------------------------------------- */}

   <div class="col-lg-12 col-md-12 col-sm-12" style={{float:"right",height:'auto'}}>
      <div class="input-group form-group">
         <input 
         style={{cursor:'pointer',width:'20%',float:'right'}}
        className="form-control"
        placeholder="Upload an image"
        type="file"
        name="file"
        //value={image} 
        onChange={uploadImage} />
       <span class="input-group-addon" id="basic-addon1"><label className="form-label"
        style={{fontSize:'15px',fontWeight:'bold',color:'#000'}}
       >رفع الصورة </label></span>
       
      </div>
      </div>
  
    <div class="col-lg-12 col-md-12 col-sm-12">
    
   {waiting ? (
        <h3>Loading...</h3>
      ) : (
        <Fragment>
          
        <img  src={avatar} style={{ width: '120px', height:'80px',float:'right',marginBottom:'10px',borderRadius:'5%' }} />
        
        <input    type="hidden" name='avatar' value={avatar}  onChange={onChangeimage} />
        </Fragment>

      )}
    
   </div>


        <input type='submit' className="momadbtn" value='تحديث'
        style={{cursor:'pointer',width:'100%',float:'',backgroundColor:'#363636'}}
        />

      </form>
      </div>
    </div>
    </div>
    </div>
    </section>
    </Fragment>
     
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
 
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile));
 