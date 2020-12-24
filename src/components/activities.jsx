import React from "react"
import {Box, Calendar} from 'react-feather';
import {Fade, Slide} from 'react-reveal';


function Activities () {

    function Bulleted (text) {
        return (
            <div className="flex flex-row items-start space-x-2">
                <Box className="relative top-0.5 text-cyan-500 flex-shrink-0" size={15}/>
                <p className="text-xs sm:text-sm md:text-base">{text}</p>
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
    
    function Date (text) {
        return (
            <div className="flex flex-row items-start space-x-2">
                <Calendar className="relative top-0.5 text-cyan-500 flex-shrink-0" size={15} />
                <p className="text-xs sm:text-sm md:text-base">{text}</p>
            </div>
        )
    }
    
    function Activity (jobTitle, company, datesWorked, bullets) {
        return (
            <div className="w-full flex flex-col space-y-2 my-2">
                <div>
                    <h1 className="text-sm sm:text-lg">
                        <span className="text-sm sm:text-lg">{jobTitle} </span>
                        <span className="text-cyan-600">@ {company}</span>
                    </h1>
                    {/* {Location(location)} */}
                    {Date(datesWorked)}
                </div>
                <div className="w-full flex flex-col space-y-2 p-4">
                    {bullets.map((bullet)=> Bulleted(bullet))}
                </div>
                
            </div>
        )
    }

    return (
        <Fade delay={300} duration={1000}>
            <div id="activities" className="min-h-screen px-10 flex flex-col sm:py-12 w-full md:w-3/4 max-w-5xl mx-auto justify-center divide-y divide-cyan-500">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-cyan-600 font-semibold py-0.5">Activities</h1>
            <div className="min-w-full flex flex-col space-y-10 lg:flex-row md:space-x-10 items-center py-5">
                <div className="w-full flex flex-col lg:grid lg:grid-cols-3 lg:space-x-5 space-y-5 lg:space-y-0">
                    <Slide bottom duration={1000}>
                        <a className="w-7/8 bg-white rounded-xl p-3 border-black border-opacity-20 shadow" href="https://mpowered.umich.edu/">
                                {Activity("VP Strategy", "MPowered Entrepreneurship", "September 2018 - Present", ["Coordinate event and planning logistics within MPowered's 5 event groups (Startup Career Fair, Makeathon, 1000 Pitches, Consulting, Trailblaze)"])}
                        </a>
                    </Slide>
                    <Slide bottom duration={1000}>
                        <a className="w-7/8 bg-white rounded-xl p-3 border-black border-opacity-20 shadow" href="https://michiganhackers.org/">
                            {Activity("iOS Core Team Member", "Michigan Hackers", "February 2019 - August 2020", ["Created a mobile iOS game called PhotoSnipe, a mobile version of the game Assassin, using Swift and Firebase with the iOS student team"])}
                        </a>
                    </Slide>
                    <Slide bottom duration={1000}>
                        <a className="w-7/8 bg-white rounded-xl p-3 border-black border-opacity-20 shadow" href="https://mheal.engin.umich.edu/">
                            {Activity("Software Team Member", "M-HEAL", "January 2019 - August 2020", ["Collaborated with peers to create a working prototype of a heated mattress to regulate body temperature during surgery to decrease the risk of perioperative hypothermia"])}
                        </a>
                    </Slide>
                    
                </div>
            </div>
            
            </div>
        </Fade>
    )
  }

  export default Activities;