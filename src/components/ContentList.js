import React from "react"
import { Link } from "react-router-dom"

function ContentList() {
  return (
    <ul className="content__list">
      <li className="content__item">
        <Link to="/column_kao_chien_hui" className="content__link">
          <div className="content__link-img" style={{ backgroundImage: "url('./images/column_kao_img_1.jpg')" }}></div>
          <span className="content__link-tag">觀點</span>
          <span className="content__link-text">高千惠專欄——城市畫像</span>
        </Link>
      </li>
      <li className="content__item">
        <Link to="/current_feature" className="content__link">
          <div className="content__link-img" style={{ backgroundImage: "url('./images/current_feature_img_1.jpg')", backgroundPosition: "top center" }}></div>
          <span className="content__link-tag">本期專題</span>
          <span className="content__link-text">從現有典藏品梳理，為新北市立美術館定位方向</span>
        </Link>
      </li>
      <li className="content__item">
        <Link to="/interview" className="content__link">
          <div className="content__link-img" style={{ backgroundImage: "url('./images/interview_img_1.jpeg')" }}></div>
          <span className="content__link-tag">人物專訪</span>
          <span className="content__link-text">地方美術館的破舊與立新  謝素貞專訪</span>
        </Link>
      </li>
      <li className="content__item">
        <Link to="/international" className="content__link">
          <div className="content__link-img" style={{ backgroundImage: "url('./images/international_img_1.jpg')" }}></div>
          <span className="content__link-tag">國際瞭望</span>
          <span className="content__link-text">當代藝術即景，里昂當代藝術館案例分析</span>
        </Link>
      </li>
      <li className="content__item">
        <Link to="/column_chien_hsiu_chih" className="content__link">
          <div className="content__link-img" style={{ backgroundImage: "url('./images/column_chien_img_1.jpg')" }}></div>
          <span className="content__link-tag">觀點</span>
          <span className="content__link-text">簡秀枝專欄——博物館所見</span>
        </Link>
      </li>
    </ul>
  )
}

export default ContentList