import vid1 from "../Assets/bestyou.mp4";
import vid2 from "../Assets/kwye.mp4";
import vid3 from "../Assets/kwyecode.mp4";
import {Link} from "react-router-dom";


export default function Work() {
    
    
    return (
        <>
      <nav className="bg-black text-white p-4 shadow-md">
        <div className="max-w-10xl flex justify-between mr-12">
          <h1 className="ml-12 text-xl font-bold"><Link 
          to = "/"
          className="text-red-600 text-2xl"
          >My Portfolio</Link></h1>
          <ul className="flex gap-4">
            <li><a href="#projects" className="hover:text-red-400">Projects</a></li>
            <li><a href="#about" className="hover:text-red-400">About</a></li>
            <li><a href="#contact" className="hover:text-red-400" >Contact</a></li>
          </ul>
        </div>
      </nav>
      
      <section className="bg-gradient-to-br from-black via-red-950 to-black text-white">
      <div className="flex flex-col gap-12">
      <div className="flex justify-start">
      <div className="max-w-4xl mx-auto px-6 bg-black bg-opacity-80 rounded-2xl shadow-lg p-6 text-white ml-10 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-red-600 ">BestYou</h2>
      <p className="text-1xl font-mono"> BestYou – AI-Powered Dating Profile Advisor
            Frontend Developer (React)
            Developed the frontend for a web app that lets users upload screenshots of their 
            dating profiles. Built a smooth image upload flow that sends user screenshots to the backend for AI analysis. The app 
            uses ChatGPT to return personalized ratings, feedback, and suggestions for profile improvement.</p>
            <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold text-red-600 mb-2 mt-4">Code + Overview</h3>
                <video className="w-full rounded-lg mt-4 w-[400px] h-[300px]" controls>
        <source src={vid1} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        </div>
        </div>
      </div>

      <div className="flex justify-end">
      <div className="max-w-4xl  px-6 bg-black bg-opacity-80 rounded-2xl shadow-lg p-6 text-white mr-10">
      <h2 className="text-2xl text-red-600 font-bold mb-4">Know What You Eat</h2>
      <p className="text-1xl font-mono"> BestYou – AI-Powered Dating Profile Advisor
            Frontend Developer (React)
            Developed the frontend for a web app that lets users upload screenshots of their 
            dating profiles. Built a smooth image upload flow that sends user screenshots to the backend for AI analysis. The app 
            uses ChatGPT to return personalized ratings, feedback, and suggestions for profile improvement.</p>
            <div className="flex justify-center gap-20">
            <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-red-600 mb-2 mt-4">App overview</h3>
                <video className="w-full rounded-lg mt-5 w-[500px] h-[300px]" controls>
        <source src={vid2} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        </div>
        <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold text-red-600 mb-2 mt-4">Code</h3>
        <video className = "w-full rounded-lg mt-5 w-[400px] h-[300px]" controls>
            <source src={vid3} type="video/mp4"/>
        </video>
        </div>
        </div>
        </div>
      </div>
      </div>
      </section>

      
      </>
    );
  }