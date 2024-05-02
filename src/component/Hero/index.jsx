import styles from './Hero.module.css';
import backgroundImage from '../../assets/hero3dark.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className={styles.hero} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles.headlineContainer}>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 150
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 2
                        }
                    }}
                    viewport={{ once: false }}>
                    The <motion.span
                        initial={{
                            opacity: 0,
                            transition: {
                                delay: 2 // Delay of 2 seconds
                            }
                        }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                duration: 2
                            }
                        }}
                        viewport={{ once: false }}
                        className={styles.underline}>
                        Ultimate
                    </motion.span> Scrum Guide
                </motion.h1>
            </div>
        </div>
    )
}

export default Hero;
