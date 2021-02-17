import React, { Component ,Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
 
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

export default class Editwebinars extends Component {
  constructor(props) {
    super(props);
     
   

    this.onChangetitle = this.onChangetitle.bind(this);
    this.onChangebody = this.onChangebody.bind(this);
    this.onChangePublish = this.onChangePublish.bind(this);
    this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
    this.onChangeCategoryid = this.onChangeCategoryid.bind(this);

    this.onChangeSubName = this.onChangeSubName.bind(this);
    this.onChangeSubid = this.onChangeSubid.bind(this);

    
    this.onChangevideo = this.onChangevideo.bind(this);
    this.onChangeKeywords = this.onChangeKeywords.bind(this);
    this.onChangeshort = this.onChangeshort.bind(this);
    this.onChangeMain_paragraph = this.onChangeMain_paragraph.bind(this);
    this.onChangeimage = this.onChangeimage.bind(this);



this.onChangetitle1 = this.onChangetitle1.bind(this);
this.onChangetitle2 = this.onChangetitle2.bind(this);
this.onChangetitle3 = this.onChangetitle3.bind(this);
this.onChangetitle4 = this.onChangetitle4.bind(this);
this.onChangetitle5 = this.onChangetitle5.bind(this);
this.onChangetitle6 = this.onChangetitle6.bind(this);
this.onChangetitle7 = this.onChangetitle7.bind(this);
this.onChangetitle8 = this.onChangetitle8.bind(this);
this.onChangetitle9 = this.onChangetitle9.bind(this);
this.onChangetitle10 = this.onChangetitle10.bind(this);
this.onChangetitle11 = this.onChangetitle11.bind(this);
this.onChangetitle12 = this.onChangetitle12.bind(this);
this.onChangetitle13 = this.onChangetitle13.bind(this);
this.onChangetitle14 = this.onChangetitle14.bind(this);
this.onChangetitle15 = this.onChangetitle15.bind(this);
this.onChangetitle16 = this.onChangetitle16.bind(this);
this.onChangetitle17 = this.onChangetitle17.bind(this);
this.onChangetitle18 = this.onChangetitle18.bind(this);
this.onChangetitle19 = this.onChangetitle19.bind(this);
this.onChangetitle20 = this.onChangetitle20.bind(this);
this.onChangetitle21 = this.onChangetitle21.bind(this);
this.onChangetitle22 = this.onChangetitle22.bind(this);
this.onChangetitle23 = this.onChangetitle23.bind(this);
this.onChangetitle24 = this.onChangetitle24.bind(this);
this.onChangetitle25 = this.onChangetitle25.bind(this);
this.onChangetitle26 = this.onChangetitle26.bind(this);
this.onChangetitle27 = this.onChangetitle27.bind(this);
this.onChangetitle28 = this.onChangetitle28.bind(this);
this.onChangetitle29 = this.onChangetitle29.bind(this);
this.onChangetitle30 = this.onChangetitle30.bind(this);





this.onChangeParagraph1 = this.onChangeParagraph1 .bind(this);
this.onChangeParagraph2 = this.onChangeParagraph2 .bind(this);
this.onChangeParagraph3 = this.onChangeParagraph3 .bind(this);
this.onChangeParagraph4 = this.onChangeParagraph4 .bind(this);
this.onChangeParagraph5 = this.onChangeParagraph5 .bind(this);
this.onChangeParagraph6 = this.onChangeParagraph6 .bind(this);
this.onChangeParagraph7 = this.onChangeParagraph7 .bind(this);
this.onChangeParagraph8 = this.onChangeParagraph8 .bind(this);
this.onChangeParagraph9 = this.onChangeParagraph9 .bind(this);
this.onChangeParagraph10 = this.onChangeParagraph10 .bind(this);
this.onChangeParagraph11 = this.onChangeParagraph11 .bind(this);
this.onChangeParagraph12 = this.onChangeParagraph12 .bind(this);
this.onChangeParagraph13 = this.onChangeParagraph13 .bind(this);
this.onChangeParagraph14 = this.onChangeParagraph14 .bind(this);
this.onChangeParagraph15 = this.onChangeParagraph15 .bind(this);
this.onChangeParagraph16 = this.onChangeParagraph16 .bind(this);
this.onChangeParagraph17 = this.onChangeParagraph17 .bind(this);
this.onChangeParagraph18 = this.onChangeParagraph18 .bind(this);
this.onChangeParagraph19 = this.onChangeParagraph19 .bind(this);
this.onChangeParagraph20 = this.onChangeParagraph20 .bind(this);
this.onChangeParagraph21 = this.onChangeParagraph21 .bind(this);
this.onChangeParagraph22 = this.onChangeParagraph22 .bind(this);
this.onChangeParagraph23 = this.onChangeParagraph23 .bind(this);
this.onChangeParagraph24 = this.onChangeParagraph24 .bind(this);
this.onChangeParagraph25 = this.onChangeParagraph25 .bind(this);
this.onChangeParagraph26 = this.onChangeParagraph26 .bind(this);
this.onChangeParagraph27 = this.onChangeParagraph27 .bind(this);
this.onChangeParagraph28 = this.onChangeParagraph28 .bind(this);
this.onChangeParagraph29 = this.onChangeParagraph29 .bind(this);
this.onChangeParagraph30 = this.onChangeParagraph30 .bind(this);






this.onChangepic1 = this.onChangepic1 .bind(this);
this.onChangepic2 = this.onChangepic2 .bind(this);
this.onChangepic3 = this.onChangepic3 .bind(this);
this.onChangepic4 = this.onChangepic4 .bind(this);
this.onChangepic5 = this.onChangepic5 .bind(this);
this.onChangepic6 = this.onChangepic6 .bind(this);
this.onChangepic7 = this.onChangepic7 .bind(this);
this.onChangepic8 = this.onChangepic8 .bind(this);
this.onChangepic9 = this.onChangepic9 .bind(this);
this.onChangepic10 = this.onChangepic10 .bind(this);
this.onChangepic11 = this.onChangepic11 .bind(this);
this.onChangepic12 = this.onChangepic12 .bind(this);
this.onChangepic13 = this.onChangepic13 .bind(this);
this.onChangepic14 = this.onChangepic14 .bind(this);
this.onChangepic15 = this.onChangepic15 .bind(this);
this.onChangepic16 = this.onChangepic16 .bind(this);
this.onChangepic17 = this.onChangepic17 .bind(this);
this.onChangepic18 = this.onChangepic18 .bind(this);
this.onChangepic19 = this.onChangepic19 .bind(this);
this.onChangepic20 = this.onChangepic20 .bind(this);
this.onChangepic21 = this.onChangepic21 .bind(this);
this.onChangepic22 = this.onChangepic22 .bind(this);
this.onChangepic23 = this.onChangepic23 .bind(this);
this.onChangepic24 = this.onChangepic24 .bind(this);
this.onChangepic25 = this.onChangepic25 .bind(this);
this.onChangepic26 = this.onChangepic26 .bind(this);
this.onChangepic27 = this.onChangepic27 .bind(this);
this.onChangepic28 = this.onChangepic28 .bind(this);
this.onChangepic29 = this.onChangepic29 .bind(this);
this.onChangepic30 = this.onChangepic30 .bind(this);



this.onChangelink1 = this.onChangelink1.bind(this);
this.onChangelink2 = this.onChangelink2.bind(this);
this.onChangelink3 = this.onChangelink3.bind(this);
this.onChangelink4 = this.onChangelink4.bind(this);
this.onChangelink5 = this.onChangelink5.bind(this);
this.onChangelink6 = this.onChangelink6.bind(this);
this.onChangelink7 = this.onChangelink7.bind(this);
this.onChangelink8 = this.onChangelink8.bind(this);
this.onChangelink9 = this.onChangelink9.bind(this);
this.onChangelink10 = this.onChangelink10.bind(this);
this.onChangelink11 = this.onChangelink11.bind(this);
this.onChangelink12 = this.onChangelink12.bind(this);
this.onChangelink13 = this.onChangelink13.bind(this);
this.onChangelink14 = this.onChangelink14.bind(this);
this.onChangelink15 = this.onChangelink15.bind(this);
this.onChangelink16 = this.onChangelink16.bind(this);
this.onChangelink17 = this.onChangelink17.bind(this);
this.onChangelink18 = this.onChangelink18.bind(this);
this.onChangelink19 = this.onChangelink19.bind(this);
this.onChangelink20 = this.onChangelink20.bind(this);
this.onChangelink21 = this.onChangelink21.bind(this);
this.onChangelink22 = this.onChangelink22.bind(this);
this.onChangelink23 = this.onChangelink23.bind(this);
this.onChangelink24 = this.onChangelink24.bind(this);
this.onChangelink25 = this.onChangelink25.bind(this);
this.onChangelink26 = this.onChangelink26.bind(this);
this.onChangelink27 = this.onChangelink27.bind(this);
this.onChangelink28 = this.onChangelink28.bind(this);
this.onChangelink29 = this.onChangelink29.bind(this);
this.onChangelink30 = this.onChangelink30.bind(this);





this.onChangelt1= this.onChangelt1.bind(this);
this.onChangelt2= this.onChangelt2.bind(this);
this.onChangelt3= this.onChangelt3.bind(this);
this.onChangelt4= this.onChangelt4.bind(this);
this.onChangelt5= this.onChangelt5.bind(this);
this.onChangelt6= this.onChangelt6.bind(this);
this.onChangelt7= this.onChangelt7.bind(this);
this.onChangelt8= this.onChangelt8.bind(this);
this.onChangelt9= this.onChangelt9.bind(this);
this.onChangelt10= this.onChangelt10.bind(this);
this.onChangelt11= this.onChangelt11.bind(this);
this.onChangelt12= this.onChangelt12.bind(this);
this.onChangelt13= this.onChangelt13.bind(this);
this.onChangelt14= this.onChangelt14.bind(this);
this.onChangelt15= this.onChangelt15.bind(this);
this.onChangelt16= this.onChangelt16.bind(this);
this.onChangelt17= this.onChangelt17.bind(this);
this.onChangelt18= this.onChangelt18.bind(this);
this.onChangelt19= this.onChangelt19.bind(this);
this.onChangelt20= this.onChangelt20.bind(this);
this.onChangelt21= this.onChangelt21.bind(this);
this.onChangelt22= this.onChangelt22.bind(this);
this.onChangelt23= this.onChangelt23.bind(this);
this.onChangelt24= this.onChangelt24.bind(this);
this.onChangelt25= this.onChangelt25.bind(this);
this.onChangelt26= this.onChangelt26.bind(this);
this.onChangelt27= this.onChangelt27.bind(this);
this.onChangelt28= this.onChangelt28.bind(this);
this.onChangelt29= this.onChangelt29.bind(this);
this.onChangelt30= this.onChangelt30.bind(this);


    this.onSubmit = this.onSubmit.bind(this);
  
    this.state = {
      title: '',
      Publish: '',
      body:'',
      CategoryName: '',
      Categoryid: '',

      SubName:'',
      Subid:'',
      video: '',
      Keywords:'',
      short:'',
      Main_paragraph:'',
      image:'',
      exercises: [],
      exercises11 : [],

      displayAllbuttons: false,

      display1:false,
      display2:false,
      display3:false,
      display4:false,
      display5:false,
      display6:false,
      display7:false,
      display8:false,
      display9:false,
      display10:false,
      display11:false,
      display12:false,
      display13:false,
      display14:false,
      display15:false,
      display16:false,
      display17:false,
      display18:false,
      display19:false,
      display20:false,
      display21:false,
      display22:false,
      display23:false,
      display24:false,
      display25:false,
      display26:false,
      display27:false,
      display28:false,
      display29:false,
      display30:false,

      

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

     
      
    }
  }
   
  componentDidMount() {
    axios.get('/api/posts/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          Publish: response.data.Publish,
          body: response.data.body,
          CategoryName: response.data.CategoryName,
          Categoryid: response.data.Categoryid,

          SubName: response.data.SubName,
          Subid: response.data.Subid,

          video: response.data.video,
          Keywords: response.data.Keywords,
          short: response.data.short,
          Main_paragraph: response.data.Main_paragraph,
          image: response.data.image,

title1: response.data.title1,
title2: response.data.title2,
title3: response.data.title3,
title4: response.data.title4,
title5: response.data.title5,
title6: response.data.title6,
title7: response.data.title7,
title8: response.data.title8,
title9: response.data.title9,
title10: response.data.title10,
title11: response.data.title11,
title12: response.data.title12,
title13: response.data.title13,
title14: response.data.title14,
title15: response.data.title15,
title16: response.data.title16,
title17: response.data.title17,
title18: response.data.title18,
title19: response.data.title19,
title20: response.data.title20,
title21: response.data.title21,
title22: response.data.title22,
title23: response.data.title23,
title24: response.data.title24,
title25: response.data.title25,
title26: response.data.title26,
title27: response.data.title27,
title28: response.data.title28,
title29: response.data.title29,
title30: response.data.title30,



Paragraph1: response.data.Paragraph1,
Paragraph2: response.data.Paragraph2,
Paragraph3: response.data.Paragraph3,
Paragraph4: response.data.Paragraph4,
Paragraph5: response.data.Paragraph5,
Paragraph6: response.data.Paragraph6,
Paragraph7: response.data.Paragraph7,
Paragraph8: response.data.Paragraph8,
Paragraph9: response.data.Paragraph9,
Paragraph10: response.data.Paragraph10,
Paragraph11: response.data.Paragraph11,
Paragraph12: response.data.Paragraph12,
Paragraph13: response.data.Paragraph13,
Paragraph14: response.data.Paragraph14,
Paragraph15: response.data.Paragraph15,
Paragraph16: response.data.Paragraph16,
Paragraph17: response.data.Paragraph17,
Paragraph18: response.data.Paragraph18,
Paragraph19: response.data.Paragraph19,
Paragraph20: response.data.Paragraph20,
Paragraph21: response.data.Paragraph21,
Paragraph22: response.data.Paragraph22,
Paragraph23: response.data.Paragraph23,
Paragraph24: response.data.Paragraph24,
Paragraph25: response.data.Paragraph25,
Paragraph26: response.data.Paragraph26,
Paragraph27: response.data.Paragraph27,
Paragraph28: response.data.Paragraph28,
Paragraph29: response.data.Paragraph29,
Paragraph30: response.data.Paragraph30,




pic1: response.data.pic1,
pic2: response.data.pic2,
pic3: response.data.pic3,
pic4: response.data.pic4,
pic5: response.data.pic5,
pic6: response.data.pic6,
pic7: response.data.pic7,
pic8: response.data.pic8,
pic9: response.data.pic9,
pic10: response.data.pic10,
pic11: response.data.pic11,
pic12: response.data.pic12,
pic13: response.data.pic13,
pic14: response.data.pic14,
pic15: response.data.pic15,
pic16: response.data.pic16,
pic17: response.data.pic17,
pic18: response.data.pic18,
pic19: response.data.pic19,
pic20: response.data.pic20,
pic21: response.data.pic21,
pic22: response.data.pic22,
pic23: response.data.pic23,
pic24: response.data.pic24,
pic25: response.data.pic25,
pic26: response.data.pic26,
pic27: response.data.pic27,
pic28: response.data.pic28,
pic29: response.data.pic29,
pic30: response.data.pic30,



link1: response.data.link1,
link2: response.data.link2,
link3: response.data.link3,
link4: response.data.link4,
link5: response.data.link5,
link6: response.data.link6,
link7: response.data.link7,
link8: response.data.link8,
link9: response.data.link9,
link10: response.data.link10,
link11: response.data.link11,
link12: response.data.link12,
link13: response.data.link13,
link14: response.data.link14,
link15: response.data.link15,
link16: response.data.link16,
link17: response.data.link17,
link18: response.data.link18,
link19: response.data.link19,
link20: response.data.link20,
link21: response.data.link21,
link22: response.data.link22,
link23: response.data.link23,
link24: response.data.link24,
link25: response.data.link25,
link26: response.data.link26,
link27: response.data.link27,
link28: response.data.link28,
link29: response.data.link29,
link30: response.data.link30,







lt1: response.data.lt1,
lt2: response.data.lt2,
lt3: response.data.lt3,
lt4: response.data.lt4,
lt5: response.data.lt5,
lt6: response.data.lt6,
lt7: response.data.lt7,
lt8: response.data.lt8,
lt9: response.data.lt9,
lt10: response.data.lt10,
lt11: response.data.lt11,
lt12: response.data.lt12,
lt13: response.data.lt13,
lt14: response.data.lt14,
lt15: response.data.lt15,
lt16: response.data.lt16,
lt17: response.data.lt17,
lt18: response.data.lt18,
lt19: response.data.lt19,
lt20: response.data.lt20,
lt21: response.data.lt21,
lt22: response.data.lt22,
lt23: response.data.lt23,
lt24: response.data.lt24,
lt25: response.data.lt25,
lt26: response.data.lt26,
lt27: response.data.lt27,
lt28: response.data.lt28,
lt29: response.data.lt29,
lt30: response.data.lt30,



          
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    
       
      axios.get('/api/categories/')
      .then(response => {
        this.setState({ exercises11: response.data })

      })
      .catch((error) => {
        console.log(error);
      })



      axios.get('/api/categories/sumsub')
      .then(response => {
        this.setState({ exercises: response.data })

      })
      .catch((error) => {
        console.log(error);
      })


  }

  
 


  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

   

  onChangetitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangePublish(e) {
    this.setState({
      Publish: e.target.value
    })
  }


  onChangebody(e) {
    this.setState({
      body: e.target.value
    })
  }

  onChangeCategoryName(e) {
    this.setState({
      CategoryName: e.target.value
    })
  }

  onChangeCategoryid(e) {
    this.setState({
      Categoryid: e.target.value
    })
  }

  onChangeSubName(e) {
    this.setState({
      SubName: e.target.value
    })
  }

  onChangeSubid(e) {
    this.setState({
      Subid: e.target.value
    })
  }



  onChangevideo(e) {
    this.setState({
      video: e.target.value
    })
  }


  onChangeKeywords(e) {
    this.setState({
      Keywords: e.target.value
    })
  }


  onChangeshort(e) {
    this.setState({
      short: e.target.value
    })
  }

  


  onChangeMain_paragraph(e) {
    this.setState({
      Main_paragraph: e.target.value
    })
  }

  onChangeimage(e) {
    this.setState({
      image: e.target.value
    })
  }


  

  onChangetitle1(e) {
    this.setState({
      title1: e.target.value
    })
  }


 onChangetitle2(e) {
    this.setState({
      title2: e.target.value
    })
  }


 onChangetitle3(e) {
    this.setState({
      title3: e.target.value
    })
  }



 onChangetitle4(e) {
    this.setState({
      title4: e.target.value
    })
  }



 onChangetitle5(e) {
    this.setState({
      title5: e.target.value
    })
  }



 onChangetitle6(e) {
    this.setState({
      title6: e.target.value
    })
  }


 onChangetitle7(e) {
    this.setState({
      title7: e.target.value
    })
  }


 onChangetitle8(e) {
    this.setState({
      title8: e.target.value
    })
  }


 onChangetitle9(e) {
    this.setState({
      title9: e.target.value
    })
  }



 onChangetitle10(e) {
    this.setState({
      title10: e.target.value
    })
  }


 onChangetitle11(e) {
    this.setState({
      title11: e.target.value
    })
  }


 onChangetitle12(e) {
    this.setState({
      title12: e.target.value
    })
  }



 onChangetitle13(e) {
    this.setState({
      title13: e.target.value
    })
  }


 onChangetitle14(e) {
    this.setState({
      title14: e.target.value
    })
  }

 onChangetitle15(e) {
    this.setState({
      title15: e.target.value
    })
  }


 onChangetitle16(e) {
    this.setState({
      title16: e.target.value
    })
  }


 onChangetitle17(e) {
    this.setState({
      title17: e.target.value
    })
  }


 onChangetitle18(e) {
    this.setState({
      title18: e.target.value
    })
  }


 onChangetitle19(e) {
    this.setState({
      title19: e.target.value
    })
  }


 onChangetitle20(e) {
    this.setState({
      title20: e.target.value
    })
  }

 onChangetitle21(e) {
    this.setState({
      title21: e.target.value
    })
  }


 onChangetitle22(e) {
    this.setState({
      title22: e.target.value
    })
  }


 onChangetitle23(e) {
    this.setState({
      title23: e.target.value
    })
  }

 onChangetitle24(e) {
    this.setState({
      title24: e.target.value
    })
  }


 onChangetitle25(e) {
    this.setState({
      title25: e.target.value
    })
  }


 onChangetitle26(e) {
    this.setState({
      title26: e.target.value
    })
  }

 onChangetitle27(e) {
    this.setState({
      title27: e.target.value
    })
  }

 onChangetitle28(e) {
    this.setState({
      title28: e.target.value
    })
  }


 onChangetitle29(e) {
    this.setState({
      title29: e.target.value
    })
  }


 onChangetitle30(e) {
    this.setState({
      title30: e.target.value
    })
  }





  onChangeParagraph1(e) {
    this.setState({
      Paragraph1: e.target.value
    })
  }


 onChangeParagraph2(e) {
    this.setState({
      Paragraph2: e.target.value
    })
  }



 onChangeParagraph3(e) {
    this.setState({
      Paragraph3: e.target.value
    })
  }


 onChangeParagraph4(e) {
    this.setState({
      Paragraph4: e.target.value
    })
  }


 onChangeParagraph5(e) {
    this.setState({
      Paragraph5: e.target.value
    })
  }


 onChangeParagraph6(e) {
    this.setState({
      Paragraph6: e.target.value
    })
  }


 onChangeParagraph7(e) {
    this.setState({
      Paragraph7: e.target.value
    })
  }


 onChangeParagraph8(e) {
    this.setState({
      Paragraph8: e.target.value
    })
  }



 onChangeParagraph9(e) {
    this.setState({
      Paragraph9: e.target.value
    })
  }



 onChangeParagraph10(e) {
    this.setState({
      Paragraph10: e.target.value
    })
  }


onChangeParagraph11(e) {
    this.setState({
      Paragraph11: e.target.value
    })
  }



onChangeParagraph12(e) {
    this.setState({
      Paragraph12: e.target.value
    })
  }



onChangeParagraph13(e) {
    this.setState({
      Paragraph13: e.target.value
    })
  }



onChangeParagraph14(e) {
    this.setState({
      Paragraph14: e.target.value
    })
  }



onChangeParagraph15(e) {
    this.setState({
      Paragraph15: e.target.value
    })
  }



onChangeParagraph16(e) {
    this.setState({
      Paragraph16: e.target.value
    })
  }



onChangeParagraph17(e) {
    this.setState({
      Paragraph17: e.target.value
    })
  }


onChangeParagraph18(e) {
    this.setState({
      Paragraph18: e.target.value
    })
  }


onChangeParagraph19(e) {
    this.setState({
      Paragraph19: e.target.value
    })
  }


onChangeParagraph20(e) {
    this.setState({
      Paragraph20: e.target.value
    })
  }


onChangeParagraph21(e) {
    this.setState({
      Paragraph21: e.target.value
    })
  }


onChangeParagraph22(e) {
    this.setState({
      Paragraph22: e.target.value
    })
  }


onChangeParagraph23(e) {
    this.setState({
      Paragraph23: e.target.value
    })
  }


onChangeParagraph24(e) {
    this.setState({
      Paragraph24: e.target.value
    })
  }


onChangeParagraph25(e) {
    this.setState({
      Paragraph25: e.target.value
    })
  }



onChangeParagraph26(e) {
    this.setState({
      Paragraph26: e.target.value
    })
  }


onChangeParagraph27(e) {
    this.setState({
      Paragraph27: e.target.value
    })
  }


onChangeParagraph28(e) {
    this.setState({
      Paragraph28: e.target.value
    })
  }



onChangeParagraph29(e) {
    this.setState({
      Paragraph29: e.target.value
    })
  }



onChangeParagraph30(e) {
    this.setState({
      Paragraph30: e.target.value
    })
  }



  onChangepic1(e) {
    this.setState({
      pic1: e.target.value
    })
  }


onChangepic2(e) {
    this.setState({
      pic2: e.target.value
    })
  }



onChangepic3(e) {
    this.setState({
      pic3: e.target.value
    })
  }



onChangepic4(e) {
    this.setState({
      pic4: e.target.value
    })
  }



onChangepic5(e) {
    this.setState({
      pic5: e.target.value
    })
  }



onChangepic6(e) {
    this.setState({
      pic6: e.target.value
    })
  }


onChangepic7(e) {
    this.setState({
      pic7: e.target.value
    })
  }



onChangepic8(e) {
    this.setState({
      pic8: e.target.value
    })
  }


onChangepic9(e) {
    this.setState({
      pic9: e.target.value
    })
  }


onChangepic10(e) {
    this.setState({
      pic10: e.target.value
    })
  }


onChangepic11(e) {
    this.setState({
      pic11: e.target.value
    })
  }


onChangepic12(e) {
    this.setState({
      pic12: e.target.value
    })
  }


onChangepic13(e) {
    this.setState({
      pic13: e.target.value
    })
  }


onChangepic14(e) {
    this.setState({
      pic14: e.target.value
    })
  }



onChangepic15(e) {
    this.setState({
      pic15: e.target.value
    })
  }


onChangepic16(e) {
    this.setState({
      pic16: e.target.value
    })
  }


onChangepic17(e) {
    this.setState({
      pic17: e.target.value
    })
  }


onChangepic18(e) {
    this.setState({
      pic18: e.target.value
    })
  }


onChangepic19(e) {
    this.setState({
      pic19: e.target.value
    })
  }


onChangepic20(e) {
    this.setState({
      pic20: e.target.value
    })
  }


onChangepic21(e) {
    this.setState({
      pic21: e.target.value
    })
  }


onChangepic22(e) {
    this.setState({
      pic22: e.target.value
    })
  }


onChangepic23(e) {
    this.setState({
      pic23: e.target.value
    })
  }


onChangepic24(e) {
    this.setState({
      pic24: e.target.value
    })
  }


onChangepic25(e) {
    this.setState({
      pic25: e.target.value
    })
  }


onChangepic26(e) {
    this.setState({
      pic26: e.target.value
    })
  }


onChangepic27(e) {
    this.setState({
      pic27: e.target.value
    })
  }


onChangepic28(e) {
    this.setState({
      pic28: e.target.value
    })
  }


onChangepic29(e) {
    this.setState({
      pic29: e.target.value
    })
  }



onChangepic30(e) {
    this.setState({
      pic30: e.target.value
    })
  }



  
onChangelink1(e) {
  this.setState({
   link1: e.target.value
  })
}



onChangelink2(e) {
  this.setState({
   link2: e.target.value
  })
}



onChangelink3(e) {
  this.setState({
   link3: e.target.value
  })
}




onChangelink4(e) {
  this.setState({
   link4: e.target.value
  })
}



onChangelink5(e) {
  this.setState({
   link5: e.target.value
  })
}




onChangelink6(e) {
  this.setState({
   link6: e.target.value
  })
}




onChangelink7(e) {
  this.setState({
   link7: e.target.value
  })
}




onChangelink8(e) {
  this.setState({
   link8: e.target.value
  })
}





onChangelink9(e) {
  this.setState({
   link9: e.target.value
  })
}





onChangelink10(e) {
  this.setState({
   link10: e.target.value
  })
}



onChangelink11(e) {
  this.setState({
   link11: e.target.value
  })
}




onChangelink12(e) {
  this.setState({
   link12: e.target.value
  })
}





onChangelink13(e) {
  this.setState({
   link13: e.target.value
  })
}




onChangelink14(e) {
  this.setState({
   link14: e.target.value
  })
}



onChangelink15(e) {
  this.setState({
   link15: e.target.value
  })
}




onChangelink16(e) {
  this.setState({
   link16: e.target.value
  })
}




onChangelink17(e) {
  this.setState({
   link17: e.target.value
  })
}




onChangelink18(e) {
  this.setState({
   link18: e.target.value
  })
}




onChangelink19(e) {
  this.setState({
   link19: e.target.value
  })
}




onChangelink20(e) {
  this.setState({
   link20: e.target.value
  })
}



onChangelink21(e) {
  this.setState({
   link21: e.target.value
  })
}



onChangelink22(e) {
  this.setState({
   link22: e.target.value
  })
}



onChangelink23(e) {
  this.setState({
   link23: e.target.value
  })
}



onChangelink24(e) {
  this.setState({
   link24: e.target.value
  })
}



onChangelink25(e) {
  this.setState({
   link25: e.target.value
  })
}



onChangelink26(e) {
  this.setState({
   link26: e.target.value
  })
}



onChangelink27(e) {
  this.setState({
   link27: e.target.value
  })
}


onChangelink28(e) {
  this.setState({
   link28: e.target.value
  })
}



onChangelink29(e) {
  this.setState({
   link29: e.target.value
  })
}



onChangelink30(e) {
  this.setState({
   link30: e.target.value
  })
}




onChangelt1(e) {
  this.setState({
   lt1: e.target.value
  })
}



onChangelt2(e) {
  this.setState({
   lt2: e.target.value
  })
}



onChangelt3(e) {
  this.setState({
   lt3: e.target.value
  })
}




onChangelt4(e) {
  this.setState({
   lt4: e.target.value
  })
}



onChangelt5(e) {
  this.setState({
   lt5: e.target.value
  })
}



onChangelt6(e) {
  this.setState({
   lt6: e.target.value
  })
}



onChangelt7(e) {
  this.setState({
   lt7: e.target.value
  })
}



onChangelt8(e) {
  this.setState({
   lt8: e.target.value
  })
}



onChangelt9(e) {
  this.setState({
   lt9: e.target.value
  })
}



onChangelt10(e) {
  this.setState({
   lt10: e.target.value
  })
}



onChangelt11(e) {
  this.setState({
   lt11: e.target.value
  })
}




onChangelt12(e) {
  this.setState({
   lt12: e.target.value
  })
}



onChangelt13(e) {
  this.setState({
   lt13: e.target.value
  })
}



onChangelt14(e) {
  this.setState({
   lt14: e.target.value
  })
}



onChangelt15(e) {
  this.setState({
   lt15: e.target.value
  })
}


onChangelt16(e) {
  this.setState({
   lt16: e.target.value
  })
}



onChangelt17(e) {
  this.setState({
   lt17: e.target.value
  })
}



onChangelt18(e) {
  this.setState({
   lt18: e.target.value
  })
}


onChangelt19(e) {
  this.setState({
   lt19: e.target.value
  })
}



onChangelt20(e) {
  this.setState({
   lt20: e.target.value
  })
}



onChangelt21(e) {
  this.setState({
   lt21: e.target.value
  })
}


onChangelt22(e) {
  this.setState({
   lt22: e.target.value
  })
}


onChangelt23(e) {
  this.setState({
   lt23: e.target.value
  })
}



onChangelt24(e) {
  this.setState({
   lt24: e.target.value
  })
}



onChangelt25(e) {
  this.setState({
   lt25: e.target.value
  })
}



onChangelt26(e) {
  this.setState({
   lt26: e.target.value
  })
}


onChangelt27(e) {
  this.setState({
   lt27: e.target.value
  })
}


onChangelt28(e) {
  this.setState({
   lt28: e.target.value
  })
}



onChangelt29(e) {
  this.setState({
   lt29: e.target.value
  })
}



onChangelt30(e) {
  this.setState({
   lt30: e.target.value
  })
}









 
  onSubmit(e) {
    e.preventDefault();

    const contact = {
      title: this.state.title,
      Publish: this.state.Publish,
      body: this.state.body,
      CategoryName: this.state.CategoryName,
      Categoryid: this.state.Categoryid,

      SubName: this.state.SubName,
      Subid: this.state.Subid,
 
      video: this.state.video,
      Keywords: this.state.Keywords,
      short: this.state.short,
      Main_paragraph: this.state.Main_paragraph,
      image: this.state.image,

      

      title1:this.state.title1,
      title2:this.state.title2,
      title3:this.state.title3,
      title4:this.state.title4,
      title5:this.state.title5,
      title6:this.state.title6,
      title7:this.state.title7,
      title8:this.state.title8,
      title9:this.state.title9,
      title10:this.state.title10,
      title11:this.state.title11,
      title12:this.state.title12,
      title13:this.state.title13,
      title14:this.state.title14,
      title15:this.state.title15,
      title16:this.state.title16,
      title17:this.state.title17,
      title18:this.state.title18,
      title19:this.state.title19,
      title20:this.state.title20,
      title21:this.state.title21,
      title22:this.state.title22,
      title23:this.state.title23,
      title24:this.state.title24,
      title25:this.state.title25,
      title26:this.state.title26,
      title27:this.state.title27,
      title28:this.state.title28,
      title29:this.state.title29,
      title30:this.state.title30,




Paragraph1:this.state.Paragraph1,
Paragraph2:this.state.Paragraph2,
Paragraph3:this.state.Paragraph3,
Paragraph4:this.state.Paragraph4,
Paragraph5:this.state.Paragraph5,
Paragraph6:this.state.Paragraph6,
Paragraph7:this.state.Paragraph7,
Paragraph8:this.state.Paragraph8,
Paragraph9:this.state.Paragraph9,
Paragraph10:this.state.Paragraph10,
Paragraph11:this.state.Paragraph11,
Paragraph12:this.state.Paragraph12,
Paragraph13:this.state.Paragraph13,
Paragraph14:this.state.Paragraph14,
Paragraph15:this.state.Paragraph15,
Paragraph16:this.state.Paragraph16,
Paragraph17:this.state.Paragraph17,
Paragraph18:this.state.Paragraph18,
Paragraph19:this.state.Paragraph19,
Paragraph20:this.state.Paragraph20,
Paragraph21:this.state.Paragraph21,
Paragraph22:this.state.Paragraph22,
Paragraph23:this.state.Paragraph23,
Paragraph24:this.state.Paragraph24,
Paragraph25:this.state.Paragraph25,
Paragraph26:this.state.Paragraph26,
Paragraph27:this.state.Paragraph27,
Paragraph28:this.state.Paragraph28,
Paragraph29:this.state.Paragraph29,
Paragraph30:this.state.Paragraph30,


pic1:this.state.pic1,
pic2:this.state.pic2,
pic3:this.state.pic3,
pic4:this.state.pic4,
pic5:this.state.pic5,
pic6:this.state.pic6,
pic7:this.state.pic7,
pic8:this.state.pic8,
pic9:this.state.pic9,
pic10:this.state.pic10,
pic11:this.state.pic11,
pic12:this.state.pic12,
pic13:this.state.pic13,
pic14:this.state.pic14,
pic15:this.state.pic15,
pic16:this.state.pic16,
pic17:this.state.pic17,
pic18:this.state.pic18,
pic19:this.state.pic19,
pic20:this.state.pic20,
pic21:this.state.pic21,
pic22:this.state.pic22,
pic23:this.state.pic23,
pic24:this.state.pic24,
pic25:this.state.pic25,
pic26:this.state.pic26,
pic27:this.state.pic27,
pic28:this.state.pic28,
pic29:this.state.pic29,
pic30:this.state.pic30,




link1:this.state.link1,
link2:this.state.link2,
link3:this.state.link3,
link4:this.state.link4,
link5:this.state.link5,
link6:this.state.link6,
link7:this.state.link7,
link8:this.state.link8,
link9:this.state.link9,
link10:this.state.link10,
link11:this.state.link11,
link12:this.state.link12,
link13:this.state.link13,
link14:this.state.link14,
link15:this.state.link15,
link16:this.state.link16,
link17:this.state.link17,
link18:this.state.link18,
link19:this.state.link19,
link20:this.state.link20,
link21:this.state.link21,
link22:this.state.link22,
link23:this.state.link23,
link24:this.state.link24,
link25:this.state.link25,
link26:this.state.link26,
link27:this.state.link27,
link28:this.state.link28,
link29:this.state.link29,
link30:this.state.link30,




lt1:this.state.lt1,
lt2:this.state.lt2,
lt3:this.state.lt3,
lt4:this.state.lt4,
lt5:this.state.lt5,
lt6:this.state.lt6,
lt7:this.state.lt7,
lt8:this.state.lt8,
lt9:this.state.lt9,
lt10:this.state.lt10,
lt11:this.state.lt11,
lt12:this.state.lt12,
lt13:this.state.lt13,
lt14:this.state.lt14,
lt15:this.state.lt15,
lt16:this.state.lt16,
lt17:this.state.lt17,
lt18:this.state.lt18,
lt19:this.state.lt19,
lt20:this.state.lt20,
lt21:this.state.lt21,
lt22:this.state.lt22,
lt23:this.state.lt23,
lt24:this.state.lt24,
lt25:this.state.lt25,
lt26:this.state.lt26,
lt27:this.state.lt27,
lt28:this.state.lt28,
lt29:this.state.lt29,
lt30:this.state.lt30,





    }
   
  
    axios.post('/api/posts/update/'+ this.props.match.params.id, contact)
    .then(res => console.log(res.data));

   window.location = '/posts';
  }




  exerciseList1() {
    return this.state.exercises11
    .map(currentexercise => {
       return <option value= {currentexercise.text}>
                       {currentexercise.text}
                      </option>
    })
  }

  exerciseList2() {
    return this.state.exercises11
    .map(currentexercise => {
       return <option value= {currentexercise._id}>
                       {currentexercise.text}
                      </option>
    })
  }


  exerciseList3() {
    return this.state.exercises
    .map(currentexercise => {
       return <option value= {currentexercise.subCategory}>
                       {currentexercise.subCategory}
                      </option>
    })
  }




  exerciseList4() {
    return this.state.exercises
    .map(currentexercise => {
       return <option value= {currentexercise._id}>
                       {currentexercise.subCategory}
                      </option>
    })
  }

    toggleHandler = ()=>{
    const currentStatus = this.state.displayAllbuttons;
    this.setState({
      displayAllbuttons:!currentStatus
    })
    }


    toggleHandler1 = ()=>{
      const currentStatus = this.state.display1;
      this.setState({
        display1:!currentStatus
      })
      }

      toggleHandler2 = ()=>{
        const currentStatus = this.state.display2;
        this.setState({
          display2:!currentStatus
        })
        }

        toggleHandler3 = ()=>{
          const currentStatus = this.state.display3;
          this.setState({
            display3:!currentStatus
          })
          }
  
  
  
  
  
  toggleHandler4 = ()=>{
          const currentStatus = this.state.display4;
          this.setState({
            display4:!currentStatus
          })
          }
  
  
  
  
  toggleHandler5 = ()=>{
          const currentStatus = this.state.display5;
          this.setState({
            display5:!currentStatus
          })
          }
  
  
  
  
  toggleHandler6 = ()=>{
          const currentStatus = this.state.display6;
          this.setState({
            display6:!currentStatus
          })
          }
  
  
  
  
  toggleHandler7 = ()=>{
          const currentStatus = this.state.display7;
          this.setState({
            display7:!currentStatus
          })
          }
  
  
  toggleHandler8 = ()=>{
          const currentStatus = this.state.display8;
          this.setState({
            display8:!currentStatus
          })
          }
  
  
  
  toggleHandler9 = ()=>{
          const currentStatus = this.state.display9;
          this.setState({
            display9:!currentStatus
          })
          }
  
  
  
  toggleHandler10 = ()=>{
          const currentStatus = this.state.display10;
          this.setState({
            display10:!currentStatus
          })
          }
  
  
  toggleHandler11 = ()=>{
          const currentStatus = this.state.display11;
          this.setState({
            display11:!currentStatus
          })
          }
  
  
  
  toggleHandler12 = ()=>{
          const currentStatus = this.state.display12;
          this.setState({
            display12:!currentStatus
          })
          }
  
  
  
  
  toggleHandler13 = ()=>{
          const currentStatus = this.state.display13;
          this.setState({
            display13:!currentStatus
          })
          }
  
  
  
  toggleHandler14 = ()=>{
          const currentStatus = this.state.display14;
          this.setState({
            display14:!currentStatus
          })
          }
  
  
  
  
  toggleHandler15 = ()=>{
          const currentStatus = this.state.display15;
          this.setState({
            display15:!currentStatus
          })
          }
  
  
  
  toggleHandler16 = ()=>{
          const currentStatus = this.state.display16;
          this.setState({
            display16:!currentStatus
          })
          }
  
  
  
  toggleHandler17 = ()=>{
          const currentStatus = this.state.display17;
          this.setState({
            display17:!currentStatus
          })
          }
  
  
  
  toggleHandler18 = ()=>{
          const currentStatus = this.state.display18;
          this.setState({
            display18:!currentStatus
          })
          }
  
  
  
  toggleHandler19 = ()=>{
          const currentStatus = this.state.display19;
          this.setState({
            display19:!currentStatus
          })
          }
  
  
  
  toggleHandler20 = ()=>{
          const currentStatus = this.state.display20;
          this.setState({
            display20:!currentStatus
          })
          }
  
  
  
  toggleHandler21 = ()=>{
          const currentStatus = this.state.display21;
          this.setState({
            display21:!currentStatus
          })
          }
  
  
  
  toggleHandler22 = ()=>{
          const currentStatus = this.state.display22;
          this.setState({
            display22:!currentStatus
          })
          }
  
  
  
  toggleHandler23 = ()=>{
          const currentStatus = this.state.display23;
          this.setState({
            display23:!currentStatus
          })
          }
  
  
  
  toggleHandler24 = ()=>{
          const currentStatus = this.state.display24;
          this.setState({
            display24:!currentStatus
          })
          }
  
  
  
  toggleHandler25 = ()=>{
          const currentStatus = this.state.display25;
          this.setState({
            display25:!currentStatus
          })
          }
  
  
  
  toggleHandler26 = ()=>{
          const currentStatus = this.state.display26;
          this.setState({
            display26:!currentStatus
          })
          }
  
  
  
  toggleHandler27 = ()=>{
          const currentStatus = this.state.display27;
          this.setState({
            display27:!currentStatus
          })
          }
  
  
  
  toggleHandler28 = ()=>{
          const currentStatus = this.state.display28;
          this.setState({
            display28:!currentStatus
          })
          }
  
  
  
  toggleHandler29 = ()=>{
          const currentStatus = this.state.display29;
          this.setState({
            display29:!currentStatus
          })
          }
  
  
  toggleHandler30 = ()=>{
          const currentStatus = this.state.display30;
          this.setState({
            display30:!currentStatus
          })
          }
  

          

  render() {
   
    return (
      // <div className="form-container">
      // <form className="form" encType="multipart/form-data" onSubmit={this.onSubmit}> 
      // <div className="form-group">
      // <label className="form-label">The Name</label>
      // <input  className="form-contact"  type="text" value={this.state.name} onChange={this.onChangename} required/>
      // </div>
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
                       التعديل على الموضوع   <i class="fa fa-edit"></i>
                       </div>
                   </div>


                   <div class="form-bottom">
                   <form className="login-form" encType="multipart/form-data" onSubmit={this.onSubmit} > 
                  


                    <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='title'  
                    autocomplete="off"
                    value={this.state.title} 
                    onChange={this.onChangetitle}
                    />
                    <span class="input-group-addon" id="basic-addon1"><label className="form-label">العنوان الرئيسي </label></span>
                    </div>
                    </div>



                    <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" type="text" name='title'  
                    autocomplete="off"
                    value={this.state.body} 
                    onChange={this.onChangebody}
                    />
                    <span class="input-group-addon" id="basic-addon1"><label className="form-label"> العنوان بالرابط </label></span>
                    </div>
                    </div>






                      <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="input-group form-group">
                      <select  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}} id='CategoryName' className="" name='CategoryName'
                      value={this.state.CategoryName} 
                      onChange={this.onChangeCategoryName}
                      required
                      > 
                      <option value="اختر التصنيف">
                        اختر التصنيف
                      </option>
                      { this.exerciseList1() }
                        </select>
                      <span class="input-group-addon" id="basic-addon1"><label className="form-label">اسم التبويب   </label></span>
                      </div>
                      </div>



                      <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="input-group form-group">
                      <select  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}} id='Categoryid' className="" name='Categoryid'
                      value={this.state.Categoryid} 
                      onChange={this.onChangeCategoryid}
                      required >
                      <option value="اختر التصنيف">
                        اختر التصنيف
                      </option>
                      { this.exerciseList2() }
                        </select>
                      <span class="input-group-addon" id="basic-addon1"><label className="form-label">تاكيد التبويب   </label></span>
                      </div>
                      </div>



                      <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="input-group form-group">
                      <select  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}} id='SubName' className="" name='SubName'
                      value={this.state.SubName} 
                      onChange={this.onChangeSubName}
                      required >
                      <option value="اختر التصنيف">
                        اختر التصنيف
                      </option>
                      { this.exerciseList3() }
                        </select>
                      <span class="input-group-addon" id="basic-addon1"><label className="form-label">التصنيف الفرعي   </label></span>
                      </div>
                      </div>




                      <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="input-group form-group">
                      <select  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}} id='Subid' className="" name='Subid'
                      value={this.state.Subid} 
                      onChange={this.onChangeSubid}
                      required >
                      <option value="اختر التصنيف">
                        اختر التصنيف
                      </option>
                      { this.exerciseList4() }
                        </select>
                      <span class="input-group-addon" id="basic-addon1"><label className="form-label"> تاكيد التصنيف الفرعي   </label></span>
                      </div>
                      </div>






                    {/* <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="input-group form-group">
                    <select  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}} id='Publish'    className=""    name='Publish' 
                    value={this.state.Publish} 
                    onChange={this.onChangePublish}
                    >
                    <option value="اختر التصنيف">
                      اختر التصنيف
                    </option>
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

     <input  className="form-control"  type="radio" id="Publish1" name='Publish'  value='yes'  onChange={this.onChangePublish} />
     <span style={{backgroundColor:'green',color:'#fff'}} for="Publish1" class="input-group-addon" id="basic-addon1"><label  for="Publish1" className="form-label">  النشر  </label></span>
 
 
     <input className="form-control"  type="radio" id="Publish2"  name='Publish' value='no'  onChange={this.onChangePublish} />
     <span style={{backgroundColor:'red',color:'#fff'}} for="Publish2" class="input-group-addon" id="basic-addon1"><label for="Publish2" className="form-label" >عدم النشر  </label></span>
 
 </div>
 </div>

                   


                    <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}} className="form-control" placeholder="" type="text" name='video'
                      aria-describedby="basic-addon1" autocomplete="off"
                      value={this.state.video} 
                      onChange={this.onChangevideo}
                      />
                    <span class="input-group-addon" id="basic-addon1"><label className="form-label">الفيديو  </label></span>
                    </div>
                    </div>





                    <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}} className="form-control" placeholder="" type="text" name='Keywords' 
                      aria-describedby="basic-addon1" autocomplete="off"
                      value={this.state.Keywords} 
                      onChange={this.onChangeKeywords}
                      />
                    <span class="input-group-addon" id="basic-addon1"><label className="form-label">الكلمات المفتاحية  </label></span>
                    </div>
                    </div>




                    <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <input  style={{width:'100%',color:'#000',fontSize:'16px',fontWeight:'bold',borderColor:'#cacaca'}} className="form-control" placeholder="" type="text" name='Keywords' 
                      aria-describedby="basic-addon1" autocomplete="off"
                      value={this.state.image} 
                      onChange={this.onChangeimage}
                      />
                    <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة  </label></span>
                    </div>
                    </div>





                  <div class="col-lg-12 col-md-12 col-sm-12" style={{float:"right"}}>
                  <div class="input-group form-group">
                  <input  style={{width:'100%',color:'#000',fontSize:'13px',fontWeight:'bold',borderColor:'#cacaca'}} className="form-control" placeholder="" type="text" name='short' 
                    aria-describedby="basic-addon1" autocomplete="off" maxlength="141"
                    value={this.state.short} 
                    onChange={this.onChangeshort}
                    />
                  <span class="input-group-addon" id="basic-addon1"><label className="form-label">ملخص </label></span>
                  </div>
                  </div>




                   <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="input-group form-group">
                    <textarea  style={{width:'100%',color:'#000',fontSize:'13px',fontWeight:'bold',borderColor:'#cacaca'}}  className="form-control" placeholder="" name='Main_paragraph' 
                      aria-describedby="basic-addon1" autocomplete="off"
                      value={this.state.Main_paragraph} 
                      onChange={this.onChangeMain_paragraph}
                      />
                    <span class="input-group-addon" id="basic-addon1"><label className="form-label"> فقرة رئيسية </label></span>
                    </div>
                    </div>


                    <div className='my-2'>
                    <button style={{backgroundColor:'#000',fontSize:'15px'}}
                    onClick={ this.toggleHandler }
                     type='button'
                      className='momadbtn'
                    >
                    +  تعديل فقرات اخرى 
                    </button>
          
        </div>

      {this.state.displayAllbuttons && (

<Fragment>






{/* ////////////////////////////////////////////////////////الفقرة الأولى///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler1 }
  type='button'
  className='momadbtn'
>
فقرة 1
</button>
</div>
 
{this.state.display1 && (
  <Fragment>

  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title1'
   value={this.state.title1} 
   onChange={this.onChangetitle1}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 1 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph1' 
value={this.state.Paragraph1} 
onChange={this.onChangeParagraph1}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 1 </label></span>
  </div>
  </div>




  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic1' 
value={this.state.pic1} 
onChange={this.onChangepic1}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 1 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link1' 
value={this.state.link1} 
   onChange={this.onChangelink1}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 1 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt1'
value={this.state.lt1} 
   onChange={this.onChangelt1}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 1 </label></span>
  </div>
  </div>


  </Fragment>              

  )}


{/* ////////////////////////////////////////////////////////الفقرة الثانية///////////////////////////////////////////////////// */}

<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler2 }
  type='button'
  className='momadbtn'
>
فقرة 2
</button>
</div>

{this.state.display2 && (
  <Fragment>

<div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title2'
   value={this.state.title2} 
   onChange={this.onChangetitle2}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 2 </label></span>
  </div>
  </div>


  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph2' 
value={this.state.Paragraph2} 
onChange={this.onChangeParagraph2}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 2 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic2' 
value={this.state.pic2} 
onChange={this.onChangepic2}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 2 </label></span>
  </div>
  </div>




  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link2' 
value={this.state.link2} 
   onChange={this.onChangelink2}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 2 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt2'
value={this.state.lt2} 
   onChange={this.onChangelt2}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 2 </label></span>
  </div>
  </div>


  </Fragment>              

  )}






{/* ////////////////////////////////////////////////////////الفقةر الثالثة///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler3 }
  type='button'
  className='momadbtn'
>
فقرة 3
</button>
</div>
{this.state.display3 && (
  <Fragment>

<div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title3'
   value={this.state.title3} 
   onChange={this.onChangetitle3}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 3 </label></span>
  </div>
  </div>


  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph3' 
value={this.state.Paragraph3} 
onChange={this.onChangeParagraph3}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 3 </label></span>
  </div>
  </div>





  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic3' 
value={this.state.pic3} 
onChange={this.onChangepic3}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 3 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link3' 
value={this.state.link3} 
   onChange={this.onChangelink3}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 3 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt3'
value={this.state.lt3} 
   onChange={this.onChangelt3}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 3 </label></span>
  </div>
  </div>

  </Fragment>              
  )}






{/* ////////////////////////////////////////////////////////الفقرة الرابعة///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler4 }
  type='button'
  className='momadbtn'
>
فقرة 4
</button>
</div>
{this.state.display4 && (
  <Fragment>

<div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title4'
   value={this.state.title4} 
   onChange={this.onChangetitle4}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 4 </label></span>
  </div>
  </div>


  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph4' 
value={this.state.Paragraph4} 
onChange={this.onChangeParagraph4}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 4 </label></span>
  </div>
  </div>


  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic4' 
value={this.state.pic4} 
onChange={this.onChangepic4}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 4 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link4' 
value={this.state.link4} 
   onChange={this.onChangelink4}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 4 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt4'
value={this.state.lt4} 
   onChange={this.onChangelt4}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 4 </label></span>
  </div>
  </div>


  </Fragment>              
  )}







{/* ////////////////////////////////////////////////////////الفقرة الخامسة///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler5 }
  type='button'
  className='momadbtn'
>
فقرة 5
</button>
</div>
{this.state.display5 && (
  <Fragment>

<div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title5'
   value={this.state.title5} 
   onChange={this.onChangetitle5}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 5 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph5' 
value={this.state.Paragraph5} 
onChange={this.onChangeParagraph5}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 5 </label></span>
  </div>
  </div>


 <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic5' 
value={this.state.pic5} 
onChange={this.onChangepic5}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 5 </label></span>
  </div>
  </div>





  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link5' 
value={this.state.link5} 
   onChange={this.onChangelink5}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 5 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt5'
value={this.state.lt5} 
   onChange={this.onChangelt5}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 5 </label></span>
  </div>
  </div>


  </Fragment>              
  )}







{/* ////////////////////////////////////////////////////////الفقرة السادسة///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler6 }
  type='button'
  className='momadbtn'
>
فقرة 6
</button>
</div>
{this.state.display6 && (
  <Fragment>
 
 <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title6'
   value={this.state.title6} 
   onChange={this.onChangetitle6}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 6 </label></span>
  </div>
  </div>





  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph6' 
value={this.state.Paragraph6} 
onChange={this.onChangeParagraph6}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 6 </label></span>
  </div>
  </div>




  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic6' 
value={this.state.pic6} 
onChange={this.onChangepic6}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 6 </label></span>
  </div>
  </div>





  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
  name='link6' 
  value={this.state.link6} 
    onChange={this.onChangelink6}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 6 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt6'
value={this.state.lt6} 
   onChange={this.onChangelt6}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 6 </label></span>
  </div>
  </div>




  </Fragment>              
  )}





{/* ////////////////////////////////////////////////////////الفقرة السابعة///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler7 }
  type='button'
  className='momadbtn'
>
فقرة 7
</button>
</div>
{this.state.display7 && (
  <Fragment>

<div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title7'
   value={this.state.title7} 
   onChange={this.onChangetitle7}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 7 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph7' 
value={this.state.Paragraph7} 
onChange={this.onChangeParagraph7}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 7 </label></span>
  </div>
  </div>





  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic7' 
value={this.state.pic7} 
onChange={this.onChangepic7}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 7 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link7' 
value={this.state.link7} 
   onChange={this.onChangelink7}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 7 </label></span>
  </div>
  </div>

  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt7'
value={this.state.lt7} 
   onChange={this.onChangelt7}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 7 </label></span>
  </div>
  </div>

  </Fragment>              
  )}









{/* ////////////////////////////////////////////////////////الفقرة الثامنة///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler8 }
  type='button'
  className='momadbtn'
>
فقرة 8
</button>
</div>
{this.state.display8 && (
  <Fragment>
<div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title8'
   value={this.state.title8} 
   onChange={this.onChangetitle8}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 8 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph8' 
value={this.state.Paragraph8} 
onChange={this.onChangeParagraph8}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 8 </label></span>
  </div>
  </div>




  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic8' 
value={this.state.pic8} 
onChange={this.onChangepic8}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 8 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link8' 
value={this.state.link8} 
   onChange={this.onChangelink8}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 8 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt8'
value={this.state.lt8} 
   onChange={this.onChangelt8}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 8 </label></span>
  </div>
  </div>



  </Fragment>              
  )}






{/* ////////////////////////////////////////////////////////الفقرة التاسعة///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler9 }
  type='button'
  className='momadbtn'
>
فقرة 9
</button>
</div>
{this.state.display9 && (
  <Fragment>


<div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title9'
   value={this.state.title9} 
   onChange={this.onChangetitle9}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 9 </label></span>
  </div>
  </div>


  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph9' 
value={this.state.Paragraph9} 
onChange={this.onChangeParagraph9}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 9 </label></span>
  </div>
  </div>




  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic9' 
value={this.state.pic9} 
onChange={this.onChangepic9}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 9 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link9' 
value={this.state.link9} 
   onChange={this.onChangelink9}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 9 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt9'
value={this.state.lt9} 
   onChange={this.onChangelt9}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 9 </label></span>
  </div>
  </div>



  </Fragment>              
  )}





{/* ////////////////////////////////////////////////////////الفقرة العاشرة///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler10 }
  type='button'
  className='momadbtn'
>
فقرة 10
</button>
</div>
{this.state.display10 && (
  <Fragment>

<div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title10'
   value={this.state.title10} 
   onChange={this.onChangetitle10}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 10 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph10' 
value={this.state.Paragraph10} 
onChange={this.onChangeParagraph10}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 10 </label></span>
  </div>
  </div>


  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic10' 
value={this.state.pic10} 
onChange={this.onChangepic10}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 10 </label></span>
  </div>
  </div>




  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link10' 
value={this.state.link10} 
   onChange={this.onChangelink10}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 10 </label></span>
  </div>
  </div>

  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt10'
value={this.state.lt10} 
   onChange={this.onChangelt10}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 10 </label></span>
  </div>
  </div>

  </Fragment>              
  )}






{/* ////////////////////////////////////////////////////////الفقرة الحادي عشر///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler11}
  type='button'
  className='momadbtn'
>
فقرة 11
</button>
</div>
{this.state.display11 && (
  <Fragment>


<div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title11'
   value={this.state.title11} 
   onChange={this.onChangetitle11}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 11 </label></span>
  </div>
  </div>


  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph11' 
value={this.state.Paragraph11} 
onChange={this.onChangeParagraph11}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 11 </label></span>
  </div>
  </div>





  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic11' 
value={this.state.pic11} 
onChange={this.onChangepic11}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 11 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link11' 
value={this.state.link11} 
   onChange={this.onChangelink11}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 11 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt11'
value={this.state.lt11} 
   onChange={this.onChangelt11}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 11 </label></span>
  </div>
  </div>



  </Fragment>              
  )}






{/* ////////////////////////////////////////////////////////الفقرة الثاني عشر///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler12}
  type='button'
  className='momadbtn'
>
فقرة 12
</button>
</div>
{this.state.display12 && (
  <Fragment>
 
 <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title12'
   value={this.state.title12} 
   onChange={this.onChangetitle12}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 12 </label></span>
  </div>
  </div>




  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph12' 
value={this.state.Paragraph12} 
onChange={this.onChangeParagraph12}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 12 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic12' 
value={this.state.pic12} 
onChange={this.onChangepic12}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 12 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link12' 
value={this.state.link12} 
   onChange={this.onChangelink12}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 12 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt12'
value={this.state.lt12} 
   onChange={this.onChangelt12}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 12 </label></span>
  </div>
  </div>



  </Fragment>              
  )}







{/* ////////////////////////////////////////////////////////الفقرة الثالث عشر///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler13}
  type='button'
  className='momadbtn'
>
فقرة 13
</button>
</div>
{this.state.display13 && (
  <Fragment>


<div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title13'
   value={this.state.title13} 
   onChange={this.onChangetitle13}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 13 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph13' 
value={this.state.Paragraph13} 
onChange={this.onChangeParagraph13}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 13 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic13' 
value={this.state.pic13} 
onChange={this.onChangepic13}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 13 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link13' 
value={this.state.link13} 
   onChange={this.onChangelink13}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 13 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt13'
value={this.state.lt13} 
   onChange={this.onChangelt13}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 13 </label></span>
  </div>
  </div>



  </Fragment>              
  )}






{/* ////////////////////////////////////////////////////////الفقرة الرابع عشر///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler14}
  type='button'
  className='momadbtn'
>
فقرة 14
</button>
</div>
{this.state.display14 && (
  <Fragment>
 
 <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title14'
   value={this.state.title14} 
   onChange={this.onChangetitle14}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 14 </label></span>
  </div>
  </div>





  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph14' 
value={this.state.Paragraph14} 
onChange={this.onChangeParagraph14}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 14 </label></span>
  </div>
  </div>




  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic14' 
value={this.state.pic14} 
onChange={this.onChangepic14}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 14 </label></span>
  </div>
  </div>





  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link14' 
value={this.state.link14} 
   onChange={this.onChangelink14}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 14 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt14'
value={this.state.lt14} 
   onChange={this.onChangelt14}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 14 </label></span>
  </div>
  </div>



  </Fragment>              
  )}







{/* ////////////////////////////////////////////////////////الفقرة الخامس عشر///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler15}
  type='button'
  className='momadbtn'
>
فقرة 15
</button>
</div>
{this.state.display15 && (
  <Fragment>

<div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title15'
   value={this.state.title15} 
   onChange={this.onChangetitle15}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 15 </label></span>
  </div>
  </div>





  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph15' 
value={this.state.Paragraph15} 
onChange={this.onChangeParagraph15}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 15 </label></span>
  </div>
  </div>




  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic15' 
value={this.state.pic15} 
onChange={this.onChangepic15}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 15 </label></span>
  </div>
  </div>





  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link15' 
value={this.state.link15} 
   onChange={this.onChangelink15}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 15 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt15'
value={this.state.lt15} 
   onChange={this.onChangelt15}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 15 </label></span>
  </div>
  </div>


  </Fragment>              
  )}






{/* ////////////////////////////////////////////////////////الفقرة السادس عشر///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler16}
  type='button'
  className='momadbtn'
>
فقرة 16
</button>
</div>
{this.state.display16 && (
  <Fragment>
 
 <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title16'
   value={this.state.title16} 
   onChange={this.onChangetitle16}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 16 </label></span>
  </div>
  </div>




  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph16' 
value={this.state.Paragraph16} 
onChange={this.onChangeParagraph16}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 16 </label></span>
  </div>
  </div>




  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic16' 
value={this.state.pic16} 
onChange={this.onChangepic16}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 16 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link16' 
value={this.state.link16} 
   onChange={this.onChangelink16}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 16 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt16'
value={this.state.lt16} 
   onChange={this.onChangelt16}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 16 </label></span>
  </div>
  </div>



  </Fragment>              
  )}









{/* ////////////////////////////////////////////////////////الفقرة السابع عشر///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler17}
  type='button'
  className='momadbtn'
>
فقرة 17
</button>
</div>
{this.state.display17 && (
  <Fragment>
 

 <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title17'
   value={this.state.title17} 
   onChange={this.onChangetitle17}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 17 </label></span>
  </div>
  </div>





  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph17' 
value={this.state.Paragraph17} 
onChange={this.onChangeParagraph17}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 17 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic17' 
value={this.state.pic17} 
onChange={this.onChangepic17}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 17 </label></span>
  </div>
  </div>


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link17' 
value={this.state.link17} 
   onChange={this.onChangelink17}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 17 </label></span>
  </div>
  </div>




  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt17'
value={this.state.lt17} 
   onChange={this.onChangelt17}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 17 </label></span>
  </div>
  </div>



  </Fragment>              
  )}









{/* ////////////////////////////////////////////////////////الفقرة الثامن عشر///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler18}
  type='button'
  className='momadbtn'
>
فقرة 18
</button>
</div>
{this.state.display18 && (
  <Fragment>

<div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title18'
   value={this.state.title18} 
   onChange={this.onChangetitle18}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 18 </label></span>
  </div>
  </div>
 


  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph18' 
value={this.state.Paragraph18} 
onChange={this.onChangeParagraph18}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 18 </label></span>
  </div>
  </div>





  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic18' 
value={this.state.pic18} 
onChange={this.onChangepic18}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 18 </label></span>
  </div>
  </div>




  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link18' 
value={this.state.link18} 
   onChange={this.onChangelink18}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 18 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt18'
value={this.state.lt18} 
   onChange={this.onChangelt18}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 18 </label></span>
  </div>
  </div>



  </Fragment>              
  )}










{/* ////////////////////////////////////////////////////////الفقرة التاسع عشر///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler19}
  type='button'
  className='momadbtn'
>
فقرة 19
</button>
</div>
{this.state.display19 && (
  <Fragment>

<div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title19'
   value={this.state.title19} 
   onChange={this.onChangetitle19}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 19 </label></span>
  </div>
  </div>




  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph19' 
value={this.state.Paragraph19} 
onChange={this.onChangeParagraph19}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 19 </label></span>
  </div>
  </div>





  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic19' 
value={this.state.pic19} 
onChange={this.onChangepic19}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 19 </label></span>
  </div>
  </div>




  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link19' 
value={this.state.link19} 
   onChange={this.onChangelink19}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 19 </label></span>
  </div>
  </div>

 


  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt19'
value={this.state.lt19} 
   onChange={this.onChangelt19}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 19 </label></span>
  </div>
  </div>



  </Fragment>              
  )}









{/* ////////////////////////////////////////////////////////الفقرة العشرين ///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler20}
  type='button'
  className='momadbtn'
>
فقرة 20
</button>
</div>
{this.state.display20 && (
  <Fragment>

<div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title20'
   value={this.state.title20} 
   onChange={this.onChangetitle20}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 20 </label></span>
  </div>
  </div>
 


  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph20' 
value={this.state.Paragraph20} 
onChange={this.onChangeParagraph20}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 20 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic20' 
value={this.state.pic20} 
onChange={this.onChangepic20}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 20 </label></span>
  </div>
  </div>




  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
    name='link20' 
    value={this.state.link20} 
    onChange={this.onChangelink20}
    aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 20 </label></span>
  </div>
  </div>




  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt20'
value={this.state.lt20} 
   onChange={this.onChangelt20}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 20 </label></span>
  </div>
  </div>




  </Fragment>              
  )}





{/* ////////////////////////////////////////////////////////الفقرة 21 ///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler21}
  type='button'
  className='momadbtn'
>
فقرة 21
</button>
</div>
{this.state.display21 && (
  <Fragment>
 
 <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title21'
   value={this.state.title21} 
   onChange={this.onChangetitle21}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 21 </label></span>
  </div>
  </div>





  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph21' 
value={this.state.Paragraph21} 
onChange={this.onChangeParagraph21}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 21 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic21' 
value={this.state.pic21} 
onChange={this.onChangepic21}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 21 </label></span>
  </div>
  </div>





  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link21' 
value={this.state.link21} 
   onChange={this.onChangelink21}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 21 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt21'
value={this.state.lt21} 
   onChange={this.onChangelt21}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 21 </label></span>
  </div>
  </div>



  </Fragment>              
  )}







{/* ////////////////////////////////////////////////////////الفقرة 22 ///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler22}
  type='button'
  className='momadbtn'
>
فقرة 22
</button>
</div>
{this.state.display22 && (
  <Fragment>
<div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title22'
   value={this.state.title22} 
   onChange={this.onChangetitle22}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 22 </label></span>
  </div>
  </div>




  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph22' 
value={this.state.Paragraph22} 
onChange={this.onChangeParagraph22}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 22 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic22' 
value={this.state.pic22} 
onChange={this.onChangepic22}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 22 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link22' 
value={this.state.link22} 
   onChange={this.onChangelink22}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 22 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt22'
value={this.state.lt22} 
   onChange={this.onChangelt22}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 22 </label></span>
  </div>
  </div>



  </Fragment>              
  )}








{/* ////////////////////////////////////////////////////////الفقرة 23 ///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler23}
  type='button'
  className='momadbtn'
>
فقرة 23
</button>
</div>
{this.state.display23 && (
  <Fragment>
 

 <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title23'
   value={this.state.title23} 
   onChange={this.onChangetitle23}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 23 </label></span>
  </div>
  </div>





  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph23' 
value={this.state.Paragraph23} 
onChange={this.onChangeParagraph23}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 23 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic23' 
value={this.state.pic23} 
onChange={this.onChangepic23}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 23 </label></span>
  </div>
  </div>




  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link23' 
value={this.state.link23} 
   onChange={this.onChangelink23}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 23 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt23'
value={this.state.lt23} 
   onChange={this.onChangelt23}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 23 </label></span>
  </div>
  </div>




  </Fragment>              
  )}










{/* ////////////////////////////////////////////////////////الفقرة 24 ///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler24}
  type='button'
  className='momadbtn'
>
فقرة 24
</button>
</div>
{this.state.display24 && (
  <Fragment>
 
 <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title24'
   value={this.state.title24} 
   onChange={this.onChangetitle24}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 24 </label></span>
  </div>
  </div>




  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph24' 
value={this.state.Paragraph24} 
onChange={this.onChangeParagraph24}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 24 </label></span>
  </div>
  </div>

 


  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic24' 
value={this.state.pic24} 
onChange={this.onChangepic24}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 24 </label></span>
  </div>
  </div>




  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link24' 
value={this.state.link24} 
   onChange={this.onChangelink24}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 24 </label></span>
  </div>
  </div>




  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt24'
value={this.state.lt24} 
   onChange={this.onChangelt24}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 24 </label></span>
  </div>
  </div>




  </Fragment>              
  )}







{/* ////////////////////////////////////////////////////////الفقرة 25 ///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler25}
  type='button'
  className='momadbtn'
>
فقرة 25
</button>
</div>
{this.state.display25 && (
  <Fragment>
 
 <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title25'
   value={this.state.title25} 
   onChange={this.onChangetitle25}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 25 </label></span>
  </div>
  </div>





  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph25' 
value={this.state.Paragraph25} 
onChange={this.onChangeParagraph25}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 25 </label></span>
  </div>
  </div>




  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic25' 
value={this.state.pic25} 
onChange={this.onChangepic25}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 25 </label></span>
  </div>
  </div>






  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link25' 
value={this.state.link25} 
   onChange={this.onChangelink25}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 25 </label></span>
  </div>
  </div>




  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt25'
value={this.state.lt25} 
   onChange={this.onChangelt25}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 25 </label></span>
  </div>
  </div>



  </Fragment>              
  )}







{/* ////////////////////////////////////////////////////////الفقرة 26 ///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler26}
  type='button'
  className='momadbtn'
>
فقرة 26
</button>
</div>
{this.state.display26 && (
  <Fragment>
 
 <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title26'
   value={this.state.title26} 
   onChange={this.onChangetitle26}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 26 </label></span>
  </div>
  </div>




  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph26' 
value={this.state.Paragraph26} 
onChange={this.onChangeParagraph26}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 26 </label></span>
  </div>
  </div>


  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic26' 
value={this.state.pic26} 
onChange={this.onChangepic26}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 26 </label></span>
  </div>
  </div>




  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link26' 
value={this.state.link26} 
   onChange={this.onChangelink26}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 26 </label></span>
  </div>
  </div>




  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt26'
value={this.state.lt26} 
   onChange={this.onChangelt26}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 26 </label></span>
  </div>
  </div>



  </Fragment>              
  )}











{/* ////////////////////////////////////////////////////////الفقرة 27 ///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler27}
  type='button'
  className='momadbtn'
>
فقرة 27
</button>
</div>
{this.state.display27 && (
  <Fragment>
 
 <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title27'
   value={this.state.title27} 
   onChange={this.onChangetitle27}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 27 </label></span>
  </div>
  </div>






  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph27' 
value={this.state.Paragraph27} 
onChange={this.onChangeParagraph27}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 27 </label></span>
  </div>
  </div>




  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic27' 
value={this.state.pic27} 
onChange={this.onChangepic27}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 27 </label></span>
  </div>
  </div>




  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link27' 
value={this.state.link27} 
   onChange={this.onChangelink27}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 27 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt27'
value={this.state.lt27} 
   onChange={this.onChangelt27}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 27 </label></span>
  </div>
  </div>



  </Fragment>              
  )}










{/* ////////////////////////////////////////////////////////الفقرة 28 ///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler28}
  type='button'
  className='momadbtn'
>
فقرة 28
</button>
</div>
{this.state.display28 && (
  <Fragment>
 
 <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title28'
   value={this.state.title28} 
   onChange={this.onChangetitle28}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 28 </label></span>
  </div>
  </div>




  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph28' 
value={this.state.Paragraph28} 
onChange={this.onChangeParagraph28}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 28 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic28' 
value={this.state.pic28} 
onChange={this.onChangepic28}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 28 </label></span>
  </div>
  </div>




  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link28' 
value={this.state.link28} 
   onChange={this.onChangelink28}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 28 </label></span>
  </div>
  </div>




  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt28'
value={this.state.lt28} 
   onChange={this.onChangelt28}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 28 </label></span>
  </div>
  </div>




  </Fragment>              
  )}











{/* ////////////////////////////////////////////////////////الفقرة 29 ///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler29}
  type='button'
  className='momadbtn'
>
فقرة 29
</button>
</div>
{this.state.display29 && (
  <Fragment>
 

 <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title29'
   value={this.state.title29} 
   onChange={this.onChangetitle29}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 29 </label></span>
  </div>
  </div>




  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph29' 
value={this.state.Paragraph29} 
onChange={this.onChangeParagraph29}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 29 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic29' 
value={this.state.pic29} 
onChange={this.onChangepic29}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 29 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link29' 
value={this.state.link29} 
   onChange={this.onChangelink29}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 29 </label></span>
  </div>
  </div>




  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt29'
value={this.state.lt29} 
   onChange={this.onChangelt29}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 29 </label></span>
  </div>
  </div>




  </Fragment>              
  )}








{/* ////////////////////////////////////////////////////////الفقرة 30 ///////////////////////////////////////////////////// */}
<div className='my-2'>
<button style={{backgroundColor:'#000',fontSize:'15px',width:'10%',float:'right',marginLeft:'10px'}}
  onClick={ this.toggleHandler30}
  type='button'
  className='momadbtn'
>
فقرة 30
</button>
</div>
{this.state.display30 && (
  <Fragment>

<div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
   name='title30'
   value={this.state.title30} 
   onChange={this.onChangetitle30}
  aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان 30 </label></span>
  </div>
  </div>





  <div class="col-lg-12 col-md-12 col-sm-12">
  <div class="input-group form-group">
  <textarea  className="form-control" placeholder="" 
 name='Paragraph30' 
value={this.state.Paragraph30} 
onChange={this.onChangeParagraph30}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">فقرة 30 </label></span>
  </div>
  </div>



  <div class="col-lg-12 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='pic30' 
value={this.state.pic30} 
onChange={this.onChangepic30}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الصورة 30 </label></span>
  </div>
  </div>





  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='link30' 
value={this.state.link30} 
   onChange={this.onChangelink30}
aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">الرابط 30 </label></span>
  </div>
  </div>



  <div class="col-lg-6 col-md-12 col-sm-12" >
  <div class="input-group form-group" >
  <input   className="form-control" placeholder="" type="text"
 name='lt30'
value={this.state.lt30} 
   onChange={this.onChangelt30}
 aria-describedby="basic-addon1" autocomplete="off"/>
  <span class="input-group-addon" id="basic-addon1"><label className="form-label">عنوان الرابط 30 </label></span>
  </div>
  </div>


  
 
  </Fragment>              
  )}








</Fragment>             

    )}
                    <div className="form-group">
                    <button  type="submit" className="momadbtn">تحديث</button>
                    </div>

                   </form>
                   </div>
               </div>
               </div>
               </div>
               </section>
               </Fragment>
    )
  }
}
