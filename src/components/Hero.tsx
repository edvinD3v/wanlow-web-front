export default function Hero() {
    return (
        <div className="relative flex h-fit w-full">
            {/* Hero/Get started section with shadow and 2 images in background */}
            
            {/* Left Image */}
            <img
                className="relative left-0 top-0 w-1/2 object-contain"
                src="/images/heroImageLeft.webp"
                alt=""
            />

            {/* Center Content (Above Background Images) */}
            <div className="absolute z-10 flex justify-center w-full h-full">
                <div 
                    className="flex flex-col items-center vsm:justify-center justify-start px-10 w-full"
                    style={{
                        background: "radial-gradient(circle, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0) 65%)",
                    }}
                >
                    <h1
                        className="lg:text-[90px] sm:text-[60px] text-[40px] text-white sm:leading-normal leading-10"
                        style={{ fontFamily: "Mouse Memoirs, sans-serif"}}
                        >
                        Get Outside!
                    </h1>

                    <p
                        className="lg:text-[18px] sm:text-[14px] sm:max-w-[582px] text-[12px] font-semibold max-w-[300px] text-white text-center"
                        style={{ fontFamily: "Noto Sans Display, sans-serif", letterSpacing: "0px" }}
                    >
                        Monthly subscription box designed to get kids excited to spend more time outdoors and less time inside with their digital devices!
                    </p>

                    
                    <button 
                        className="bg-[#7ec6bc] text-[#483729] rounded-md sm:h-[50px] sm:w-[147px] sm:p-0 w-[] h-[] py-1 px-4 text-[20px] mt-[15px] sm:mt-[40px] hover:bg-[#629a92] hover:text-white transition duration-300" 
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