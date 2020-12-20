import React, {useState} from "react"
import { Link } from "gatsby"

function Header () {

    const [isExpanded, toggleExpansion] = useState(false)
  
    return (
      <header className="static-top md:fixed min-w-full flex items-center justify-between flex-wrap bg-white-custom p-6 shadow-sm" style={{'zIndex': '2'}}>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            {/* <div class= "rounded-full h-10 w-10 flex items-center justify-center border-2 border-light-blue-300 border-opacity-100">    
                <img src="/images/logo.svg" alt="logo" class="object-cover h-15"/>
            </div> */}
        </div>
        <div className="block md:hidden">
          <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-gray-400 border-gray-400 hover:text-cyan-500 hover:border-cyan-500 focus:outline-none focus:text-cyan-500 focus:border-cyan-500">
            <svg className="fill-current h-3 w-3 outline-none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow md:flex md:items-center md:w-auto`}>
          <div className="ml-auto text-center">
            <Link to="#" href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 text-gray-500 hover:text-cyan-500 md:mr-4">
              About
            </Link>
            <Link to="#" className="block mt-4 md:inline-block md:mt-0 text-gray-500 hover:text-cyan-500 md:mr-4">
              Experience
            </Link>
            <Link to="#" className="block mt-4 md:inline-block md:mt-0 text-gray-500 hover:text-cyan-500 md:mr-4">
              Projects
            </Link>
            <Link to="#" className="block mt-4 md:inline-block md:mt-0 text-gray-500 hover:text-cyan-500 md:mr-4">
              Contact
            </Link>
            <a href="#download" className="inline-block px-4 py-2 leading-none border rounded text-gray-500 border-gray-500 hover:border-cyan-500 hover:text-cyan-500 mt-4 md:mt-0">Resume</a>
          </div>
        </div>
      </header>
    )
  }

  export default Header;