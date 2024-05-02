import styles from './Home.module.css'
import Hero from '../../component/Hero';

const Home = () => {
    return (
        <section className={styles.HomePage}>
            <div>
                <Hero/>
            </div>
        </section>
    )
};

export default Home
