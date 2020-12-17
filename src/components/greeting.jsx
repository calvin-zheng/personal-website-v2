import React from "react"
import {Linkedin, GitHub, Instagram, Mail} from "react-feather";


function Greeting () {

  
    return (
        <div className="min-h-screen px-10 flex flex-col sm:py-12 w-3/4 max-w-5xl mx-auto justify-center">
            <div className="pattern-dots-md rounded-3xl text-cyan-500"> 
                <div className="relative px-4 py-10 bg-white rounded-3xl sm:p-20 ring-2 ring-opacity-30 ring-cyan-500" style={{'transform':'translate(20px, -20px)'}}>
                    <div class="min-w-full mx-auto space-y-6">
                        <div>
                            <h1 class="text-cyan-600 text-5xl">Hello, I'm Calvin.</h1>
                            <div class="pattern-dots-sm text-gray-300 h-3"></div>
                            <p class="text-gray-500 text-lg w-full">I’m a computer science junior at the University of Michigan in Ann Arbor, MI, interested in software engineering, web development, machine learning, and natural language processing.</p>
                        </div>
                        <div class="min-w-full flex flex-row justify-center fill-current text-gray-400">
                            <a href="https://www.linkedin.com/in/calvin-zheng/">
                                <Linkedin class="mr-8 hover:text-cyan-500 transition duration-500 ease-in-out" size={30}></Linkedin>
                            </a>
                            <a href="https://github.com/calvin-zheng">
                                <GitHub class="mr-8  hover:text-cyan-500 transition duration-500 ease-in-out" size={30}></GitHub>
                            </a>
                            <a href="mailto:calzheng@umich.edu">
                                <Mail class="hover:text-cyan-500 transition duration-500 ease-in-out"size={30}></Mail>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }

  export default Greeting;