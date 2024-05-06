import styles from "./Article.module.css";
import backgroundImage from '../../assets/hero3dark.jpg';

const Article = ({ size, data }) => {
  if (size === "small") {
    return (
    <>
    <div className={styles.article__container}>
      <h2 className={styles.article__headline}>Headline</h2>
      <div className={styles.article__body}>
        <p className={styles.article__text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae aliquid sapiente repudiandae accusamus dolorum aspernatur exercitationem libero, debitis ipsum voluptatibus doloribus, autem neque sint iusto blanditiis odit velit! Porro, quo.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos doloremque voluptatibus vel molestias odit. Tempore doloribus assumenda officia natus, dolorum facere atque! Neque aut placeat adipisci quos, tempora provident ut!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos doloremque voluptatibus vel molestias odit. Tempore doloribus assumenda officia natus, dolorum facere atque! Neque aut placeat adipisci quos, tempora provident ut!
        </p>
        <div className={styles.article__image__wrapper}>
          <div style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        </div>
      </div>
      <div className={styles.article__details}>
        <p>jane smith</p>
        <p>february 21 2011</p>
      </div>
    </div>
    </>
  )
  } else {
    return (
      <>
      <div className={styles.article__container}>
      <h2 className={styles.article__headline}>Headline</h2>
      <div className={styles.article__body}>
        <p className={styles.article__text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae aliquid sapiente repudiandae accusamus dolorum aspernatur exercitationem libero, debitis ipsum voluptatibus doloribus, autem neque sint iusto blanditiis odit velit! Porro, quo.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos doloremque voluptatibus vel molestias odit. Tempore doloribus assumenda officia natus, dolorum facere atque! Neque aut placeat adipisci quos, tempora provident ut!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae aliquid sapiente repudiandae accusamus dolorum aspernatur exercitationem libero, debitis ipsum voluptatibus doloribus, autem neque sint iusto blanditiis odit velit! Porro, quo.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos doloremque voluptatibus vel molestias odit. Tempore doloribus assumenda officia natus, dolorum facere atque! Neque aut placeat adipisci quos, tempora provident ut!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos doloremque voluptatibus vel molestias odit. Tempore doloribus assumenda officia natus, dolorum facere atque! Neque aut placeat adipisci quos, tempora provident ut!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos doloremque voluptatibus vel molestias odit. Tempore doloribus assumenda officia natus, dolorum facere atque! Neque aut placeat adipisci quos, tempora provident ut!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos doloremque voluptatibus vel molestias odit. Tempore doloribus assumenda officia natus, dolorum facere atque! Neque aut placeat adipisci quos, tempora provident ut!
        </p>
        <div className={styles.article__image__wrapper}>
          <div></div>
        </div>
      </div>
      <div className={styles.article__details}>
        <p>jane smith</p>
        <p>february 21 2011</p>
      </div>
    </div>
      </>
    )
  }
  
}

export default Article;