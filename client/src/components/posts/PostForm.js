import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
     
const PostForm = ({ addPost }) => {
  const [formData, setFormData] = useState({
 
    first_name:'',
    last_name:'',
    year:'',
    title_article:'',
    title_journal:'',
    volume:'',
    pages:'',
    DOI:'',
    ISSN:'',
    URL:''
            // phdthesis:'', 
            // proceedings:'',
            // techreport:'',
            // unpublished:'',
            // address:'',
            // annote:'',
            // author:'',
            // booktitle:'',
            // chapter:'',
            // crossref:'',
            // edition:'',
            // editor:'',
            // howpublished:'',
            // institution:'',
            // journal:'',
            // key:'',
            // month:'',
            // note:'',
            // number:'',
            // organization:'',
            // pages:'',
            // publisher:'',
            // school:'',
            // series:'',
            // title:'',
            // type:'',
            // volume:'',
            // year:''
            });

            const {
              
              first_name,
              last_name,
              year,
              title_article,
              title_journal,
              volume,
              pages,
              DOI,
              ISSN,
              URL,
            

            // phdthesis,
            // proceedings, 
            // techreport,
            // unpublished,
            // address,
            // annote,
            // author,
            // booktitle,
            // chapter,
            // crossref,
            // edition,
            // editor,
            // howpublished,
            // institution,
            // journal,
            // key,
            // month,
            // note,
            // number,
            // organization,
            // pages,
            // publisher,
            // school,
            // series,
            // title,
            // type,
            // volume,
            // year
            
            } = formData;

            const onChange = e =>
            setFormData({ ...formData, [e.target.name]: e.target.value });


           const onSubmit = async e => {
            e.preventDefault();
            addPost({ 
 
              first_name,
              last_name,
              year,
              title_article,
              title_journal,
              volume,
              pages,
              DOI,
              ISSN,
              URL,
              
  

            // phdthesis,
            // proceedings, 
            // techreport,
            // unpublished,
            // address,
            // annote,
            // author,
            // booktitle,
            // chapter,
            // crossref,
            // edition,
            // editor,
            // howpublished,
            // institution,
            // journal,
            // key,
            // month,
            // note,
            // number,
            // organization,
            // pages,
            // publisher,
            // school,
            // series,
            // title,
            // type,
            // volume,
            // year


             });
            
          };
 
  return (
    <div className='post-form'>

      <h3>Entries</h3>

      {/* <div className='bg-primary p'>
        <h3>Say Something...</h3>
      </div> */}

     <form className='form' onSubmit={e => onSubmit(e)}>  
        {/* <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a post'
          value={text}
          onChange={e => onChange(e)}}
          required
        /> */}

      <table>

            <tr>

            <td>
            <label className="form-label">First Name</label>
            <input  className="form-contact" placeholder="" type="text" name='first_name' value={first_name}  onChange={e => onChange(e)}   />
            </td>

            <td>
            <label className="form-label">Last Name</label>
            <input  className="form-contact" placeholder="" type="text" name='last_name' value={last_name}  onChange={e => onChange(e)}   />
            </td>

            <td>
            <label className="form-label">Year</label>
            <input  className="form-contact" placeholder="" type="text" name='year' value={year}  onChange={e => onChange(e)}   />
            </td>
 

           

            </tr>


            <tr>
              <td colSpan='3'>
                <label>Title of Article</label>
                <input  placeholder="" type="text"  name='title_article'  value={title_article}    onChange={e => onChange(e)}  required />
                </td>
              </tr>


              <tr>
              <td colSpan='3'>
                <label>Title of Journal</label>
                <input  placeholder="" type="text"  name='title_journal'  value={title_journal}    onChange={e => onChange(e)}  required />
                </td>
              </tr>


              <tr>
              <td colSpan='3'>
                <label>URL</label>
                <input  placeholder="" type="text"  name='URL'  value={URL}    onChange={e => onChange(e)}  required />

                </td>
              </tr>


            
            <tr>

 
            <td>
            <label className="form-label">Volume</label>
            <input  className="form-contact" placeholder="" type="text"  name='volume' value={volume}  onChange={e => onChange(e)}  />
            </td>


            <td> 
            <label className="form-label">pages</label>
            <input  className="form-contact" placeholder="from: - to: " type="text" name='pages' value={pages}  onChange={e => onChange(e)}   />
            </td>
 

            <td> 
            <label className="form-label">DOI</label>
            <input  className="form-contact" placeholder="" type="text" name='DOI' value={DOI}  onChange={e => onChange(e)}   />
            </td>


            <td> 
            <label className="form-label">ISSN</label>
            <input  className="form-contact" placeholder="" type="text" name='ISSN' value={ISSN}  onChange={e => onChange(e)}   />
            </td>

 
            </tr>



            </table>

             
        <input style={{width:'100%', textAlign:"center", fontSize:"24px",borderBlockColor:"#000"}} type='submit' className='btn btn-success my-1' value='Add +' />
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
 