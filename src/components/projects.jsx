import React from "react";
import {Box} from 'react-feather';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import toyotaGIF from '../images/toyota-prcc.gif';
import { Fade, Slide } from "react-reveal";



function Bulleted (text) {
    return (
        <div className="flex flex-row items-start space-x-2">
            <Box className="relative top-0.5 text-cyan-500 flex-shrink-0" size={15}/>
            <p className="text-xs">{text}</p>
        </div>
    )
}

// function Location (text) {
//     return (
//         <div className="flex flex-row items-start space-x-2">
//             <MapPin className="relative top-0.5 text-cyan-500 flex-shrink-0" size={15} />
//             <p className="text-xs sm:text-sm md:text-base">{text}</p>
//         </div>
//     )
// }

// function Date (text) {
//     return (
//         <div className="flex flex-row items-start space-x-2">
//             <Calendar className="relative top-0.5 text-cyan-500 flex-shrink-0" size={15} />
//             <p className="text-xs sm:text-sm md:text-base">{text}</p>
//         </div>
//     )
// }

function Project (projectName, bullets, flipped, isGIF, gif) {
    return (
        <div className={`transform flex flex-col lg:flex-row bg-gradient-to-b lg:bg-gradient-to-r from-cyan-50 to-cyan-500 ${ flipped ? `rotate-3 lg:flex-row-reverse` : `-rotate-3 lg:from-cyan-500 lg:to-cyan-50`} rounded-lg mx-auto w-full items-center mt-8 space-x-5 space-y-5 shadow`}>
            <div className="w-full lg:w-4/5">
                {isGIF && <img className={`transform ${ flipped ? `-rotate-3` : `rotate-3`} w-full rounded-lg border border-black border-opacity-20`} src={gif} alt="hello" />}
                {!isGIF && <Img
                        className={`transform ${ flipped ? `-rotate-3` : `rotate-3`} w-full rounded-lg border border-black border-opacity-20`}
                        fluid={gif}
                        alt="Calvin"
                    />}
            </div>
            <div className={`transform ${ flipped ? `-rotate-3 -translate-x-5` : `rotate-3`} w-full lg:w-2/5 rounded-lg border border-black bg-white border-opacity-20 p-3`}>
                {ProjectInfo(projectName, bullets)}
            </div>
        </div>
    )
}

function ProjectInfo (projectName, bullets) {
    return (
        <Fade duration={500}>
            <div className="w-full flex flex-col space-y-2 my-2 ">
            <div>
                <h1 className="text-sm sm:text-base">
                    <span className="text-sm sm:text-base">{projectName} </span>
                </h1>
            </div>
            <div className="w-full flex flex-col space-y-2 p-4">
                {bullets.map((bullet)=> Bulleted(bullet))}
            </div>
            
            </div>
        </Fade>
    )
}

function Projects () {

    const query = graphql`
    query Query {
        zconnect: file(relativePath: { eq: "zconnect.jpg" }) {
        childImageSharp {
            # Specify the image processing specifications right in the query.
            fluid {
            ...GatsbyImageSharpFluid
            }
        }
        }
        todo: file(relativePath: { eq: "whatsnext.png" }) {
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
        <Fade delay={200} duration={1000}> 
            <div id="projects" className="w-full h-10"></div>
            <div className="min-h-screen px-10 flex flex-col sm:py-12 w-full md:w-3/4 max-w-5xl mx-auto divide-y divide-cyan-500">
                <h1 className="text-xl sm:text-2xl md:text-3xl text-cyan-600 font-semibold py-0.5">Projects</h1>
                <div className="min-w-full flex flex-col space-y-10 md:space-x-10 items-center py-5">
                    <Slide bottom delay={300} duration={1000}>
                        <div>
                            {Project('Toyota - Optimizing for a Digital Future', ["Learned Angular, Spring, and MySQL to create a responsive web application to optimize the supply chain process by 35%", "Conducted user interviews with engineers to determine painpoints that needed to be addressed by the application"], false, true, toyotaGIF)}
                        </div>
                    </Slide>
                    <br></br>
                    <Slide bottom delay={300} duration={1000}>
                        <a href="https://github.com/sidpagariya/zconnect" className="w-full">
                            {Project('ZConnect - HackMIT', ["Utilized Python, Flask, and Selenium to create a Zoom chatbot that allows instructors to gauge student engagement and create polls while also giving students the ability to ask anonymous questions and check Piazza"], true, false, data.zconnect.childImageSharp.fluid)}
                        </a>
                    </Slide>
                    <br></br>
                    <Slide bottom delay={300} duration={1000}>
                        <a href="https://github.com/calvin-zheng/to-do-app" className="w-full">
                            {Project("What's Next", ["Designed and created a more personalized to-do list web app that keeps track of user data using Firebase and ReactJS"], false, false, data.todo.childImageSharp.fluid)}
                        </a>
                    </Slide>
                    
                    
                </div>
            
            </div>
        </Fade>
        
    )
  }

  export default Projects;