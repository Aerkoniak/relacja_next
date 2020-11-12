import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Logo = ({ className }) => {

    const [isNavHide, toggleNav] = useState(false);
    useEffect(() => {
        if (className === "logoDiv") toggleNav(false)
        else if (className === "logoDivHide") toggleNav(true)
    }, [className])

    return (
        <div className={isNavHide ? styles.logoDivHide : styles.logoDiv}>
            <Link scroll={false} href="/"><img src="/relacja.png" alt="" className={styles.logo} /></Link>
        </div>
    );
}

export default Logo;