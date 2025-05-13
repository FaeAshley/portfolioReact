import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-navy/80 backdrop-blur-md shadow-md z-50 border-b border-white/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-magenta">Fae</span>
                        <span className="text-sm text-gray-500 hidden sm:inline">AI + Code + Magic</span>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="text-white hover:text-magenta transition">Home</Link>
                        <Link to="/projects" className="text-white hover:text-magenta transition">Projects</Link>
                        <Link to="/about" className="text-white hover:text-magenta transition">About</Link>
                        <Link to="/contact" className="text-white hover:text-magenta transition">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
};


export default Navbar;