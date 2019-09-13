import React from "react"

function PictureInfo(props) {
  return (
    <div className="image-info">
      圖說：{props.info}
    </div>
  )
}

export default PictureInfo