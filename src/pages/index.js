import * as React from "react"
import Head from "../components/head/head.jsx"
import Footer from '../components/footer/footer.jsx'
import Main from "../components/main/main.jsx"
import { Link } from 'gatsby'
import * as index from "../pages/index.module.css"
 

export default function Por() {
  return (
    <>
      <Head />
       <header className={index.headerGrid}>
        <p>Idiomas:</p>
        <Link className={index.ativo} to="/">PT</Link>
        <Link className={index.linkInativo} to="/index2">ES</Link>
      </header> 
      {/* <Main />
      <Footer /> */}
    </>
  )
}


