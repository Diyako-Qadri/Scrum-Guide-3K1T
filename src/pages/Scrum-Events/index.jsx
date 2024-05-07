import styles from "./Scrum-Events.module.css";
import Article from "../../component/Article/Article";
import articleData from "../../data/articleData";
import { useState } from "react";

const ScrumEvents = () => {
  const [focusedArticle, setFocus] = useState(null)
  console.log(articleData)

  return(
    <>
      <div className={styles.scrum__events__structure}>
        <div className={styles.article__wrapper}>
          {articleData.map((article, index) => 
          <Article data={article} setFocus={setFocus} focusedArticle={focusedArticle} key={index} articleNumber={index}/>)}
        </div>
      </div>
    </>
  )
};

export default ScrumEvents;