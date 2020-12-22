import React, {useState} from "react";
import {Box, MapPin, Calendar} from 'react-feather';


function Bulleted (text) {
    return (
        <div className="flex flex-row items-start space-x-2">
            <Box className="relative top-0.5 text-cyan-500 flex-shrink-0" size={15}/>
            <p className="text-xs sm:text-sm md:text-base">{text}</p>
        </div>
    )
}

function Location (text) {
    return (
        <div className="flex flex-row items-start space-x-2">
            <MapPin className="relative top-0.5 text-cyan-500 flex-shrink-0" size={15} />
            <p className="text-xs sm:text-sm md:text-base">{text}</p>
        </div>
    )
}

function Date (text) {
    return (
        <div className="flex flex-row items-start space-x-2">
            <Calendar className="relative top-0.5 text-cyan-500 flex-shrink-0" size={15} />
            <p className="text-xs sm:text-sm md:text-base">{text}</p>
        </div>
    )
}

function WorkInfo (jobTitle, company, location, datesWorked, bullets) {
    return (
        <div className="w-full flex flex-col space-y-2 my-2">
            <div>
                <h1 className="text-sm sm:text-lg">
                    <span className="text-sm sm:text-lg">{jobTitle} </span>
                    <span className="text-cyan-600">@ {company}</span>
                </h1>
                {Location(location)}
                {Date(datesWorked)}
            </div>
            <div className="w-full flex flex-col space-y-2 p-4">
                {bullets.map((bullet)=> Bulleted(bullet))}
            </div>
            
        </div>
    )
}

function Experience () {

    const [selected, setSelected] = useState('CapitalOne');

    function isSelected(text) {
        return (selected !== text) ? false : true;
    }
  
    return (
        <div id="experience" className="min-h-screen px-10 flex flex-col sm:py-12 w-full md:w-3/4 max-w-5xl mx-auto justify-center divide-y divide-cyan-500">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-cyan-600 font-semibold py-0.5">Work Experience</h1>
            <div className="min-w-full flex flex-col space-y-10 lg:flex-row md:space-x-10 items-center py-5">
                <div className="mx-auto w-full bg-white rounded-xl p-3 ring-2 ring-opacity-10 ring-cyan-500 border-black border-opacity-20 shadow">
                    <div className="min-w-full mx-auto flex flex-col sm:flex-row">
                        <div className="w-full sm:w-1/4 text-xs sm:text-sm">
                            <div className="overflow-x-auto sm:w-3/4 flex flex-row sm:flex-col">
                                <button onClick={() => setSelected('CapitalOne')} className ={`${ isSelected('CapitalOne') ? `bg-cyan-100 bg-opacity-30 underline border-opacity-100 text-cyan-600`: `bg-none border-opacity-10 text-gray-400` } w-full text-left border-b sm:border-b-0 sm:border-l border-cyan-600 p-2`}>
                                    Capital One
                                </button>
                                <button onClick={() => setSelected('Toyota')} className ={`${ isSelected('Toyota') ? `bg-cyan-100 bg-opacity-30 underline border-opacity-100 text-cyan-600`: `bg-none border-opacity-10 text-gray-400` } w-full text-left border-b sm:border-b-0 sm:border-l border-cyan-600 p-2`}>
                                    Toyota North America
                                </button>
                                <button onClick={() => setSelected('UM')} className ={`${ isSelected('UM') ? `bg-cyan-100 bg-opacity-30 underline border-opacity-100 text-cyan-600`: `bg-none border-opacity-10 text-gray-400` } w-full text-left border-b sm:border-b-0 sm:border-l border-cyan-600 p-2`}>
                                    University of Michigan
                                </button>
                            </div>
                        </div>
                        <div className="w-full sm:w-3/4">
                            {isSelected('CapitalOne') && WorkInfo('Incoming Software Engineering Intern', 'Capital One', "New York City, NY", "June - August 2021", [])}
                            {isSelected('Toyota') && WorkInfo('Engineering Co-op & Student Developer', 'Toyota North America', "Saline, MI", "June - August 2020", ['Developed full-stack using Spring, Angular, Material UI, MySQL and HTML5/CSS3 to replace an unstandardized Excel-based process with a responsive modern web application, optimizing overall efficiency by 35%', 'Established a strategy plan for the rollout of a global internal system, keeping track of key dates and KPIs', 'Built multiple automated PowerBI reports to track historic data trends, reducing time spent on compiling data snapshots by 50%'])}
                            {isSelected('UM') && WorkInfo('Teaching Assistant', 'University of Michigan', "Ann Arbor, MI", "September 2019 - Present", ['Lead sessions for 50 students and weekly discussions of 20+ students for an introductory programming class focused on software development for accessibility', 'Grade homework assignments and generate exam questions'])}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
  }

  export default Experience;