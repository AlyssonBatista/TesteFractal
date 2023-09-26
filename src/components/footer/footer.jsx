import React from "react";
import * as footerCSS from '../footer/footer.module.css'

export default function Footer(props){ 
  return (
    <>
    <footer className={footerCSS.footer}>
      <div className={footerCSS.realizacao}>
        <p>{props.p1}</p>
        <img src={"/realizacao1.svg"} alt="" />
        <img src={"/realizacao2.svg"} alt="" />
        <img src={"/realizacao3.svg"} alt="" />
      </div>
      <div className={footerCSS.apoio}>
        <p>{props.p2}</p>
        <img src={"/apoio1.svg"} alt="" />
        <img src={"/apoio2.svg"} alt="" />
        <img src={"/apoio3.svg"} alt="" />
      </div>
    </footer>
    </>
  )
}