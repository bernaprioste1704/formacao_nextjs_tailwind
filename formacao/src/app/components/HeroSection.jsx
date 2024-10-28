import Image from 'next/image';
//import myImg from "./Foto_Bernardo_Prioste.jpg";
export default function HeroSection() {

const rounded = "rounded-xl"

    return (
        <div className="flex flex-col items-center h-[calc(100vh-2rem)+10] -mt-2 p-4 mb-5">
            <div className={"content-none bg-white p-6 text-black w-full h-[80%] rounded-xl flex flex-col "}>
                <div className="rounded-lg bg-slate-500 w-full text-slate-500 select-none mb-5">o</div>
                <Image
                    src={"/Foto_Bernardo_Prioste.jpg"}
                    alt="Bernardo Prioste"
                    layout="responsive" // Image will fill its parent container
                    width={500}
                    height={300}
                    objectFit="none" // Maintain aspect ratio while covering the container
                    className="rounded-lg mb-3"
                    priority={true}
                />
                <div className="flex flex-col items-start">
                    <div className="font-bold text-3xl ">Bernardo Prioste</div>
                    <div className="italic text-start mb-1">BSc Student in Computer Science and Engineering</div>
                </div>

            </div>
        </div>
    ) 
}