'use client'

import style from "./style.module.css"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Navigation from "./Navigation"
import Link from "next/link"

export default function Navbar() {
    const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)

    return (
        <div className={style.header} data-is-open={isOpenMobileNav}>
            <nav className={style.container}>
                <FontAwesomeIcon
                    icon={faBars}
                    className={style.mobileBars}
                    onClick={(_) => setIsOpenMobileNav((prev) => !prev)}
                />
                <Link href={"/"} className={style.navLogo}>
                    <img src="../image/leaf.png" alt="logo" className={style.logo} />
                </Link>
                <div className={style.navigation}>
                    <Navigation
                        isOpen={isOpenMobileNav}
                        onClick={(_) => setIsOpenMobileNav(false)}
                    />
                </div>
            </nav>
        </div>
    )
}