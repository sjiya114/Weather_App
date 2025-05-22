import React, { useState } from 'react'
import { Link } from "react-router-dom"
export default function Navbar() {
  const [menu,setMenu]=useState(true);
  return (
    <>
      <nav className="bg-gray-800">
        <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img className="h-8 w-auto" src="weather.png" alt="Your Company" />
                 <svg  onClick={(e)=>{setMenu(!menu)}} xmlns="http://www.w3.org/2000/svg" className='pl-4 w-10 h-10  hidden max-sm:block '  viewBox="0 0 24 24" fill="white"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
              </div>
             <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link to="/" className="rounded-md bg-gray-900 px-3 py-2 text-lg font-medium text-white" aria-current="page"  >Home</Link>
                  <Link to="/About" className="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white" >About</Link>
                  <Link to="/hourly" className="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Hourly</Link>
                  <Link to="/tendays" className="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Fifteen Days</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
       {menu && <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link to="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</Link>
            <Link to="/About" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</Link>
            <Link to="/hourly" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Hourly</Link>
            <Link to="/tendays" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Fifteen Days</Link>
          </div>
        </div>}
      </nav>
    </>
  )
}
