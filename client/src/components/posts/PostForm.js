import React, { useState,useEffect ,Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import { Link } from 'react-router-dom';
import axios from 'axios';
 
 

 
 
  
const PostForm = ({ addPost }) => {

  const [categories11,setCategory11]= useState([])
  const [subcategories22,setSubCategory22]= useState([])

  
useEffect(()=>{
    
    axios.get('/api/categories')
    .then(res => {
      console.log(res);
    setCategory11(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
 
 
    axios.get('/api/categories/sumsub')
    .then(res => {
      console.log(res);
    setSubCategory22(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  
},[])


  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const [displayInputs1, toggleInputs1] = useState(false);
  const [displayInputs2, toggleInputs2] = useState(false);
  const [displayInputs3, toggleInputs3] = useState(false);
  const [displayInputs4, toggleInputs4] = useState(false);
  const [displayInputs5, toggleInputs5] = useState(false);
  const [displayInputs6, toggleInputs6] = useState(false);
  const [displayInputs7, toggleInputs7] = useState(false);
  const [displayInputs8, toggleInputs8] = useState(false);
  const [displayInputs9, toggleInputs9] = useState(false);
  const [displayInputs10,toggleInputs10] = useState(false);
  const [displayInputs11,toggleInputs11] = useState(false);
  const [displayInputs12,toggleInputs12] = useState(false);
  const [displayInputs13,toggleInputs13] = useState(false);
  const [displayInputs14,toggleInputs14] = useState(false);
  const [displayInputs15,toggleInputs15] = useState(false);
  const [displayInputs16,toggleInputs16] = useState(false);
  const [displayInputs17,toggleInputs17] = useState(false);
  const [displayInputs18,toggleInputs18] = useState(false);

  const [displayInputs19,toggleInputs19] = useState(false);
  const [displayInputs20,toggleInputs20] = useState(false);
  const [displayInputs21,toggleInputs21] = useState(false);
  const [displayInputs22,toggleInputs22] = useState(false);
  const [displayInputs23,toggleInputs23] = useState(false);
  const [displayInputs24,toggleInputs24] = useState(false);
  const [displayInputs25,toggleInputs25] = useState(false);
  const [displayInputs26,toggleInputs26] = useState(false);
  const [displayInputs27,toggleInputs27] = useState(false);
  const [displayInputs28,toggleInputs28] = useState(false);
  const [displayInputs29,toggleInputs29] = useState(false);
  const [displayInputs30,toggleInputs30] = useState(false);

 
   
  const [image, setImage] = useState('')
  const [image1, setImage1] = useState('')

  const [loading, setLoading] = useState(false)
   
    const [formData, setFormData] = useState({
      title:'',
      body:'',
      writer:'',
      P_Img:'',
      Publish:'',
      CategoryName:'',
      Categoryid:'',
      SubName:'',
      Subid:'',
      video:'',
      Keywords:'', 
      short:'',
      Main_paragraph:'',
  
      title1:'',
      title2:'',
      title3:'',
      title4:'',
      title5:'',
      title6:'',
      title7:'',
      title8:'',
      title9:'',
      title10:'',
      title11:'',
      title12:'',
      title13:'',
      title14:'',
      title15:'',
      title16:'',
      title17:'',
      title18:'',
      title19:'',
      title20:'',
      title21:'',
      title22:'',
      title23:'',
      title24:'',
      title25:'',
      title26:'',
      title27:'',
      title28:'',
      title29:'',
      title30:'',

      Paragraph1:'',
      Paragraph2:'',
      Paragraph3:'',
      Paragraph4:'',
      Paragraph5:'',
      Paragraph6:'',
      Paragraph7:'',
      Paragraph8:'',
      Paragraph9:'',
      Paragraph10:'',
      Paragraph11:'',
      Paragraph12:'',
      Paragraph13:'',
      Paragraph14:'',
      Paragraph15:'',
      Paragraph16:'',
      Paragraph17:'',
      Paragraph18:'',
      Paragraph19:'',
      Paragraph20:'',
      Paragraph21:'',
      Paragraph22:'',
      Paragraph23:'',
      Paragraph24:'',
      Paragraph25:'',
      Paragraph26:'',
      Paragraph27:'',
      Paragraph28:'',
      Paragraph29:'',
      Paragraph30:'',

      pic1:'',
      pic2:'',
      pic3:'',
      pic4:'',
      pic5:'',
      pic6:'',
      pic7:'',
      pic8:'',
      pic9:'',
      pic10:'',
      pic11:'',
      pic12:'',
      pic13:'',
      pic14:'',
      pic15:'',
      pic16:'',
      pic17:'',
      pic18:'',
      pic19:'',
      pic20:'',
      pic21:'',
      pic22:'',
      pic23:'',
      pic24:'',
      pic25:'',
      pic26:'',
      pic27:'',
      pic28:'',
      pic29:'',
      pic30:'',



      link1:'',
      link2:'',
      link3:'',
      link4:'',
      link5:'',
      link6:'',
      link7:'',
      link8:'',
      link9:'',
      link10:'',
      link11:'',
      link12:'',
      link13:'',
      link14:'',
      link15:'',
      link16:'',
      link17:'',
      link18:'',
      link19:'',
      link20:'',
      link21:'',
      link22:'',
      link23:'',
      link24:'',
      link25:'',
      link26:'',
      link27:'',
      link28:'',
      link29:'',
      link30:'',


      lt1:'',
      lt2:'',
      lt3:'',
      lt4:'',
      lt5:'',
      lt6:'',
      lt7:'',
      lt8:'',
      lt9:'',
      lt10:'',
      lt11:'',
      lt12:'',
      lt13:'',
      lt14:'',
      lt15:'',
      lt16:'',
      lt17:'',
      lt18:'',
      lt19:'',
      lt20:'',
      lt21:'',
      lt22:'',
      lt23:'',
      lt24:'',
      lt25:'',
      lt26:'',
      lt27:'',
      lt28:'',
      lt29:'',
      lt30:'',
      



             
          });
          const {
                title,
                body,
                writer,
                P_Img,
                Publish,
                CategoryName,
                Categoryid,
                SubName,
                Subid,
                video,
                Keywords,
                short,
                Main_paragraph,

                title1,
                title2,
                title3,
                title4,
                title5,
                title6,
                title7,
                title8,
                title9,
                title10,
                title11,
                title12,
                title13,
                title14,
                title15,
                title16,
                title17,
                title18,
                title19,
                title20,
                title21,
                title22,
                title23,
                title24,
                title25,
                title26,
                title27,
                title28,
                title29,
                title30,

                Paragraph1,
                Paragraph2,
                Paragraph3,
                Paragraph4,
                Paragraph5,
                Paragraph6,
                Paragraph7,
                Paragraph8,
                Paragraph9,
                Paragraph10,
                Paragraph11,
                Paragraph12,
                Paragraph13,
                Paragraph14,
                Paragraph15,
                Paragraph16,
                Paragraph17,
                Paragraph18,
                Paragraph19,
                Paragraph20,
                Paragraph21,
                Paragraph22,
                Paragraph23,
                Paragraph24,
                Paragraph25,
                Paragraph26,
                Paragraph27,
                Paragraph28,
                Paragraph29,
                Paragraph30,


                pic1,
                pic2,
                pic3,
                pic4,
                pic5,
                pic6,
                pic7,
                pic8,
                pic9,
                pic10,
                pic11,
                pic12,
                pic13,
                pic14,
                pic15,
                pic16,
                pic17,
                pic18,
                pic19,
                pic20,
                pic21,
                pic22,
                pic23,
                pic24,
                pic25,
                pic26,
                pic27,
                pic28,
                pic29,
                pic30,


                link1,
                link2,
                link3,
                link4,
                link5,
                link6,
                link7,
                link8,
                link9,
                link10,
                link11,
                link12,
                link13,
                link14,
                link15,
                link16,
                link17,
                link18,
                link19,
                link20,
                link21,
                link22,
                link23,
                link24,
                link25,
                link26,
                link27,
                link28,
                link29,
                link30,



                lt1,
                lt2,
                lt3,
                lt4,
                lt5,
                lt6,
                lt7,
                lt8,
                lt9,
                lt10,
                lt11,
                lt12,
                lt13,
                lt14,
                lt15,
                lt16,
                lt17,
                lt18,
                lt19,
                lt20,
                lt21,
                lt22,
                lt23,
                lt24,
                lt25,
                lt26,
                lt27,
                lt28,
                lt29,
                lt30,
        
        
        

                
          } = formData;
 
          const onChange = e =>
          setFormData({ ...formData, [e.target.name]: e.target.value });

          const onselect = e =>
          setFormData({ ...formData, [e.target.id]: e.target.value });

 

          const onChangeimage = e => {
            setImage({ image: e.target.files[0] });
            };

            

           
        

           const onSubmit = async e => {
          
              e.preventDefault();
 

            addPost({ 
              title,
              body,
                writer,
                P_Img,
                Publish,
                CategoryName,
                Categoryid,
                SubName,
                Subid,
                video,
                Keywords,
                short,
                Main_paragraph,
                image,


                title1,
                title2,
                title3,
                title4,
                title5,
                title6,
                title7,
                title8,
                title9,
                title10,
                title11,
                title12,
                title13,
                title14,
                title15,
                title16,
                title17,
                title18,
                title19,
                title20,
                title21,
                title22,
                title23,
                title24,
                title25,
                title26,
                title27,
                title28,
                title29,
                title30,


                Paragraph1,
                Paragraph2,
                Paragraph3,
                Paragraph4,
                Paragraph5,
                Paragraph6,
                Paragraph7,
                Paragraph8,
                Paragraph9,
                Paragraph10,
                Paragraph11,
                Paragraph12,
                Paragraph13,
                Paragraph14,
                Paragraph15,
                Paragraph16,
                Paragraph17,
                Paragraph18,
                Paragraph19,
                Paragraph20,
                Paragraph21,
                Paragraph22,
                Paragraph23,
                Paragraph24,
                Paragraph25,
                Paragraph26,
                Paragraph27,
                Paragraph28,
                Paragraph29,
                Paragraph30,

                pic1,
                pic2,
                pic3,
                pic4,
                pic5,
                pic6,
                pic7,
                pic8,
                pic9,
                pic10,
                pic11,
                pic12,
                pic13,
                pic14,
                pic15,
                pic16,
                pic17,
                pic18,
                pic19,
                pic20,
                pic21,
                pic22,
                pic23,
                pic24,
                pic25,
                pic26,
                pic27,
                pic28,
                pic29,
                pic30,


                link1,
                link2,
                link3,
                link4,
                link5,
                link6,
                link7,
                link8,
                link9,
                link10,
                link11,
                link12,
                link13,
                link14,
                link15,
                link16,
                link17,
                link18,
                link19,
                link20,
                link21,
                link22,
                link23,
                link24,
                link25,
                link26,
                link27,
                link28,
                link29,
                link30,



                lt1,
                lt2,
                lt3,
                lt4,
                lt5,
                lt6,
                lt7,
                lt8,
                lt9,
                lt10,
                lt11,
                lt12,
                lt13,
                lt14,
                lt15,
                lt16,
                lt17,
                lt18,
                lt19,
                lt20,
                lt21,
                lt22,
                lt23,
                lt24,
                lt25,
                lt26,
                lt27,
                lt28,
                lt29,
                lt30,
  
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
<Link to='/posts' className='btn btn-primary fontnty-font'
      style={{color:'#fff',fontWeight:'bold',float:''}}
      
      >
      <i className='fas fa-backward' /> المنشورات 
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
                       اضافة موضوع   <i class="fa fa-pencil"></i>
                       </div>
                   </div>

     <div class="form-bottom">
   
   <form className="login-form"   onSubmit={e => onSubmit(e)} > 

   

   <div class="col-lg-12 col-md-12 col-sm-12">
   <div class="input-group form-group">
   <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='title' value={title} onChange={e => onChange(e)}required   autocomplete="off"/>
   <span class="input-group-addon" id="basic-addon1"><label className="form-label">العنوان الرئيسي </label></span>
   </div>
   </div>

 
   <div class="col-lg-12 col-md-12 col-sm-12">
   <div class="input-group form-group">
   <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='body' value={body} onChange={e => onChange(e)}required   autocomplete="off"/>
   <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط </label></span>
   </div>
   </div>

 
   {/* <div class="col-lg-12 col-md-12 col-sm-12">
   <div class="input-group form-group">
   <input   style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}} className="form-control" placeholder="" type="text" name='writer' value={writer} onChange={e => onChange(e)}required aria-describedby="basic-addon1" autocomplete="off"/>
   <span class="input-group-addon" id="basic-addon1"><label className="form-label">اسم الكاتب  </label></span>
   </div>
   </div> */}
  <div class="col-lg-6 col-md-6 col-sm-12">
   <div class="input-group form-group">
   <select  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}   className="" name='Subid'  value={Subid} onChange={e => onChange(e)} required>
   <option  >اختر </option>
   {subcategories22.map(sub=>(
  <option  required  value={sub._id}> {sub.subCategory} </option>
    ))}
     </select>
   <span class="input-group-addon" id="basic-addon1"><label className="form-label">  التبويب الفرعي  </label></span>
   </div>
   </div>


   <div class="col-lg-6 col-md-6 col-sm-12">
   <div class="input-group form-group">
   <select  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}   className="" name='SubName'  value={SubName} onChange={e => onChange(e)} required>
   <option  >اختر </option>
   {subcategories22.map(sub=>(
  <option  required  value={sub.subCategory}> {sub.subCategory} </option>
    ))}
     </select>
   <span class="input-group-addon" id="basic-addon1"><label className="form-label">  تأكيد التبويب الفرعي  </label></span>
   </div>
   </div>


    

 

   <div class="col-lg-6 col-md-6 col-sm-12">
   <div class="input-group form-group">
   <select  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="" name='Categoryid'  value={Categoryid} onChange={e => onChange(e)} required>
   <option >اختر </option>
   {categories11.map(catego=>(
  <option required value={catego._id}> {catego.text} </option>
    ))}
     </select>
   <span class="input-group-addon" id="basic-addon1"><label className="form-label">   التبويب الاساسي  </label></span>
   </div>
   </div>

   <div class="col-lg-6 col-md-6 col-sm-12">
   <div class="input-group form-group">
   <select  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}} id={CategoryName} className="" name='CategoryName'  value={CategoryName} onChange={e => onChange(e)} required>
   <option >اختر </option>
   {categories11.map(catego=>(
  <option required value={catego.text}> {catego.text} </option>
    ))}
     </select>
   <span class="input-group-addon" id="basic-addon1"><label className="form-label">  تأكيد التبويب الاساسي  </label></span>
   </div>
   </div>




 



   
 

{/*  
 
   <div class="col-lg-6 col-md-6 col-sm-12">
   <div class="input-group form-group">
   <select  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}} id='Publish'    className=""    name='Publish'  value={Publish}  onChange={e => onChange(e)} required>

   <option value="yes" > 
   نشر
   </option>
   <option value="no">
عدم نشر

   </option>
     </select>


   <span class="input-group-addon" id="basic-addon1"><label className="form-label">النشر  </label></span>
   </div>
   </div> */}

  
<div class="col-lg-4 col-md-12 col-sm-12" style={{float:'right'}}>
<div class="input-group form-group" style={{float:'right'}}>

     <input className="form-control"  type="radio" id="Publish1" name='Publish'  value='yes'  onChange={e => onChange(e)}  />
     <span style={{backgroundColor:'green',color:'#fff'}} for="Publish1" class="input-group-addon" id="basic-addon1"><label  for="Publish1" className="form-label">  النشر  </label></span>

 
     <input className="form-control"  type="radio" id="Publish2"  name='Publish' value='no'  onChange={e => onChange(e)} />
     <span style={{backgroundColor:'red',color:'#fff'}} for="Publish2" class="input-group-addon" id="basic-addon1"><label for="Publish2" className="form-label" >عدم النشر  </label></span>
 
 </div>
 </div>


   <div class="col-lg-12 col-md-12 col-sm-12">
   <div class="input-group form-group">
   <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}} className="form-control" placeholder="" type="text" name='video'  value={video} onChange={e => onChange(e)} aria-describedby="basic-addon1" autocomplete="off"/>
   <span class="input-group-addon" id="basic-addon1"><label className="form-label">الفيديو  </label></span>
   </div>
   </div>



   
   <div class="col-lg-12 col-md-12 col-sm-12">
   <div class="input-group form-group">
   <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}} className="form-control" placeholder="" type="text" name='Keywords'  value={Keywords} onChange={e => onChange(e)} aria-describedby="basic-addon1" autocomplete="off"/>
   <span class="input-group-addon" id="basic-addon1"><label className="form-label">الكلمات المفتاحية  </label></span>
   </div>
   </div>


 
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
       <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة الرئيسية </label></span>
       
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

 
  <div class="col-lg-12 col-md-12 col-sm-12" style={{float:"right"}}>
   <div class="input-group form-group">
   <input  style={{width:'100%',color:'#000',fontSize:'13px',fontWeight:'bold',borderColor:'#cacaca'}} className="form-control" placeholder="" type="text" name='short' value={short}   onChange={e => onChange(e)} required aria-describedby="basic-addon1" autocomplete="off" maxlength="141"/>
   <span class="input-group-addon" id="basic-addon1"><label className="form-label">ملخص </label></span>
   </div>
   </div>


   <div class="col-lg-12 col-md-12 col-sm-12">
   <div class="input-group form-group">
   <textarea  style={{width:'100%',color:'#000',fontSize:'13px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" name='Main_paragraph'  value={Main_paragraph}  onChange={e => onChange(e)} required aria-describedby="basic-addon1" autocomplete="off"/>
   <span class="input-group-addon" id="basic-addon1"><label className="form-label"> فقرة رئيسية </label></span>
   </div>
   </div>

 
   
{/* -----------------------------------------------زر اضافة فقرات اخرى-------------------------------------- */}
   <div className='my-2'>
          <button style={{backgroundColor:'#000',fontSize:'15px'}}
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='momadbtn'
          >
          +  اضافة فقرات اخرى 
          </button>
          
        </div>


{displaySocialInputs && (
  
  

     


  <Fragment>

    {/* -----------------------------------------------اضافة الفقرة الاولى-------------------------------------- */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs1(!displayInputs1)}
  type='button'
  className='momadbtn'
>
فقرة 1
</button>
</div>


{displayInputs1 && (
  <Fragment>
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='title1' value={title1}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 1 </label></span>
  </div>
  </div>

  


  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph1' value={Paragraph1}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 1 </label></span>
  </div>
  </div>

  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic1' value={pic1}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 1 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link1' value={link1}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 1 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt1' value={lt1}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 1 </label></span>
  </div>
  </div>

  </Fragment>
)}




{/* -------------------------------------------الفقرة 2------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs2(!displayInputs2)}
  type='button'
  className='momadbtn'
>
فقرة 2
</button>
</div>

{displayInputs2 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title2' value={title2}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 2 </label></span>
  </div>
  </div>
  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph2'  value={Paragraph2}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 2 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic2' value={pic2}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 2 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link2' value={link2}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 2 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt2' value={lt2}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 2 </label></span>
  </div>
  </div>


  </Fragment>
 )}





{/* -------------------------------------------الفقرة 3------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs3(!displayInputs3)}
  type='button'
  className='momadbtn'
>
فقرة 3
</button>
</div>

{displayInputs3 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title3' value={title3}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 3 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph3'  value={Paragraph3}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 3 </label></span>
  </div>
  </div>



  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic3' value={pic3}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 3 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link3' value={link3}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 3 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt3' value={lt3}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 3 </label></span>
  </div>
  </div>


  </Fragment>
 )}







{/* -------------------------------------------الفقرة 4------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs4(!displayInputs4)}
  type='button'
  className='momadbtn'
>
فقرة 4
</button>
</div>

{displayInputs4 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title4' value={title4}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label"> عنوان 4 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph4'  value={Paragraph4}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 4 </label></span>
  </div>
  </div>



  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic4' value={pic4}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 4 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link4' value={link4}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 4 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt4' value={lt4}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 4 </label></span>
  </div>
  </div>


  </Fragment>
 )}






{/* -------------------------------------------الفقرة 5------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs5(!displayInputs5)}
  type='button'
  className='momadbtn'
>
فقرة 5
</button>
</div>

{displayInputs5 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title5' value={title5}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 5 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph5'  value={Paragraph5}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 5 </label></span>
  </div>
  </div>



  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic5' value={pic5}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 5 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link5' value={link5}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 5 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt5' value={lt5}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 5 </label></span>
  </div>
  </div>


  </Fragment>
 )}






{/* -------------------------------------------الفقرة 6------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs6(!displayInputs6)}
  type='button'
  className='momadbtn'
>
فقرة 6
</button>
</div>

{displayInputs6 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title6' value={title6}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 6 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph6'  value={Paragraph6}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 6 </label></span>
  </div>
  </div>



  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic6' value={pic6}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 6 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link6' value={link6}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 6 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt6' value={lt6}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 6 </label></span>
  </div>
  </div>

  </Fragment>
 )}






{/* -------------------------------------------الفقرة 7------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs7(!displayInputs7)}
  type='button'
  className='momadbtn'
>
فقرة 7
</button>
</div>

{displayInputs7 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title7' value={title7}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 7 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph7'  value={Paragraph7}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 7 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic7' value={pic7}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 7 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link7' value={link7}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 7 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt7' value={lt7}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 7 </label></span>
  </div>
  </div>


  </Fragment>
 )}





{/* -------------------------------------------الفقرة 8------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs8(!displayInputs8)}
  type='button'
  className='momadbtn'
>
فقرة 8
</button>
</div>

{displayInputs8 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title8' value={title8}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 8 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph8'  value={Paragraph8}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 8 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic8' value={pic8}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 8 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link8' value={link8}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 8 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt8' value={lt8}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 8 </label></span>
  </div>
  </div>

  </Fragment>
 )}





{/* -------------------------------------------الفقرة 9------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs9(!displayInputs9)}
  type='button'
  className='momadbtn'
>
فقرة 9
</button>
</div>

{displayInputs9 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title9' value={title9}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 9 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph9'  value={Paragraph9}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 9 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic9' value={pic9}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 9 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link9' value={link9}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 9 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt9' value={lt9}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 9 </label></span>
  </div>
  </div>

  </Fragment>
 )}






{/* -------------------------------------------الفقرة 10------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs10(!displayInputs10)}
  type='button'
  className='momadbtn'
>
فقرة 10
</button>
</div>

{displayInputs10 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title10' value={title10}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 10 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph10'  value={Paragraph10}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 10 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic10' value={pic10}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 10 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link10' value={link10}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 10 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt10' value={lt10}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 10 </label></span>
  </div>
  </div>


  </Fragment>
 )}





{/* -------------------------------------------الفقرة 11------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs11(!displayInputs11)}
  type='button'
  className='momadbtn'
>
فقرة 11
</button>
</div>

{displayInputs11 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title11' value={title11}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 11 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph11'  value={Paragraph11}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 11 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic11' value={pic11}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 11 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link11' value={link11}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 11 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt11' value={lt11}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 11 </label></span>
  </div>
  </div>

  </Fragment>
 )}





{/* -----------------------------------------الفقرة 12------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs12(!displayInputs12)}
  type='button'
  className='momadbtn'
>
فقرة 12
</button>
</div>

{displayInputs12 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title12' value={title12}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 12 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph12'  value={Paragraph12}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 12 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic12' value={pic12}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 12 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link12' value={link12}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 12 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt12' value={lt12}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 12 </label></span>
  </div>
  </div>


  </Fragment>
 )}






{/* -----------------------------------------الفقرة 13------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs13(!displayInputs13)}
  type='button'
  className='momadbtn'
>
فقرة 13
</button>
</div>

{displayInputs13 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title13' value={title13}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 13 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph13'  value={Paragraph13}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 13 </label></span>
  </div>
  </div>



  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic13' value={pic13}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 13 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link13' value={link13}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 13 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt13' value={lt13}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 13 </label></span>
  </div>
  </div>


  </Fragment>
 )}








{/* -----------------------------------------الفقرة 14------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs14(!displayInputs14)}
  type='button'
  className='momadbtn'
>
فقرة 14
</button>
</div>

{displayInputs14 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title14' value={title14}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 14 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph14'  value={Paragraph14}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 14 </label></span>
  </div>
  </div>



  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic14' value={pic14}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 14 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link14' value={link14}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 14 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt14' value={lt14}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 14 </label></span>
  </div>
  </div>


  </Fragment>
 )}








{/* -----------------------------------------الفقرة 15------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs15(!displayInputs15)}
  type='button'
  className='momadbtn'
>
فقرة 15
</button>
</div>

{displayInputs15 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title15' value={title15}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 15 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph15'  value={Paragraph15}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 15 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic15' value={pic15}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 15 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link15' value={link15}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 15 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt15' value={lt15}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 15 </label></span>
  </div>
  </div>

  </Fragment>
 )}







{/* -----------------------------------------الفقرة 16------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs16(!displayInputs16)}
  type='button'
  className='momadbtn'
>
فقرة 16
</button>
</div>

{displayInputs16 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title16' value={title16}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 16 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph16'  value={Paragraph16}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 16 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic16' value={pic16}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 16 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link16' value={link16}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 16 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt16' value={lt16}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 16 </label></span>
  </div>
  </div>
  </Fragment>
 )}






{/* -----------------------------------------الفقرة 17------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs17(!displayInputs17)}
  type='button'
  className='momadbtn'
>
فقرة 17
</button>
</div>

{displayInputs17 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title17' value={title17}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 17 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph17'  value={Paragraph17}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 17 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic17' value={pic17}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 17 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link17' value={link17}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 17 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt17' value={lt17}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 17 </label></span>
  </div>
  </div>


  </Fragment>
 )}







{/* -----------------------------------------الفقرة 18------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs18(!displayInputs18)}
  type='button'
  className='momadbtn'
>
فقرة 18
</button>
</div>

{displayInputs18 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title18' value={title18}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 18 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph18'  value={Paragraph18}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 18 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic18' value={pic18}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 18 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link18' value={link18}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 18 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt18' value={lt18}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 18 </label></span>
  </div>
  </div>


  </Fragment>
 )}








{/* -----------------------------------------الفقرة 19------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs19(!displayInputs19)}
  type='button'
  className='momadbtn'
>
فقرة 19
</button>
</div>

{displayInputs19 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title19' value={title19}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 19 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph19'  value={Paragraph19}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 19 </label></span>
  </div>
  </div>



  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic19' value={pic19}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 19 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link19' value={link19}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 19 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt19' value={lt19}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 19 </label></span>
  </div>
  </div>
  </Fragment>
 )}









{/* -----------------------------------------الفقرة 20------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs20(!displayInputs20)}
  type='button'
  className='momadbtn'
>
فقرة 20
</button>
</div>

{displayInputs20 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title20' value={title20}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 20 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph20'  value={Paragraph20}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 20 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic20' value={pic20}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 20 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link20' value={link20}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 20 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt20' value={lt20}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 20 </label></span>
  </div>
  </div>

  </Fragment>
 )}








{/* -----------------------------------------الفقرة 21------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs21(!displayInputs21)}
  type='button'
  className='momadbtn'
>
فقرة 21
</button>
</div>

{displayInputs21 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title21' value={title21}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 21 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph21'  value={Paragraph21}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 21 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic21' value={pic21}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 21 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link21' value={link21}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 21 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt21' value={lt21}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 21 </label></span>
  </div>
  </div>
  </Fragment>
 )}






{/* -----------------------------------------الفقرة 22------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs22(!displayInputs22)}
  type='button'
  className='momadbtn'
>
فقرة 22
</button>
</div>

{displayInputs22 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title22' value={title22}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 22 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph22'  value={Paragraph22}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 22 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic22' value={pic22}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 22 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link22' value={link22}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 22 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt22' value={lt22}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 22 </label></span>
  </div>
  </div>
  </Fragment>
 )}










{/* -----------------------------------------الفقرة 23------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs23(!displayInputs23)}
  type='button'
  className='momadbtn'
>
فقرة 23
</button>
</div>

{displayInputs23 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title23' value={title23}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 23 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph23'  value={Paragraph23}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 23 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic23' value={pic23}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 23 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link23' value={link23}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 23 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt23' value={lt23}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 23 </label></span>
  </div>
  </div>
  </Fragment>
 )}







{/* -----------------------------------------الفقرة 24------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs24(!displayInputs24)}
  type='button'
  className='momadbtn'
>
فقرة 24
</button>
</div>

{displayInputs24 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title24' value={title24}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 24 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph24'  value={Paragraph24}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 24 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic24' value={pic24}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 24 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link24' value={link24}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 24 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt24' value={lt24}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 24 </label></span>
  </div>
  </div>

  </Fragment>
 )}







{/* -----------------------------------------الفقرة 25------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs25(!displayInputs25)}
  type='button'
  className='momadbtn'
>
فقرة 25
</button>
</div>

{displayInputs25 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title25' value={title25}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 25 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph25'  value={Paragraph25}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 25 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic25' value={pic25}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 25 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link25' value={link25}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 25 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt25' value={lt25}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 25 </label></span>
  </div>
  </div>
  </Fragment>
 )}








{/* -----------------------------------------الفقرة 26------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs26(!displayInputs26)}
  type='button'
  className='momadbtn'
>
فقرة 26
</button>
</div>

{displayInputs26 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title26' value={title26}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 26 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph26'  value={Paragraph26}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 26 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic26' value={pic26}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 26 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link26' value={link26}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 26 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt26' value={lt26}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 26 </label></span>
  </div>
  </div>


  </Fragment>
 )}








{/* -----------------------------------------الفقرة 27------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs27(!displayInputs27)}
  type='button'
  className='momadbtn'
>
فقرة 27
</button>
</div>

{displayInputs27 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title27' value={title27}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 27 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph27'  value={Paragraph27}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 27 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic27' value={pic27}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 27 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link27' value={link27}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 27 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt27' value={lt27}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 27 </label></span>
  </div>
  </div>


  </Fragment>
 )}









{/* -----------------------------------------الفقرة 28------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs28(!displayInputs28)}
  type='button'
  className='momadbtn'
>
فقرة 28
</button>
</div>

{displayInputs28 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title28' value={title28}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 28 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph28'  value={Paragraph28}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 28 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic28' value={pic28}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 28 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link28' value={link28}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 28 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt28' value={lt28}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 28 </label></span>
  </div>
  </div>

  </Fragment>
 )}










{/* -----------------------------------------الفقرة 29------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs29(!displayInputs29)}
  type='button'
  className='momadbtn'
>
فقرة 29
</button>
</div>

{displayInputs29 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title29' value={title29}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 29 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph29'  value={Paragraph29}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 29 </label></span>
  </div>
  </div>


  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic29' value={pic29}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 29 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link29' value={link29}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 29 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt29' value={lt29}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 29 </label></span>
  </div>
  </div>
  </Fragment>
 )}

 





{/* -----------------------------------------الفقرة 30------------------------------------------ */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={() => toggleInputs30(!displayInputs30)}
  type='button'
  className='momadbtn'
>
فقرة 30
</button>
</div>

{displayInputs30 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <input  className="form-control" placeholder="" type="text"  name='title30' value={title30}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 30 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder=""  name='Paragraph30'  value={Paragraph30}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 30 </label></span>
  </div>
  </div>

  
  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='pic30' value={pic30}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 30 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='link30' value={link30}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 30 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text" name='lt30' value={lt30}  onChange={e => onChange(e)}  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 30 </label></span>
  </div>
  </div>

  
  </Fragment>
 )}







</Fragment>

  
  )}
   
 

       
 
      
 

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


 
