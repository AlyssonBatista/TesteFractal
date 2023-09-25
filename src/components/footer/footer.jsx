import React from "react";
import * as footerCSS from '../footer/footer.module.css'

export default function Footer(){
  return (
    <>
    <footer className={footerCSS.footer}>
      <div className={footerCSS.realizacao}>
        <p>Realização:</p>
        <img src={"/realizacao1.svg"} alt="" />
        <img src={"/realizacao2.svg"} alt="" />
        <img src={"/realizacao3.svg"} alt="" />
      </div>
      <div className={footerCSS.apoio}>
        <p>Apoio:</p>
        <img src={"/apoio1.svg"} alt="" />
        <img src={"/apoio2.svg"} alt="" />
        <img src={"/apoio3.svg"} alt="" />
      </div>
    </footer>
    </>
  )
}