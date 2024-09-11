"use client";

import style from "./style.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./Navigation";
import Link from "next/link";
import i18n from "@/i18n";
import { LANGUAGES } from "@/constants";

export default function Navbar() {
    const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);

    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
        localStorage.setItem("selectedLanguage", lang_code);
    };

    return (
        <div className={style.header} data-is-open={isOpenMobileNav}>
            <nav className={style.container}>
                {/* <FontAwesomeIcon
                    icon={faBars}
                    className={style.mobileBars}
                    onClick={(_) => setIsOpenMobileNav((prev) => !prev)}
                /> */}
                <Link href={"/"} className={style.navLogo}>
                    <img src="../image/leaf.png" alt="logo" className={style.logo} />
                </Link>
                {/* <div className={style.navigation}>
                    <Navigation
                        isOpen={isOpenMobileNav}
                        onClick={(_) => setIsOpenMobileNav(false)}
                    />
                </div> */}
                <select
                    defaultValue={"es"}
                    onChange={onChangeLang}
                    className={style.selectLang}
                >
                    {LANGUAGES.map(({ code, label }) => {
                        return (
                            <option key={code} value={code}>
                                {label}
                            </option>
                        );
                    })}
                </select>
            </nav>
        </div>
    );
}