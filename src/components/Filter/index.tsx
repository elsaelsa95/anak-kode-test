
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import "./index.css"
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
            <div className="filter" onClick={() => setOpenFilter(!openFilter)}>
                <label>{labelFilter ? labelFilter : label}</label>
                <FontAwesomeIcon icon={faFilter} />
            </div>
            <ul className={openFilter ? "show" : "hide"}>
                {data.map((d, i) => {
                    return (
                        <li
                            key={i}
                            className="option"
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