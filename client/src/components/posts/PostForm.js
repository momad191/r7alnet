import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
  
const PostForm = ({ addPost }) => {
  const [formData, setFormData] = useState({
            text:'',
            book:'',
            booklet:'',
            inbook:'',
            incollection:'',
            inproceedings:'',
            manual:'',
            mastersthesis:'',
            misc:'',
            phdthesis:'',
            proceedings:'',
            techreport:'',
            unpublished:'',
            address:'',
            annote:'',
            author:'',
            booktitle:'',
            chapter:'',
            crossref:'',
            edition:'',
            editor:'',
            howpublished:'',
            institution:'',
            journal:'',
            key:'',
            month:'',
            note:'',
            number:'',
            organization:'',
            pages:'',
            publisher:'',
            school:'',
            series:'',
            title:'',
            type:'',
            volume:'',
            year:''
            });

            const {
              
            text,
            book,
            booklet,
            inbook,
            incollection,
            inproceedings,
            manual,
            mastersthesis,
            misc,
            phdthesis,
            proceedings, 
            techreport,
            unpublished,
            address,
            annote,
            author,
            booktitle,
            chapter,
            crossref,
            edition,
            editor,
            howpublished,
            institution,
            journal,
            key,
            month,
            note,
            number,
            organization,
            pages,
            publisher,
            school,
            series,
            title,
            type,
            volume,
            year
            
            } = formData;

            const onChange = e =>
            setFormData({ ...formData, [e.target.name]: e.target.value });


           const onSubmit = async e => {
            e.preventDefault();
            addPost({ 

            text,
            book,
            booklet,
            inbook,
            incollection,
            inproceedings,
            manual,
            mastersthesis,
            misc,
            phdthesis,
            proceedings, 
            techreport,
            unpublished,
            address,
            annote,
            author,
            booktitle,
            chapter,
            crossref,
            edition,
            editor,
            howpublished,
            institution,
            journal,
            key,
            month,
            note,
            number,
            organization,
            pages,
            publisher,
            school,
            series,
            title,
            type,
            volume,
            year


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
              <td colSpan='3'>
                <label>article</label>
                <input  placeholder="" type="text"  name='text'  value={text}    onChange={e => onChange(e)}  required />
                </td>
              </tr>



            <tr>

            <td>
            <label className="form-label">book</label>
            <input  className="form-contact" placeholder="" type="text" name='book' value={book}  onChange={e => onChange(e)}   />
            </td>

            <td>
            <label className="form-label">booklet</label>
            <input  className="form-contact" placeholder="" type="text" name='booklet' value={booklet}  onChange={e => onChange(e)}   />
            </td>

            <td>
            <label className="form-label">inbook</label>
            <input  className="form-contact" placeholder="" type="text" name='inbook' value={inbook}  onChange={e => onChange(e)}   />
            </td>

            <td>
            <label className="form-label">incollection</label>
            <input  className="form-contact" placeholder="" type="text"  name='incollection' value={incollection}  onChange={e => onChange(e)}   />
            </td>


            <td>
            <label className="form-label">inproceedings</label>
            <input  className="form-contact" placeholder="" type="text"  name='inproceedings' value={inproceedings}  onChange={e => onChange(e)}   />
            </td>


            <td>
            <label className="form-label">manual</label>
            <input  className="form-contact" placeholder="" type="text"  name='manual' value={manual}  onChange={e => onChange(e)}   />
            </td>
            </tr>
            
            <tr>


            <td>
            <label className="form-label">mastersthesis</label>
            <input  className="form-contact" placeholder="" type="text"  name='mastersthesis' value={mastersthesis}  onChange={e => onChange(e)}  />
            </td>


            <td> 
            <label className="form-label">misc</label>
            <input  className="form-contact" placeholder="" type="text" name='misc' value={misc}  onChange={e => onChange(e)}   />
            </td>


            <td>
            <label className="form-label">phdthesis</label>
            <input  className="form-contact" placeholder="" type="text"  name='phdthesis' value={phdthesis}  onChange={e => onChange(e)}  />
            </td>



            <td>
            <label className="form-label">proceedings</label>
            <input  className="form-contact" placeholder="" type="text"  name='proceedings' value={proceedings}  onChange={e => onChange(e)}   />
            </td>



            <td>
            <label className="form-label">techreport</label>
            <input  className="form-contact" placeholder="" type="text"  name='techreport' value={techreport}  onChange={e => onChange(e)}  />
            </td>

 

            <td>
            <label className="form-label">unpublished</label>
            <input  className="form-contact" placeholder="" type="text"  name='unpublished' value={unpublished}  onChange={e => onChange(e)}  />
            </td>

            </tr>


            <h3>Fields</h3>
            <tr>

            <td>
            <label className="form-label">address</label>
            <input  className="form-contact" placeholder="" type="text" name='address'  value={address}  onChange={e => onChange(e)}   />
            </td>


            <td>
            <label className="form-label">annote</label>
            <input  className="form-contact" placeholder="" type="text" name='annote' value={annote}  onChange={e => onChange(e)}  />
            </td>



            <td>
            <label className="form-label">author</label>
            <input  className="form-contact" placeholder="" type="text" name='author'  value={author}  onChange={e => onChange(e)}  />
            </td>




            <td>
            <label className="form-label">booktitle</label>
            <input  className="form-contact" placeholder="" type="text" name='booktitle'  value={booktitle}  onChange={e => onChange(e)}   />
            </td>



            <td>
            <label className="form-label">chapter</label>
            <input  className="form-contact" placeholder="" type="text" name='chapter' value={chapter}  onChange={e => onChange(e)}   />
            </td>

            

            <td>
            <label className="form-label">crossref</label>
            <input  className="form-contact" placeholder="" type="text"  name='crossref' value={crossref}  onChange={e => onChange(e)}   />
            </td>


            </tr>
            <tr>


            <td>
            <label className="form-label">edition</label>
            <input  className="form-contact" placeholder="" type="text"  name='edition' value={edition}  onChange={e => onChange(e)}   />
            </td>


            <td>
            <label className="form-label">editor</label>
            <input  className="form-contact" placeholder="" type="text"  name='editor' value={editor}  onChange={e => onChange(e)}  />
            </td>




            <td>
            <label className="form-label">howpublished</label>
            <input  className="form-contact" placeholder="" type="text"  name='howpublished' value={howpublished}  onChange={e => onChange(e)}  />
            </td>


            <td>
            <label className="form-label">institution</label>
            <input  className="form-contact" placeholder="" type="text"  name='institution' value={institution}  onChange={e => onChange(e)}  />
            </td>

           

            <td>
            <label className="form-label">journal</label>
            <input  className="form-contact" placeholder="" type="text"  name='journal' value={journal}  onChange={e => onChange(e)}   />
            </td>


            <td>
            <label className="form-label">key</label>
            <input  className="form-contact" placeholder="" type="text"  name='key' value={key}  onChange={e => onChange(e)}   />
            </td>

            </tr>
            <tr>

            <td>
            <label className="form-label">month</label>
            <input  className="form-contact" placeholder="" type="text"  name='month' value={month}  onChange={e => onChange(e)}   />
            </td>



            <td>
            <label className="form-label">note</label>
            <input  className="form-contact" placeholder="" type="text"  name='note' value={note}  onChange={e => onChange(e)}  />
            </td>



            <td>
            <label className="form-label">number</label>
            <input  className="form-contact" placeholder="" type="text" name='number'  value={number}  onChange={e => onChange(e)}   />
            </td>


             


            <td>
            <label className="form-label">organization</label>
            <input  className="form-contact" placeholder="" type="text"  name='organization' value={organization}  onChange={e => onChange(e)}   />
            </td>




            <td>
            <label className="form-label">pages</label>
            <input  className="form-contact" placeholder="" type="text"  name='pages' value={pages}  onChange={e => onChange(e)}   />
            </td>



            <td>
            <label className="form-label">publisher</label>
            <input  className="form-contact" placeholder="" type="text"  name='publisher'  value={publisher}  onChange={e => onChange(e)}  />
            </td>


            </tr>
             <tr>

            <td>
            <label className="form-label">school</label>
            <input  className="form-contact" placeholder="" type="text"  name='school' value={school}  onChange={e => onChange(e)}  />
            </td>



            <td>
            <label className="form-label">series</label>
            <input  className="form-contact" placeholder="" type="text"  name='series' value={series}  onChange={e => onChange(e)}  />
            </td>



            <td>
            <label className="form-label">title</label>
            <input  className="form-contact" placeholder="" type="text"   name='title' value={title}  onChange={e => onChange(e)}  />
            </td>



            <td>
            <label className="form-label">type</label>
            <input  className="form-contact" placeholder="" type="text"   name='type' value={type}  onChange={e => onChange(e)}   />
            </td>



            <td>
            <label className="form-label">volume</label>
            <input  className="form-contact" placeholder="" type="text"   name='volume' value={volume}  onChange={e => onChange(e)}  />
            </td>



            <td>
            <label className="form-label">year</label>
            <input  className="form-contact" placeholder="" type="text"  name='year' value={year}  onChange={e => onChange(e)}   />
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
