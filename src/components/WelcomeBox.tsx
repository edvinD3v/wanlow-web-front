import WelcomeListItem from "./ui/WelcomeListItem";

export default function WelcomeBox() {

  return (
    <div className="flex flex-wrap mx-[8%] mt-[140px] gap-[30px]">
        <div className="flex flex-col flex-2 min-w-[350px]">
            <div className="flex items-center mt-[60px]">
                <h1 
                    className="text-textPrimary text-[60px]"
                    style={{ fontFamily: "Mouse Memoirs, sans-serif"}}
                >
                    The Welcome Box
                </h1>
                <img className="ml-[11px] h-[50px]" src="/icons/3stars.webp" alt="" />
            </div>
            <p 
                className="text-textPrimary text-[18px] mb-[37px] font-medium"
                style={{ fontFamily: "Noto Sans Display, sans-serif"}}
            >
                For the first delivery, every child receives the Welcome Box which is packed full of everything they’ll need to kick off their outdoor fun of learning and discovery!
            </p>

            <div className="flex flex-col gap-[30px]">
                <WelcomeListItem id={1} />
                <WelcomeListItem id={2} />
                <WelcomeListItem id={3} />
                <WelcomeListItem id={4} />
            </div>

            <div>
                <button 
                    className="ml-[5px] mt-[60px] h-[50px] w-[192px] rounded-sm text-[20px] text-white bg-[#db7623] transition duration-300 hover:bg-[#c96d22]" 
                    style={{ fontFamily: "Mouse Memoirs, sans-serif"}}
                >
                    Get Your First Box
                </button>
            </div>

        </div>

        <div className="flex-3 flex justify-center items-center">
            <img className="min-w-[520px] max-h-[680px] sm:w-[70%]" src="/images/welcomeImg.webp" alt="" />
        </div>
        
    </div>
  )
}