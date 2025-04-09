

export default function Navbar() {
    return (
      <nav className="bg-gray-900 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <ul className="flex gap-4">
            <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
            <li><a href="#about" className="hover:text-cyan-400">About</a></li>
            <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  