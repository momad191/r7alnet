import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/QuestionAction';
import { Link } from 'react-router-dom';
 
const PostForm = ({ addPost }) => {
  // const [text, setText] = useState('');
    const [formData, setFormData] = useState({
          text:'',
            body:''
          });
          const {

            text,
            body
          } = formData;
 
          const onChange = e =>
          setFormData({ ...formData, [e.target.name]: e.target.value });

           const onSubmit = async e => {
            e.preventDefault();
            addPost({ 
              text,
              body
          });
        };
          

  return (
    <div className='post-form'>
      {/* <div className='bg-light p'>
        <h3>Ask a Question...</h3>
      </div> */}
      <form
        className='form my-1'
        // onSubmit={e => {
        //   e.preventDefault();
        //   addPost({ text });
        //   setText('');
        // }}
        onSubmit={e => onSubmit(e)}
      > 
        
        <label className="form-label"> Title</label>
        
       <input  className="form-contact" placeholder="" type="text" name='text' value={text}   onChange={e => onChange(e)}  required />


       <label className="form-label">Body</label>
      <textarea
          name='body'
          cols='10'
          rows='5'
          placeholder='Body of the question'
          value={body}
          onChange={e => onChange(e)}
          required
        />
        
        <input type='submit' className='btn btn-success my-1 fas fa-search' value='Add' />

        <Link to='/searchQuestions' className='btn btn-primary'><i className='fas fa-search' /> search Questions</Link>
      </form>
      
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
