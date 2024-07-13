'use client'
import { useState } from "react"
import style from "./style.module.css"
import Filter from "../Filter"
import { useAppDispatch } from "@/redux/store"
import { updateCityIDFrom, updateCityIDTo, updateProvinceIDFrom, updateProvinceIDTo } from "@/redux/costSlice"

export default function Form({ listProvince, listCityFrom, listCityTo, estimationCost }: any) {
    const [openProvinceFrom, setOpenProvinceFrom] = useState(false)
    const [provinceIDFrom, setProvinceIDFrom] = useState("")
    const [provinceFrom, setProvinceFrom] = useState("")

    const [showFromCityForm, setShowFromCityForm] = useState(false)
    const [openCityFrom, setOpenCityFrom] = useState(false)
    const [cityIDFrom, setCityIDFrom] = useState("")
    const [cityFrom, setCityFrom] = useState("")

    const [openProvinceTo, setOpenProvinceTo] = useState(false)
    const [provinceIDTo, setProvinceIDTo] = useState("")
    const [provinceTo, setProvinceTo] = useState("")

    const [showToCityForm, setShowToCityForm] = useState(false)
    const [openCityTo, setOpenCityTo] = useState(false)
    const [cityIDTo, setCityIDTo] = useState("")
    const [cityTo, setCityTo] = useState("")

    const dispatch = useAppDispatch()

    const updateFromProvince = (id: string) => {
        dispatch(updateProvinceIDFrom(id))
    }
    const updateFromCity = (id: string) => {
        dispatch(updateCityIDFrom(id))
    }
    const updateToProvince = (id: string) => {
        dispatch(updateProvinceIDTo(id))
    }
    const updateToCity = (id: string) => {
        dispatch(updateCityIDTo(id))
    }

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
                                        setShowFromCityForm(!showFromCityForm)
                                        localStorage.setItem("provinceIDFrom", p.province_id)
                                        updateFromProvince(p.province_id)
                                    }}>{p.province}
                                </li>
                            </ul>
                        )
                    })}
                </Filter>
                {showFromCityForm ?
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
                                            localStorage.setItem("cityIIDFrom", c.city_id)
                                            updateFromCity(c.city_id)
                                        }}>{c.city_name}
                                    </li>
                                </ul>
                            )
                        })}
                    </Filter> : <></>
                }
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
                                        setShowToCityForm(!showToCityForm)
                                        localStorage.setItem("provinceIDTo", p.province_id)
                                        updateToProvince(p.province_id)
                                    }}>{p.province}
                                </li>
                            </ul>
                        )
                    })}
                </Filter>
                {showToCityForm ?
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
                                            localStorage.setItem("cityIDTo", c.city_id)
                                            updateToCity(c.city_id)
                                        }}>{c.city_name}
                                    </li>
                                </ul>
                            )
                        })}
                    </Filter> : <></>}
            </div>
            <div className={style.count}>
                <strong className={style.strong}>Estimation</strong>
                <div className={style.result}>
                    {estimationCost[0].map((c: any, i: any) => {
                        return (
                            <div key={i}>
                                <p>Service : {c.service}</p>
                                <p>Description: {c.description}</p>
                                {c.cost.map((c: any, i: any) => {
                                    return (
                                        <div key={i}>
                                            <p> Estimation Cost : {c.value}</p>
                                            <p> Estimation ETD : {c.etd}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}