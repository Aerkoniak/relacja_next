import Head from 'next/head'
import homeStyles from '../styles/Home.module.css'
import pageStyles from '../styles/Pages.module.css'

import { Container, Row, Col } from 'react-bootstrap';



function Therapies() {
    return (
        <section className={homeStyles.main} id="o-terapiach">
            <Head>
                <title>Re-Lacja - O terapiach</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container fluid>
                <Row>
                    <Col className={pageStyles.secondRow} md={{ offset: 2, span: 8 }}><p className={pageStyles.landing}>Teoretyczną bazą podejścia psychodynamicznego jest psychoanaliza, zapoczątkowana przez Zygmunta Freuda na przełomie XIX i XX wieku, rozwijana w kolejnych latach przez wielu badaczy. Myślenie psychodynamiczne jest z założenia otwarte na wszelkie nowości nie tylko z zakresu psychologii, ale także psychiatrii, niejednokrotnie wykorzystując je jako korzystne dla pacjenta. Przedstawiciele nurtu psychodynamicznego stoją na stanowisku, że życiem jednostki sterują wewnętrzne, często nieuświadomione, potrzeby oraz mechanizmy działania, nie sposób więc zrozumieć psychicznych przeżyć pacjenta bez pochylenia się nad jego nieświadomością. W tym celu niezwykle ważne jest zbudowanie więzi pomiędzy pacjentem i terapeutą, co umożliwić ma terapia prowadzona „twarzą w twarz”, podczas której niezwykle ważna jest swobodna wypowiedź pacjenta oraz jego wolne skojarzenia. Rolą terapeuty jest „podążanie za pacjentem”, aby razem z nim dotrzeć do źródła objawów.</p></Col>
                    <Col className={pageStyles.secondRow} md={{ offset: 2, span: 8 }}><p className={pageStyles.landing}>Decydując się na psychoterapię w moim gabinecie, należy wiedzieć, że cały proces terapeutyczny rozpoczynam od sesji konsultacyjnej, umożliwiającej mi zapoznanie się z pacjentem, jego problemami oraz linią życia, co pozwala zaplanować dalszą terapię. Rzetelnie zebrany wywiad pozwala dostosować proces terapeutyczny do indywidualnych potrzeb pacjenta, a także przedstawić mu realne do osiągnięcia rezultaty.</p></Col>
                    <Col className={pageStyles.secondRow} md={{ offset: 2, span: 8 }}><p className={pageStyles.landing}>Sesje psychoterapii odbywają się raz lub dwa razy w tygodniu i trwają po 50 minut. W przypadku dzieci i młodzieży na spotkania zapraszam rodziców lub opiekunów prawnych wraz z podopiecznym. Konsultacja trwa zazwyczaj od dwóch do czterech sesji, w których trakcie przeprowadzam rozmowę z rodzicami i poznaję dziecko. W przypadku młodzieży spotkania z opiekunami są rzadsze i stanowią jedynie możliwość wymiany – najistotniejszych z punktu widzenia przebiegu procesu terapeutycznego – informacji. Niezwykle ważne jest dla mnie zachowanie prawa do intymności adolescenta oraz poszanowanie tajemnicy sesji. Warto podkreślić, że leczenie pacjentów niepełnoletnich możliwe jest za zgodą rodziców lub opiekunów prawnych. Jednak o zgodę pytam również samego pacjenta, ponieważ to jego motywacja jest kluczowa dla całego przebiegu procesu terapeutycznego.</p></Col>
                </Row>
            </Container>
        </section>
    )
}

export default Therapies