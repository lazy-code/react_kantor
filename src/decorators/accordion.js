import React, { Component as ReactComponent } from 'react';

export default (Component) => class AccordionDecorator extends ReactComponent {

    state = {
        openItemId: null
    };

    toggleItem = id => ev => {
        ev.preventDefault();
        this.setState({
            openItemId: this.isItemOpen(id) ? null : id
        });
    };

    isItemOpen = id => id == this.state.openItemId;

    render() {
        return <Component {...this.props} isItemOpen = {this.isItemOpen} toggleItem = {this.toggleItem}></Component>;
    }
};
