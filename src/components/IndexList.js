import React from "react"
import { Link } from "react-router-dom"

function IndexList() {
  return (
    <div className="indexList">
      <ul className="indexList__list">
        <li className="indexList__item">
          <Link to="/column_kao_chien_hui" className="indexList__link">觀點:<br/>高千惠專欄</Link>
        </li>
        <li className="indexList__item">
          <Link to="/current_feature" className="indexList__link">本期專題</Link>
        </li>
        <li className="indexList__item">
          <Link to="/interview" className="indexList__link">人物專訪</Link>
        </li>
        <li className="indexList__item">
          <Link to="/international" className="indexList__link">國際瞭望</Link>
        </li>
        <li className="indexList__item">
          <Link to="/column_chien_hsiu_chih" className="indexList__link">觀點:<br/>簡秀枝專欄</Link>
        </li>
      </ul>
    </div>
  )
}

export default IndexList