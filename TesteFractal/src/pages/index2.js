import * as React from "react"
import Footer from '../components/footer/footer.jsx'
import { Link } from 'gatsby'
import * as index from "../pages/index2.module.css"


export default function Esp() {
  return (
    <>
      <header className={index.headerGrid}>
        <p>Idiomas:</p>
        <Link className={index.linkInativo}to="/">PT</Link>
        <Link className={index.ativo} to="/index2">ES</Link>
      </header>
      <Footer />
    </>
  )
}
