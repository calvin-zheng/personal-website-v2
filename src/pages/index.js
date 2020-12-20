import React from "react"
import Navbar from '../components/navbar'
import Greeting from '../components/greeting'
import About from '../components/about'

class Home extends React.Component {
  render() {
    return (
      <div className="content"> 
        <Navbar />
        <div className="greeting">
          <Greeting />
        </div>
        <div className="about">
          <About />
        </div>
      </div>
    )
  }
}

export default Home;
