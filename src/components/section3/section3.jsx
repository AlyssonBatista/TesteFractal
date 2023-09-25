import React from "react";
import * as section3CSS from '../section3/section3.module.css';

export default function Section3(){
  return (
    <>
    <section className={section3CSS.section3}>
      <div className={section3CSS.section3DIV1}>
        <h1>Intercâmbio de aprendizados</h1>
        <p>Chegamos à Tríplice Fronteira para celebrar a expansão das olimpíadas do Instituto Vertere para os países de língua espanhola da América do Sul!</p>
        <span>Inscrições abertas até 24 de novembro</span>
        <div className={section3CSS.section3DIV2}>
          <a href="https://fractaltecnologia.com.br/" target="_blank">Acesse o regulamento</a>
        </div>
      </div>
      <div className={section3CSS.section3DIV3}>
        <img src={"/img3.png"} alt="imagem lupa" />
      </div>
    </section>
    </>
  )
}