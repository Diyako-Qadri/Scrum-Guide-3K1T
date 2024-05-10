import styles from './Home.module.css'
import Hero from '../../component/Hero';
import WelcomeMsg from '../../component/WelcomeMsg';

const Home = () => {
    return (
        <section className={styles.HomePage}>
            <div>
                <Hero/>
                <WelcomeMsg />              
            </div>
        </section>
    )
};

export default Home
