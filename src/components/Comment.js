import React, { PropTypes } from 'react';

function Comment(props) {

    const { text, user } = props.comment;

    return (
        <p>{text} by <b>{user}</b></p>
    );
}

Comment.propTypes = {
    // from CommentList.js
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    })
};

export default Comment;