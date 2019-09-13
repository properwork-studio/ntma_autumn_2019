import React from "react"

function ColumnAuthor(props) {
  return (
    <section className="author">
      <h2 className="author__name">{props.author}</h2>
      <p className="author__intro">{props.intro1}</p>
      <p className="author__intro">{props.intro2}</p>
      <p className="author__intro">{props.intro3}</p>
    </section>
  )
}

export default ColumnAuthor