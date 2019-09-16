import React from "react"

import Header from "../components/Header"
import Jumbotron from "../components/Jumbotron"
import Sublink from "../components/Sublink"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import "../css/style.css"


class IndexContent extends React.Component {
  constructor() {
    super()
    this.state={
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
      <div>
        <Header
          handleClick={this.handleClick}
          showNavbar={this.state.showNavbar}
        />
        <Jumbotron />
        <Sublink />
        <Footer />
        <Navbar showNavbar={this.state.showNavbar} />
      </div>
    );
  }
  
}

export default IndexContent