import Community from "./Community";
import ArrowButton from "./ui/ArrowButton";

export default function Reviews() {
    return (
        <div className="flex flex-col items-center justify-center bg-background mt-[150px] px-[8%] md:pb-[10%] lg:pb-[15%] pb-[30%] z-100">
            <h2 
                className="sm:text-[50px] text-[40px] text-textPrimary text-center"
                style={{ fontFamily: "Mouse Memoirs, sans-serif"}}
            >
                What Are Our Adventurers Saying
            </h2>

            <div className="flex items-center justify-center w-full mt-[40px] max-w-[80%] sm:gap-[64px] gap-[30px]">

            <ArrowButton right={false}/>

            <div className="relative flex flex-col items-center text-center z-2">
                <svg className="mb-[15px]" xmlns="http://www.w3.org/2000/svg" width="116.006" height="19.026" viewBox="0 0 116.006 19.026">
                    <g id="Group_776" data-name="Group 776" transform="translate(-535 -3828.176)">
                        <path id="Icon_feather-star" data-name="Icon feather-star" d="M13,3l3.091,6.262,6.912,1.01-5,4.871,1.18,6.882L13,18.775,6.821,22.026,8,15.144,3,10.272l6.912-1.01Z" transform="translate(532 3825.176)" fill="#db7623"/>
                        <path id="Icon_feather-star-2" data-name="Icon feather-star" d="M13,3l3.091,6.262,6.912,1.01-5,4.871,1.18,6.882L13,18.775,6.821,22.026,8,15.144,3,10.272l6.912-1.01Z" transform="translate(556 3825.176)" fill="#db7623"/>
                        <path id="Icon_feather-star-3" data-name="Icon feather-star" d="M13,3l3.091,6.262,6.912,1.01-5,4.871,1.18,6.882L13,18.775,6.821,22.026,8,15.144,3,10.272l6.912-1.01Z" transform="translate(580 3825.176)" fill="#db7623"/>
                        <path id="Icon_feather-star-4" data-name="Icon feather-star" d="M13,3l3.091,6.262,6.912,1.01-5,4.871,1.18,6.882L13,18.775,6.821,22.026,8,15.144,3,10.272l6.912-1.01Z" transform="translate(604 3825.176)" fill="#db7623"/>
                        <path id="Icon_feather-star-5" data-name="Icon feather-star" d="M13,3l3.091,6.262,6.912,1.01-5,4.871,1.18,6.882L13,18.775,6.821,22.026,8,15.144,3,10.272l6.912-1.01Z" transform="translate(628 3825.176)" fill="#db7623"/>
                    </g>
                </svg>

                <p 
                    className="text-textPrimary sm:text-[22px] text-[16px]"
                    style={{ fontFamily: "Noto Sans Display, sans-serif"}}
                >
                    “Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.“
                </p>
                <p 
                    className="mt-[30px] text-[#db7623] text-[22px] font-bold"
                    style={{ fontFamily: "Noto Sans Display, sans-serif"}}
                >
                    - David C.
                </p>
                </div>

                <ArrowButton right={true}/>
            </div>
            <img className="absolute h-[250px] -left-10" src="/images/background/mapImg.webp" alt="" />
            <img className="absolute w-[116px] right-0 vlg:right-150 md:right-50" src="/images/background/binocularsImg.webp" alt="" />
            <Community />
        </div>
    );
}
  