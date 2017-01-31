import React, { Component, PropTypes } from 'react';

class Chart extends Component {

    static propTypes = {

    };

    // ������ ����� ������ � componentDidMount()
    componentDidMount() {
        console.log('---', this.refs.container);
    };

    // ������ ����� callback
    // � ref - ������ �� ��� ����
    // ����� ���� ������ - ref === null
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