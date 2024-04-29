import styles from './Layout.module.css'
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <nav>
                <div className={styles.navbar}>
                    <div className={styles.logoContainer}>Logo</div>
                    <div className={styles.navItems}>
                        <NavLink className={styles.navItem} to='/'>Home</NavLink>
                        <NavLink className={styles.navItem} to='/scrum'>Scrum</NavLink>
                        <NavLink className={styles.navItem} to='/team'>The Scrum Team</NavLink>
                        <NavLink className={styles.navItem} to='/events'>Scrum Events</NavLink>
                        <NavLink className={styles.navItem} to='/artifacts'>Scrum Artifacts</NavLink>
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
