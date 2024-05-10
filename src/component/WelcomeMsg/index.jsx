import styles from './WelcomeMsg.module.css'
import welcome from '../../assets/welcome.jpeg'
import { motion } from 'framer-motion';

const WelcomeMsg = () => {
    return (
        <div className={styles.welcomeMsg}>
            <div className={styles.welcomeMsgContainer}>
                <motion.h2
                    initial={{
                        y: 50,
                        opacity: 0,
                        transition: {
                            delay: 2
                        }
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 1
                        }
                    }}
                    viewport={{ once: false }}
                >Feel lost? Let us guide you!</motion.h2>
                <img className={styles.welcomeImg} src={welcome} alt="welcome image" />
                <p>If you’re feeling overwhelmed or confused about what Scrum is all about, don’t worry, you’re not alone. Scrum can seem like a new language at first, but trust me, it’s not as scary as it sounds! In this guide, we’ll break down Scrum into small pieces and explain it in a way that’s easy to understand, even if you’re not a pro at this stuff(yet!).</p>
                <motion.button className={styles.readMoreBtn}
                    initial={{
                        x: -50,
                        opacity: 0,
                        transition: {
                            delay: 2
                        }
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: 1
                        }
                    }}
                    viewport={{ once: false }}
                ><a href="/scrum">Read More</a></motion.button>
            </div>
        </div>
    )
};

export default WelcomeMsg
