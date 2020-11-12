import Link from 'next/link';
import { useState, useEffect } from 'react'
import styles from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'




const Nav = ({ className, drawQuote }) => {

    const [isNavHide, toggleNav] = useState(true);

    useEffect(() => {
        if (className === "navShown") toggleNav(false)
        else if (className === "navHide") toggleNav(true)
    }, [className])

    return (
        <ul onClick={drawQuote} className={isNavHide ? styles.navHide : styles.navShown} >
            <Link scroll={false} href="/"><a className={styles.link}><FontAwesomeIcon icon={faHome} /></a></Link>
            <Link scroll={false} href="/o-mnie#o-mnie"><a className={styles.link}>O mnie</a></Link>
            <Link scroll={false} href="/o-terapiach"><a className={styles.link}>O terapii</a></Link>
            <Link scroll={false} href="/cennik"><a className={styles.link}>Cennik</a></Link>
            <Link scroll={false} href="/kontakt"><a className={styles.link}>Kontakt</a></Link>
        </ul>
    );
}

export default Nav;