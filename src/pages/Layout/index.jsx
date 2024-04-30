 import styles from './Layout.module.css'
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav>
                <div className={styles.navbar}>
                    <NavLink className={styles.logo} to='/'>Scrum Guide</NavLink>
                    <div className={styles.navItems}>
                        <NavLink className={styles.navItem} to='/scrum'>Scrum</NavLink>
                        <NavLink className={styles.navItem} to='/team'>The Scrum Team</NavLink>
                        <NavLink className={styles.navItem} to='/events'>Scrum Events</NavLink>
                        <NavLink className={styles.navItem} to='/artifacts'>Scrum Artifacts</NavLink>
                    </div>
                    <div className={styles.aboutContact}>
                        <NavLink className={`${styles.navItem} ${styles.about}`} to='/about'>About</NavLink>
                        <NavLink className={`${styles.navItem} ${styles.contact}`} to='/contact'>Contact</NavLink>
                    </div>
                </div>
            </nav>
            <section className={styles.mainContent}>
                <Outlet />
            </section>
        </>
    )
};

export default Layout
