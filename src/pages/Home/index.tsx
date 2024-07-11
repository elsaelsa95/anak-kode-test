import Card from "../../components/Card"
import { DataArticle, DataTop3 } from "../../data/data"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "./index.css"

export default function Home() {
    return (
        <div className="section">
            <div className="top">
                <div className="section1">
                    <div className="title">
                        <h1>Don't <strong>Damage</strong> Nature with Your Car</h1>
                        <p>Change Your Old Car to an Electric Car <strong>Now</strong></p>
                    </div>
                    <img src="../image/car.png" alt="logo" className="imageTitle" />
                </div>
                <div className="section2">
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
                </div>
                <div className="section3">
                    <div className="titleSection">
                        <h1>Top 3 <strong>Electric </strong>Car of the Month's</h1>
                    </div>
                    <Carousel>
                        {DataTop3.map((t, i) => {
                            return (
                                <div className="slide">
                                    <img src={t.image} className="imageArticle" alt={t.type} />
                                    <h3> {t.merk} <strong>{t.type}</strong></h3>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        </div >
    )
}