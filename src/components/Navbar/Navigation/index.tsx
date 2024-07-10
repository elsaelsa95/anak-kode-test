import { MouseEventHandler } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css"

export default function Navigation({
    isOpen,
    onClick,
}: {
    isOpen?: boolean;
    onClick?: MouseEventHandler;
}) {
    const location = useLocation()
    const path = location.pathname

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
            className="navigationItems"
            data-is-open={isOpen}
        >
            {navigationItems.map((m, i) => {
                return (
                    <Link
                        key={i}
                        to={m.link}
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