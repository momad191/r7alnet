import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addSpost } from '../../actions/profile';
    
const AddSpost = ({ addSpost , history }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    year: '',
    title_article: '',
    title_journal: '',
    volume: '',
    pages: '',
    DOI: '',
    ISSN: '',
    URL: ''

  });

  const [toDateDisabled, toggleDisabled] = useState(false);

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
      URL
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Add Your publication </h1>
      {/* <p className='lead'>
        <i className='fas fa-code-branch' /> Add any publications  
         
      </p> */}
      {/* <small>* = required field</small> */}
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault();
          addSpost(formData, history);
        }}
      >

         
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

        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddSpost.propTypes = {
  addSpost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addSpost }
)(withRouter(AddSpost));
