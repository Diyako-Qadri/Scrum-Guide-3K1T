
import styles from './Scrum-page.module.css'

const Scrum = () => {
    return (
       <section className={styles.ScrumPage}>
            <div className={styles.WelcomeMessage}>
                
            <h2 className={styles.colorfulHeading}>Welcome!</h2>
                <p>
                    Welcome to our beginner’s guide to Scrum!
                    If you’re feeling overwhelmed or confused about what Scrum is all about, don’t worry, you’re not alone. Scrum can seem like a new language at first, but trust me, it’s not as scary as it sounds!
                    In this guide, we’ll break down Scrum into small pieces and explain it in a way that’s easy to understand, even if you’re not a pro at this stuff(yet!).
                </p>
            </div>
            <div className={styles.ScrumDefinition}>
                <h2>Scrum Definition</h2> 
                <p>
                    Scrum is a flexible framework that helps people, teams and even whole organizations deal with tricky problems smartly. 
                </p>
                
                <h3>Product Backlog 🎯</h3>
                <p>
                Imagine all the tasks for a big project listed in one place. That’s the Product Backlog. A product owner decides what’s most important and prioritizes those tasks.
                </p>

                <h3>Sprints 🚀</h3>
                <p>
                This is where the action happens. The scrum team picks a bunch of tasks from the product backlog and works on them for a set period, for example, a few weeks. At the end of each sprint, they’ve got something done, called an Increment.
                </p>

                <h3>Review and Adapt 🔍</h3>
                <p>
                After each spring, the team and some other people involved check out what’s been done. Then they figure out what went well, what didn’t, and how they can improve. 
                </p>

                <h3>Repeat 🔁</h3>
                <p>
                Rinse and repeat! Keep picking, working on them, reviewing, and adapting. 
                </p>
            </div>

            <div className={styles.ScrumTheory}>
                <h2>Scrum Theory</h2>

                <h3>Empiricism 🧠</h3>
                <p>
                Scrum is like learning to ride a bike. You learn by doing, not just reading about it; this is empiricism. You figure things out based on what you see and experience which applies to most things in life.
                </p>

                <h3>Lean Thinking 💡</h3>
                <p>
                It’s all about getting rid of the extra stuff and focusing on what matters.
                </p>

                <h3>Step-by-Step Progress 🌱</h3>
                <p>
                Scrum works in small steps. You add more and tweak things until you’ve got a finished product. This makes it easier to predict what’s coming next and reduces the chances of things going wrong.
                </p>

                <h3>Teamwork and Adaptation 🔄</h3>
                <p>
                In Scrum, you’ve got these special events called Sprints. Within each Sprint, the team checks in, sees how things are going, and makes any necessary changes. It’s all about working together, being open about progress, and making adjustments as needed 
                </p>

                <h3>Working Together 👥</h3>
                <p>
                Scrum brings people with different skills and knowledge needed to tackle the job. They also share their experiences with others in their group, that way everyone learns from each other.
                </p>
            </div>
       </section>
    )
};

export default Scrum;
