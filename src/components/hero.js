import { Link } from "react-router-dom";


export default function Hero() {
    


    
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

            <div className="max-w-4xl mx-auto px-6">
            <h1 className="font-mono text-5xl md:text-6xl font-bold mb-4">
                Hey, I’m <span className="text-red-600">Saurav Jayasurya</span>
            </h1>
            <p className="font-mono text-lg md:text-xl text-gray-100 mb-6 mg-t mt-10">
            I'm a full-stack developer and aspiring data engineer with hands-on experience in building backend systems, 
            designing intuitive frontends, and managing data pipelines. I’ve developed AI-powered applications using Python, Dart (Flutter), 
            and React, and built ETL workflows with tools like Apache Airflow and AWS. I enjoy transforming real-world problems into practical, 
            tech-driven solutions—whether it’s predicting weather with machine learning, developing advisor apps, or integrating seamless APIs. 
            My background also includes experience in data analytics, Linux systems, and cloud-based deployments.
            </p>
            <Link
                
                to="/work"
                className="inline-block bg-red-600 hover:bg-black text-white font-medium py-3 px-6 rounded-lg transition duration-300 mt-8"
            >
                View My Work
                </Link>
            
            </div>
        </section>
        </>
        );
    }