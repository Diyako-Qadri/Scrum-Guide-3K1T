import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
    <div className={styles.footer__body}>
      <div className={styles.left_content}>left</div>
      <div className={styles.right_content}>rigth</div>
    </div>
    </>
  )
}

export default Footer;