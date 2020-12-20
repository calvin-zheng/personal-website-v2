import React from "react"
import {Linkedin, GitHub, Mail} from "react-feather";


function Greeting () {
    return (
        <div className="min-h-screen px-10 flex flex-col sm:py-12 w-3/4 max-w-5xl mx-auto justify-center">
            <div className="pattern-dots-md rounded-3xl text-cyan-500"> 
                <div className="transform translate-x-5 -translate-y-5 relative px-4 py-10 bg-white rounded-3xl sm:p-20 ring-2 ring-opacity-30 ring-cyan-500">
                    <div className="min-w-full mx-auto space-y-6">
                        <div>
                            <h1 className="text-cyan-600 text-5xl">Hello, I'm Calvin.</h1>
                            <div className="pattern-dots-sm text-gray-300 h-3"></div>
                            <p className="text-gray-500 text-lg w-full">I’m a computer science junior at the University of Michigan in Ann Arbor, MI, interested in software engineering, web development, machine learning, and natural language processing.</p>
                        </div>
                        <div className="min-w-full flex flex-row justify-center fill-current text-gray-400">
                            <a href="https://www.linkedin.com/in/calvin-zheng/">
                                <Linkedin className="mr-8 hover:text-cyan-500 transition duration-500 ease-in-out" size={30}></Linkedin>
                            </a>
                            <a href="https://github.com/calvin-zheng">
                                <GitHub className="mr-8  hover:text-cyan-500 transition duration-500 ease-in-out" size={30}></GitHub>
                            </a>
                            <a href="mailto:calzheng@umich.edu">
                                <Mail className="hover:text-cyan-500 transition duration-500 ease-in-out"size={30}></Mail>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }

  export default Greeting;