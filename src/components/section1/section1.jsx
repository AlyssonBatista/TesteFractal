import React from "react";
import * as section1CSS from "../section1/section1.module.css"

export default function Section1(){
  return (
    <>
    <section className={section1CSS.section1Grid}>
      <div>
        <img src="/img1.svg" alt="" />
        <p>Uma olimpíada para alunos e professores da região das fronteiras entre Argentina, Brasil e Paraguai que querem colocar suas ideias sobre desenvolvimento sustentável em prática!</p>
        <h2>Cronograma</h2>
        <ul>
          <li>Inscrições: <span>até 26 de novembro</span></li>
          <li>Entrega dos projeteis: <span>25 e 26 de novembro</span></li>
          <li>Divulgação dos finalistas: <span>28 de novembro</span></li>
          <li>Apresentação final: <span>2 de dezembro</span></li>
        </ul>
      </div>
      <div className={section1CSS.section1Div}>
         <img className={section1CSS.sectionIMG2}src="/img2.png" alt="" />
      </div>
     
    </section>
    </>
  )
}