import styles from './Home.module.css'
import Hero from '../../component/Hero';
import Article from '../../component/Article/Article';

const Home = () => {
    return (
        <section className={styles.HomePage}>
            <div>
                <Hero/>
                <Article size={"small"}/>
            </div>
        </section>
    )
};

export default Home
