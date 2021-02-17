import React, { useState,useEffect ,Fragment } from 'react';
import axios from 'axios';

      const Footer = () => {

        const [categories11,setCategory11]= useState([])
        const [Social,setSocial]= useState([])


        
  useEffect(()=>{
     
    axios.get('/api/categories/nave')
    .then(res => {
      console.log(res);
    setCategory11(res.data)
    })
    .catch((err) => {
      console.log(err);
    })


    axios.get('/api/posts/Social')
    .then(res => {
      console.log(res);
    setSocial(res.data)
    })
    .catch((err) => {
      console.log(err);
    })


    
  
},[])

 




		return (
		  <Fragment>


<section id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-3 col-xs-12 block">
                    <div class="footer-block">
                        <h4>عن الموقع</h4>
                        <hr/>
						<br/>
                        <p style={{width:'100%',color:'#fff',fontSize:'19px',fontWeight:'normal',direction:'rtl', textAlign:'justify',fontFamily:'Markazi Text'}}>

                        تأسس موقع رحَّال في عام 2021 م ليكون متخصصا في السياحة والسفر، ولزيادة الالهام والشغف لتحقيق الاحلام في السفر والترحال ، وليفتح المجال للاطلاع على ادلة السفر والمغامرات وتقديم النصائح بكل ماهو متعلق بالسفر والسياحة في مختلف بلدان العالم .
                         </p>
						 
                        <a href='/about' class="learnmore"><i class="fa fa-caret-left"></i>   اعرف المزيد </a>
                    </div>
                </div>

                <div class="col-md-3 col-sm-3 col-xs-12 block">
                    <div class="footer-block">
                        <h4>روابط سريعة</h4>
                        <hr/>
						<br/>
                        <ul class="footer-links">

                        {categories11.map(catego=>(
                            <li><a href={`/Topics/${catego._id}#/${catego.body}`}> {catego.text}</a></li>
                            ))}
							
                        </ul>
                    </div>
                </div>

                <div class="col-md-3 col-sm-3 col-xs-12 block">
                    <div class="footer-block">
                        <h4>تابعنا على</h4>
                        <hr/>
						<br/>
                        <ul class="footer-links">

    {Social.map(catego=>(



<Fragment>  
               
{catego.Paragraph1 && (
<li><a href={catego.Paragraph1}> facebook <i class={catego.pic1}></i></a></li>
)}

{catego.Paragraph2 && (
<li><a href={catego.Paragraph2}> twitter <i class={catego.pic2}></i></a></li>
)}

{catego.Paragraph3 && (
<li><a href={catego.Paragraph3}> youtube <i class={catego.pic3}></i></a></li>
)}

{catego.Paragraph4 && (
<li><a href={catego.Paragraph4}>instagram <i class={catego.pic4}></i></a></li>
)}

{catego.Paragraph5 && (
<li><a href={catego.Paragraph5}>linkedin <i class={catego.pic5}></i></a></li>
)}

{catego.Paragraph6 && (
<li><a href={catego.Paragraph6}>telegram <i class={catego.pic6}></i></a></li>
)}


{catego.Paragraph7 && (
<li><a href={catego.Paragraph7}>telegram <i class={catego.pic7}></i></a></li>
)}



{catego.Paragraph8 && (
<li><a href={catego.Paragraph8}>pinterest <i class={catego.pic8}></i></a></li>
)}


{catego.Paragraph9 && (
<li><a href={catego.Paragraph9}><i class={catego.pic9}></i></a></li>
)}

 
{catego.Paragraph10 && (
<li><a href={catego.Paragraph10}><i class={catego.pic10}></i></a></li>
)}



{catego.Paragraph11 && (
<li><a href={catego.Paragraph11}><i class={catego.pic11}></i></a></li>
)}



{catego.Paragraph12 && (
<li><a href={catego.Paragraph12}><i class={catego.pic12}></i></a></li>
)}


{catego.Paragraph13 && (
<li><a href={catego.Paragraph13}><i class={catego.pic13}></i></a></li>
)}



{catego.Paragraph14 && (
<li><a href={catego.Paragraph14}><i class={catego.pic14}></i></a></li>
)}


{catego.Paragraph15 && (
<li><a href={catego.Paragraph15}><i class={catego.pic15}></i></a></li>
)}


{catego.Paragraph16 && (
<li><a href={catego.Paragraph16}><i class={catego.pic16}></i></a></li>
)}



{catego.Paragraph17 && (
<li><a href={catego.Paragraph17}><i class={catego.pic17}></i></a></li>
)}




{catego.Paragraph18 && (
<li><a href={catego.Paragraph18}><i class={catego.pic18}></i></a></li>
)}



{catego.Paragraph19 && (
<li><a href={catego.Paragraph19}><i class={catego.pic19}></i></a></li>
)}




{catego.Paragraph20 && (
<li><a href={catego.Paragraph20}><i class={catego.pic20}></i></a></li>
)}




{catego.Paragraph21 && (
<li><a href={catego.Paragraph21}><i class={catego.pic21}></i></a></li>
)}




{catego.Paragraph22 && (
<li><a href={catego.Paragraph22}><i class={catego.pic22}></i></a></li>
)}





{catego.Paragraph23 && (
<li><a href={catego.Paragraph23}><i class={catego.pic23}></i></a></li>
)}




{catego.Paragraph24 && (
<li><a href={catego.Paragraph24}><i class={catego.pic24}></i></a></li>
)}



{catego.Paragraph25 && (
<li><a href={catego.Paragraph25}><i class={catego.pic25}></i></a></li>
)}





{catego.Paragraph26 && (
<li><a href={catego.Paragraph26}><i class={catego.pic26}></i></a></li>
)}



{catego.Paragraph27 && (
<li><a href={catego.Paragraph27}><i class={catego.pic27}></i></a></li>
)}





{catego.Paragraph28 && (
<li><a href={catego.Paragraph28}><i class={catego.pic28}></i></a></li>
)}




{catego.Paragraph29 && (
<li><a href={catego.Paragraph29}><i class={catego.pic29}></i></a></li>
)}




{catego.Paragraph30 && (
<li><a href={catego.Paragraph30}><i class={catego.pic30}></i></a></li>
)}


</Fragment>
  
    ))}



                            
 
						
                            
                        </ul>
                    </div>
                </div>

                <div class="col-md-3 col-sm-3 col-xs-12 <block></block>">
                    <div class="footer-block">
                        <h4>الخدمات</h4>
                        <hr/>
						<br></br>
						
                        <ul class="footer-links">

                          
							<li><a href="/register">العضوية</a></li>
							<li><a href="/about">من نحن</a></li>
							<li><a href="/PrivacyPolicy">سياسة الخصوصية</a></li>
							<li><a href="/msg">اتصل بنا</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
		
 
    </section>
			    
				 

<section id="bottom-footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-12 btm-footer-links">
                    <a href="#">© جميع الحقوق محفوظة 2021</a>
                    
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12 copyright">
                    {/* Developed and designed by <a href="#">Mohammed Emad Omer</a>   <a href="#"> </a> */}
                </div>
				
				
				
            </div>
        </div>
    </section>
		  </Fragment>
		);
	  };




    

export default Footer;
 