import { useState } from 'react';
import styles from './Layout.module.css'
import { NavLink, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion'

const Layout = () => {
    const [openBurger, setOpenBurger] = useState(false);

    const toggleBurger = () => {
        setOpenBurger()
    }

    const handeClick = () => {
        setOpenBurger(!openBurger)
    }
    
    const closeBurger = () => {
        setTimeout(toggleBurger, 500);
    }

    return (
        <>
            <nav className={styles.nav}>
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
                    <div className={styles.hamburger}>
                        <label className={styles.hamburgerMenu}>
                            <input checked={openBurger} onClick={handeClick} type="checkbox" />
                        </label>
                        <aside className={`${styles.sidebar} ${openBurger ? styles.showBurger : ''}`}>
                            <nav>
                                <NavLink onClick={closeBurger} className={styles.logoBurger} to='/'>Scrum Guide</NavLink>
                                <motion.div className={styles.burgerNav}
                                    initial={{
                                        opacity: 0,
                                        // if odd index card,slide from right instead of left
                                        y: 50
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0, // Slide in to its original position
                                        transition: {
                                            duration: 0.6 // Animation duration
                                        }
                                    }}
                                    viewport={{ once: false }}>
                                    <NavLink onClick={closeBurger} className={styles.navItemBurger} to='/scrum'>Scrum</NavLink>
                                    <NavLink onClick={closeBurger} className={styles.navItemBurger} to='/team'>The Scrum Team</NavLink>
                                    <NavLink onClick={closeBurger} className={styles.navItemBurger} to='/events'>Scrum Events</NavLink>
                                    <NavLink onClick={closeBurger} className={styles.navItemBurger} to='/artifacts'>Scrum Artifacts</NavLink>
                                    <NavLink onClick={closeBurger} className={`${styles.navItemBurger}`} to='/about'>About</NavLink>
                                    <NavLink onClick={closeBurger} className={`${styles.navItemBurger} ${styles.contactBurger}`} to='/contact'>Contact</NavLink>
                                </motion.div>
                            </nav>
                        </aside>
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
