import React from "react";
import * as section1CSS from "../section1/section1.module.css"

export default function Section1(props){
  return (
    <>
    <section className={section1CSS.section1 }>
      <div>
        <img className={section1CSS.sectionIMG1}src="/img1.svg" alt="" />
        <img className={section1CSS.sectionIMG2} src="/img1mobile.svg" alt="" />
        <img className={section1CSS.imgMobile}src="/img2.png" alt="" />
        <p>{props.p}</p>
        <h2>{props.h2}</h2>
        <ul>
          <li>{props.li1} <span>{props.span1}</span></li>
          <li>{props.li2} <span>{props.span2}</span></li>
          <li>{props.li3} <span>{props.span3}</span></li>
          <li>{props.li4} <span>{props.span4}</span></li>
        </ul>
      </div>
      <div className={section1CSS.section1Div}>
         <img className={section1CSS.sectionIMG3}src="/img2.png" alt="" />
      </div>
     
    </section>
    </>
  )
}