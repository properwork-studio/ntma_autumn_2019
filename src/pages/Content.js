import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ContentList from "../components/ContentList"
import "../css/style.css"

class Content extends React.Component {
  constructor() {
    super()
    this.state = {
      showNavbar: false
    }
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        showNavbar: !prevState.showNavbar
      }
    })
  }

  render() {
    return (
      <main>
        <Header handleClick={this.handleClick} showNavbar={this.state.showNavbar} />
        <section className="content">
          <div className="content__title">
            <div className="content__volume">
              <h5 className="content__year">2019</h5>
              <h4 className="content__season">秋</h4>
            </div>
            <h1 className="content__title-text">地方美術史的建構 X 新時代的地方美術館</h1>
            <div className="content__intro">
              <p>藝術與文化場景常從地方性政經結構、日常風土中生長而出，卻也具有自身持續發展的動能，不斷與地方產生新的交互對話。</p>
              <p>本輯線上「新北美誌」試圖初步回應這樣一些問題：在新北市立美術館建制業已啟動的當下，若是回望，新北市已擁有怎樣的藝文記憶與文化財？若是前瞻，新世代、新形態的地方性美術館有哪些可能，又可從國際上獲得哪些可借鑒之例？</p>
              <p>未來美術館及整個新北藝文場景的新想像，可能會從哪些地方生發出來？在聚焦於藝術的主軸之外，讀者也將隨高千惠專欄，踏上一段由文學與人文地景所摹畫出的個性化都會探訪之途。</p>
            </div>
            
          </div>
          <ContentList />
        </section>
        <Footer />
        <Navbar showNavbar={this.state.showNavbar} />
      </main>
    )
  }
}

export default Content