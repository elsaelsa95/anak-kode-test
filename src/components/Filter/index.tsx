'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import style from "./style.module.css"
import { faFilter } from "@fortawesome/free-solid-svg-icons"

export interface IFilter {
    label: string
    data: string[]
}
export default function Filter({ label, data }: IFilter) {
    const [openFilter, setOpenFilter] = useState(false)
    const [labelFilter, setLabelfilter] = useState("")

    return (
        <div>
            <div className={style.filter} onClick={() => setOpenFilter(!openFilter)}>
                <label>{labelFilter ? labelFilter : label}</label>
                <FontAwesomeIcon icon={faFilter} />
            </div>
            <ul className={openFilter ? style.show : style.hide}>
                {data.map((d, i) => {
                    return (
                        <li
                            key={i}
                            className={style.option}
                            onClick={() => {
                                setLabelfilter(d)
                                setOpenFilter(!openFilter)
                            }}
                        >{d}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}