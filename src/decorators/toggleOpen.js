// decorator === HOC === Higher order component
import React from 'react';

export default function toggleOpen(Component) {

    return class ToggleDecorator extends React.Component {

        state = {
            isOpen: false
        };

        toggleOpen = ev => {
            ev.preventDefault();

            this.setState({
                isOpen: !this.state.isOpen
            });
        };

        render() {
            // return <Component {...this.props} isOpen = this.state.isOpen toggleOpen = {this.toggleOpen} />
            return <Component {...this.props} {...this.state} toggleOpen = {this.toggleOpen} />
        }
    }
}