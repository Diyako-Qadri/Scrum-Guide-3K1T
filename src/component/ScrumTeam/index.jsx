import { useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowForward } from 'react-icons/io';
import { getImageURLScrum } from '../../utils/function';
import { ScrumRoles } from '../../data/data.js';
import styles from './ScrumTeam.module.css';

const ScrumTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = index => {
    setSelectedMember(selectedMember === index ? null : index);
  };

  return (
    <>
      <div className={styles.ScrumTeamHero}>
        <div className={styles.teamHeadlineContainer}>
          <motion.h1
            initial={{
              opacity: 0,
              y: 150,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 2,
              },
            }}
            viewport={{ once: false }}
          >
            Scrum
            <motion.span
              initial={{
                opacity: 0,
                transition: {
                  delay: 2, // Delay of 2 seconds
                },
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 2,
                },
              }}
              viewport={{ once: false }}
              className={styles.underline}
            >
              Team
            </motion.span>
          </motion.h1>
        </div>
      </div>

      <div className={styles.TeamMemberContainer}>
        <motion.p 
          initial={{
            opacity: 0,
            x: -150,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
              duration: 2,
            },
          }}
          viewport={{ once: true }}
        className={styles.ScrumTeamText}>
          A Scrum team comprises roles like Scrum Master, Product Owner, and
          developers collaborating to deliver products using the Scrum
          methodology. They organize work into short iterations called sprints,
          aiming for continuous improvement and adaptation based on feedback.
        </motion.p>
        {ScrumRoles.map((item, i) => (
          <motion.div
          initial={{
            opacity: 0,
            x: 150,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
              duration: 2,
            },
          }}
          viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95, rotate: '1.05deg' }}
            key={i}
            className={styles.ScrumMember}
            onClick={() => handleMemberClick(i)}
          >
            <motion.h2 className={styles.dropdownHead}>
              {item.name}
              <IoIosArrowForward
                style={{
                  transform:
                    selectedMember === i ? 'rotate(90deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </motion.h2>

            {selectedMember === i && (
              <motion.div
                className={styles.ScrumMemberTextContainer}
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.6 }}
              >
                {' '}
                <img
                  className={styles.ScrumRolesImage}
                  src={getImageURLScrum(item.image)}
                  alt=""
                />
                <div className={styles.ScrumMemberText}>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ScrumTeam;
