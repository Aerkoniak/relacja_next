import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Container, Row, Col } from 'react-bootstrap';


export default function Home() {
  return (
    <section className={styles.main} id="start">
      <Head>
        <title>Gabinet Re-Lacja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid>
        <Row>
          <Col md={{ span: 5, offset: 1 }}>
            <p className={styles.landing} >Jestem socjoterapeutą, pedagogiem oraz psychoterapeutą psychodynamicznym w trakcie szkolenia. Ukończyłam dwuletnie Studium Socjoterapii i Treningu Interpersonalnego w Krakowskim Centrum Psychodynamicznym oraz jestem w trakcie studiów w Szkole Psychoterapii Psychodynamicznej rekomendowanej przez Polskie Towarzystwo Psychologiczne.</p>
            <p className={styles.landing} >Aktualnie pracuję w Poradni Zdrowia Psychicznego oraz prowadzę zajęcia na Oddziale Dziennym Psychiatrycznym. Od kilku lat prowadzę również indywidualną psychoterapię dla dorosłych oraz młodzieży, stosując podejście psychodynamiczne.</p>
            <p className={styles.landing}>
              <Link href="/o-mnie#o-mnie"><a>kliknij tutaj by dowiedzieć się więcej o moich kompetencjach</a></Link>
            </p>
            <p className={styles.landing} >W swojej pracy stosuję podejście psychodynamiczne. Zakłada ono, że zrozumienie życia wymaga refleksji nad nieświadomością, zgodnie bowiem z tą teorią, kierują nami wewnętrzne mechanizmy działania, ukryte potrzeby oraz nierozwiązane konflikty interpersonalne, z których istnienia często nie zdajemy sobie sprawy. W podejściu psychodynamicznym istotą współpracy z pacjentem jest dynamika przeżyć psychicznych, zachodzących w jego relacji z terapeutą. </p>
          </Col>
          <Col md={{ span: 4, offset: 1 }}>
            <img className={styles.photo} src="/sandra.jpg" alt="" />
          </Col>
        </Row>
        <Row className={styles.secondRow} >
          <Col md={{ span: 5, offset: 1 }}>
            <p className={styles.landing}>Przez lata opublikowano wiele wyników badań, które potwierdzają, że terapia prowadzona w nurcie psychodynamicznym stanowi skuteczną metodę leczenia: zaburzeń osobowości, zaburzeń depresyjnych, zaburzeń lękowych i nerwicowych oraz innych złożonych trudności emocjonalnych. Co więcej, praca w tym nurcie nie jest skoncentrowana wyłącznie na redukcji objawów, zakładając również podstawowe zmiany w zakresie funkcjonowania, mające charakter trwały.</p>
            <p className={styles.landing}><Link href="/o-terapiach">tutaj dowiesz się więcej o rodzajach terapii</Link></p>
          </Col>
          <Col md={{ span: 4, offset: 1 }}>
            <p className={styles.landing}>Pracownia Psychoterapii Re-lacja oferuje pomoc skierowaną do osób, cierpiących z powodu:</p>
            <ul className={styles.list}>
              <li>zaburzeń depresyjnych oraz innych zaburzeń nastroju</li>
              <li>zaburzeń osobowości (m.in.: narcystycznych, borderline)</li>
              <li>zaburzeń lękowych (m.in.: fobie, stany lękowe)</li>
              <li>zaburzeń jedzenia (anoreksja, bulimia)</li>
              <li>zaburzeń o podłożu nerwicowym (natrętne myśli, kompulsje)</li>
              <li>problemów ze snem</li>
              <li>dolegliwości psychosomatycznych (m.in.: migreny, problemy dermatologiczne, bóle brzucha)</li>
              <li>odczuwania braku satysfakcji z życia</li>
            </ul>
          </Col>
        </Row>
        <img className={styles.line} src="/straight.png" alt="" />
        <Row className={styles.secondRow}>
          <Col md={{ span: 4, offset: 5 }} id="kontakt">
            <p className={styles.landing}>Pracownia Psychoterapii <strong>RE-LACJA</strong></p>
            <p className={styles.landing}>Sandra Łuczak-Grabowska</p>
            <p className={styles.landing}>Ul. Piwna 5 (II piętro)</p>
            <p className={styles.landing}>87-300 Brodnica</p>

            <p className={styles.landing}>e-mail: <a href="mailto:sandra.luczak-grabowska@re-lacja.pl">sandra.luczak-grabowska@re-lacja.pl</a></p>

            <p className={styles.landing}>tel: <a href="tel:+48537527010" >+48 537 527 010</a></p>
          </Col>
        </Row>


      </Container>

    </section>
  )
}
