import React from "react";
import * as section4CSS from '../section4/section4.module.css';

export default function Section4(props){
  return (
    <>
    <section className={section4CSS.section4}>
      <div className={section4CSS.section4DIV1}>
        <h1>{props.h1}</h1>
        <div className={section4CSS.section4DIV2}>
          <a href="https://fractaltecnologia.com.br/" target="_blank">{props.a}</a>
        </div>
      </div>
    </section>
    </>
  )
}