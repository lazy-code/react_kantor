import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Filters extends Component {

    static propTypes = {
        articles: PropTypes.array
    };

    state = {
        selected: null
    };

    handleChange = val => this.setState({ selected: val });

    render() {
        const options = this.props.articles.map(article => ({
            value: article.id,
            label: article.title
        }));
        return (
            <div>
                <Select
                    options = {options}
                    value = {this.state.selected}
                    onChange = {this.handleChange}
                    multi={true}
                />
            </div>
        );
    }
}

export default Filters;