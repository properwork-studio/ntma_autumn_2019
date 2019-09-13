import React from "react"

function Sublink() {
  return (
    <section className="sublink">
      <h4 className="sublink__title">閱讀其他期數</h4>
      <div className="sublink__content">
        <a className="sublink__card">
          <div className="sublink__volume">
            <h5 className="sublink__year">2019</h5>
            <h4 className="sublink__season">冬</h4>
          </div>
          <h3 className="sublink__text">COMING SOON</h3>
        </a>
        <a className="sublink__card">
          <div className="sublink__volume">
            <h5 className="sublink__year">2020</h5>
            <h4 className="sublink__season">春</h4>
          </div>
          <h3 className="sublink__text">COMING SOON</h3>
        </a>
      </div>
      <a href="https://www.ntmoa.tw/onlinemag" className="sublink__btn">更多新北美誌</a>
    </section>
  )
}

export default Sublink