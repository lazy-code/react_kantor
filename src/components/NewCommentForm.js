import React, { Component, PropTypes } from 'react';

class NewCommentForm extends Component {

    static propTypes = {};

    state = {
        name: '',
        comment: ''
    };

    handleSubmitBtn = ev => {
        ev.preventDefault();
        console.log(this.state.comment, ' by ', this.state.name);
    };

    handleInput = ev => {
        const item = ev.target.name;

        if (item == 'comment') {
            this.setState({
                comment: ev.target.value
            });
        }
        if (item == 'name') {
            this.setState({
                name: ev.target.value
            });
        }
    };

    render() {
        return (
            <form>
                <input type="text" name="name" value={this.state.name} onChange={this.handleInput} /><br />
                <input type="text" name="comment" value={this.state.comment} onChange={this.handleInput} /><br />
                <button onClick={this.handleSubmitBtn}>Send</button>
            </form>
        );
    }
}

export default NewCommentForm;
