import React, { useState,useEffect ,Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
 
 import axios from 'axios';
 import Dashboard from '../dashboard/Dashboard';
 
const PrivacyPolicy = ({  }) => {
  const [categories11,setCategory11]= useState([])
  
  useEffect(()=>{
      
    axios.get('/api/posts/PrivacyPolicy')
    .then(res => {
      console.log(res);
    setCategory11(res.data)
    })
    .catch((err) => {
      console.log(err);
    })


    
  
},[])



   
 

  const navLinks = (
 
<Fragment>




<section id="login-reg" >
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
               <div class="form-box">

                   <div class="form-top" style={{backgroundColor:'#363636'}}>
                       <div class="form-top-left">
                       </div>
                       <div class="form-top-right">
                       سياسة الخصوصية
                       </div>
                   </div>

                   {categories11.map(catego=>(
             
             <Fragment> 

<div class="form-bottom">  
            
             {/* <div class="portfolio-img-article1">  <img alt="" src={catego.image} style={{width:'100%'}}/></div>                     */}
           
             {catego.title && (
              <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
              {catego.title} </h1>
              )}

             <p style={{fontFamily:'Markazi Text', color:'#000',fontSize:'19px',fontWeight:'bold',textAlign:'right',textDecoration:'',direction:'rtl',marginBottom:'20px'}}>
              {catego.Main_paragraph}          		
              </p>


      {catego.title1 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title1} </h1>
      )}

       {catego.pic1 && (
      <img alt="" 
      src={catego.pic1} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph1 && (
      <p style={{fontFamily:'Markazi Text', 

      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph1}          		
      </p>
      )}


      {catego.link1 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link1} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt1}</a>
       </p>
      )}




{/* ////////////////////////////////////////////////////////////////////////////////////// */}

{catego.title2 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title2} </h1>
      )}

       {catego.pic2 && (
      <img alt="" 
      src={catego.pic2} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph2 && (
      <p style={{fontFamily:'Markazi Text', 

      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph2}          		
      </p>
      )}


      {catego.link2 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link2} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt2}</a>
       </p>
      )}          
           
           


                {catego.title3 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title3} </h1>
      )}

       {catego.pic3 && (
      <img alt="" 
      src={catego.pic3} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph3 && (
      <p style={{fontFamily:'Markazi Text', 

      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph3}          		
      </p>
      )}


      {catego.link3 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link3} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt3}</a>
       </p>
      )}



{catego.title4 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title4} </h1>
      )}

       {catego.pic4 && (
      <img alt="" 
      src={catego.pic4} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph4 && (
      <p style={{fontFamily:'Markazi Text', 

      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph4}          		
      </p>
      )}


      {catego.link4 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link4} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt4}</a>
       </p>
      )}




{catego.title5 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title5} </h1>
      )}

       {catego.pic5 && (
      <img alt="" 
      src={catego.pic5} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph5 && (
      <p style={{fontFamily:'Markazi Text', 

      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph5}          		
      </p>
      )}


      {catego.link5 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link5} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt5}</a>
       </p>
      )}




{catego.title6 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title6} </h1>
      )}

       {catego.pic6 && (
      <img alt="" 
      src={catego.pic6} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph6 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph6}          		
      </p>
      )}

      {catego.link6 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link6} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt6}</a>
       </p>
      )}




{catego.title7 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title7} </h1>
      )}

       {catego.pic7 && (
      <img alt="" 
      src={catego.pic7} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph7 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph7}          		
      </p>
      )}

      {catego.link7 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link7} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt7}</a>
       </p>
      )}




{catego.title8 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title8} </h1>
      )}

       {catego.pic8 && (
      <img alt="" 
      src={catego.pic8} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph8 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph8}          		
      </p>
      )}

      {catego.link8 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link8} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt8}</a>
       </p>
      )}






{catego.title9 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title9} </h1>
      )}

       {catego.pic9 && (
      <img alt="" 
      src={catego.pic9} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph9 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph9}          		
      </p>
      )}

      {catego.link9 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link9} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt9}</a>
       </p>
      )}





{catego.title10 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title10} </h1>
      )}

       {catego.pic10 && (
      <img alt="" 
      src={catego.pic10} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph10 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph10}          		
      </p>
      )}

      {catego.link10 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link10} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt10}</a>
       </p>
      )}




{catego.title11 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title11} </h1>
      )}

       {catego.pic11 && (
      <img alt="" 
      src={catego.pic11} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph11 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph11}          		
      </p>
      )}

      {catego.link11 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link11} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt11}</a>
       </p>
      )}





{catego.title12 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title12} </h1>
      )}

       {catego.pic12 && (
      <img alt="" 
      src={catego.pic12} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph12 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph12}          		
      </p>
      )}

      {catego.link12 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link12} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt12}</a>
       </p>
      )}




{catego.title13 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title13} </h1>
      )}

       {catego.pic13 && (
      <img alt="" 
      src={catego.pic13} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph13 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph13}          		
      </p>
      )}

      {catego.link13 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link13} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt13}</a>
       </p>
      )}





{catego.title14 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title14} </h1>
      )}

       {catego.pic14 && (
      <img alt="" 
      src={catego.pic14} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph14 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph14}          		
      </p>
      )}

      {catego.link14 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link14} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt14}</a>
       </p>
      )}





{catego.title15 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title15} </h1>
      )}

       {catego.pic15 && (
      <img alt="" 
      src={catego.pic15} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph15 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph15}          		
      </p>
      )}

      {catego.link15 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link15} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt15}</a>
       </p>
      )}




{catego.title16 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title16} </h1>
      )}

       {catego.pic16 && (
      <img alt="" 
      src={catego.pic16} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph16 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph16}          		
      </p>
      )}

      {catego.link16 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link16} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt16}</a>
       </p>
      )}






{catego.title17 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title17} </h1>
      )}

       {catego.pic17 && (
      <img alt="" 
      src={catego.pic17} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph17 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph17}          		
      </p>
      )}

      {catego.link17 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link17} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt17}</a>
       </p>
      )}





{catego.title18 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title18} </h1>
      )}

       {catego.pic18 && (
      <img alt="" 
      src={catego.pic18} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph18 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph18}          		
      </p>
      )}

      {catego.link18 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link18} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt18}</a>
       </p>
      )}




{catego.title19 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title19} </h1>
      )}

       {catego.pic19 && (
      <img alt="" 
      src={catego.pic19} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph19 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph19}          		
      </p>
      )}

      {catego.link19 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link19} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt19}</a>
       </p>
      )}







{catego.title20 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title20} </h1>
      )}

       {catego.pic20 && (
      <img alt="" 
      src={catego.pic20} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph20 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph20}          		
      </p>
      )}

      {catego.link20 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link20} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt20}</a>
       </p>
      )}





{catego.title21 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title21} </h1>
      )}

       {catego.pic21 && (
      <img alt="" 
      src={catego.pic21} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph21 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph21}          		
      </p>
      )}

      {catego.link21 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link21} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt21}</a>
       </p>
      )}





{catego.title22 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title22} </h1>
      )}

       {catego.pic22 && (
      <img alt="" 
      src={catego.pic22} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph22 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph22}          		
      </p>
      )}

      {catego.link22 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link22} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt22}</a>
       </p>
      )}








{catego.title23 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title23} </h1>
      )}

       {catego.pic23 && (
      <img alt="" 
      src={catego.pic23} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph23 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph23}          		
      </p>
      )}

      {catego.link23 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link23} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt23}</a>
       </p>
      )}





{catego.title24 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title24} </h1>
      )}

       {catego.pic24 && (
      <img alt="" 
      src={catego.pic24} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph24 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph24}          		
      </p>
      )}
 
      {catego.link24 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link24} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt24}</a>
       </p>
      )}








{catego.title25 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title25} </h1>
      )}

       {catego.pic25 && (
      <img alt="" 
      src={catego.pic25} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph25 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph25}          		
      </p>
      )}

      {catego.link25 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link25} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt25}</a>
       </p>
      )}





{catego.title26 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title26} </h1>
      )}

       {catego.pic26 && (
      <img alt="" 
      src={catego.pic26} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph26 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph26}          		
      </p>
      )}

      {catego.link26 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link26} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt26}</a>
       </p>
      )}






{catego.title27 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title27} </h1>
      )}

       {catego.pic27 && (
      <img alt="" 
      src={catego.pic27} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph27 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph27}          		
      </p>
      )}

      {catego.link27 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link27} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt27}</a>
       </p>
      )}








{catego.title28 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title28} </h1>
      )}

       {catego.pic28 && (
      <img alt="" 
      src={catego.pic28} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph28 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph28}          		
      </p>
      )}

      {catego.link28 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link28} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt28}</a>
       </p>
      )}






{catego.title29 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title29} </h1>
      )}

       {catego.pic29 && (
      <img alt="" 
      src={catego.pic29} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph29 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph29}          		
      </p>
      )}

      {catego.link29 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link29} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt29}</a>
       </p>
      )}




{catego.title30 && (
      <h1 style={{fontFamily:'Markazi Text',fontSize:'22px',textAlign:'right',fontWeight:'bold',color:'#000',direction:'rtl'}} > 
       {catego.title30} </h1>
      )}

       {catego.pic30 && (
      <img alt="" 
      src={catego.pic30} 
      style={{width:'100%',height:'auto',marginBottom:'15px'}}/>
       )}

      {catego.Paragraph30 && (
      <p style={{fontFamily:'Markazi Text', 
      color:'#000',fontSize:'19px',fontWeight:'normal',textAlign:'right',textDecoration:'',direction:'rtl'}}>
      {catego.Paragraph30}          		
      </p>
      )}

      {catego.link30 && (
      <p style={{float:'',fontsize:'20px',fontWeight:'bold',color:'#0431B4',fontFamily:'Markazi Text',textAlign:'right'}}
      > 
       <a href={catego.link30} style={{color:'#0431B4',fontsize:'22px'}}
       > {catego.lt30}</a>
       </p>
      )}



</div>



</Fragment>

))}
             

          </div>
               
            </div>
            </div>
            
              
           
       
     </section>



 
         

 
 

          </Fragment>


  );

  return (
    <Fragment>
      {navLinks}
      
    </Fragment>
  );
};

 
 

export default connect(
  null, 
)(PrivacyPolicy);
 