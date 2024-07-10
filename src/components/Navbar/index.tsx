import { Link } from "react-router-dom"
import "./index.css"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Navigation from "./Navigation"

export default function Navbar() {
    const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)

    return (
        <div className="header" data-is-open={isOpenMobileNav}>
            <nav className="container">
                <FontAwesomeIcon
                    icon={faBars}
                    className="mobileBars"
                    onClick={(_) => setIsOpenMobileNav((prev) => !prev)}
                />
                <Link to={"/"} className="navLogo">
                    <img src="../image/leaf.png" alt="logo" className="logo" />
                </Link>
                <div className="navigation">
                    <Navigation
                        isOpen={isOpenMobileNav}
                        onClick={(_) => setIsOpenMobileNav(false)}
                    />
                </div>
            </nav>
        </div>
    )
}