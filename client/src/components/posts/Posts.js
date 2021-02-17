import React, { Fragment, useEffect ,useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
//import PostItem from './PostItem';
//import PostForm from './PostForm'; 
 import { getPosts } from '../../actions/post';
//import { getProfiles } from '../../actions/profile';
    
import Pagination from '../pages/Pagination';
import Posts1 from '../posts/WWListPosts';
import { Link } from 'react-router-dom';
import axios from 'axios';
      
const Posts = ({ getPosts, post: { posts, loading } }) => {
   
  const [countposts,posts11]= useState([])
  //const [setPosts] = useState([]);
  //const [ setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

 
  useEffect(() => {

    axios.get('/api/posts')
    .then(res => {
      console.log(res);
    posts11(res.data)
    })
    .catch((err) => {
      console.log(err);
    })


    getPosts();
  }, [getPosts]);
 
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary fontnty-font'
       style={{color:'#000',fontWeight:'bold',float:''}}
      >إدارة المنشورات</h1>
      <p className='lead fontnty-font'
      style={{color:'#000',fontWeight:'bold',float:''}}
      >
        <i className='fas fa-book' /> مرحبا بك في صفحة النشر والإعداد
      </p>


      <Link to='/' className='btn btn-primary fontnty-font'
      style={{color:'#fff',fontWeight:'bold',float:''}}
      
      >
      <i className='fas fa-backward' /> لوحة التحكم 
      </Link>

      <Link to='/searchPostsByTitle' className='btn btn-primary fontnty-font'
      style={{color:'#fff',fontWeight:'bold',float:''}}
      
      >
      <i className='fas fa-search' /> البحث 
      </Link>
      
    
      
      <Link to='/addpost' className='btn btn-success fontnty-font'
      style={{color:'#fff',backgroundColor:'#088A08',fontWeight:'bold',float:''}}
      >
      <i className='fas fa-plus' /> إضافة منشور جديد
      </Link>
 
  
      <center> 
      <div class="col-lg-12 col-md-12 col-sm-12">
      <div  className='btn btn-success fontnty-font'
      style={{ cursor: 'wait' ,color:'#fff',backgroundColor:'#2E2E2E',fontWeight:'bold',fontSize:'17px',fontFamily:'normal',float:''}}
      >
         ({countposts.length}) عدد المنشورات
      </div>
    </div>
     
    </center>
 
   



      {/* <PostForm /> */}


      {/* <div className='posts'>
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div> */}
    
 <section id="portfolio">
        <div class="container">
            <div class="row">
 
            <div class="card-body" style={{width:'100%'}}>
            <div class="table-responsive">
            <table class="table" >
   
           

    <Posts1 posts={currentPosts} loading={loading} />
   
            </table>
            </div>
            </div>

    </div>
    </div>
    </section>
    
     <h5 className='fontnty-font'
     style={{color:'#000',fontWeight:'bold',float:'right'}}
     >صفحات</h5>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        
      />
      


    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
