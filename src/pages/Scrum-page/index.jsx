import { motion } from 'framer-motion';
import styles from './Scrum-page.module.css';
import backgroundImage from '../../assets/scrumpageHeroImag.jpg';
import IntroBackground from '../../assets/scrumIntroBackground.jpg';
import definitionBackground from '../../assets/scrumDefinition.jpg';
import scrumTheoryBG from '../../assets/scrumTheoryBG.jpg';
import scrumValueBG from '../../assets/scrumValueBG.jpg';
import { ScrumValues } from '../../data/data';

const Scrum = () => {
  return (
    <>
      <div
        className={styles.ScrumPageHero}
        style={{
          backgroundImage: `linear-gradient(#00000075, #0000004d), url(${backgroundImage})`,
        }}
      >
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
                duration: 2,
              },
            }}
            viewport={{ once: true }}
          >
            The Scrum 
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
              viewport={{ once: true }}
              className={styles.underline}
            >
           {""} Definition
            </motion.span>{' '}
          </motion.h1>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(#00000075, #0000004d), url(${IntroBackground})`,
        }}
        className={styles.ScrumDefinitionIntro}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 150,
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
          className={styles.welcomeMessageScrum}
        >
          Scrum is a flexible framework for project management and software
          development that emphasizes rapid iterations, self-organizing teams,
          and continuous communication. It is used to manage projects with high
          uncertainty or change. The Scrum process consists of short work
          cycles, called "sprints," where the team plans, executes, and reviews
          work to deliver valuable features and functionalities. With Scrum,
          teams can effectively manage complex projects and deliver high-quality
          products in a short time.
        </motion.div>
      </div>

      <div
        className={styles.ScrumDefinition}
        style={{
          backgroundImage: `linear-gradient(#00000075, #0000004d), url(${definitionBackground})`,
        }}
      >
        <div className={styles.definitionContent}>
          <motion.div
            initial={{
              opacity: 0,
              x: -250,
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
            className={styles.conetntTitle}
          >
            <h4>Here’s how it works: </h4>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 250,
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
          >
            <h4>Product Backlog</h4>
            <p>
              Imagine all the tasks for a big project listed in one place.
              That’s the Product Backlog. A product owner decides what’s most
              important and prioritizes those tasks.
            </p>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -250,
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
          >
            <h4>Sprints</h4>
            <p>
              This is where the action happens. The scrum team picks a bunch of
              tasks from the product backlog and works on them for a set period,
              for example, a few weeks. At the end of each sprint, they’ve got
              something done, called an Increment.
            </p>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 250,
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
          >
            <h4>Review and Adapt</h4>
            <p>
              After each spring, the team and some other people involved check
              out what’s been done. Then they figure out what went well, what
              didn’t, and how they can improve.
            </p>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -250,
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
          >
            <h4>Repeat</h4>
            <p>
              Rinse and repeat! Keep picking, working on them, reviewing, and
              adapting.
            </p>
          </motion.div>
        </div>
      </div>

      <div
        className={styles.ScrumTheory}
        style={{
          backgroundImage: `linear-gradient(#00000075, #0000004d), url(${scrumTheoryBG})`,
        }}
      >
        <div className={styles.definitionContent}>
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
            className={styles.conetntTitle}
          >
            <h4>Scrum Theory</h4>
          </motion.div>
          <motion.div
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
          >
            <h4>Empiricism</h4>
            <p>
              Scrum is like learning to ride a bike. You learn by doing, not
              just reading about it; this is empiricism. You figure things out
              based on what you see and experience which applies to most things
              in life.
            </p>
          </motion.div>
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
          >
            <h4>Lean Thinking</h4>
            <p>
              It’s all about getting rid of the extra stuff and focusing on what
              matters.
            </p>
          </motion.div>
          <motion.div
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
          >
            <h4>Step-by-Step Progress </h4>
            <p>
              Scrum works in small steps. You add more and tweak things until
              you’ve got a finished product. This makes it easier to predict
              what’s coming next and reduces the chances of things going wrong.
            </p>
          </motion.div>
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
          >
            <h4>Teamwork and Adaptation</h4>
            <p>
              In Scrum, you’ve got these special events called Sprints. Within
              each Sprint, the team checks in, sees how things are going, and
              makes any necessary changes. It’s all about working together,
              being open about progress, and making adjustments as needed
            </p>
          </motion.div>
          <motion.div
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
          >
            <h4>Working Together</h4>
            <p>
              Scrum brings people with different skills and knowledge needed to
              tackle the job. They also share their experiences with others in
              their group, that way everyone learns from each other.
            </p>
          </motion.div>
        </div>
      </div>
      <div
        className={styles.ScrumValues}
        style={{
          backgroundImage: `linear-gradient(#00000075, #0000004d), url(${scrumValueBG})`,
        }}
      >
        <div className={styles.definitionContent}>
          <motion.h4
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
            className={styles.conetntTitle}
          >
            Scrum Values
          </motion.h4>
          {ScrumValues.map((item, i) => (
            <motion.div
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -150 : 150,
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
              key={i}
            >
              <motion.h4>{item.title}</motion.h4>
              <motion.p>{item.description}</motion.p>
            </motion.div>
          ))}{' '}
        </div>
      </div>
    </>
  );
};

export default Scrum;
