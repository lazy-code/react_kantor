import React, { Component, PropTypes } from 'react';
import Comment from './Comment';
import NewCommentForm from './NewCommentForm';

import toggleOpen from './../decorators/toggleOpen';

/*
 // Statefull component before toggleOpen decorator
class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array   // array of comments
    };

    render() {

        const { comments, isOpen, toggleOpen } = this.props;

        if(!comments || !comments.length) {
            return <p>No comments yet</p>;
        }

        const title = isOpen ? 'Hide comments' : `Show ${comments.length} comments`;

        const commentItems = comments.map(comment => <li key = { comment.id }><Comment comment = { comment } /></li>);
        const body = isOpen && <ul>{commentItems}</ul>;

        return (

            <div>
                <a href="#" onClick = {toggleOpen}>{title}</a>
                {body}
            </div>
        )
    }
}
*/

// Stateless component after toggleOpen decorator
function CommentList(props) {

    const { comments, isOpen, toggleOpen } = props;

    if(!comments || !comments.length) {
        return <p>No comments yet</p>;
    }

    const title = isOpen ? 'Hide comments' : `Show ${comments.length} comments`;

    const commentItems = comments.map(comment => <li key = { comment.id }><Comment comment = { comment } /></li>);
    const body = isOpen && <div>
                                <ul>{commentItems}</ul>
                                <NewCommentForm />
                            </div>;

    return (
        <div>
            <a href="#" onClick = {toggleOpen}>{title}</a>
            {body}
        </div>
    )
}

CommentList.propTypes = {
    comments: PropTypes.array   // array of comments
};

export default toggleOpen(CommentList);