import React from "react"


function Greeting () {

  
    return (
        
        <div className="min-h-screen px-10 flex flex-col sm:py-12 w-3/4 max-w-5xl mx-auto justify-center">
            <div className="pattern-dots-md rounded-3xl text-cyan-500"> 
                <div className="relative px-4 py-10 bg-white rounded-3xl sm:p-20" style={{'transform':'translate(20px, -20px)'}}>
                    <div class="min-w-full mx-auto">
                        <h1 class="text-cyan-600 text-5xl">Hello, I'm Calvin.</h1>
                        <div class="pattern-dots-sm text-gray-300 h-3"></div>
                        <p class="text-gray-500 text-lg w-full">I’m a computer science junior at the University of Michigan in Ann Arbor, MI, interested in software engineering, web development, machine learning, and natural language processing.</p>
                    </div>
                </div>
            </div>
        </div>
    )
  }

  export default Greeting;