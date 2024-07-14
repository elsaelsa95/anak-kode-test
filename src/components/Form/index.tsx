'use client'
import { useState } from "react"
import style from "./style.module.css"
import Filter from "../Filter"
import Button from "../Button";
import { formatter } from "@/helper/formatCurrency";
export interface IListCity {
    province_id: string;
    city_id: string;
    province: string;
    type: string;
    city_name: string;
}

export interface ICost {
    code: string;
    name: string;
    costs: ICostDetail[];
}

export interface ICostDetail {
    service: string;
    description: string;
    cost: ICostDescription[];
}

export interface ICostDescription {
    value: string;
    etd: string;
    note: string;
}

export default function Form({ listProvince }: any) {
    const [openProvinceFrom, setOpenProvinceFrom] = useState(false);
    const [provinceFrom, setProvinceFrom] = useState("");

    const [showFromCityForm, setShowFromCityForm] = useState(false);
    const [openCityFrom, setOpenCityFrom] = useState(false);
    const [cityFrom, setCityFrom] = useState("");

    const [openProvinceTo, setOpenProvinceTo] = useState(false);
    const [provinceTo, setProvinceTo] = useState("");

    const [showToCityForm, setShowToCityForm] = useState(false);
    const [openCityTo, setOpenCityTo] = useState(false);
    const [cityTo, setCityTo] = useState("");

    const [listFromCity, setFromCity] = useState<IListCity[]>([]);
    const handleChangeFromProvince = (id: string) => {
        const reqCity = fetch(`/api/city/${id}`);
        reqCity
            .then((res) => res.json())
            .then((res) => {
                setFromCity(res.data.rajaongkir.results);
            });
    };

    const [listToCity, setToCity] = useState<IListCity[]>([]);
    const handleChangeToProvince = (id: string) => {
        const reqCity = fetch(`/api/city/${id}`);
        reqCity
            .then((res) => res.json())
            .then((res) => {
                setToCity(res.data.rajaongkir.results);
            });
    };

    let fromCity_id: any
    let toCity_id: any

    if (typeof window !== 'undefined') {
        fromCity_id = localStorage.getItem("fromCity_id") ? localStorage.getItem("fromCity_id") : ""
        toCity_id = localStorage.getItem("toCity_id") ? localStorage.getItem("toCity_id") : ""
    }

    const [cost, setCost] = useState<ICost[]>([])
    const checkCost = async () => {
        try {
            const localStorageData = {
                origin: fromCity_id,
                destination: toCity_id,
                weight: "2700",
                courier: "jne",
            }
            const result = await fetch('api/cost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ localStorageData }),
            })
            const res = await result.json()
            setCost(res.data.rajaongkir.results[0].costs)
            setShowFromCityForm(!showFromCityForm)
            setShowToCityForm(!showToCityForm)
        } catch (error) {
            console.log(error)
        }
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
                                        setProvinceFrom(p.province);
                                        setOpenProvinceFrom(!openProvinceFrom);
                                        setShowFromCityForm(!showFromCityForm);
                                        handleChangeFromProvince(p.province_id);
                                    }}
                                >{p.province}
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
                        {listFromCity.map((c: any, i: any) => {
                            return (
                                <ul key={i}>
                                    <li
                                        key={i}
                                        className={style.option}
                                        onClick={() => {
                                            setCityFrom(c.city_name);
                                            setOpenCityFrom(!openCityFrom);
                                            localStorage.setItem("fromCity_id", c.city_id);
                                        }}
                                    >{c.city_name}
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
                                        setProvinceTo(p.province);
                                        setOpenProvinceTo(!openProvinceTo);
                                        setShowToCityForm(!showToCityForm);
                                        handleChangeToProvince(p.province_id);
                                    }}
                                >{p.province}
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
                        {listToCity.map((c: any, i: any) => {
                            return (
                                <ul key={i}>
                                    <li
                                        key={i}
                                        className={style.option}
                                        onClick={() => {
                                            setCityTo(c.city_name);
                                            setOpenCityTo(!openCityTo);
                                            localStorage.setItem("toCity_id", c.city_id);
                                        }}
                                    >{c.city_name}
                                    </li>
                                </ul>
                            )
                        })}
                    </Filter> : <></>}
            </div>

            {cost ?
                <div className={style.count}>
                    <strong className={style.strong}>Estimation</strong>
                    <div className={style.result}>
                        {cost.map((c: any, i: any) => {
                            return (
                                <div key={i}>
                                    <p>Service : {c.service}</p>
                                    <p>Description: {c.description}</p>
                                    {c.cost.map((c: any, i: any) => {
                                        return (
                                            <div key={i}>
                                                <p> Estimation Cost : {formatter(c.value)}</p>
                                                <p> Estimation ETD : {c.etd}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div> : <></>
            }
            <p><strong>*Estimation Car Weight = 2.700 kg</strong></p>
            <p><strong>*Service Available = JNE</strong>
            </p>
            <Button onClick={() => checkCost()}>Check</Button>
        </div>
    )
}