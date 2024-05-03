import styles from './About.module.css'
import chickProfile from '../../assets/chick.png';
import cowProfile from '../../assets/cow.png';
import duckProfile from '../../assets/duck.png'
import sharkProfile from '../../assets/shark.png'

const About = () => {
    return (
        <div>
            <div className={styles.aboutContainer}>
                <div className={styles.imageGallery}>
                    <div className={styles.image}>
                        <img src={chickProfile} alt="Profile 1" />
                    </div>
                    <div className={styles.image}>
                        <img src={cowProfile} alt="Profile 2" />
                    </div>
                    <div className={styles.image}>
                        <img src={duckProfile} alt="Profile 3" />
                    </div>
                    <div className={styles.image}>
                        <img src={sharkProfile} alt="Profile 4" />
                    </div>
                    <div className={styles.description}>
                        <h2>About Us</h2>
                        <p>3K1T isn't just a team; it's a convergence of passion, innovation, and relentless pursuit of excellence. Like the intricate gears of a well-oiled machine, each member brings their unique skills and expertise, synchronizing seamlessly to propel us forward. We're not just collaborators; we're a family bound by a shared vision and unwavering determination. Together, we defy limits, challenge norms, and carve our path towards greatness. 3K1T isn't just a name; it's a symbol of unity, resilience, and the relentless drive to conquer any challenge that comes our way.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;