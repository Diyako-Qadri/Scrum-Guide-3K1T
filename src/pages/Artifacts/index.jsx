import { useState } from 'react';
import { motion } from 'framer-motion'
import Modal from '../../component/Modal';
import postits from '../../assets/postits.jpeg'
import styles from './Artifacts.module.css'

const Artifacts = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalChoice, setModalChoice] = useState();

    const handleClick = (choice) => {
        setModalChoice(choice)
        setShowModal(!showModal)
    }

    return (
        <>
            <Modal showModal={showModal} setShowModal={setShowModal} modalChoice={modalChoice} />
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
                        viewport={{ once: true }}>
                        Scrum <motion.span
                            initial={{
                                opacity: 0,
                                transition: {
                                    delay: 2
                                }
                            }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    duration: 2
                                }
                            }}
                            viewport={{ once: true }}
                            className={styles.underline}>
                            Artifacts
                        </motion.span>
                    </motion.h1>
                </div>
            </div>
            <div className={styles.artifactsInfoBG}>
                <div className={styles.artifactsInfo}>
                    <div className={styles.artifactsText}>
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
                        >Scrum Artifacts</motion.h2>
                        <motion.p className={styles.textp1}
                            initial={{
                                x: 100,
                                opacity: 0,
                                transition: {
                                    delay: 2
                                }
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                transition: {
                                    duration: 0.7
                                }
                            }}
                            viewport={{ once: false }}
                        >Scrum's artifacts embody work or value and aim to enhance transparency of crucial information. This transparency ensures that all stakeholders have a common foundation for adaptation. Each artifact includes a commitment to deliver information that fosters transparency and focus, serving as a benchmark for measuring progress:</motion.p>
                        <motion.ul
                            initial={{
                                x: -100,
                                opacity: 0,
                                transition: {
                                    delay: 2
                                }
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                transition: {
                                    duration: 1.4
                                }
                            }}
                            viewport={{ once: false }}
                        >
                            <li>The Product Backlog commits to the Product Goal.</li>
                            <li>The Sprint Backlog commits to the Sprint Goal.</li>
                            <li>The Increment commits to the Definition of Done.</li>
                        </motion.ul>
                        <motion.div className={styles.btnContainer}
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
                                    duration: 1.6
                                }
                            }}
                            viewport={{ once: false }}
                        >
                            <button onClick={() => handleClick('backlog')} className={styles.artifactsBtn}>Backlog</button>
                            <button onClick={() => handleClick('increment')} className={styles.artifactsBtn}>Increment</button>
                            <button onClick={() => handleClick('dod')} className={styles.artifactsBtn}>DoD</button>
                        </motion.div>
                    </div>
                    <img src={postits} className={styles.artifactsImg} />
                </div>
            </div>
        </>
    )
};

export default Artifacts
