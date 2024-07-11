import Card from "../../components/Card"
import { DataArticle, DataBranding, DataCarList } from "../../data/data"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "./index.css"
import Button from "../../components/Button";
import Filter from "../../components/Filter";
// import { useEffect, useState } from "react";

export interface IFilterProvince {
    province_id: string
    province: string
}

export interface IFilterCity {
    city_id: string
    province_id: string
    province: string
    type: string
    city_name: string
    postal_code: string
}

export interface IResultOngkir {
    value: number
    etd: string
}

export default function Home() {
    const formatter = (number: number) => new Intl.NumberFormat('id-ID', {
        style: "currency",
        currency: "IDR"
    }).format(number)

    // const [dataProvince, setDataProvince] = useState<IFilterProvince[]>([])
    // const [dataCity, setDataCity] = useState<IFilterCity[]>([])
    // const [result, setResult] = useState<IResultOngkir[]>([])

    // const getProvince: any = async () => {
    //     try {
    //         const response = await fetch(`https://api.rajaongkir.com/starter/province`, {
    //             method: "GET",
    //             // mode: "no-cors",
    //             headers: {
    //                 // 'Content-Type': 'application/json',
    //                 // "Access-Control-Allow-Origin": "*",
    //                 // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    //                 // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    //                 'key': `${process.env.Key_Raja_Ongkir}`
    //             }
    //         })
    //         console.log(response)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     getProvince()
    // }, [])
    // getProvince()

    return (
        <div className="section">
            <section className="section1">
                <div className="title">
                    <h1>Don't <strong>Damage</strong> Nature with Your Car</h1>
                    <p>Change Your Old Car to an Electric Car <strong>Now</strong></p>
                    <small>We Have More than 1.000 Electric Car Available</small>
                    <br />
                    <Button>Contact Us</Button>
                </div>
                <img src="../image/car.png" alt="logo" className="imageTitle" />
            </section>
            <section className="section2">
                <div className="titleSection">
                    <h1>Why <strong>Electric </strong> Car ?</h1>
                </div>
                <div className="article">
                    {DataArticle.map((a, i) => {
                        return (
                            <Card key={i}>
                                <h3>{a.title}</h3>
                                <p> {a.description}</p>
                                <img src={a.image} className="imageArticle" alt={a.title} />
                            </Card>
                        )
                    })}
                </div>
            </section>
            <section className="section3">
                <div className="title">
                    <h1> <strong>Why Us ?</strong></h1>
                    <p>Our mission is to provide sustainable and conveniont transportion option to our customers</p>
                </div>
                <div className="section3-card">
                    {DataBranding.map((b, i) => {
                        return (
                            <Card key={i} className="cardBranding">
                                <h1>{b.count}</h1>
                                <p>{b.description}</p>
                            </Card>
                        )
                    })}
                </div>
            </section>
            <section className="section4">
                <div className="titleSection">
                    <h1>Find the<strong> Best </strong>Deal for You</h1>
                </div>
                <Carousel showThumbs={false}>
                    {DataCarList.map((c, i) => {
                        return (
                            <div className="cardSlide" key={i}>
                                <div>
                                    <img src={c.image} className="imageTop" alt={c.type} />
                                </div>
                                <div className="description">
                                    <h1>{c.merk} <strong>{c.type}</strong></h1>
                                    <p>Dimention:</p>
                                    <ul>
                                        <li>Width: {c.description.dimention.width}</li>
                                        <li>Length: {c.description.dimention.length}</li>
                                        <li>Height: {c.description.dimention.height}</li>
                                        <li>WheelBase: {c.description.dimention.wheelbase}</li>
                                    </ul>
                                    <p> Motor and Performance</p>
                                    <ul>
                                        <li>Electric Power Motor : {c.description.motorAndPerformance.electricMotorPower}</li>
                                        <li>Torque: {c.description.motorAndPerformance.torque}</li>
                                        <li>Maximum Speed: {c.description.motorAndPerformance.maximumSpeed}</li>
                                        <li>Range: {c.description.motorAndPerformance.range}</li>
                                    </ul>
                                    <p>Battery: {c.description.battery}</p>
                                    <p>Charging:</p>
                                    <ul>
                                        <li>Standard Charging: {c.description.charging.standardCharging}</li>
                                        <li>Fast Charging: {c.description.charging.fastCharging}</li>
                                    </ul>
                                    <p>Interior and Features: </p>
                                    <p>{c.description.interiorAndFeatures}</p>
                                    <h1>Start From</h1>
                                    <h1><strong>{formatter(c.price)}</strong></h1>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </section>
            <section className="section5">
                <div className="titleSection">
                    <h1>Check<strong> Shipping Cost </strong></h1>
                </div>
                <div className="table">
                    <div className="from">
                        <strong>From</strong>
                        <Filter
                            label="Choose Province"
                            data={["Bali", "Bogor"]}
                        />
                        <Filter
                            label="Choose City"
                            data={["Bali", "Bogor"]}
                        />
                    </div>
                    <div className="to">
                        <strong>To</strong>
                        <Filter
                            label="Choose Province"
                            data={["Bali", "Bogor"]}
                        />
                        <Filter
                            label="Choose City"
                            data={["Bali", "Bogor"]}
                        />
                    </div>
                    <div>
                        <strong>Estimation</strong>
                        <div className="result">

                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}