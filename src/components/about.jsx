import React from "react"
import {Linkedin, GitHub, Mail} from "react-feather";


function About () {

  
    return (
        <div className="min-h-screen px-10 flex flex-col sm:py-12 w-3/4 max-w-5xl mx-auto justify-center">
            <div className="min-w-full flex flex-row">
                <div className="px-4 py-10 bg-white rounded-3xl sm:p-20 ring-2 ring-opacity-30 ring-cyan-500" style={{'transform':'translate(20px, -20px)'}}>
                    <div className="min-w-full mx-auto space-y-6">
                        <div>
                            <h1 className="text-cyan-600 text-5xl">About Me</h1>
                            <div className="pattern-dots-sm text-gray-300 h-3"></div>
                            <p className="text-gray-500 text-lg w-full">Hello! I’m Calvin, a computer science junior at the University of Michigan. On campus, I am involved with Michigan Hackers and MPowered Entrepreneurship. Last summer, I am participating in an engineering co-op with Toyota North America, focusing on developing new solutions for internal tools for virtual meetings and also working to digitally optimize different parts of their supply chain process. For Summer 2021, I will interning with Capital One as a software engineer in New York City.</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
  }

  export default About;