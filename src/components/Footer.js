import React from "react"

function Footer() {
  return(
    <footer className="footer">
      <h2 className="footer__title">新北美誌 2019 vol.004</h2>
      <div className="footer__content">
        <ul className="footer__list">
          <li className="footer__item">主辦單位：新北市政府</li>
          <li className="footer__item">發行人：侯友宜</li>
          <li className="footer__item">總編輯：蔡佳芬</li>
          <li className="footer__item">執行編輯：闕巧婷</li>
          <li className="footer__item">企劃編輯：于玟、翁玉琴、劉柏村</li>
        </ul>
        <ul className="footer__list">
          <li className="footer__item">出版機關：新北市政府文化局</li>
          <li className="footer__item">地址：新北市板橋區中山路一段161號28樓</li>
          <li className="footer__item">電話：02-2960-3456</li>
          <li className="footer__item">承製：典藏藝術家庭股份有限公司 2019年9月出版</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer