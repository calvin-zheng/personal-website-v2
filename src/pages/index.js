import React from "react"
import Navbar from '../components/navbar'
import Greeting from '../components/greeting'
import About from '../components/about'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Activities from '../components/activities'
import Contact from '../components/contact'
import SEO from '../components/seo'

class Home extends React.Component {
  render() {
    return (
      <div className="content"> 
        <SEO />
        <Navbar />
        <div className="greeting">
          <Greeting />
        </div>
        <div className="about">
          <About />
        </div>
        <div className="experience">
          <Experience />
        </div>
        <div className="projects">
          <Projects />
        </div>
        <div className="activities">
          <Activities />
        </div>
        <div>
          <Contact />
        </div>
        {/* <div className="contact">
          <Contact />
        </div> */}
      </div>
    )
  }
}

export default Home;
