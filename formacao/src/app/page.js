import Image from "next/image";
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
      <Link href={"https://www.safetyscope.eu"} target="_blank">SafetyScope</Link>
      
      

    </div>
  );
}
