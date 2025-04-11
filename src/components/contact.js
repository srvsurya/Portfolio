
import {Link} from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    return (
      <>
      <nav className="bg-black text-white p-4 shadow-md">
      <div className="max-w-10xl flex justify-between mr-12">
        <h1 className="ml-12 text-xl font-bold"><Link 
        to = "/"
        className="text-red-600 text-2xl"
        >My Portfolio</Link></h1>
        <ul className="flex gap-4">
        <h1 className="ml-12"><Link 
        to = "/work"
        className="text-white hover:text-red-400"
        >Projects</Link></h1>
        <h1 className="ml-12"><Link 
        to = "/contact"
        className="text-white hover:text-red-400"
        >Contact</Link></h1>
        </ul>
      </div>
    </nav>
      
    <section className="bg-gradient-to-br from-black via-red-950 to-black text-white h-screen flex items-center">
    <div className="max-w-4xl px-6 bg-black bg-opacity-80 rounded-2xl shadow-lg p-6 text-white mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-red-600 ">Contact Info</h2>
      <p className="py-4 font-mono">Mobile: +971 56 594 2837 <br />
         Email: transitivecloud@gmail.com <br />
         Currently based in: Sharjah, UAE </p>
         <h1 className="font-bold text-xl text-red-600 text-center">Links</h1>
      <div className="flex space-x-6 mt-4 text-3xl justify-center">
        
      <a 
        href="https://www.linkedin.com/in/saurav-jayasurya/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-900 hover:text-blue-400 transition-colors"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a 
        href="https://github.com/srvsurya"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-white transition-colors"
        title="GitHub"
      >
        <FaGithub />
      </a>
      <a 
        href="mailto:transitivecloud@gmail.com"
        className="text-red-700 hover:text-red-400 transition-colors"
        title="Email"
      >
        <FaEnvelope />
      </a>
    </div>

            </div>
          </section>

      </>
    )
  }
  