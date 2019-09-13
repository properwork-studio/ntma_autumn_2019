import React from "react"
import { Link } from "react-router-dom"

function FeatureTop(props) {
  const backgroundImage = {
    backgroundImage: `url(${props.imgURL})`
  }
  return (
    <div className="feature__top">
      <div className="feature__image" style={backgroundImage}></div>
      <div className="feature__title">
        <div className="feature__volume">
          <h5 className="feature__year column__year">2019</h5>
          <h4 className="feature__season column__season">秋</h4>
          <h4 className="feature__tag column__tag">{props.tag}</h4>
        </div>
        <div className="feature__meta">
          <h1 className="feature__title-text column__title-text">{props.title}</h1>
          <h6 className="feature__meta-data column__meta-data">{props.metaData}</h6>
          <p className="feature__intro">{props.intro}</p>
          <Link to="/contents" className="feature__btn column__btn">Back to Index</Link>
        </div>
        <span className="scroll">Scroll</span>
      </div>
    </div>
  )
}

export default FeatureTop