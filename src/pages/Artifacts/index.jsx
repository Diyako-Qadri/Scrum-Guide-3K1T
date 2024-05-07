import styles from './Artifacts.module.css'
import { motion } from 'framer-motion'

const Artifacts = () => {
    return (
        <>
            <div className={styles.artifactsBg}>
                <div className={styles.headlineContainer}>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 150,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 2
                            }
                        }}
                        viewport={{ once: false }}>
                        Scrum <motion.span
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
                            Artifacts
                        </motion.span> 
                    </motion.h1>
                </div>
            </div>
        </>
    )
};

export default Artifacts
