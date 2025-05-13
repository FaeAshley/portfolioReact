import ParticlesBackground from "../components/Shared/ParticlesBackground";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="flex items-center justify-center text-center min-h-screen">
            <div className="z-10">
                <h1 className="text-5xl sm:text-6xl font-bold text-white">
                Hi, I'm <span className="text-magenta">Fae</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 mt-4">
                Full-Stack Developer | Elegant Problem Solver
                </p>
                <Link to="/projects" className="inline-block mt-6 px-6 py-2 bg-magenta text-white font-semibold rounded hover:bg-magenta/80 transition">
                View My Work
                </Link>
                {/* <h2 className="text-4xl text-gray-300 mt-10">
                  Explore my
                </h2> */}
                <p className="text-lg sm:text-xl text-gray-300 mt-20">
                  <span className="hover:text-magenta"> Background</span> | <span className="hover:text-magenta">Experience</span> | <span className="hover:text-magenta">Résumé</span>
                </p>
                <Link to="/about" className="inline-block mt-6 px-6 py-2 bg-magenta text-white font-semibold rounded hover:bg-magenta/80 transition">
                View My Epitome
                </Link>
                <p className="text-small sm:text-sm text-gray-300 mt-3">(Or shoot FaeGPT a message at the chat bubble in the right corner!)</p>
            </div>
        </header>
    );
};

function Home() {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Header />
    </div>
  );
}

export default Home;