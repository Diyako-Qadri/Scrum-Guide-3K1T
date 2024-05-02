import styles from './Hero.module.css';
import backgroundImage from '../../assets/Hero1.png';


const Hero = () => {
    return (
        <div className={styles.hero} style={{backgroundImage: `url(${backgroundImage})`}}></div>
    )
}

export default Hero;