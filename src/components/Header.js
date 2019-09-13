import React from "react"

function Header(props) {
  return (
    <header className={props.isFeature ? "header is_feature" : "header"}>
      <img src={props.isFeature ? "../images/logo-white@2x.png" : "../images/logo@2x.png"} alt="" className="logo" />
      <div className={props.showNavbar ? "navControl toClose" : "navControl"} onClick={props.handleClick}>
        <span className="navControl__btn"></span>
      </div>
    </header>
  );
}

export default Header