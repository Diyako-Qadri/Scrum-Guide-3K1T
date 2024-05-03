import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
    <div className={styles.footer__body}>
      <div className={styles.left__content}>
        <div className={styles.bigger__text}>SCRUM GUIDE</div>
        <div className={styles.smaller__text}>Website about how to Scrum! </div>
      </div>
      <div className={styles.right__content}>
        <div className={styles.footer__links}>
          <a href="">Articles</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
        <div className={styles.socialMedia__icons}>ICONS</div>
      </div>
    </div>
    </>
  )
}

export default Footer;