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
      <div className={styles.ScrumTeamIntro}>
        <p className={styles.ScrumTeamText}>
          A Scrum team comprises roles like Scrum Master, Product Owner, and
          developers collaborating to deliver products using the Scrum
          methodology. They organize work into short iterations called sprints,
          aiming for continuous improvement and adaptation based on feedback.
        </p>
      </div>

      <div className={styles.TeamMemberContainer}>
        {ScrumRoles.map((item, i) => (
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95, rotate: '1.05deg' }}
            key={i}
            className={styles.ScrumMember}
            onClick={() => handleMemberClick(i)}
          >
            <motion.h2 className={styles.dropdownHead}>
              {item.name} 
              <IoIosArrowForward style={{ transform: selectedMember === i ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
            </motion.h2>
         
            {selectedMember === i && (
              <motion.div
                className={styles.ScrumMemberTextContainer}
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.6 }}
              >   <img
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
