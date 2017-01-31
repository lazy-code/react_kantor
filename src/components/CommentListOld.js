import React from 'react';
import Comment from './Comment';
import toggleOpen from './../mixins/toggleOpen';

const CommentListOld = React.createClass({

    mixins: [toggleOpen],

    propTypes: {

    },

    render() {

        console.log('old + mixins');

        const { comments } = this.props;
        const { isOpen } = this.state;

        if(!comments || !comments.length) {
            return <p>No comments yet</p>;
        }

        const title = isOpen ? 'Hide comments' : `Show ${comments.length} comments`;

        const commentItems = comments.map(comment => <li key = { comment.id }><Comment comment = { comment } /></li>);
        const body = isOpen && <ul>{commentItems}</ul>;

        return (

            <div>
                <a href="#" onClick = {this.toggleOpen}>{title}</a>
                {body}
            </div>
        )
    },

});

export default CommentListOld;
