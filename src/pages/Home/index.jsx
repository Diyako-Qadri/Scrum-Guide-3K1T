import styles from './Home.module.css'
import Footer from '../../component/Footer/Footer';

const Home = () => {
    return (
        <section className={styles.HomePage}>
            <p>Home page</p>
            <Footer/>
        </section>
    )
};

export default Home
