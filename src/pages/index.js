import React from "react"

export default function Home() {
  return (
    <header class="w-screen bg-blue-900 shadow-navbar fixed p-5">
      <nav class="flex justify-between content-center">
          <div>
              <a href="#">
                <div class= "rounded-full h-10 w-10 flex items-center justify-center border-2 border-light-blue-300 border-opacity-100">
                  <img src="/images/logo.svg" alt="logo" class="object-cover h-15"/>
                </div>
              </a>
          </div>
          <ul class="flex flex-row text-light-blue-200">
              <li class="md:pr-10 md:text-lg mx-auto my-auto font-base"><a>About</a></li>
              <li class="md:pr-10 md:text-lg mx-auto my-auto font-base"><a>Experience</a></li>
              <li class="md:pr-10 md:text-lg mx-auto my-auto font-base"><a>Projects</a></li>
              <li class="md:pr-10 md:text-lg mx-auto my-auto font-base"><a>Contact</a></li>
              <li class="md:pr-10 md:text-lg mx-auto my-auto font-base"><a>Resume</a></li>
          </ul>
      </nav>
    </header>
  )
}
