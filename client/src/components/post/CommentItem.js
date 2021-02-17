import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';
import moment from 'moment';
import 'moment/locale/ar';
  
  
const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
    
}) => (
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8"  style={{float:'right'}} > 
  <div className="input-group form-group" style={{ borderRight:'5px solid #E01E5A',borderBottom:'5px solid #000',borderRadius:'3%'}}>
 
    <div>
      <p className='' style={{color:'#000',fontSize:'15px',fontWeight:'bold',marginRight:'20px'}}>{text}</p>
      <p className='' style={{color:'#000',fontSize:'13px',fontWeight:'bold',marginRight:'20px'}}>
         {/* <Moment format='YYYY/MM/DD'>{date}</Moment> */}
         {moment(date).startOf('minut').fromNow()}  
      </p>
      {!auth.loading && user === auth.user._id && (
        <button 
        style={{float:'left',marginLeft:'20px',marginBottom:'20px'}}
          onClick={() => deleteComment(postId, _id)}
          type='button'
          className='btn btn-danger'
        >
          <i className='fas fa-times' />
        </button>
      )}
    </div>
    <span class="input-group-addon " id="basic-addon1" style={{ borderLeft:'1px solid #E01E5A',borderTop:'1px solid #000',borderRadius:'',width:''}} >
      <Link to={`/profile/${user}`} >
        <img className='' src={avatar} alt='' width="200px" height="150px"/>
        <h4  style={{ fontSize:'13px',fontWeight:'bold',color:'#000'}}>{name}</h4>
      </Link>
      </span>

  </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
