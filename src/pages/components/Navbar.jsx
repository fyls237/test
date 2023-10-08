import Link from "next/link" 
import React from 'react' 
import { BsPerson } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className="navbar bg-blue-500 py-2 px-4 text-white flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">FYLS EASTATE</h1>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <div className="text-white">Home</div>
          </Link>
        </li>
        <li>
          <Link href="/proprieties">
            <div className="text-white">Proprieties</div>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <div className="text-white">Dashboard</div>
          </Link>
        </li>
        <li>
          <Link href="/registrer">
            <div className="text-white flex items-center">
              registrer
              <BsPerson className="text-2xl text-gray-500 mr-2" />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  ) 
}

export default Navbar
