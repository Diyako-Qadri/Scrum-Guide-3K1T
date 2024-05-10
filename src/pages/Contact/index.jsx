import styles from './Contact.module.css'
import phoneIcon from '../../assets/phone.png';
import emailIcon from '../../assets/mail.png';
import contactImage from '../../assets/contact.png';
import ContactForm from '../../component/ContactForm/ContactForm.jsx';

const Contact = () => {
    return (
<section className={styles.contactPage}>
    <div className={styles.contactContent}>
        <div className={styles.contactHeader}>
            <h2>Contact Us!</h2>
        </div>
        <div className={styles.contactInfo}>
            <img src={phoneIcon} alt="Phone Icon" className={styles.icon} />
            <span>Phone: (+01) 234-5678</span>
        </div>
        <div className={styles.contactDetail}>
            <img src={emailIcon} alt="Email Icon" className={styles.icon} />
            <span>Email: 3K1T@hotmail.com</span>
        </div>
        <div className={styles.contactForm}>
            <ContactForm />
        </div>
    </div>
    <div className={styles.contactImage}>
        <img src={contactImage} alt="Contact Image" />
    </div>
</section>
    )
};

export default Contact;