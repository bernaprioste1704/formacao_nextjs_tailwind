
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-center text-white min-h-screen h-fit overflow-y-auto flex flex-col">
      <Navbar/>
      <HeroSection/>  
      <About/>
      <Experience/>
      
      <Link className="mb-10 text-4xl"href={"https://https://www.linkedin.com/in/bernardo-prioste-057254243/"} target="_blank">My Linkedin</Link>

    </div>
  );
}
