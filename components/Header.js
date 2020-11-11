import Logo from '../components/Logo';
import Nav from '../components/Nav';

export default function Header() {
    return (
        <div className="header">
            <i className="fas fa-bars"></i>
            <Nav />
            <Logo className="logoDiv" />
        </div>
    )
}