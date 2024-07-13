import style from "./index.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Button from "@/components/Button";
import { DataArticle, DataBranding, DataCarList } from "@/data/data";
import Card from "@/components/Card";
import Form from "@/components/Form";
import { dataCost } from "@/data/rajaongkir";
import { useEffect, useState } from "react";
import RootLayout from "./layout";

export interface IProvince {
  province_id: string;
  province: string;
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

export default function Home({}: any) {
  const formatter = (number: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);

  const cost = dataCost.rajaongkir.results.map((c: any) => {
    return c.costs;
  });

  const [listProvince, setListProvince] = useState<IProvince[]>([]);
  useEffect(() => {
    const request = fetch("/api/provinces");

    request
      .then((res) => res.json())
      .then((data) => {
        setListProvince(data.data.rajaongkir.results);
      });
  }, []);

  // const [cost, setCost] = useState<ICost[]>([]);

  // useEffect(() => {
  //   const request = fetch("/api/cost");
  //   request
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });

  return (
    <RootLayout>
      <div className={style.section}>
        <section className={style.section1}>
          <div className={style.title}>
            <h1>
              Dont <strong className={style.strong}>Damage</strong> Nature with
              Your Car
            </h1>
            <p>
              Change Your Old Car to an Electric Car{" "}
              <strong className={style.strong}>Now</strong>
            </p>
            <small>We Have More than 1.000 Electric Car Available</small>
            <br />
            <Button>Contact Us</Button>
          </div>
          <img src={"/image/car.png"} alt="logo" className={style.imageTitle} />
        </section>
        <section className={style.section2}>
          <div className={style.titleSection}>
            <h1>
              Why <strong className={style.strong}>Electric </strong> Car ?
            </h1>
          </div>
          <div className={style.article}>
            {DataArticle.map((a, i) => {
              return (
                <Card key={i}>
                  <h3>{a.title}</h3>
                  <p> {a.description}</p>
                  <img
                    src={a.image}
                    className={style.imageArticle}
                    alt={a.title}
                  />
                </Card>
              );
            })}
          </div>
        </section>
        <section className={style.section3}>
          <div className={style.title}>
            <h1>
              {" "}
              <strong className={style.strong}>Why Us ?</strong>
            </h1>
            <p>
              Our mission is to provide sustainable and conveniont transportion
              option to our customers
            </p>
          </div>
          <div className={style.section3Card}>
            {DataBranding.map((b, i) => {
              return (
                <Card key={i} className={style.cardBranding}>
                  <h1>{b.count}</h1>
                  <p>{b.description}</p>
                </Card>
              );
            })}
          </div>
        </section>
        <section className={style.section4}>
          <div className={style.titleSection}>
            <h1>
              Find the<strong className={style.strong}> Best </strong>Deal for
              You
            </h1>
          </div>
          <Carousel showThumbs={false}>
            {DataCarList.map((c, i) => {
              return (
                <div className={style.cardSlide} key={i}>
                  <div>
                    <img
                      src={c.image}
                      className={style.imageCar}
                      alt={c.type}
                    />
                  </div>
                  <div className={style.description}>
                    <h1>
                      {c.merk}{" "}
                      <strong className={style.strong}>{c.type}</strong>
                    </h1>
                    <p>Dimention:</p>
                    <ul>
                      <li>Width: {c.description.dimention.width}</li>
                      <li>Length: {c.description.dimention.length}</li>
                      <li>Height: {c.description.dimention.height}</li>
                      <li>WheelBase: {c.description.dimention.wheelbase}</li>
                    </ul>
                    <p> Motor and Performance</p>
                    <ul>
                      <li>
                        Electric Power Motor :{" "}
                        {c.description.motorAndPerformance.electricMotorPower}
                      </li>
                      <li>
                        Torque: {c.description.motorAndPerformance.torque}
                      </li>
                      <li>
                        Maximum Speed:{" "}
                        {c.description.motorAndPerformance.maximumSpeed}
                      </li>
                      <li>Range: {c.description.motorAndPerformance.range}</li>
                    </ul>
                    <p>Battery: {c.description.battery}</p>
                    <p>Charging:</p>
                    <ul>
                      <li>
                        Standard Charging:{" "}
                        {c.description.charging.standardCharging}
                      </li>
                      <li>
                        Fast Charging: {c.description.charging.fastCharging}
                      </li>
                    </ul>
                    <p>Interior and Features: </p>
                    <p>{c.description.interiorAndFeatures}</p>
                    <h1>Start From</h1>
                    <h1>
                      <strong className={style.strong}>
                        {formatter(c.price)}
                      </strong>
                    </h1>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </section>
        <section className={style.section5}>
          <div className={style.titleSection}>
            <h1>
              Check<strong className={style.strong}> Shipping Cost </strong>
            </h1>
          </div>
          <Form listProvince={listProvince} estimationCost={cost} />
        </section>
      </div>
    </RootLayout>
  );
}
