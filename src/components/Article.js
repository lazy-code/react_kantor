import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import CommentList from './CommentList';
import CSSTransition from 'react-addons-css-transition-group';
import './animation.css';

class Article extends Component {

    /*
    ES6
    constructor(props) {
        super();
        this.state = {
            isOpen: false
        };
        this.toggleOpen = this.toggleOpen.bind(this);
    }
    */

    //ES6 stage-0
    //state = {
    //    isOpen: false
    //};

    componentDidUpdate() {
        console.log('---','did update');
    }

    componentDidMount() {
        console.log('---', 'did mount');
    };

    componentWillUnmount() {
        console.log('---', 'umount');
    };

    handleRef(ref) {

        // ссылка на реактовский компонент
        // console.log('---', ref);

        // ссылка на реальный дом элемент для работы с ним (размеры,...)
        // console.log('---', findDOMNode(ref));
    }

    //shouldComponentUpdate(nextProps, nextState) {
    //
    //    if (this.props.isOpen != nextProps.isOpen) {
    //        console.log('---', 'should update - true');
    //        return true;
    //    }
    //
    //    console.log('---', 'should update - false');
    //    return false;
    //};

    render(){

        const { article, isOpen, openArticle } = this.props;

        const body = isOpen ? (
                        <section>
                            {article.text}
                            <CommentList ref = {this.handleRef} comments = {article.comments}></CommentList>
                        </section>
                    ): null;

        return (
            <div>
                <h3 onClick={openArticle}>{article.title}</h3>
                <CSSTransition
                    transitionName="article"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}

                    // если первое появление в доме - с анимацией
                    //transitionName="article"
                    //transitionAppear={true}>
                >
                    {body}
                </CSSTransition>
            </div>
        )
    }

    /*
     ES6
    toggleOpen(ev) {
        console.log('---', ev);
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    */

    //ES6 stage-0
    //toggleOpen = (ev) => {
    //    this.setState({
    //        isOpen: !this.state.isOpen
    //    });
    //};

}

export default Article;

// Stateless component
/*
export default (props) => {

    const { article } = props;

    return (
        <div>
            <h3>{article.title}</h3>
            <p>{article.text}</p>
        </div>
    )
}
*/