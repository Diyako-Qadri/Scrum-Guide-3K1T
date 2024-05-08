import styles from "./Scrum-Events.module.css";
import Article from "../../component/Article/Article";
import  articleList  from "../../data/articleData.js";
import { useState } from "react";

const ScrumEvents = () => {
  const [focusedArticle, setFocus] = useState(null)
  console.log(articleList)

  return(
    <>
      <div className={styles.scrum__events__structure}>
        <div className={styles.article__wrapper}>
          {articleList.map((article, index) => 
          <Article data={article} setFocus={setFocus} focusedArticle={focusedArticle} key={index} articleNumber={index}/>)}
        </div>
      </div>
    </>
  )
};

export default ScrumEvents;