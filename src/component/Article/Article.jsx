import styles from "./Article.module.css";


const Article = ({ size, data, setFocus, focusedArticle, articleNumber }) => {
  let articleContent = JSON.parse(data);
  
  const handleClick = () => {
    focusedArticle  === articleNumber ? setFocus(null) : setFocus(articleNumber);
  }

  const handleTextSize = () => {
    if(focusedArticle === articleNumber){
      return (
        articleContent.text
      )
    } else {
      let fullDescription = articleContent.text
      return(
        fullDescription.slice(0, 200) + "..."
      )
    }
  }

  if (size !== "large") {
    return (
    <>
    <div className={styles.article__container}>
      <h2 className={styles.article__headline}>{articleContent.headline}</h2>
      <div className={styles.article__body}>
        <p className={styles.article__text}>
          {handleTextSize()}
        </p>
        <div className={`${styles.expand__button} ${focusedArticle === articleNumber ? styles.active__button : "" }`} onClick={handleClick} >{focusedArticle === articleNumber ? "Read less" : "Read more"}</div>
      </div>
      <div className={styles.article__details}>
        <p>{articleContent.author}</p>
        <p>february 21 2011</p>
      </div>
    </div>
    </>
  )
  } else {
    return (
      <>
      <div className={styles.article__container}>
      <h2 className={styles.article__headline}>{articleContent.headline}</h2>
      <div className={styles.article__body}>
        <p className={styles.article__text}>
          {articleContent.text}
        </p>
      </div>
      <div className={styles.article__details}>
        <p>{articleContent.author}</p>
        <p>february 21 2011</p>
      </div>
    </div>
      </>
    )
  }
  
}

export default Article;