import styles from '../styles/Home.module.css'


const Footer = () => {
    return (
        <section className={styles.footer}>
            <img src='/aer-fav64.png' alt="" />
            <p>made by <a className="lunnier" href="https://lunnier.com/">lunnier.com</a>
            </p>
        </section>
    );
}

export default Footer;