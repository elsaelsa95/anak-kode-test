"use client"

import style from "./index.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Button from "@/components/Button";
import { DataArticleEnglish, DataArticleIndonesian, DataBrandingEnglish, DataBrandingIndonesian, DataCarList } from "@/data/data";
import Card from "@/components/Card";
import RootLayout from "./layout";
import Form from "@/components/Form";
import { useEffect, useState } from "react";
import { formatter } from "@/helper/formatCurrency";
import { useTranslation } from "react-i18next";

export interface IProvince {
  province_id: string;
  province: string;
}

export default function Home() {
  const [listProvince, setListProvince] = useState<IProvince[]>([]);
  useEffect(() => {
    const result = fetch("/api/provinces");

    result
      .then((res) => res.json())
      .then((data) => {
        setListProvince(data.data.rajaongkir.results);
      });
  }, []);

  const { t } = useTranslation();

  let DataArticle = DataArticleEnglish;
  let DataBranding = DataBrandingEnglish;

  if (typeof window !== 'undefined') {
    if (localStorage.getItem("selectedLanguage") == "ind") {
      DataArticle = DataArticleIndonesian
      DataBranding = DataBrandingIndonesian
    }
  }

  return (
    <RootLayout>
      <div className={style.section}>
        <section className={style.section1}>
          <div className={style.title}>
            <h1>
              {t("dont")}
              <strong className={style.strong}>{t("damage")}</strong>
              {t("title")}
            </h1>
            <p>{t("subtitle")}
              <strong className={style.strong}>{t("now")}</strong>
            </p>
            <small>{t("available")}</small>
            <br />
            <Button>{t("contact")}</Button>
          </div>
          <img src={"/image/car.png"} alt="logo" className={style.imageTitle} />
        </section>
        <section className={style.section2}>
          <div className={style.titleSection}>
            <h1> <strong className={style.strong}>{t("why")} </strong></h1>
          </div>
          <div className={style.article}>
            {DataArticle.map((a, i) => {
              return (
                <Card key={i}>
                  <h3>{a.title}</h3>
                  <p> {a.description}</p>
                  <img src={a.image} className={style.imageArticle} alt={a.title} />
                </Card>
              )
            })}
          </div>
        </section>
        <section className={style.section3}>
          <div className={style.title}>
            <h1><strong className={style.strong}>{t("whyUs")}</strong></h1>
            <p>{t("because")}</p>
          </div>
          <div className={style.section3Card}>
            {DataBranding.map((b, i) => {
              return (
                <Card key={i} className={style.cardBranding}>
                  <h1>{b.count}</h1>
                  <p>{b.description}</p>
                </Card>
              )
            })}
          </div>
        </section>
        <section className={style.section4}>
          <div className={style.titleSection}>
            <h1>
              {t("findThe")}
              <strong className={style.strong}> {t("bestDeal")} </strong>
              {t("forYou")}
            </h1>
          </div>
          <Carousel showThumbs={false}>
            {DataCarList.map((c, i) => {
              return (
                <div className={style.cardSlide} key={i}>
                  <div>
                    <img src={c.image} className={style.imageCar} alt={c.type} />
                  </div>
                  <div className={style.description}>
                    <h1>{c.merk} <strong className={style.strong}>{c.type}</strong></h1>
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
                    <h1><strong className={style.strong}>{formatter(c.price)}</strong></h1>
                  </div>
                </div>
              )
            })}
          </Carousel>
        </section>
        <section className={style.section5}>
          <div className={style.titleSection}>
            <h1>{t("check")}<strong className={style.strong}> {t("shippingCost")} </strong></h1>
          </div>
          <Form
            listProvince={listProvince}
          />
        </section>
      </div>
    </RootLayout>
  )
}
