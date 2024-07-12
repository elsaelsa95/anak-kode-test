'use client'
import { useState } from "react"
import style from "./style.module.css"
import Filter from "../Filter"

export default function Form({ listProvince, listCityFrom, listCityTo }: any) {
    const [openProvinceFrom, setOpenProvinceFrom] = useState(false)
    const [provinceIDFrom, setProvinceIDFrom] = useState("")
    const [provinceFrom, setProvinceFrom] = useState("")

    const [openCityFrom, setOpenCityFrom] = useState(false)
    const [cityIDFrom, setCityIDFrom] = useState("")
    const [cityFrom, setCityFrom] = useState("")

    const [openProvinceTo, setOpenProvinceTo] = useState(false)
    const [provinceIDTo, setProvinceIDTo] = useState("")
    const [provinceTo, setProvinceTo] = useState("")

    const [openCityTo, setOpenCityTo] = useState(false)
    const [cityIDTo, setCityIDTo] = useState("")
    const [cityTo, setCityTo] = useState("")

    return (
        <div className={style.table}>
            <div className={style.from}>
                <strong className={style.strong}>From</strong>
                <Filter
                    onClick={() => setOpenProvinceFrom(!openProvinceFrom)}
                    label={provinceFrom ? provinceFrom : "Choose Province"}
                    open={openProvinceFrom}>
                    {listProvince.map((p: any, i: any) => {
                        return (
                            <ul key={i}>
                                <li
                                    key={i}
                                    className={style.option}
                                    onClick={() => {
                                        setProvinceIDFrom(p.province_id)
                                        setProvinceFrom(p.province)
                                        setOpenProvinceFrom(!openProvinceFrom)
                                    }}>{p.province}
                                </li>
                            </ul>
                        )
                    })}
                </Filter>
                <Filter
                    onClick={() => setOpenCityFrom(!openCityFrom)}
                    label={cityFrom ? cityFrom : "Choose City"}
                    open={openCityFrom}>
                    {listCityFrom.map((c: any, i: any) => {
                        return (
                            <ul key={i}>
                                <li
                                    key={i}
                                    className={style.option}
                                    onClick={() => {
                                        setCityIDFrom(c.city_id)
                                        setCityFrom(c.city_name)
                                        setOpenCityFrom(!openCityFrom)
                                    }}>{c.city_name}
                                </li>
                            </ul>
                        )
                    })}
                </Filter>
            </div>
            <div className={style.to}>
                <strong className={style.strong}>To</strong>
                <Filter
                    onClick={() => setOpenProvinceTo(!openProvinceTo)}
                    label={provinceTo ? provinceTo : "Choose Province"}
                    open={openProvinceTo}>
                    {listProvince.map((p: any, i: any) => {
                        return (
                            <ul key={i}>
                                <li
                                    key={i}
                                    className={style.option}
                                    onClick={() => {
                                        setProvinceIDTo(p.province_id)
                                        setProvinceTo(p.province)
                                        setOpenProvinceTo(!openProvinceTo)
                                    }}>{p.province}
                                </li>
                            </ul>
                        )
                    })}
                </Filter>
                <Filter
                    onClick={() => setOpenCityTo(!openCityTo)}
                    label={cityTo ? cityTo : "Choose City"}
                    open={openCityTo}>
                    {listCityTo.map((c: any, i: any) => {
                        return (
                            <ul key={i}>
                                <li
                                    key={i}
                                    className={style.option}
                                    onClick={() => {
                                        setCityIDTo(c.city_id)
                                        setCityTo(c.city_name)
                                        setOpenCityTo(!openCityTo)
                                    }}>{c.city_name}
                                </li>
                            </ul>
                        )
                    })}
                </Filter>
            </div>
            <div className={style.count}>
                <strong className={style.strong}>Estimation</strong>
                <div className={style.result}>
                </div>
            </div>
        </div>
    )
}