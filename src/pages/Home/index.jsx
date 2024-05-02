import styles from './Home.module.css'
import Footer from '../../component/Footer/Footer';
import Hero from '../../component/Hero';

const Home = () => {
    return (
        <section className={styles.HomePage}>
            <p>Home page</p>
            
            <div>
                <Hero/>
            </div>
            <Footer/>
        </section>
    )
};

export default Home
