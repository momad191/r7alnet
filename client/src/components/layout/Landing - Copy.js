import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import test from './1.jpg';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
    
  return (
    <section id="portfolio">
    <div class="container" >
    <div class="row"> </div>

     {/* -----------------------------منطقة اعلانات -------------------------------------------------------- */}
     <div class="col-xs-12 col-sm-6 col-md-4 col-lg-12 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head" style={{height:'auto'}}>
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test} style={{height:'auto',width:'200px',float:'right',marginLeft:'15px'}} /></div></a>
                      
                            <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                         </div>
                        </div>
                     </div>
                 </div>

    {/* -----------------------------منطقة اعلانات -------------------------------------------------------- */}
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-6 portfolio-item">
                    <div class="portfolio-one" style={{height:'570px'}}>

                        <div class="portfolio-head" style={{height:'auto'}} >
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test} style={{height:'200px'}} /></div></a>
                            <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         </div>
                        </div>


                        <div class="portfolio-head" style={{height:'auto'}} >
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test} style={{height:'200px'}} /></div></a>
                            <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         </div>
                        </div>



                     </div>
                 </div>

                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head" style={{height:'auto'}}>
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test} style={{height:'100%'}} width="300px"/></div></a>
                      
                            <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         </div>
                        </div>
                     </div>
                 </div>
                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head" style={{height:'auto'}}>
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test} style={{height:'100%'}} width="300px"/></div></a>
                      
                            <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         </div>
                        </div>
                     </div>
                 </div>

                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head" style={{height:'auto'}}>
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test} style={{height:'100%'}} width="300px"/></div></a>
                      
                            <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         </div>
                        </div>
                     </div>
                 </div>


                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head" style={{height:'auto'}}>
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test} style={{height:'100%'}} width="300px"/></div></a>
                      
                            <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         </div>
                        </div>
                     </div>
                 </div>
{/* -----------------------------القسم الأول من الأقسام الرئيسية -------------------------------------------------------- */}
    <a href="#" style={{direction:'rtl'}}> <section id="top_banner">
        <div class="page_info">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12" style={{textAlign:'right'}}> الصحة <span class="sep">   </span><span class="current"></span></div>
                </div>   
        </div>
    </section></a>	


 
                
                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>
                  



                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>






                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>


{/* ----------------------------- القسم الثاني من الاقسام الرئيسية -------------------------------------------------------- */}

<a href="#" style={{direction:'rtl'}}> <section id="top_banner">
        <div class="page_info">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12" style={{textAlign:'right'}}> المرأة <span class="sep">   </span><span class="current"></span></div>
                </div>
            </div>
        </div>
    </section></a>	



    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>



                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>



                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>



                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>


{/* -----------------------------  القسم الثالث من الاقسام الرئيسية    -------------------------------------------------------- */}


     <a href="#" style={{direction:'rtl'}}> <section id="top_banner">
        <div class="page_info">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12" style={{textAlign:'right'}}> الرجل <span class="sep">   </span><span class="current"></span></div>
                </div>
            </div>
        </div>
    </section></a>	


    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>


                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>



                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>



                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>

    {/* ----------------------------- القسم الرابع من الاقسام الرئيسية -------------------------------------------------------- */}

    <a href="#" style={{direction:'rtl'}}> <section id="top_banner">
        <div class="page_info">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12" style={{textAlign:'right'}}>  الرجيم والتخسيس  <span class="sep">   </span><span class="current"></span></div>
                </div>
            </div>
        </div>
    </section></a>	


    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>



                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>




                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>




                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>




 {/* ----------------------------- القسم الخامس من الاقسام الرئيسية  -------------------------------------------------------- */}

 <a href="#" style={{direction:'rtl'}}> <section id="top_banner">
        <div class="page_info">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12" style={{textAlign:'right'}}>  المطبخ  <span class="sep">   </span><span class="current"></span></div>
                </div>
            </div>
        </div>
    </section></a>	

<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>




                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>





                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>




                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>




{/* ----------------------------- القسم السادس من الاقسام الرئيسية  -------------------------------------------------------- */}


<a href="#" style={{direction:'rtl'}}> <section id="top_banner">
        <div class="page_info">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12" style={{textAlign:'right'}}>   تكنولوجيا   <span class="sep">   </span><span class="current"></span></div>
                </div>
            </div>
        </div>
    </section></a>	

<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>





                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>





                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>





                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>

 {/* ----------------------------- القسم السابع من الاقسام الرئيسية  -------------------------------------------------------- */}


<a href="#" style={{direction:'rtl'}}> <section id="top_banner">
        <div class="page_info">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12" style={{textAlign:'right'}}>   تنمية بشرية    <span class="sep">   </span><span class="current"></span></div>
                </div>
            </div>
        </div>
    </section></a>	


    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>





                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>





                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>





                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>

{/* ----------------------------- القسم الثامن من الاقسام الرئيسية  -------------------------------------------------------- */}


<a href="#" style={{direction:'rtl'}}> <section id="top_banner">
        <div class="page_info">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12" style={{textAlign:'right'}}>    الفيديو   <span class="sep">   </span><span class="current"></span></div>
                </div>
            </div>
        </div>
    </section></a>	



    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>





                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>





                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>





                 <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item">
                    <div class="portfolio-one">
                        <div class="portfolio-head">
                            <a href="articles.html"> <div class="portfolio-img"><img alt="" src={test}/></div></a>
                        </div>
                        <div class="portfolio-content">
                         <h5><a href="#"> "الترف" في حياة مارك زوكربيرج.. فيما يصرف مؤسس فيسبوك ثروته؟ </a></h5>
                         <p>
                        الفيسبوك هو بلا شك أكبر شبكة اجتماعية في العالم، أكبر من تويتر، إينستاجرام، جوجل، جنبا إلى جنب. قبل ايام فقط اعلن مارك زوكربيرج مؤسس فيسبو...						
                      	</p>
                        <a href="#"> <i class="fa fa-caret-left"></i> اقرأ المزيد</a>
                        </div>
						 
                     </div>
                 </div>

{/* ----------------------------- نهاية استعراض الاخبار -------------------------------------------------------- */}
 
  

    

   
    </div>
</section>







  );
}; 

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
