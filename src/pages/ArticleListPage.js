import articles from "./article-content";
import ArticlesList from "../components/ArticalsList";
const ArticleListPage = () => {
    return (
        <>
        <h1>Articles</h1>
        {/*warning: Each child in a list should have a unique "key" prop : To avoid this add key */}
         <ArticlesList articles={articles}/>
        </>
    );
}

export default ArticleListPage;