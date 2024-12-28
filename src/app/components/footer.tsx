import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <>
   <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <Link href={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
      <span className="ml-3 text-xl">Blogy</span>
    </Link>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 M Suleman
     
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      
      
      
      <Link href={'/'} className="ml-3 text-gray-500">
       <FaFacebookF />
      </Link>
      <Link href={'/'} className="ml-3 text-gray-500">
       <FaGithub />
      </Link>
      <Link href={'/'} className="ml-3 text-gray-500">
       <FaLinkedinIn />
      </Link>
      <Link href={'/'} className="ml-3 text-gray-500">
       <FaDiscord />
      </Link>
    </span>
  </div>
</footer>


    </>
  )
}

export default Footer