import React from "react"


function Contact () {

    // function Bulleted (text) {
    //     return (
    //         <div className="flex flex-row items-start space-x-2">
    //             <Box className="relative top-0.5 text-cyan-500 flex-shrink-0" size={15}/>
    //             <p className="text-xs sm:text-sm md:text-base">{text}</p>
    //         </div>
    //     )
    // }
    
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
    
    // function Activity (jobTitle, company, datesWorked, bullets) {
    //     return (
    //         <div className="w-full flex flex-col space-y-2 my-2">
    //             <div>
    //                 <h1 className="text-sm sm:text-lg">
    //                     <span className="text-sm sm:text-lg">{jobTitle} </span>
    //                     <span className="text-cyan-600">@ {company}</span>
    //                 </h1>
    //                 {/* {Location(location)} */}
    //                 {Date(datesWorked)}
    //             </div>
    //             <div className="w-full flex flex-col space-y-2 p-4">
    //                 {bullets.map((bullet)=> Bulleted(bullet))}
    //             </div>
                
    //         </div>
    //     )
    // }

    // return (
        // <div className="min-h-screen px-10 flex flex-col sm:py-12 w-full md:w-3/4 max-w-5xl mx-auto justify-center divide-y divide-cyan-500">
        //     <h1 className="text-xl sm:text-2xl md:text-3xl text-cyan-600 font-semibold py-0.5">Activities</h1>
    //         <div className="min-w-full flex flex-col space-y-10 lg:flex-row md:space-x-10 items-center py-5">
    //             <div className="w-full flex flex-col lg:grid lg:grid-cols-3 lg:space-x-5 space-y-5 lg:space-y-0">
    //                 <a className="w-7/8 bg-white rounded-xl p-3 border-black border-opacity-20 shadow" href="https://mpowered.umich.edu/">
    //                         {Activity("VP Strategy", "MPowered Entrepreneurship", "September 2018 - Present", ["Coordinate event and planning logistics within MPowered's 5 event groups (Startup Career Fair, Makeathon, 1000 Pitches, Consulting, Trailblaze)"])}
    //                 </a>
    //                 <a className="w-7/8 bg-white rounded-xl p-3 border-black border-opacity-20 shadow" href="https://michiganhackers.org/">
    //                     {Activity("iOS Core Team Member", "Michigan Hackers", "February 2019 - August 2020", ["Created a mobile iOS game called PhotoSnipe, a mobile version of the game Assassin, using Swift and Firebase with the iOS student team"])}
    //                 </a>
    //                 <a className="w-7/8 bg-white rounded-xl p-3 border-black border-opacity-20 shadow" href="https://mheal.engin.umich.edu/">
    //                     {Activity("Software Team Member", "M-HEAL", "January 2019 - August 2020", ["Collaborated with peers to create a working prototype of a heated mattress to regulate body temperature during surgery to decrease the risk of perioperative hypothermia"])}
    //                 </a>
    //             </div>
    //         </div>
            
    //     </div>
    // )
    return (
        <div id="contact" className="min-h-screen px-10 flex flex-col sm:py-12 w-full md:w-3/4 max-w-5xl mx-auto justify-center items-center">
            <h1 className="w-full text-2xl sm:text-3xl md:text-4xl text-cyan-600 font-semibold text-center">Get In Touch</h1>
            <p className="w-1/2 text-sm sm:text-base md:text-lg text-center mb-5">Although I have already found a summer internship for Summer 2021, I'm always free to chat. Feel free to contact me!</p>
            <a className="inline-block px-4 py-2 leading-none border rounded text-cyan-600 border-cyan-600 hover:border-cyan-500 hover:text-cyan-500 mt-4 md:mt-0" href="mailto:calzheng@umich.edu">Contact Me</a>
        </div>
    )
  }

  export default Contact;