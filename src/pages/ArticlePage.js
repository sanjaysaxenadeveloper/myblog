import { useParams } from "react-router-dom";
import articles from './article-content';
import NotFoundPage from "./NotFoundPage";
const ArticlePage = () => {
    const {articleId}=useParams();
    const article=articles.find(article=>article.name===articleId);
    if(!article){
        return <NotFoundPage/>
    }
    return (
        // <h1>This is the Article page! and I'm fetching article id from url : {articleId} !</h1>
        //This is react fragments to wrap more than one top level elment<></>
        //warning: Each child in a list should have a unique "key" prop : To avoid this add key as i
        <> 
            <h1>{article.title}</h1>
            {article.content.map((paragraph,i)=>(
                <p key={i}>{paragraph}</p>
            ))}
        </>
       
    );
}

export default ArticlePage;