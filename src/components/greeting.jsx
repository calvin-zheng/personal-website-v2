import React from "react"
import {Linkedin, GitHub, Mail} from "react-feather";
import { Fade, Slide } from "react-reveal";


function Greeting () {

    function calculateSize(){
        if (typeof window !== `undefined`) {
            if (window.screen.width <= 400){
                return 20;
            }
            return 30;
        }
        return 30;
        
    }

    return (
        <Fade ssrFade delay={500} duration={3000}>
            <div className="min-h-screen px-10 flex flex-col sm:py-12 w-full md:w-3/4 max-w-5xl mx-auto justify-center">
            <div className="pattern-dots-md rounded-3xl text-cyan-500"> 
                <div className="transform translate-x-3 -translate-y-3 md:translate-x-5 md:-translate-y-5 relative px-4 py-5 lg:p-20 bg-white rounded-3xl sm:p-20 ring-2 ring-opacity-30 ring-cyan-500 border-2 border-black border-opacity-5">
                    <div className="min-w-full mx-auto space-y-6">
                        <div>
                            <Slide bottom delay={600} duration={3000}>
                                <h1 className="text-cyan-600 text-xl sm:text-3xl md:text-5xl">Hello, I'm Calvin.</h1>
                            </Slide>
                            <Slide bottom delay={700} duration={3000}>
                                <div>
                                    <Fade delay={2000} duration={3000}>
                                        <div className="pattern-dots-sm text-cyan-500 h-3"></div>
                                    </Fade>
                                    
                                </div>
                                
                            </Slide>
                            <Slide bottom delay={700} duration={3000}>
                            <p className="text-gray-500 text-xs sm:text-sm md:text-lg w-full">I’m a computer science senior at the University of Michigan in Ann Arbor, MI, interested in software engineering, web development, machine learning, and natural language processing.</p>
                            </Slide>
                            
                            
                        </div>
                        <Fade delay={1200} duration={3000}>
                            <div className="min-w-full flex flex-row justify-center fill-current text-gray-400">
                                <a href="https://www.linkedin.com/in/calvin-zheng/">
                                    <Linkedin className="mr-8 hover:text-cyan-500 transition duration-500 ease-in-out" size={calculateSize()}></Linkedin>
                                </a>
                                <a href="https://github.com/calvin-zheng">
                                    <GitHub className="mr-8  hover:text-cyan-500 transition duration-500 ease-in-out" size={calculateSize()}></GitHub>
                                </a>
                                <a href="mailto:calzheng@umich.edu">
                                    <Mail className="hover:text-cyan-500 transition duration-500 ease-in-out"size={calculateSize()}></Mail>
                                </a>
                            </div>
                        </Fade>
                        
                    </div>
                </div>
            </div>
        </div>
        </Fade>
        
    )
  }

  export default Greeting;