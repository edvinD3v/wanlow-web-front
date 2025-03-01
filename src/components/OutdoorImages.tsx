// Styles for responsive design in /styles/outdoorImages.css
import "../styles/outdoorImages.css";
import OutdoorBackground from "./ui/OutdoorBackground";

export default function OutdoorImages() {
    return (
        <div 
            className="relative flex flex-col items-center w-full bg-cover bg-center bg-no-repeat px-[8%] min-h-fit mt-[200px] pb-[50px] bg-[#d4ece8]" 
            id="outdoorMain"
            // style={{ 
            //     backgroundImage: "url('/images/background/bgBlue.webp')",
            //     backgroundSize: "130%",
            //     backgroundPositionX: -250,
            //     backgroundPosition: "top center",
            // }}
        >
            {/* SVG for the blue background, commented background image above can also be used but requires some minor changes to fit well. */}
            <OutdoorBackground />
            
            <div className="flex flex-col items-center z-10">
                <h1 
                    className="text-[50px] text-textPrimary mt-[30px]" 
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
                            <div className="flex relative h-full w-full min-h-[370px]">
                                <img className="w-full h-[357px] object-contain object-left-bottom vmd:block hidden" src="/images/outdoorImg1.webp" alt="" />
                                <div className="absolute right-0 top-[36px] flex flex-col items-center w-[400px] h-[300px] max-h-[] bg-white rounded-md px-[33px] pt-[42px]" id="floatingNote">
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
        </div>
    );
  }
  