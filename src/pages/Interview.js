import React from "react"

import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FeatureTop from "../components/FeatureTop";
import Pagination from "../components/Pagination";
import "../css/style.css";
import { animateColumn, animateFeature } from "../animation";

class Interview extends React.Component {
  constructor() {
    super();
    this.state = {
      showNavbar: false
    };
  }

  componentDidMount() {
    animateColumn();
    animateFeature();
    document.querySelector("#top").scrollIntoView();
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        showNavbar: !prevState.showNavbar
      };
    });
  };

  render() {
    const intro = "";
    return (
      <div>
        <Header
          handleClick={this.handleClick}
          showNavbar={this.state.showNavbar}
          isFeature={true}
        />
        <section className="feature">
          <FeatureTop
            imgURL="./images/interview_img_1.jpeg"
            tag="人物專訪"
            title="地方美術館的破舊與立新 謝素貞專訪"
            metaData="文｜嚴瀟瀟"
            intro={intro}
          />
          <p className="feature__intro feature__intro--mobile">{intro}</p>
          <div className="column__content">
            <p>
              下一個世代，臺灣需要什麼樣的美術館？根據日本著名建築師磯崎新於1993年所提出的「美術館三世代論」，前兩代美術館分別為以羅浮宮這樣的貴族私人收藏館，以及以紐約MoMA和龐畢度藝術中心為代表的現代「白盒子」美術館，而從第三代美術館開始，便開始跳脫傳統思維，將空間性納入美術館整體規畫之考量，「特定場域」觀念結合建築的思路開始讓多樣化美術館遍地開花，又以包括豊島美術館、十和田市現代美術館在內的幾家日本地方性美術館獨具特色。臺灣近年各地的美術館潮掀起了新的美術館想像，如何在地方文化史與當代公眾之間建立起有效而積極的連結，也成為了重大課題。美術館經驗豐富的謝素貞就此有何觀點？
            </p>
            <p>
              曾任職高雄市立美術館、臺北當代藝術館的謝素貞，轉戰中國大陸後，又於北京的中央美術學院美術館、今日美術館及銀川當代美術館擔任領銜角色。訪問中她首先回顧自己多年來主持兩岸美術館及各地參訪的經歷，指出大多數館博都依舊因循舊制，以傳統方式運作。若一地已有地方性美術館背負地方美術史建制、推動公共政策的使命，新建的美術館就需要避免雷同性，應轉而基於臺灣或地方的優勢與特色，以新的態度思考新的美術館形態，並將之置於國際層面上去思考。鑒於亞洲的發展受全世界所矚目，謝素貞認為新美術館的工作，當足以詮釋亞洲對美術館的態度，她一直關注的，是亞洲人能創造何種新美術館學論述、引領何種新思維？
            </p>
            <div className="feature__content-img">
              <img src="./images/interview_img_2.jpeg" alt="" />
              <p className="feature__img-info">
                圖說：「非常上癮—日常生活美學的再延伸」展覽現場。（銀川當代美術館提供）
              </p>
            </div>
            <p>
              因循國際思維結合地方特色的美術館定位之思路，謝素貞認為重點在於挖掘得以超越政治、超越地方局限的文化問題，讓美術館不會隨著世代和政府的輪替而逐漸落伍。在她看來，臺灣不缺乏雙年展式的美術館，而應當思考何種新型美術館，可作為地方與國際銜接的橋樑，需要在初期建設時就具有打開國際影響力的遠見，也發掘具有持續發展性的地方潛力。她也指出臺灣當前文化與政治之間的密切關係，可以是阻力，也可以成為助力，國際性的美術館更需要不受短時間政治影響的長期文化支持。
            </p>
            <p>
              謝素貞認為美學的傳遞與教育功能可訴諸社會各方面進行，而非美術館所獨有。她將建築與藝術的聯姻視為全世界的重要趨勢之一，涵納二者的美學結構拓展了傳統美術館的鑒賞價值。她也提出「類型美術館」的觀念，舉例當前世界各地已出現許多別具特色的建築、設計美術館，與地方的定位與未來發展密切相關，如今年（2019）剛剛開幕的深圳坪山建築美術館，兼具美學教育、觀光與地方發展前瞻性。地方公立美術館要真正做出影響力，也應當擺脫傳統定位，發展出對地方連結的新想像。她舉例如台臺灣前輩藝術家作品的展呈與典藏之所，可選址於藝術家生前故鄉，教學互動型的美術館更能激發本地人對其創作的認同，也建立起非本地觀眾與地方的深刻連結。
            </p>
            <div className="feature__content-img">
              <img src="./images/interview_img_1.jpeg" alt="" />
              <p className="feature__img-info">
                圖說：銀川當代藝術館外觀。（銀川當代美術館提供）
              </p>
            </div>
            <p>
              謝素貞任銀川當代美術館藝術總監的四年（2015-2018）裡，在沙漠中從無到有，主持建構起一座大型的地方美術館。她將其中最重要的經營，歸結為因循了「非主流文化」的思維與策略，定位於在中國位居「邊緣」的伊斯蘭文化與藝術，卻貼合了寧夏的回族地區特性，幾年來銀川當代美術館完成了與這一主題密切相關的不同展覽企畫，甚至其主辦的「銀川雙年展」也與「邊緣文化」接軌，成功地吸引了本沒有前往美術館看藝術品這一習慣的當地人，也在中國國內、國際平臺上打造了品牌。
            </p>
            <p>
              地方性美術館能否吸引本地及外地參觀者，是一大關鍵。2016年於銀川尚是春寒料峭之際開幕的一場國際動漫藝術展「非常上癮—日常生活美學的再延伸」，為此提供了成功經驗。謝素貞敏銳地抓住當地年輕人對動漫的普遍熱愛，讓他們自發地來到郊外的美術館看展覽，她認為這是建立於對地方文化的了解之上，需要對在地狀況持不帶偏見的掌握。銀川當代美術館也將公共教育緊密結合展覽而進行，譬如開館展以1000個布娃娃來與1000個當地家庭展開互動與對話，又如「老照片．尋根」徵集1990年代之前的銀川老照片，以及「光陰的秘密—開啟銀川的記憶木箱」──謝素貞曾在高雄推動過類似的「記憶箱子」計畫，她將之視為「快速軟化高速發展地區之人心」的展覽。謝素貞認為公共教育是美術館在地化的重要環節，透過美學來真正連結人與美術館。
            </p>
            <div className="feature__content-img">
              <img src="./images/interview_img_3.jpeg" alt="" />
              <p className="feature__img-info">
                圖說：謝素貞與日本藝術家大橋博（Hiroshi
                Ohashi）在「非常上癮—日常生活美學的再延伸」展覽現場。（銀川當代美術館提供）
              </p>
            </div>
            <p>
              謝素貞強調每一間美術館的獨特性，需要重視從各自定位出發的在地認知，其中的當務之急，乃是找到在地的獨特優勢與價值。她感慨大部分人對在地文化的支持與連結，基本上僅限於方言和味覺，而臺灣也確實缺乏真正的味覺博物館、農產品博物館這樣的專門館舍；同時，美術館所面對和處理的文化又顯然需要高度，在新美術館的建制上，大破大立可能會得罪人，但這卻是打破思維桎梏之必需。
            </p>
          </div>
          <Pagination
            previousTitle="本期專題｜從現有典藏品梳理，為新北市立美術館定位方向"
            previousURL="/current_feature"
            nextTitle="國際瞭望｜當代藝術即景，里昂當代藝術館案例分析"
            nextURL="/international"
          />
        </section>
        <Footer />
        <Navbar showNavbar={this.state.showNavbar} />
      </div>
    );
  }
}

export default Interview