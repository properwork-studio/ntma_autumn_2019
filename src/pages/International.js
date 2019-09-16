import React from "react"

import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FeatureTop from "../components/FeatureTop";
import Pagination from "../components/Pagination";
import "../css/style.css";
import { animateColumn, animateFeature } from "../animation";

class International extends React.Component {
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
    const intro =
      "提到法國的藝文場景，大多數人首先想到的一定是巴黎；然而法國第三大城里昂，也早已累積了足以代表地方文化與國際高度的藝文機構系統，其中既有文化生態與結構的基礎支持，也離不開機構自身及其重要人物的常年推動。以建館三十餘年的里昂當代藝術館為例，他們是如何成為今日里昂、乃至法國的重要文化地標，未來又將如何發展？";
    return (
      <div>
        <Header
          handleClick={this.handleClick}
          showNavbar={this.state.showNavbar}
          isFeature={true}
        />
        <section className="feature">
          <FeatureTop
            imgURL="./images/international_img_4.png"
            tag="國際瞭望"
            title="當代藝術即景，里昂當代藝術館案例分析"
            metaData="文｜余小蕙"
            intro={intro}
          />
          <p className="feature__intro feature__intro--mobile">{intro}</p>
          <div className="column__content">
            <p>
              藝術家暨浙江烏鎮木心美術館首任館長陳丹青最近接受《打邊爐ARTDBL》採訪時說道：「沒有機構的想像力，只有人的想像力。」用這句話來說明法國里昂當代藝術館（MAC
              Lyon，簡稱里昂當代館）如何從無到有，成為今天歐洲藝術版圖的一個亮點，再貼切不過。甫於去年（2018）4月退休的提耶利．哈斯帕耶（Thierry
              Raspail），從1984年創辦里昂當代館並一直擔任館長達34年，同時於1991年聯合成立里昂雙年展並長期擔任藝術總監，他以前瞻性的視野，「想像」和打造出今天里昂及所屬奧弗涅-羅訥-阿爾卑斯大區（Auvergne-Rhône-Alpes）開放多元的藝術景觀；而里昂當代館過去30多年來所舉行的展覽和收藏的作品，不論質和量，在法國、甚至整個歐洲都佔有一席之地。
            </p>
            <p>
              藝術史專業出身的哈斯帕耶於1983年獲里昂市政府聘為當代藝術典藏研究人員，負責為以歷史性古典主義和學院派藝術收藏為主的里昂美術館（Musée
              des
              Beaux-Arts）規劃當代藝術的展覽和收藏。里昂當代館於1984年正式成立，成為一個獨立的機構；在此之前，里昂並沒有一個專致當代藝術的機構，也沒有任何當代藝術的收藏。儘管如此，里昂當代館最初十年屈身美術館，使用其內部的一個展廳，1995年才移至由倫佐．皮亞諾（Renzo
              Piano）所設計建造的這座外觀樸實無華，兼具多功能性和靈活性的建築，展廳面積從6、7百平方公尺增加為3千平方公尺。
            </p>
            <div className="feature__content-img">
              <img src="./images/international_img_1.jpg" alt="" />
              <p className="feature__img-info">
                圖說：提耶利．哈斯帕耶（Thierry
                Raspail）於「開放海洋」展，2015年 © Blaise
                Adilon，圖片提供：法國里昂當代藝術館
              </p>
            </div>
            <h3 className="column__content-title">
              典藏展覽，保存藝術家的某個重要時刻
            </h3>
            <p>
              里昂當代館從成立之初即確立其清楚鮮明的定位，亦即哈斯帕耶稱之為「典藏展覽」（collection
              d’expositions）的概念，即美術館扮演「製作人」（centre de
              production）的角色，邀請藝術家到里昂當代館構思展覽，協助製作新作品，並於展覽後收藏──甚至整個展覽！最近一次典藏整個展覽的例子是2015年住在紐約的法國藝術家安托萬．卡塔拉（Antoine
              Catala）佔地5百平方公尺的數位藝術展。
            </p>
            <p>
              將藝術家創作生涯的某個重要「時刻」，完全、如實地保存下來，不僅是里昂當代館的典藏策略，也引導著其展覽規劃，通過每年十多個展覽，逐步建立起其重要而豐富的收藏（目前已超過1600件）：瑪琳納．阿布拉莫維奇
              （Marina Abramovic & Ulay）、羅伯特．莫里斯（Robert
              Morris）、伊利亞．卡巴科夫（Ilya Kabakov）、楊．法布爾（Jan
              Fabre）、丹尼爾．布罕（Daniel Buren）、詹姆斯．特瑞爾（James
              Turrell）等重要藝術家，其中不乏規模龐大的裝置，例如蔡國強2002年「隨意的歷史」中展出的雲霄飛車（軌道長達67公尺！）；聲音藝術先鋒人物如泰瑞．萊利（Terry
              Riley）、拉蒙楊（La Monte
              Young）的聲音裝置；或是藝術史上樹立新典範（paradigm）的作品，例如，1995年邀請錄像藝術之父白南準（Nam
              June
              Paik）重新製作1963年於德國烏伯塔爾（Wuppertal）舉行的具傳奇色彩的展覽「電子音樂—電子電視
              」14件作品中的其中9件；該展是藝術史上第一位藝術家以電視機為媒介進行創作；或是阿布拉莫維奇和烏雷（Abramovic
              &
              Ulay）在分道揚鑣之前合作創作的所有作品。另一條主軸則是為具指標性的藝術家舉辦回顧展，並經常走在其他法國美術館之先，例如長居美國的法國藝術家露意絲．布爾喬亞（Louise
              Bourgeois）在法國的第一個回顧展即是在里昂當代館（1990年）；其他重要回顧展包括安迪．沃荷（Andy
              Warhol）、凱斯．哈林（Keith Haring）、班（Ben）、小野洋子（Yoko
              Ono）、黃永砅等。
            </p>
            <p>
              除了展覽和典藏，里昂當代館也致力於一般公立美術館的教育和推廣的使命，除了在展覽期間針對不同年齡層的觀眾規劃相關的導覽和工作坊等活動，常年與學校、企業、團體和協會合作舉行藝術推廣活動，並主動走出館外，把作品帶到學校、醫院和監獄等地方展出。
            </p>
            <div className="feature__content-img">
              <img src="./images/international_img_2.jpg" alt="" />
              <p className="feature__img-info">
                圖說：黃永砅個展「廈門／廈門（Amoy–Xiamen）」現場 © Blaise
                Adilon © Adagp Paris 2013，圖片提供：法國里昂當代藝術館
              </p>
            </div>
            <h3 className="column__content-title">保存里昂雙年展的記憶</h3>
            <p>
              里昂當代館的另一個重要里程碑是1991年成立里昂雙年展。今年即將推出第15屆，里昂雙年展不僅被視為1990年代以來全球雙年展浪潮的先驅，且至今是法國唯一的當代藝術雙年展。隨著每兩年一次的舉行，以及規模的不斷擴展，里昂當代館扮演了保存里昂雙年展記憶的角色，於每屆雙年展中，協助製作新作品，並典藏其中具代表性的作品。里昂當代館成立於全球化前夕，即早便頗有見地和謀略地將注意力向昔日被西方所忽略的地理區域，關注對西方現代性和藝術史提出質疑和挑戰的亞洲藝術，並通過里昂雙年展的舉辦，不斷引入後殖民、全球化、不同現代性等與這個時代切身相關的重要課題。
            </p>
            <p>
              不論里昂當代館或里昂雙年展，都隸屬里昂市政府，因此也擺脫不了複雜的政治關係。哈斯帕耶雖為文化人，似乎也十分擅長與政治人物打交道，以至馳騁里昂藝壇30多年而屹立不搖（放眼國際藝壇，這個情況實屬罕見）。兩年前，哈斯帕耶與筆者一次訪談中曾表示，「事實上，歷任里昂市長都屬中庸派，都支持里昂雙年展，除了雙年展帶來的國際形象能消弭里昂面對巴黎的自卑情結之外；他們也深信，里昂要在歐洲要擁有能見度，除了發展經濟，也要打文化牌。」除了提升國際能見度，過去十多年來，里昂當代館也積極深入民間、促成地方連結。在雙年展的框架中成立的「Veduta」實驗平台，將雙年展的範疇擴散到不同城區，混合了都市更新、藝術駐留計劃、展覽、教育推廣等不同功能和使命。
            </p>
            <p>
              哈斯帕耶於去年4月卸任後，里昂當代館邁入了一個新紀元，採雙首制，與美術館結盟成為里昂市美術館中心（Pôle
              musées d'art Ville de
              Lyon）。面對國際競爭的日趨激烈，財力龐大的私人基金會的崛起，里昂市政府決定效仿倫敦泰德美術館的作法──在「泰德」的品牌旗幟下聚集了4座不同定位的美術館──認為公立美術館需要整合力量，里昂美術館（MBA）和當代館（MAC）在各自保有其身分性和獨立自主下，以策略性的聯盟和合作，促進兩座美術館國際能見度的提升。至於其成效，尚需時間來證明。
            </p>
            <div className="feature__content-img">
              <img src="./images/international_img_3.jpg" alt="" />
              <p className="feature__img-info">
                圖說：藝術家 Angie Seah於「開放海洋」展現場，2015年 © Blaise
                Adilon，圖片提供：法國里昂當代藝術
              </p>
            </div>
          </div>
          <Pagination
            previousTitle="人物專訪｜地方美術館的破舊與立新 謝素貞專訪"
            previousURL="/interview"
            nextTitle="觀點｜簡秀枝專欄——博物館所見"
            nextURL="/column_chien_hsiu_chih"
          />
        </section>
        <Footer />
        <Navbar showNavbar={this.state.showNavbar} />
      </div>
    );
  }
}

export default International