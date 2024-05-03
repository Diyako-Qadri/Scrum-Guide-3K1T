import styles from "./Article.module.css";

const Article = () => {
  return (
    <>
    <div className={styles.article__body}>
      <h2 className={styles.headline}>Headline</h2>
      <p className={styles.article__text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos doloremque voluptatibus vel molestias odit. Tempore doloribus assumenda officia natus, dolorum facere atque! Neque aut placeat adipisci quos, tempora provident ut!</p>
      <div className={styles.article__details}>
        <p>jane smith</p>
        <p>february 21 2011</p>
      </div>
    </div>
    </>
  )
}

export default Article;