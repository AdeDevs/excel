import { useState } from "react"
import Logo from "../assets/logo.png"
import menu from "../assets/menu.svg"

export default function NavBar() {
    const [isMenu, setIsMenu] = useState(false)
    const toggleMenu = () => {
        setIsMenu(!isMenu)
    }
    
    return (
        <div className="nav-bar">
            <nav className="navigation">
                <a className="logo" href="/"><img src={Logo} alt="Logo" /></a>
                <ul className="desk-nav">
                    <li><a href="/">about us</a></li>
                    <li><a href="/">utme & ssce</a></li>
                    <li><a href="/">ielts & toefl</a></li>
                    <li><a href="/">online class</a></li>
                    <li><a href="/">contact</a></li>
                    <li><a href="/">blog</a></li>
                    <li className="tog" onClick={toggleMenu}><ion-icon name="menu"></ion-icon></li>
                </ul>
                <div className={`overlay ${isMenu ? "open" : ""}`} onClick={toggleMenu}></div>
                <ul className={`mob-nav ${isMenu ? "open" : ""}`}>
                    <li className="tog" onClick={toggleMenu}><ion-icon name="menu"></ion-icon></li>
                    <li onClick={toggleMenu}><a href="/">about us</a></li>
                    <li onClick={toggleMenu}><a href="/">utme & ssce</a></li>
                    <li onClick={toggleMenu}><a href="/">ielts & toefl</a></li>
                    <li onClick={toggleMenu}><a href="/">online class</a></li>
                    <li onClick={toggleMenu}><a href="/">contact</a></li>
                    <li onClick={toggleMenu}><a href="/">blog</a></li>
                </ul>
            </nav>
            <div className="msg">
                <a href="/">Click here now to register for the free online UTME & SSCE class.</a>
            </div>
        </div>
    )
}