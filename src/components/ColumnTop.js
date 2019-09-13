import React from "react"
import { Link } from "react-router-dom"

function ColumnTop(props) {
  const backgroundImage = {
    backgroundImage: `url(${props.imgURL})`
  }
  return (
    <div className="column__top">
      <div className="column__feature" style={backgroundImage}></div>
      <div className="column__title">
        <div className="column__volume">
          <h5 className="column__year">2019</h5>
          <h4 className="column__season">秋</h4>
          <h4 className="column__tag">觀點</h4>
        </div>
        <div className="column__meta">
          <h1 className="column__title-text">{props.title}</h1>
          <h6 className="column__meta-data">{props.metaData}</h6>
          <Link to="/contents" className="column__btn">Back to Index</Link>
        </div>
      </div>
      <hr className="column__bar"></hr>
    </div>
  )
}

export default ColumnTop