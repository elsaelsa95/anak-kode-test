'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./style.module.css"
import { faFilter } from "@fortawesome/free-solid-svg-icons"

export interface IFilter {
    label: string
    children: any
    open: boolean
    onClick: () => void
}
export default function Filter({ label, children, open, onClick }: IFilter) {
    return (
        <div>
            <div className={style.filter}>
                <label>{label}</label>
                <FontAwesomeIcon icon={faFilter} onClick={onClick} />
            </div>
            <div className={open ? style.show : style.hide}>
                {children}
            </div>
        </div>
    )
}