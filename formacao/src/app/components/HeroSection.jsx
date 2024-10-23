import Image from "next/image"
export default function HeroSection() {

const rounded = "rounded-xl"

    return (
        <div className="flex flex-col items-center h-[calc(100vh-2rem)] -mt-2 p-4">
            <div className={"content-none bg-white p-6 text-black w-full h-[80%] rounded-xl flex flex-col sm:flex-row sm:gap-6 justify-between"}>
                <div className="rounded-lg bg-slate-500 w-full text-slate-500 select-none">o</div>
                <div className="flex flex-col items-start">
                    <div className="font-bold text-3xl">Luis Lamy</div>
                    <div className="italic text-start">MSc Student in Computer Science and Engineering</div>
                
                </div>
            </div>
        </div>
    ) 
}