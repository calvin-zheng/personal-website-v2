import React from "react"
import {Fade} from 'react-reveal';


function Contact () {

    return (
        <div id="contact" className="min-h-screen px-10 flex flex-col sm:py-12 w-full md:w-3/4 max-w-5xl mx-auto justify-center items-center">
            <Fade duration={500}>
                <h1 className="w-full text-2xl sm:text-3xl md:text-4xl text-cyan-600 font-semibold text-center">Get In Touch</h1>
            </Fade>
            <Fade delay={200} duration={500}>
                <p className="w-1/2 text-sm sm:text-base md:text-lg text-center mb-5">I'm currently looking for a fulltime position starting the summer of 2022. Feel free to contact me!</p>
            </Fade>
            <Fade delay={500} duration={500}>
                <a className="inline-block px-4 py-2 leading-none border rounded text-cyan-600 border-cyan-600 hover:border-cyan-500 hover:text-cyan-500 mt-4 md:mt-0" href="mailto:calzheng@umich.edu">Contact Me</a>
            </Fade>
            
        </div>
    )
  }

  export default Contact;