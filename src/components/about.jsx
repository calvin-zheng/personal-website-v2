import React from "react";
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';


function About () {

    const query = graphql`
    query MyQuery {
        file(relativePath: { eq: "calvin.jpg" }) {
        childImageSharp {
            # Specify the image processing specifications right in the query.
            fluid {
            ...GatsbyImageSharpFluid
            }
        }
        }
    }
    `
    
    const data = useStaticQuery(query)
  
    return (
        <div className="min-h-screen px-10 flex flex-col sm:py-12 w-3/4 max-w-5xl mx-auto justify-center divide-y divide-cyan-500">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-cyan-600 font-semibold py-0.5">About Me</h1>
            <div className="min-w-full flex flex-col space-y-10 md:flex-row md:space-x-10 items-center py-5">
                <div className="md:w-1/2 px-4 py-10 bg-white rounded-3xl sm:p-10 ring-2 ring-opacity-30 ring-cyan-500">
                    <div className="min-w-full mx-auto space-y-6">
                        <div>
                            <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg w-full">Hello! I’m Calvin, a junior at the <a className="text-cyan-600 hover:text-cyan-500" href="https://umich.edu/"><nobr>University of Michigan</nobr></a> majoring in Computer Science with a minor in Business.</p>
                            <br></br>
                            <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg w-full">I am passionate about fullstack development and learning more about how software engineering can help improve other fields, such as finance.</p>
                            <br></br>
                            <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg w-full">I've previously interned with <a className="text-cyan-600 hover:text-cyan-500" href="https://www.toyota.com/usa/"><nobr>Toyota North America</nobr></a> and will be interning with <a className="text-cyan-600 hover:text-cyan-500" href="https://www.toyota.com/usa/"><nobr>Capital One</nobr></a> this upcoming summer!</p>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-2/3 md:w-1/2 min-h-full">
                    <div className="pattern-triangles-sm text-cyan-100 bg-cyan-50 ring-2 ring-opacity-50 ring-cyan-500 rounded-3xl mx-auto w-3/4">
                    <Img
                        className="shadow border border-black border-opacity-20 rounded-3xl transform -translate-x-2 -translate-y-2 sm:-translate-x-5 sm:-translate-y-5"
                        fluid={data.file.childImageSharp.fluid}
                        alt="Calvin"
                    />
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
  }

  export default About;