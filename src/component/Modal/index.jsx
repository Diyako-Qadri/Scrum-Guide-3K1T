import styles from './Modal.module.css'
import { motion, AnimatePresence, transform } from 'framer-motion'

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },

}

const modal = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "15%",
        opacity: 1,
        transition: { delay: 0.3 }
    }
}

const Modal = ({ showModal, setShowModal, modalChoice }) => {

    const modalText = modalChoice;
    console.log('modalText: ', modalText);

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <AnimatePresence mode='wait'>
            {showModal && (
                <motion.div onClick={closeModal} className={styles.backdrop}
                    variants={backdrop}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                >
                    <motion.div className={styles.modal}
                        variants={modal}
                    >
                        {modalText === 'backlog' && (
                            <>
                                <h2 className={styles.modalH2}>Backlog</h2>
                                <p className={styles.modalText}>The backlog is a catalog of requirements needed to build a product. The whole process of building the product is broken up into small tasks called tickets, from which the scrum team can choose what to work on in each sprint. The tickets in the backlog are created by the developer team themselves in a ticket creation meeting, and before each sprint the team chooses which tickets to include in the sprint.</p>
                                <p className={styles.modalText}>Each ticket in the backlog need an id number, a user story, acceptance criteria and an estimation of time and effort for every ticket, usually in the form of a story point. When a ticket has been completed it’s tested before that feature is released. Once in a while the scrum master hosts “backlog grooming” meetings where the team can make changes in the backlog to keep up with the clients potential change of requirements The Sprint Backlog is a collection of tickets from the backlog chosen by the developers, that need to be completed during a sprint, and the Sprint Goal is exactly what it sounds like - a goal for the sprint.

</p>
                            </>
                        )}
                        {modalText === 'increment' && (
                            <>
                                <h2 className={styles.modalH2}>Increment</h2>
                                <p className={styles.modalText}>An increment is a step towards achieving the overall Product Goal. Every increment builds upon previous increments, and together they will eventually make up the whole product. Each increment is like a piece of a puzzle, contributing to the larger picture of the project. These incremental steps allow for continuous progress and feedback, ensuring that the product evolves in alignment with stakeholders' needs. Each increment is thoroughly tested and validated to ensure it adds value and functions seamlessly within the product ecosystem.</p>
                            </>
                        )}
                        {modalText === 'dod' && (
                            <>
                                <h2 className={styles.modalH2}>Definition of Done</h2>
                                <p className={styles.modalText}>The Definition of Done or (DoD) as it sometimes is referred to is the team's collective agreement of when a task is done and can move on to the next phase of a task's way through the process of the team working on it until it is finished. It can look different for each team and different based on where in the process the project is until it is completely finished.</p>
                                <p className={styles.modalText}> What won't change during the project's lifespan is that the DoD needs to be agreed upon by every team member that is going to participate and if the task does not meet the requirements for the DoD then the task is not allowed to move to the next step and cannot be presented during sprint reviews and instead it returns to the previous step and is worked upon again until it meets the requirements. The DoD can be provided by the company as a standard and if that is the case then that would be a requirement for the team even if the team itself might have more specific requirements for their projects.
</p>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
};

export default Modal
