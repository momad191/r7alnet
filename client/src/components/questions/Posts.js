import React, { Fragment, useEffect ,useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
//import PostItem from './PostItem';
// import PostForm from './PostForm'; 
import { getPosts } from '../../actions/QuestionAction';
import Pagination from '../pages/Pagination';
import Posts1 from '../questions/WWListQuestion';
import { Link } from 'react-router-dom';
    
const Posts = ({ getPosts, post: { posts, loading } }) => {

  //const [setPosts] = useState([]);
  //const [ setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
 
 
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Questions </h1>
      <p className='lead'>
        <i className='fas fa-question' /> Welcome to the community
      </p>

      <Link to='/addquestion' className='btn btn-success'>
      <i className='fas fa-plus' /> Add Question
      </Link>
 
      
      <Link to='/searchQuestionByTitle' className='btn btn-primary'>
      <i className='fas fa-search' /> Search 
      </Link>
      
      {/* <p className='lead'>
        <i className='fas fa-user' /> Questions Community
      </p> */}

      {/* <PostForm /> */}

      {/* <div className='posts'>
        {posts.map(post => (
          <PostItem key={post._id} post={post} loading={loading} />
         
        ))}
      </div> */}

      
      
      <Posts1 posts={currentPosts} loading={loading} />
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
