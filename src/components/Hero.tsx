export default function Hero() {
    return (
        <div className="relative flex h-fit w-full">
            {/* Left Image */}
            <img
                className="relative left-0 top-0 w-1/2 object-contain"
                src="/images/heroImageLeft.webp"
                alt=""
            />

            {/* Center Content (Above Background Images) */}
            <div className="absolute z-10 flex justify-center w-full h-full">
                <div 
                    className="flex flex-col items-center justify-center px-10"
                    style={{
                        background: "radial-gradient(circle, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0) 65%)",
                    }}
                >
                    <h1
                        className="text-[90px] text-white"
                        style={{ fontFamily: "Mouse Memoirs, sans-serif"}}
                        >
                        Get Outside!
                    </h1>

                    <p
                        className="text-[18px] font-semibold max-w-[582px] text-white text-center"
                        style={{ fontFamily: "Noto Sans Display, sans-serif", letterSpacing: "0px" }}
                    >
                        Monthly subscription box designed to get kids excited to spend more time outdoors and less time inside with their digital devices!
                    </p>

                    
                    <button 
                        className="bg-[#7ec6bc] text-[#483729] h-[50px] w-[147px] text-[20px] mt-[40px] hover:bg-[#629a92] hover:text-white transition duration-300" 
                        style={{ fontFamily: "Mouse Memoirs, sans-serif" }}
                    >
                        Get started
                    </button>
                </div>
            </div>

            {/* Right Image */}
            <img
                className="relative right-0 top-0  w-1/2 object-contain"
                src="/images/heroImageRight.webp"
                alt=""
            />
        </div>
    )
}