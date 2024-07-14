import { MouseEventHandler } from "react";
import style from "../style.module.css"
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation({
    isOpen,
    onClick,
}: {
    isOpen?: boolean;
    onClick?: MouseEventHandler;
}) {

    const path = usePathname();

    let navigationItems = [
        {
            link: "/",
            pageName: "Home",
            isActive: path === "/"
        },
        {
            link: "/login",
            pageName: "Login",
            isActive: path === "/login"
        },
        {
            link: "/register",
            pageName: "Register",
            isActive: path === "/register"
        }
    ]

    return (
        <div
            className={style.navigationItems}
            data-is-open={isOpen}
        >
            {navigationItems.map((m, i) => {
                return (
                    <Link
                        key={i}
                        href={m.link}
                        title={m.pageName}
                        data-is-active={m.isActive}
                        onClick={onClick}
                    >
                        {m.pageName}
                    </Link>
                )
            })}
        </div>
    )
}