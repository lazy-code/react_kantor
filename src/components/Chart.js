import React, { Component, PropTypes } from 'react';

class Chart extends Component {

    static propTypes = {

    };

    // подход через ссылку и componentDidMount()
    componentDidMount() {
        console.log('---', this.refs.container);
    };

    // подход через callback
    // в ref - ссылка на дом ноду
    // когда ноду удалят - ref === null
    getInnerRef = (ref) => {
        this.innerContainer = ref;
    };

    render(){
        return (
            <div ref="container">
                <div ref={this.getInnerRef} />
            </div>
        );
    };
}

export default Chart;