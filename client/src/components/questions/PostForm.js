import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/QuestionAction';
import { Link } from 'react-router-dom';
 

// const TagsInput = props => {

  
// 	const [tags, setTags] = React.useState(props.tags);

// const removeTags = indexToRemove => {
//   setTags([...tags.filter((_, index) => index !== indexToRemove)]);
// };


// const addTags = event => {
//   if (event.target.value !== "") {
//     setTags([...tags, event.target.value]);
//     props.selectedTags([...tags, event.target.value]);
//     event.target.value = "";
//   }
// };

 

// return (
//   <div className="tags-input">
//     <ul id="tags">
//       {tags.map((tag, index) => (
//         <li key={index} className="tag">
//           <span className='tag-title'>{tag}</span>
//           <span className='tag-close-icon'
//             onClick={() => removeTags(index)}
//           >
//             x
//           </span>
//         </li>
//       ))}
//     </ul>
//     <input

//     name={tags}
//     value={tags}
 

//       type="text"
//       onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
//       placeholder="Press enter to add tags"
//     />
//   </div>
// );
// };
 


  
const PostForm = ({ addPost }) => {
   

  // const selectedTags = tags => {
	// 	console.log(tags);
  // };
  
    const [formData, setFormData] = useState({
          text:'',
            body:'',
            tags:'',
            formul:'',
             
          });
          const {
 
            text,
            body,
            tags,
            formul
          } = formData;
 
          const onChange = e =>
          setFormData({ ...formData, [e.target.name]: e.target.value });


          
            
          

           const onSubmit = async e => {
          
          
              e.preventDefault();
        
              
           
            
            
            


            addPost({ 
              text,
              body,
              tags,
              formul
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


{/* <label className="form-label"> Formul</label>
        
 <input  className="form-contact" placeholder="" type="text" name='formul' value={formul}   onChange={e => onChange(e)}  required />
 */}

  
 
 
      <label className="form-label"> Tags</label>
        
        <input  className="form-contact" placeholder="" type="text" name='tags' value={tags}   onChange={e => onChange(e)}  required />
        <small className='form-text'>
					Please use comma separated between tags values (eg. Reading,Writing,Swimming,Football)
					</small> 



          {/* <TagsInput 
          name={tags}
          value={tags}
          onChange={e => onChange(e)}
          
          selectedTags={selectedTags}  tags={['Nodejs', 'MongoDB']}/> */}


 

                 
        <input     type='submit' className='btn btn-success my-1 fas fa-search' value='Add' 
        
         
        />

        <Link to='/searchQuestionByTitle' className='btn btn-primary'><i className='fas fa-search' /> search Questions</Link>
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
