import React, { Fragment, useEffect ,useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
//import PostItem from './PostItem';
//import PostForm from './PostForm';
import { getPostsUser } from '../../actions/post';
import Pagination from '../pages/Pagination';
import Posts1 from '../posts/WWListPosts';
import { Link } from 'react-router-dom';
 
const Posts = ({ getPostsUser, post: { posts, loading } }) => {
  
  
  //const [setPosts] = useState([]);
  //const [ setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(25);


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

 
  useEffect(() => {
    getPostsUser();
  }, [getPostsUser]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Publications</h1>
      <p className='lead'>
        <i className='fas fa-book' /> Welcome to the community
      </p>

    
      {/* <Link to='/addpost' className='btn btn-success'>
      <i className='fas fa-plus' /> Add Post
      </Link> */}


      {/* <Link to='/searchPostsByArticle' className='btn btn-primary'>
      <i className='fas fa-search' /> Search 
      </Link> */}


      {/* <PostForm /> */}


      {/* <div className='posts'>
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div> */}

    <Posts1 posts={currentPosts} loading={loading} />
     <h5>Pages</h5>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      


    </Fragment>
  );
};

Posts.propTypes = {
  getPostsUser: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPostsUser }
)(Posts);
