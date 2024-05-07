import styles from "./Scrum-Events.module.css";
import Article from "../../component/Article/Article";

const ScrumEvents = () => {
  return(
    <>
      <div className={styles.scrum__events__structure}>
        <div className={styles.article__wrapper}>
          <Article size="small"/>
        </div>
        
      </div>
    </>
  )
};

export default ScrumEvents;