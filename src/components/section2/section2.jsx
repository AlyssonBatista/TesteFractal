import React from "react";
import * as section2CSS from '../section2/section2.module.css';

export default function Section2(){
  return(
    <>
      <div className={section2CSS.section2GRID}>
        <div className={section2CSS.section2DIV}>
          <h1>Iniciativa do Instituto Vertere</h1>
          <p>Somos uma olimpíada afiliada da Sapientia, a Olimpíada do Futuro. A Sapientia é uma iniciativa realizada pelo Instituto Vertere e tem como base a Agenda 2030 da Organização das Nações Unidas – ONU. A competição aborda as disciplinas estudadas em sala de aula a partir de uma perspectiva conectada às questões do nosso tempo e enriquecida pela visão de pensadores do século 21.</p>
        </div>
      </div>
    </>
  )
}