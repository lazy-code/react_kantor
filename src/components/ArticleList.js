import React, { Component, PropTypes } from  'react';
import Article from './Article';
import accordionDecorator from './../decorators/accordion';

class ArticleList extends Component {

    static propTypes = {
        // from app.js
        articles: PropTypes.array,
        // from accordion decorator
        isItemOpen: PropTypes.func.isRequired,
        toggleItem: PropTypes.func.isRequired

    };

    render() {
        const { articles, isItemOpen, toggleItem } = this.props;

        const articleComponent = articles.map(article => (
                <li key={ article.id }>
                    <Article article={ article } isOpen={ isItemOpen(article.id) } openArticle={toggleItem(article.id)}/>
                </li>)
        );

        return (
            <ul>
                {articleComponent}
            </ul>
        )
    };

    //changeTitle = (article) => ev => {
    //    ev.preventDefault();
    //
    //    article.title = "new cool title";
    //    this.setState({});
    //};

}

export default accordionDecorator(ArticleList);
