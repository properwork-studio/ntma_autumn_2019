import React from "react"
import {Link} from 'react-router-dom'
import Title from "./Title"
import IndexList from "./IndexList"

function Jumbotron() {
  const backgroundImg = {
    backgroundImage: "url('./images/index-image-partial.jpg')"
  }
  return (
    <section className="jumbotron">
      <IndexList />
      <Link to="/contents" className="jumbotron__hover">
        <div className="jumbotron__image" style={backgroundImg}>
          <div className="jumbotron__hover-section">
            <p className="jumbotron__hover-text">藝術與文化場景常從地方性政經結構、日常風土中生長而出，卻也具有自身持續發展的動能，不斷與地方產生新的交互對話。</p>
          </div>
        </div>
        <Title />
      </Link>
    </section>
  );
}

export default Jumbotron