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
                    <h2 className={styles.testimonialHeader}>Customer Reviews</h2>
                    <div className={styles.testimonials}>
                        <div className={styles.testimonial}>
                            <p>"Working with 3K1T was like discovering the perfect cup of coffee - energizing, refreshing, and always leaving you wanting more! These folks don't just meet expectations; they exceed them with flying colors... and a sprinkle of unicorn magic!"</p>
                            <span>Sarah Sparkles, Chief Happiness Officer at Sunshine Enterprises🦄</span>
                        </div>
                        <div className={styles.testimonial}>
                            <p>"I've seen teams, I've seen dreams, but I've never seen anything quite like 3K1T! Their creativity knows no bounds, and their dedication is stronger than my morning coffee addiction. Simply put, they're the peanut butter to our jelly, the avocado to our toast, and the WiFi to our Netflix binge sessions!"</p>
                            <span>Bob Banter, Director of Chuckles and Giggles at Laugh Industries🤪</span>
                        </div>
                        <div className={styles.testimonial}>
                            <p>"Collaborating with 3K1T was like riding a roller coaster - thrilling, occasionally terrifying, but ultimately an unforgettable experience! Their ability to turn ideas into reality is nothing short of magical. If life is a circus, then 3K1T is the ringmaster, keeping us all entertained and amazed!"</p>
                            <span>Tina Tickle, Head of Mirther and Merriment at Jolly Corp🍭</span>
                        </div>
                        <div className={styles.testimonial}>
                            <p>"Combining efforts with 3K1T was like finding a pot of gold at the end of a rainbow - rare, precious, and filled with endless possibilities! They're the superheroes of the digital world, swooping in to save the day with their supercharged creativity and lightning-fast problem-solving skills. Trust me, you'll want them on your team!"</p>
                            <span>Max Mischief, Chief Shenanigans Officer at Prankster Enterprises👻</span>
                        </div>
                        <div className={styles.testimonial}>
                            <p>"Partnering with with 3K1T was like stumbling upon a secret stash of marshmallows in a world of broccoli - unexpected, delightful, and leaving me craving for s'more! These guys don't just code, they orchestrate digital symphonies with the finesse of a caffeinated conductor on a sugar rush. It's like they sprinkled code with fairy dust and made our dreams come true! Highly recommended, unless you're allergic to awesomeness."</p>
                            <span>Candy Crushington, Chief Sweetness Officer at Sugar Rush Co.🧁</span>
                        </div>
                                                <div className={styles.testimonial}>
                            <p>"Teamming up with 3K1T was like discovering a hidden treasure map in a sea of mundane tasks - exhilarating, adventurous, and full of surprises! Their team doesn't just think outside the box; they redesign the box into a spaceship and blast off into the innovation galaxy. Collaborating with them was like attending a coding carnival, where every line of code felt like a thrilling roller coaster ride. Buckle up and join the fun - you won't regret it!"</p>
                            <span>Jack Jester, Chief Fun Officer at Jestertainment Co.🤡</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;