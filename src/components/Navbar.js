import React from "react"
import { Link } from "react-router-dom"

function Navbar(props) {
  return (
    <nav className={props.showNavbar ? "navbar showNavbar" : "navbar"}>
      <div className="navbar__bg"></div>
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/#/" className="navbar__link">返回本期首頁</Link>
        </li>
        <li className="navbar__item">
          <Link to="/#/column_kao_chien_hui" className="navbar__link">觀點 高千惠專欄</Link>
        </li>
        <li className="navbar__item">
          <Link to="/#/current_feature" className="navbar__link">本期專題</Link>
        </li>
        <li className="navbar__item">
          <Link to="/#/interview" className="navbar__link">人物專訪</Link>
        </li>
        <li className="navbar__item">
          <Link to="/#/international" className="navbar__link">國際瞭望</Link>
        </li>
        <li className="navbar__item">
          <Link to="/#/column_chien_hsiu_chih" className="navbar__link">觀點 簡秀枝專欄</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar