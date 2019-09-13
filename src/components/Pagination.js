import React from "react"
import { Link } from "react-router-dom"

function Pagination(props) {
  return (
    <section className="pagination">
      <div className="pagination__content">
        {props.previousTitle !== "" && props.previousURL !== "" ?
          <Link to={props.previousURL} className="pagination__previous">
            <h2 className="pagination__title">
              <span className="pagination__text">上一篇</span>
              {props.previousTitle}
            </h2>
          </Link> : <div className="pagination__previous no-data"></div>
        }
        {props.previousTitle !== "" && props.nextTitle !== "" ? 
          <span className="pagination__bar"></span> :
          <span className="pagination__bar single-data"></span>
        }
        {props.nextTitle !== "" && props.nextURL !== "" ?
          <Link to={props.nextURL} className="pagination__next">
            <h2 className="pagination__title">
              <span className="pagination__text">下一篇</span>
              {props.nextTitle}
            </h2>
          </Link> : <div className="pagination__next no-data"></div>
        }
      </div>
    </section>
  )
}

export default Pagination