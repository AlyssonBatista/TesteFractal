import React from "react";
import * as section3CSS from '../section3/section3.module.css';

export default function Section3(props){
  return (
    <>
    <section className={section3CSS.section3}>
      <div className={section3CSS.section3DIV1}>
        <h1>{props.h1}</h1>
        <p>{props.p}</p>
        <span>{props.span}</span>
        <div className={section3CSS.section3DIV2}>
          <a href="https://fractaltecnologia.com.br/" target="_blank">{props.a}</a>
        </div>
      </div>
      <div className={section3CSS.section3DIV3}>
        <img src={"/img3.png"} alt="imagem lupa" />
      </div>
    </section>
    </>
  )
}