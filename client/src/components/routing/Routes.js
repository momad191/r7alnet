import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import registerByUserRef from '../auth/RegisterByRefUser';
 
import Login from '../auth/Login';
import Loginadmin from '../auth/LoginAdmin';
import Alert from '../layout/Alert';
import dashHome from '../layout/dashHome';


import Dashboard from '../dashboard/Dashboard';
import dashboarAadmin from '../dashboard/DashboardAadmin';


import imgcontroll from '../dashboard/imgcontroll';
// import ChartEx from '../pages/ChartEx';

 
import cvcontroll from '../dashboard/cvcontroll';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import EditProfileInfo from '../pages/EditProfileInfo';

  
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import AddSpost from '../profile-forms/AddSpost';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import PostsUser from '../posts/Posts-user';
import Topics from '../posts/Topics';
import Topic from '../posts/Topic';

 
  
import addpost from '../posts/PostForm';
   
 
import addcategory from '../categories/PostForm';
import categories from '../categories/Posts';
import question from '../category/Post';

  

import Post from '../post/Post';
import Comment from '../post/Comment';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import Contact from '../auth/Contact';
import msg from '../auth/Msg';

 
import reputations from '../pages/Reputations';
import about from '../pages/about';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import showcontact from '../pages/showContact';
import webinars from '../pages/webinars';
import Luminaries from '../pages/Luminaries';
 


//import AddQuestion from '../pages/QuestionRegistration';
import LuminariesRegistration from '../pages/LuminariesRegistration';
import WebinarRegistration from '../pages/WebinarRegistration';
import Editwebinars from '../pages/Editwebinars';
import EditwebinarsImg from '../pages/EditwebinarsImg';


import EditLuminaries from '../pages/EditLuminaries';
import EditLuminariesImg from '../pages/EditLuminariesImg';


import Edituser from '../auth/Edituser';
import userProfile from '../auth/userProfile';
import EdituserImg from '../auth/EdituserImg';
import Editusercv from '../auth/Editusercv';
import EdituserValidity from '../auth/EdituserValidity';
import editPost from '../posts/editPost';
import editCategory from '../categories/editCategory';
import editSubCategory from '../categories/editSubCategory';
import editCompetition from '../posts/editCompetition';




import addSubCategory from '../categories/addSubCategory';
import addCompetition from '../posts/addCompetition';



 




import EditContact from '../pages/EditContact';





 

import Search from '../pages/Search';
import list from '../pages/list';

 
 
import showLuminariesDtails from '../pages/showLuminariesDtails';
import showWebinarsDtails from '../pages/showWebinarsDtails';
import showLuminaries from '../pages/showLuminaries';
import showWebinars from '../pages/showWebinars';


import showCategories from '../pages/showCategories';
import AllSubCategories from '../categories/AllSubCategories';
import AllCompetitions from '../posts/AllCompetitions';
import answerCompetitions from '../posts/answerCompetitions';
import answerCompetitionQuestion from '../posts/answerCompetitionQuestion';
import AnswerFalseCompetitionsForUser from '../posts/AnswerFalseCompetitionsForUser';
import AnswerTrueCompetitionsForUser from '../posts/AnswerTrueCompetitionsForUser';









  
  

import AllLuminaries from '../pages/AllLuminaries';
import Allmembers from '../pages/Allmembers';

import AllLUser from '../pages/AllLUsers';
import AllLContact from '../pages/AllLContact';
import AllWebinars from '../pages/AllWebinars';

import searchContact from '../pages/searchContact';
import searchWebinar from '../pages/searchWebinar';
import searchLuminaries from '../pages/searchLuminaries';
import searchMembersByCountry from '../pages/search-members-by-country';
import searchMembersBySpecialty from '../pages/search-members-by-specialty';
import searchMembersByName from '../pages/search-members-by-name';
import searchMembersByWorkPlace from '../pages/search-members-by-work-place';

import searchPostsByTitle from '../posts/search-posts-by-title';
import searchPostsByStatus from '../posts/search-posts-by-status';
import searchPostsByCategory from '../posts/search-posts-by-category';
import searchPostsByUser from '../posts/search-posts-by-user';

import searchCategoryByTitle from '../categories/searchCategoryByTitle';
import searchCategoryByStatus from '../categories/searchCategoryByStatus';
  
 

import Reset from '../auth/Reset'
import NewPassword from '../auth/Newpassword'
import emailSendingComfirmation from '../auth/emailSendingComfirmation'

import mainCategories from '../categories/Mainpage'
 
 







 








 

 
// import searchPosts from '../posts/searchPosts';
// import searchQuestions from '../questions/searchQuestions';


// import AddImage from '../auth/AddImage';
// import AllImages from '../auth/AllImages';



const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>

      <Route exact path='/Reset' component={Reset} />
      <Route exact path='/NewPassword' component={NewPassword} />
      <Route exact path='/NewPassword/:id' component={NewPassword} />
      <Route exact path='/emailSendingComfirmation' component={emailSendingComfirmation} />

      <Route exact path='/mainCategories' component={mainCategories} />
      

      

 
      
      

        <Route exact path='/reputations' component={reputations} />
        <Route exact path='/about' component={about} />
        <Route exact path='/PrivacyPolicy' component={PrivacyPolicy} />

        
        <Route exact path='/showcontact' component={showcontact} />
        <Route exact path='/webinars' component={webinars} />
        <Route exact path='/Luminaries' component={Luminaries} />

          
        {/* <Route exact path='/AddQuestion' component={AddQuestion} /> */}
        <PrivateRoute exact path='/LuminariesRegistration' component={LuminariesRegistration} />
        <PrivateRoute exact path='/WebinarRegistration' component={WebinarRegistration} />
        <PrivateRoute exact path='/Editwebinars/:id' component={Editwebinars} />
        <PrivateRoute exact path='/EditwebinarsImg/:id' component={EditwebinarsImg} />
        <PrivateRoute exact path='/EditLuminaries/:id' component={EditLuminaries} />
        <PrivateRoute exact path='/EditLuminariesImg/:id' component={EditLuminariesImg} />
        <PrivateRoute exact path='/EdituserImg/:id' component={EdituserImg} />
        <PrivateRoute exact path='/Editusercv/:id' component={Editusercv} />
        <PrivateRoute exact path='/EdituserValidity/:id' component={EdituserValidity} />
        <PrivateRoute exact path='/editPost/:id' component={editPost} />
        <PrivateRoute exact path='/editCategory/:id' component={editCategory} />
        <PrivateRoute exact path='/editSubCategory/:id' component={editSubCategory} />
        <PrivateRoute exact path='/editCompetition/:id' component={editCompetition} />

        
  
        
        <PrivateRoute exact path='/addSubCategory/:id' component={addSubCategory} />
        <PrivateRoute exact path='/addCompetition/:id' component={addCompetition} />


        


        


        
 
         

         
        <PrivateRoute exact path='/Edituser/:id' component={Edituser} />
        <PrivateRoute exact path='/userProfile/:id' component={userProfile} />

        
        <PrivateRoute exact path='/EditProfileInfo/user/:id' component={EditProfileInfo} />

        
 

        

        <PrivateRoute exact path='/EditContact/:id' component={EditContact} />

        

        
        {/* <Route exact path='/AddImage' component={AddImage} />
        <Route exact path='/AllImages' component={AllImages} /> */}
        
        
        <Route exact path='/Contact' component={Contact} />
        <Route exact path='/msg' component={msg} />

        
        <Route exact path='/register' component={Register} />
       
        <Route exact path='/registerByUserRef/:id' component={registerByUserRef} />

        

        
        <Route exact path='/login' component={Login} />
        <Route exact path='/Loginadmin' component={Loginadmin} />
 
        
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />

        
        <Route exact path='/showLuminariesDtails/:id' component={showLuminariesDtails} />
        <Route exact path='/showWebinarsDtails/:id' component={showWebinarsDtails} />
        <Route exact path='/showLuminariesDtails' component={showLuminariesDtails} />
        <Route exact path='/showWebinarsDtails' component={showWebinarsDtails} />
 
         
        <Route exact path='/showLuminaries' component={showLuminaries} />
        <Route exact path='/showWebinars' component={showWebinars} />
 
        
        <Route exact path='/showCategories' component={showCategories} />
 
        
        <PrivateRoute exact path='/AllSubCategories/:id' component={AllSubCategories} />
        <PrivateRoute exact path='/AllCompetitions/:id' component={AllCompetitions} />
        <PrivateRoute exact path='/answerCompetitions/:id' component={answerCompetitions} />
        <PrivateRoute exact path='/answerCompetitionQuestion/:id' component={answerCompetitionQuestion} />
        <PrivateRoute exact path='/AnswerFalseCompetitionsForUser/:id' component={AnswerFalseCompetitionsForUser} />

        <PrivateRoute exact path='/AnswerTrueCompetitionsForUser/:id' component={AnswerTrueCompetitionsForUser} />

        


        


        

        


         
     

        
         

        <PrivateRoute exact path='/AllLuminaries' component={AllLuminaries} />
        <PrivateRoute exact path='/Allmembers' component={Allmembers} />

        
        <PrivateRoute exact path='/AllWebinars' component={AllWebinars} />
        <PrivateRoute exact path='/AllLContact' component={AllLContact} />
        <PrivateRoute exact path='/AllLUser' component={AllLUser} />

        
        
        
        <PrivateRoute exact path='/searchContact' component={searchContact} />
        <PrivateRoute exact path='/searchWebinar' component={searchWebinar} />

        
        {/* <PrivateRoute exact path='/searchQuestions' component={searchQuestions} />
        <PrivateRoute exact path='/searchPosts' component={searchPosts} /> */}

        <PrivateRoute exact path='/searchLuminaries' component={searchLuminaries} />
   
        {/* ---------------------  Members Search  --------------------- */}
        <PrivateRoute exact path='/searchMembersByCountry' component={searchMembersByCountry} />
        <PrivateRoute exact path='/searchMembersBySpecialty' component={searchMembersBySpecialty} />
        <PrivateRoute exact path='/searchMembersByName' component={searchMembersByName} />
        <PrivateRoute exact path='/searchMembersByWorkPlace' component={searchMembersByWorkPlace} />
        <PrivateRoute exact path='/searchPostsByTitle' component={searchPostsByTitle} />
        <PrivateRoute exact path='/searchPostsByStatus' component={searchPostsByStatus} />
        <PrivateRoute exact path='/searchPostsByCategory' component={searchPostsByCategory} />
        <PrivateRoute exact path='/searchPostsByUser' component={searchPostsByUser} />

        <PrivateRoute exact path='/searchCategoryByTitle' component={searchCategoryByTitle} />
        <PrivateRoute exact path='/searchCategoryByStatus' component={searchCategoryByStatus} />
        <PrivateRoute exact path='/dashHome' component={dashHome} />

        

        



 
        


        
 




        

        


        


        

  
        


        

        

        
   

        <PrivateRoute exact path='/Search' component={Search} />
        <PrivateRoute exact path='/list' component={list} />

        <Route exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/dashboarAadmin' component={dashboarAadmin} />

        
        <PrivateRoute exact path='/imgcontroll' component={imgcontroll} />
        {/* <PrivateRoute exact path='/ChartEx' component={ChartEx} /> */}

        
        <PrivateRoute exact path='/cvcontroll' component={cvcontroll} />

        
 
        
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
       
 
        
        <PrivateRoute exact path='/add-experience' component={AddExperience} />
        <PrivateRoute exact path='/add-education' component={AddEducation} />
        <PrivateRoute exact path='/add-spost' component={AddSpost} />

        

        

        <PrivateRoute exact path='/addcategory' component={addcategory} />
        <PrivateRoute exact path='/categories' component={categories} />
        <PrivateRoute exact path='/question/:id' component={question} />
         
           
 
         
        <PrivateRoute exact path='/addpost' component={addpost} />
        
        <PrivateRoute exact path='/posts' component={Posts} />
        <Route exact path='/up/:id' component={PostsUser} />
        <Route exact path='/Topics/:id' component={Topics} />
        <Route exact path='/Topic/:id' component={Topic} />
        

        

        <PrivateRoute exact path='/posts/:id' component={Post} />
        <PrivateRoute exact path='/Comment/:id' component={Comment} />

        
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
