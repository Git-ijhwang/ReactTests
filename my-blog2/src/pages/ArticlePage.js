import React, {useState, useEffect} from 'react';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvoteSection from '../components/UpvoteSection';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = ({match}) => {

    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect( ()=> {
        const fetchData = async() => {
            const result = await fetch (`http://localhost:3000/api/articles/${name}`);
            const body = result.json();
            console.log(body);
            setArticleInfo(body);
        }
        // fetchData();
        // setArticleInfo({ upvotes: Math.ceil(Math.random() * 10)});
    }, [name]);

    if (!article)
        return <NotFoundPage/>
    
    const otherArticles = articleContent.filter(article=>article.name !== name);

    return (
        <>
            <h1>{article.title} </h1>

            <UpvoteSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={articleInfo}/>
            {article.content.map((paragraph, key) => (
                <p key={key}> { paragraph }... </p>
            ))}

            <CommentsList comments={articleInfo.comments}/>
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>

            <h3> Other Articles:</h3>
            <ArticlesList articles={otherArticles}/>
        </>
    );
}

export default ArticlePage;