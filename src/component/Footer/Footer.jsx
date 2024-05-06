import styles from "./Footer.module.css";
import { NavLink } from 'react-router-dom';
import { BsInstagram } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";


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
          <NavLink className={`${styles.navItem} ${styles.about}`} to='/about'>About</NavLink>
          <NavLink className={`${styles.navItem} ${styles.contact}`} to='/contact'>Contact</NavLink>
        </div>
        <div className={styles.socialMedia__icons}>
          <a href="https://www.instagram.com/" target="blank"><BsInstagram /> </a>
          <a href="https://www.github.com/" target="blank"><FaSquareGithub /> </a>
          <a href="https://www.linkedin.com/" target="blank"><CiLinkedin /> </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer;