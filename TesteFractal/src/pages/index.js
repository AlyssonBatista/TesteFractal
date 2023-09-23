import * as React from "react"
import Footer from '../components/footer/footer.jsx'
import { Link } from 'gatsby'
import * as index from "../pages/index.module.css"


export default function Por() {
  return (
    <>
      <header className={index.headerGrid}>
        <p>Idiomas:</p>
        <Link className={index.ativo} to="/">PT</Link>
        <Link className={index.linkInativo}to="/index2">ES</Link>
      </header>
      <Footer/>
    </>
  )
}
