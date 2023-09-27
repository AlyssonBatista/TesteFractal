import * as React from "react";
import Head from "../components/head/head.jsx";
import Footer from '../components/footer/footer.jsx';
import Section1 from "../components/section1/section1";
import Section2 from "../components/section2/section2";
import Section3 from "../components/section3/section3";
import Section4 from "../components/section4/section4";
import * as index from "../pages/index.module.css";
import { Link } from 'gatsby';
import { graphql } from "gatsby";

export default function Por({ data }) {
  const { descricao, titulo, li1, span1, li2, span2, li3, span3, li4, span4, titulo2, descricao2, titulo3, descricao3, botaoInscricao, regulamento, titulo4, botaoInscricao2, footerRea, footerApo } = data.site.siteMetadata.portugues
  return (
    <>
      <Head />
      <header className={index.headerGrid}>
        <p>Idiomas:</p>
        <Link className={index.ativo} to="/">PT</Link>
        <Link className={index.inativo} to="/index2">ES</Link>
      </header>
      <Section1 p={descricao} h2={titulo} li1={li1} span1={span1} li2={li2} span2={span2} li3={li3} span3={span3} li4={li4} span4={span4} />
      <Section2 h1={titulo2} p={descricao2} />
      <Section3 h1={titulo3} p={descricao3} span={botaoInscricao} a={regulamento} />
      <Section4 h1={titulo4} a={botaoInscricao2} />
      {/* <Footer p1={footerRea} p2={footerApo} /> */}
    </>
  )
}

export const query = graphql` 
query siteInfo{
  site {
    siteMetadata {
      espanhol {
        descricao
        titulo
        li1
        span1
        li2
        span2
        li3
        span3
        li4
        span4
        titulo2
        descricao2
        titulo3
        descricao3
        botaoInscricao
        regulamento
        titulo4
        botaoInscricao2
        footerRea
        footerApo
      }
      portugues {
        descricao
        titulo
        li1
        span1
        li2
        span2
        li3
        span3
        li4
        span4
        titulo2
        descricao2
        titulo3
        descricao3
        botaoInscricao
        regulamento
        titulo4
        botaoInscricao2
        footerRea
        footerApo
      }
    }
  }
}
`