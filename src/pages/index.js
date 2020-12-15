import React from "react"
import Navbar from '../components/navbar'
import Greeting from '../components/greeting'

export default function Home() {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="greeting">
        <Greeting />
      </div>
    </div>
  )
}
