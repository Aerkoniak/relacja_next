import styles from '../styles/Header.module.css'

import Logo from '../components/Logo';
import Nav from '../components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

export default function Header() {

    const [isNavHide, toggleNav] = useState(true);
    const [quotesArray, updateQuotesArray] = useState([
        {
            txt: "Klucz do dobrego życia: jeśli nie masz zamiaru rozmawiać o czymś w ciągu ostatniej godziny swojego życia, nie czyń z tego głównej życiowej wartości.",
            author: "Richard Carlson"
        }, {
            txt: "Wysłana wiadomość nie zawsze jest tą samą odebraną wiadomością.",
            author: "Virginia Satir"
        }, {
            txt: "Kiedy nie jesteśmy już w stanie zmienić sytuacji, jesteśmy zmuszeni do zmiany siebie",
            author: "Viktor Frankl"
        }, {
            txt: "Żadna droga w moim życiu nie była tak długa jak ta, która miała mnie zaprowadzić do mnie samej.",
            author: "Alice Miller"
        },
        { txt: "Życie nie toczy się tak, jak powinno, ale jest takie jak jest. Sposób w jaki sobie z tym radzisz, stanowi całą różnicę.", author: "Virginia Satir" },
        { txt: "Wiedza nie opiera się wyłącznie na prawdzie, także na błędach.", author: "Carl Gustav Jung" },
        { txt: "Boimy się tylko tego, czego nie znamy. Skonfrontuj się z lękiem, a będzie to lęk po raz ostatni.", author: "Mateusz Grzesiak" },
        { txt: "Myślimy o naszej przyszłości bazując na wspomnieniach.", author: "Daniel Kahneman" },
        { txt: "Życia nie można wybrać, ale można z niego coś zrobić.", author: "Peter Lippert" },
        { txt: "Nigdy nie jest za późno, by stać się tym, kim chcemy być.", author: "George Eliot" },
        { txt: "Poznaj samego siebie.", author: "Sokrates" },
    ])
    const [currentQuote, updateCurrentQuote] = useState({});

    useEffect(() => {
        drawQuote()
    }, [])

    const drawQuote = () => {
        let index = Math.floor(Math.random() * quotesArray.length);
        updateCurrentQuote(quotesArray[index])
    }

    return (
        <div className={styles.header}>
            <div className={styles.iconWrapBars}>
                <FontAwesomeIcon onClick={() => toggleNav(!isNavHide)} className={styles.barsForMobile} icon={faBars} />
            </div>
            <div className={isNavHide ? styles.iconWrapPhoneHide : styles.iconWrapPhone}>
                <a href="tel:+48537527010" className={styles.barsForMobile}><FontAwesomeIcon icon={faPhone} className={styles.barsForMobile} /></a>
            </div>
            <Nav className={isNavHide ? "navHide" : "navShown"} drawQuote={drawQuote} />
            <Logo className={isNavHide ? "logoDivHide" : "logoDiv"} />
            {currentQuote ? <div className={styles.quote}>
                <p>{currentQuote.txt}</p>
                <h4>{currentQuote.author}</h4>
            </div> : null}
        </div>
    )
}