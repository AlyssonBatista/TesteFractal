import React from "react";
import * as footerCSS from '../footer/footer.module.css'

export default function Footer(props){ 
  return (
    <>
    <footer>
      <div className={footerCSS.footerDIV }>
        <div className={footerCSS.realizacao}>
          <p>{props.p1}</p>
          <a href="https://fractaltecnologia.com.br/"><img src={"/realizacao1.svg"} alt="" /></a>
          <a href="https://fractaltecnologia.com.br/"><img src={"/realizacao2.svg"} alt="" /></a>
          <a href="https://fractaltecnologia.com.br/"><img src={"/realizacao3.svg"} alt="" /></a>
        </div>
        <div className={footerCSS.apoio}>
          <p>{props.p2}</p>
          <a className={footerCSS.imgItaipu}href="https://fractaltecnologia.com.br/"><img src={"/apoio1.svg"} alt="" /></a>
          <a href="https://fractaltecnologia.com.br/"><img src={"/apoio2.svg"} alt="" /></a>
          <a  href="https://fractaltecnologia.com.br/"><img src={"/apoio3.svg"} alt="" /></a>
        </div>
      </div>
    </footer>
    </>
  )
}