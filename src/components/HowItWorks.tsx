import InstructionCard from "./ui/InstructionCard";
import WelcomeBox from "./WelcomeBox";

export default function HowItWorks() {

  return (
    <div className="relative flex flex-col overflow-hidden h-fit w-full">
        <img
            className="absolute top-[36px] object-cover -z-1 h-[327px]" 
            src="/images/background/bgTrail1.webp" 
            alt="Trail"
        />

        <h1 
            className="text-[50px] mt-[100px] mb-[20px] text-[#483729] text-center"
            style={{ fontFamily: "Mouse Memoirs, sans-serif"}}
        >
            How It Works
        </h1>

        <div className="flex flex-wrap gap-[30px] justify-center mx-[8%]">
            <InstructionCard id={1} />
            <InstructionCard id={2}/>
            <InstructionCard id={3}/>
        </div>

        <img
            className="absolute object-cover -z-1 h-[2342px]" 
            src="/images/background/bgTrail2.webp" 
            alt="Trail"
        />

        <WelcomeBox />
    </div>
  )
}