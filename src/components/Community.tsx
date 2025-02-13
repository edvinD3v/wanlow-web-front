import ArrowButton from "./ui/arrowButton";

export default function Community() {
    return (
        <div className="flex flex-col mt-[140px] text-center z-1 items-center">
            <h1 
                className="text-[50px] text-textPrimary"
                style={{ fontFamily: "Mouse Memoirs, sans-serif"}}
            >
                Join Our Community!
            </h1>

            <div className="flex gap-[16px] justify-between items-center mt-[40px]">
                <ArrowButton right={false}/>

                <div className="flex gap-[15px]">
                    <img className="aspect-square max-h-[287px] min-w-0 object-cover" src="/images/slideImg1.webp" alt="" />
                    <img className="hidden sm:block aspect-square max-h-[287px] min-w-0 object-cover" src="/images/slideImg2.webp" alt="" />
                    <img className="hidden md:block aspect-square max-h-[287px] min-w-0 object-cover" src="/images/slideImg3.webp" alt="" />
                    <img className="hidden vlg:block aspect-square max-h-[287px] min-w-0 object-cover" src="/images/slideImg4.webp" alt="" />
                </div>
                <ArrowButton right={true}/>
            </div>

            <button
                className="group hover:bg-textPrimarybg-white flex justify-center items-center gap-1 rounded-md bg-[#7ec6bc] text-textPrimary h-[50px] w-[155px] text-[22px] mt-[40px] hover:bg-[#629a92] hover:text-white transition duration-300" 
                style={{ fontFamily: "Mouse Memoirs, sans-serif" }}
            >
                <svg width="20" height="20" viewBox="0 0 22 21.995">
                    <path 
                    d="M11,7.6a5.639,5.639,0,1,0,5.639,5.639A5.63,5.63,0,0,0,11,7.6ZM11,16.9a3.666,3.666,0,1,1,3.666-3.666A3.673,3.673,0,0,1,11,16.9Zm7.185-9.536A1.315,1.315,0,1,1,16.867,6.05,1.312,1.312,0,0,1,18.182,7.365ZM21.917,8.7a6.509,6.509,0,0,0-1.777-4.609,6.552,6.552,0,0,0-4.609-1.777c-1.816-.1-7.259-.1-9.075,0A6.543,6.543,0,0,0,1.849,4.087,6.531,6.531,0,0,0,.072,8.7c-.1,1.816-.1,7.259,0,9.075a6.509,6.509,0,0,0,1.777,4.609,6.56,6.56,0,0,0,4.609,1.777c1.816.1,7.259.1,9.075,0a6.509,6.509,0,0,0,4.609-1.777,6.552,6.552,0,0,0,1.777-4.609c.1-1.816.1-7.254,0-9.07ZM19.571,19.719a3.712,3.712,0,0,1-2.091,2.091c-1.448.574-4.883.442-6.483.442s-5.04.128-6.483-.442a3.712,3.712,0,0,1-2.091-2.091c-.574-1.448-.442-4.883-.442-6.483s-.128-5.04.442-6.483A3.712,3.712,0,0,1,4.514,4.661C5.962,4.087,9.4,4.219,11,4.219s5.04-.128,6.483.442a3.712,3.712,0,0,1,2.091,2.091c.574,1.448.442,4.883.442,6.483S20.146,18.276,19.571,19.719Z" 
                    transform="translate(0.005 -2.238)" 
                    fill="#483729"
                    className="transition-colors duration-300 ease-out group-hover:fill-white"
                    />
                </svg>
                Follow Us
            </button>
        </div>
    );
}