import React, { useState } from 'react';
import style from "./footer.module.scss";
import { NAV_ROUTE_LINK, FOOTER_DATA } from "../../utils/data";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputComponent from "../Input";
import ButtonComponent from '../Button'

const Footer = () => {
  const { t } = useTranslation();
  const NAV_ROUTE_LINKS = NAV_ROUTE_LINK();
  const [data, setData] = useState({
    email: ""
  })

  let name, value

  const updateData = (e) => {
    name = e.target.name
    value = e.target.value
    data[name] = value
    setData(data)
  }

  const handleSubscriptionFormSubmit = async (e) => {
    // e.preventDefault()
    // data["entertained"] = false
    // data["origin"] = window.location.pathname
    // const collectionRef = collection(db, "subscription")
    // const response = await addDoc(collectionRef, data)
    // if (response != null) {
    //   // Do something here with response
    //   console.log(response)
    //   window.location.reload()
    // }
  }

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Link to={'/'}><img
          src="/assets/images/eazyhomz-logo.png"
        />
        </Link>
        <div className={style.heading11}>
        <h1>{FOOTER_DATA.HEADING}</h1>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.about}>
          <h2>{t('FOOTER_DATA.ABOUT')}</h2>
          <div className={style.itemContainer}>
            {NAV_ROUTE_LINKS.map((val) => (
              <Link to={val.to}> <div className={style.aboutItem}><h2>{val.text}</h2></div></Link>
            ))}
          </div>
        </div>
        <div className={style.address}>
          <h2>{t('FOOTER_DATA.ADDRESS')}</h2>
          <div className={style.addressItem}>
            <div className={style.add}>
              <MailOutlineIcon fontSize="large" />
              <h3>{FOOTER_DATA.ADDRESS_DATA.mail}</h3>
            </div>
            <div className={style.add}>
              <CallOutlinedIcon fontSize="large" />
              <div className={style.mobile}>
                <h3>{FOOTER_DATA.ADDRESS_DATA.phone1}</h3>
                {/* <h3>{FOOTER_DATA.ADDRESS_DATA.phone2}</h3> */}
              </div>
            </div>
            <div className={style.add}>
              <LocationOnIcon fontSize="large" />
              <div className={style.location}>
                <h3>{FOOTER_DATA.ADDRESS_DATA.address1}</h3>
                <h3>{FOOTER_DATA.ADDRESS_DATA.address2}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={style.signUp}>
          <h2>{t('FOOTER_DATA.SIGNUP')}</h2>
          <div>
            <p>{t('FOOTER_DATA.SUBSCRIBE')} <span>*</span></p>
            {/* TODO Email regex validation to be done */}
            <InputComponent name="email" size={"small"} fullWidth={true} required={true} placeholder={"Enter Email Address"} onChange={updateData}/>
          </div>
          <ButtonComponent className={style.button} text={t('FOOTER_DATA.BUTTON_TEXT')}  onClick={handleSubscriptionFormSubmit}/>
          <div className={style.followUs}>
            <h2>{t('FOOTER_DATA.FOLLOW')}</h2>
            <div>
              <span></span>
              <Link to={"https://www.instagram.com/eazyhomz/?igsh=MWF0MzdnaGYwNGQ2bA%3D%3D"} target="blank"><img src="/assets/images/insta.svg" alt="insta" /></Link>
              &nbsp;&nbsp;
              <Link to={"https://wa.me/971563163635"} target="blank"><img src="/assets/images/whatsapp.svg" alt="whatsapp" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
