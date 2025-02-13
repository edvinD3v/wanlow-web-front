import "../styles/outdoorImages.css";

export default function OutdoorImages() {
    return (
        <div 
            className="flex flex-col items-center bg-cover bg-center bg-no-repeat pt-[230px] px-[8%] min-h-[1726px]" id="outdoorMain"
            style={{ 
                backgroundImage: "url('/images/background/bgBlue.webp')",
                backgroundSize: "130%",
                backgroundPositionX: -250,
                backgroundPosition: "top center",
            }}
        >
            <h1 
                className="text-[50px] text-textPrimary" 
                style={{ fontFamily: "Mouse Memoirs, sans-serif"}}
            >
                Outdoor Fun Continues Each Month
            </h1>
            <p
                className="text-[18px] text-textPrimary mt-[15px]"
                style={{ fontFamily: "Noto Sans Display, sans-serif"}}
            >
                Each new box comes with products, activities, and a booklet with learning material and games
            </p>

            <div className="flex gap-[30px] mt-[30px] object-top" id="outdoorMain2">
                <div className="flex flex-col gap-[30px] min-w-[600px]" id="leftImages">
                    <div>
                        <div className="flex relative h-full w-full">
                            <img className="w-full h-[357px] object-contain object-left-bottom" src="/images/outdoorImg1.webp" alt="" />
                            <div className="absolute right-0 top-[36px] flex flex-col items-center w-[400px] h-[300px] bg-white rounded-md px-[33px] pt-[42px]" id="floatingNote">
                                <img className="absolute w-[130px] object-contain -top-5" src="/images/stickerImg.webp" alt="" />
                                <p 
                                    className="text-textPrimary text-[18px] text-center"
                                    style={{ fontFamily: "Noto Sans Display, sans-serif"}}
                                >
                                    You can expect lots of different themes all built around learning and 
                                    spending time outdoors like Animals, Star Gazing, Gardening, Parks, 
                                    Outdoor Crafts & Games, and many more!
                                </p>

                                <button
                                    className="rounded-md bg-[#7ec6bc] text-[#483729] h-[50px] w-[167px] text-[20px] mt-[30px] hover:bg-[#629a92] hover:text-white transition duration-300" 
                                    style={{ fontFamily: "Mouse Memoirs, sans-serif" }}
                                >
                                    Subscribe Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <img className="w-full h-[459px] object-contain object-top" id="image2" src="/images/outdoorImg2.webp" alt="" />
                </div>
                <div className="flex flex-col gap-[30px] mt-[20px] min-w-[300px] w-[380px]" id="rightImages">
                    <img className="w-full object-contain object-top" src="/images/outdoorImg3.webp" alt="" />

                    <img className="w-full object-contain object-top" src="/images/outdoorImg4.webp" alt="" />
                </div>
            </div>
        </div>
    );
  }
  