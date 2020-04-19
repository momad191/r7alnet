import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import addpost from '../posts/PostForm';


import questions from '../questions/Posts';
import question from '../question/Post';

import Post from '../post/Post';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import Contact from '../auth/Contact';

 
import reputations from '../pages/Reputations';
import about from '../pages/about';
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


import EdituserImg from '../auth/EdituserImg';



import EditContact from '../pages/EditContact';







import Search from '../pages/Search';
import list from '../pages/list';



import showLuminariesDtails from '../pages/showLuminariesDtails';
import showLuminaries from '../pages/showLuminaries';
import showMembers from '../pages/showMembers';
import AllLuminaries from '../pages/AllLuminaries';

import AllLContact from '../pages/AllLContact';
import AllWebinars from '../pages/AllWebinars';

import searchContact from '../pages/searchContact';
import searchWebinar from '../pages/searchWebinar';
import searchLuminaries from '../pages/searchLuminaries';
import searchPosts from '../posts/searchPosts';
import searchQuestions from '../questions/searchQuestions';







import AddImage from '../auth/AddImage';
import AllImages from '../auth/AllImages';



const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>

       <Route exact path='/reputations' component={reputations} />
        <Route exact path='/about' component={about} />
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

        <PrivateRoute exact path='/EditContact/:id' component={EditContact} />

        

        
        <Route exact path='/AddImage' component={AddImage} />
        <Route exact path='/AllImages' component={AllImages} />
        
        
        <Route exact path='/Contact' component={Contact} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />

        
        <Route exact path='/showLuminariesDtails/:id' component={showLuminariesDtails} />
        <Route exact path='/showLuminariesDtails' component={showLuminariesDtails} />
        <Route exact path='/showLuminaries' component={showLuminaries} />
        <Route exact path='/showMembers' component={showMembers} />
         
         

        <PrivateRoute exact path='/AllLuminaries' component={AllLuminaries} />
        <PrivateRoute exact path='/AllWebinars' component={AllWebinars} />
        <PrivateRoute exact path='/AllLContact' component={AllLContact} />
        
        
        <PrivateRoute exact path='/searchContact' component={searchContact} />
        <PrivateRoute exact path='/searchWebinar' component={searchWebinar} />

        
        <PrivateRoute exact path='/searchQuestions' component={searchQuestions} />
        <PrivateRoute exact path='/searchPosts' component={searchPosts} />
        <PrivateRoute exact path='/searchLuminaries' component={searchLuminaries} />

        
  

        <PrivateRoute exact path='/Search' component={Search} />
        <PrivateRoute exact path='/list' component={list} />

        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute exact path='/add-experience' component={AddExperience} />
        <PrivateRoute exact path='/add-education' component={AddEducation} />

        
        <PrivateRoute exact path='/questions' component={questions} />
        <PrivateRoute exact path='/question/:id' component={question} />
         
        

        
        <PrivateRoute exact path='/addpost' component={addpost} />
        
        <PrivateRoute exact path='/posts' component={Posts} />
        <PrivateRoute exact path='/posts/:id' component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
