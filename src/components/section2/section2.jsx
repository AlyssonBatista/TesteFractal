import React from "react";
import * as section2CSS from '../section2/section2.module.css';

export default function Section2(props){
  return(
    <>
      <div className={section2CSS.section2GRID}>
        <div className={section2CSS.section2DIV}>
          <h1>{props.h1}</h1>
          <p>{props.p}</p>
        </div>
      </div>
    </>
  )
}