import React from "react";
import * as section3CSS from '../section3/section3.module.css';

export default function Section3(props){
  return (
    <>
    <section className={section3CSS.section3}>
      
        {/* <div className={section3CSS.section3DIV1}> */}
          <div className={section3CSS.section3DIV1}>
            <div></div>
            <div>
              <h1>{props.h1}</h1>
              <p>{props.p}</p>
              <h2>{props.span}</h2>
              <div className={section3CSS.section3DIV2}>
                <a href="https://fractaltecnologia.com.br/" target="_blank">{props.a}</a>
              </div>
            </div>
          </div>
          <img src={"/img3.png"} alt="imagem lupa" />      
    </section>
    </>
  )
}