interface ArrowButtonProps {
    right: boolean;
}

export default function ArrowButton({ right }: ArrowButtonProps) {
    return (
        <button className="group bg-white hover:bg-textPrimarybg-white hover:bg-textPrimary rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
                <g 
                    {...(!right && { transform: "translate(38 38) rotate(180)"})} // Apply transform only if right is false
                >
                    <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(2.794 2.602)">
                        <path 
                            d="M7.5,18H23.206" 
                            transform="translate(0 -1.576)" 
                            fill="none" 
                            stroke="#483729" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="1"
                            className="transition-colors duration-300 ease-out group-hover:stroke-white"
                        />
                        <path 
                            d="M18,7.5l6.551,4.974L18,17.449" 
                            transform="translate(-0.345 3.949)" 
                            fill="none" 
                            stroke="#483729" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="1"
                            className="transition-colors duration-300 ease-out group-hover:stroke-white"
                        />
                    </g>
                </g>
            </svg>
        </button>
    );
}
