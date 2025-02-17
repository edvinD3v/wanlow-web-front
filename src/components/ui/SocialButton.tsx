type SocialButtonProps = {
  type: "ig" | "yt" | "fb" | "tt";
};

export default function SocialButton({ type }: SocialButtonProps) {
  {/* Buttons for social media on footer */}
  const renderSVG = () => {
    switch (type) {
      case "ig":
        return (   
        <svg width="55" height="55" viewBox="0 0 55 55" className="group">
            <g>
                <circle cx="27.5" cy="27.5" r="27.5" fill="#fff" className="transition-colors duration-300 ease-out group-hover:fill-[#7ec6bc]"/>
                <path 
                d="M11,7.6a5.639,5.639,0,1,0,5.639,5.639A5.63,5.63,0,0,0,11,7.6ZM11,16.9a3.666,3.666,0,1,1,3.666-3.666A3.673,3.673,0,0,1,11,16.9Zm7.185-9.536A1.315,1.315,0,1,1,16.867,6.05,1.312,1.312,0,0,1,18.182,7.365ZM21.917,8.7a6.509,6.509,0,0,0-1.777-4.609,6.552,6.552,0,0,0-4.609-1.777c-1.816-.1-7.259-.1-9.075,0A6.543,6.543,0,0,0,1.849,4.087,6.531,6.531,0,0,0,.072,8.7c-.1,1.816-.1,7.259,0,9.075a6.509,6.509,0,0,0,1.777,4.609,6.56,6.56,0,0,0,4.609,1.777c1.816.1,7.259.1,9.075,0a6.509,6.509,0,0,0,4.609-1.777,6.552,6.552,0,0,0,1.777-4.609c.1-1.816.1-7.254,0-9.07ZM19.571,19.719a3.712,3.712,0,0,1-2.091,2.091c-1.448.574-4.883.442-6.483.442s-5.04.128-6.483-.442a3.712,3.712,0,0,1-2.091-2.091c-.574-1.448-.442-4.883-.442-6.483s-.128-5.04.442-6.483A3.712,3.712,0,0,1,4.514,4.661C5.962,4.087,9.4,4.219,11,4.219s5.04-.128,6.483.442a3.712,3.712,0,0,1,2.091,2.091c.574,1.448.442,4.883.442,6.483S20.146,18.276,19.571,19.719Z" 
                transform="translate(16.005 14.262)" 
                fill="#483729"
                className="transition-colors duration-300 ease-out group-hover:fill-white"/>
            </g>
        </svg>
        );
      case "fb":
        return (
        <svg width="55" height="55" viewBox="0 0 55 55" className="group">
            <g transform="translate(0)">
                <circle cx="27.5" cy="27.5" r="27.5" transform="translate(0)" fill="#fff" className="transition-colors duration-300 ease-out group-hover:fill-[#629a92]"/>
                <path 
                d="M12.62,12.375l.611-3.981H9.411V5.81a1.991,1.991,0,0,1,2.245-2.151h1.737V.269A21.18,21.18,0,0,0,10.309,0c-3.146,0-5.2,1.907-5.2,5.359V8.394h-3.5v3.981h3.5V22h4.3V12.375Z" 
                transform="translate(20.391 17)" 
                fill="#483729"
                className="transition-colors duration-300 ease-out group-hover:fill-white"/>
            </g>
        </svg>
        );
      case "yt":
        return (
        <svg width="55" height="55.053" viewBox="0 0 55 55.053" className="group">
            <circle cx="27.5" cy="27.5" r="27.5" transform="translate(0)" fill="#fff" className="transition-colors duration-300 ease-out group-hover:fill-[#629a92]"/>
            <path d="M22.59,6.855a2.728,2.728,0,0,0-1.945-1.9c-1.716-.45-8.6-.45-8.6-.45s-6.88,0-8.6.45a2.728,2.728,0,0,0-1.945,1.9,27.477,27.477,0,0,0-.46,5.186,27.477,27.477,0,0,0,.46,5.186A2.688,2.688,0,0,0,3.455,19.1c1.716.45,8.6.45,8.6.45s6.88,0,8.6-.45a2.688,2.688,0,0,0,1.945-1.875,27.477,27.477,0,0,0,.46-5.186,27.477,27.477,0,0,0-.46-5.186ZM9.8,15.225V8.858l5.75,3.183L9.8,15.225Z" 
            transform="translate(15.95 15.5)" 
            fill="#483729"
            className="transition-colors duration-300 ease-out group-hover:fill-white"/>
        </svg>
        );
      case "tt":
        return (
        <svg width="55.113" height="55" viewBox="0 0 55.113 55" className="group">
            <circle cx="27.5" cy="27.5" r="27.5" fill="#fff" className="transition-colors duration-300 ease-out group-hover:fill-[#629a92]"/>
            <path d="M12.407.018C13.608,0,14.8.009,15.991,0a5.71,5.71,0,0,0,1.6,3.822,6.464,6.464,0,0,0,3.887,1.641V9.157a9.812,9.812,0,0,1-3.85-.889,11.326,11.326,0,0,1-1.485-.852c-.009,2.677.009,5.353-.018,8.021a7,7,0,0,1-1.237,3.612,6.829,6.829,0,0,1-5.417,2.942,6.684,6.684,0,0,1-3.74-.944,6.912,6.912,0,0,1-3.346-5.234c-.018-.458-.027-.917-.009-1.366a6.9,6.9,0,0,1,8-6.123c.018,1.357-.037,2.713-.037,4.07a3.145,3.145,0,0,0-4.015,1.943A3.636,3.636,0,0,0,6.2,15.812a3.12,3.12,0,0,0,3.208,2.631,3.08,3.08,0,0,0,2.539-1.476A2.115,2.115,0,0,0,12.324,16c.092-1.641.055-3.272.064-4.913C12.4,7.388,12.379,3.7,12.407.018Z" 
            transform="translate(15.631 17)" 
            fill="#483729"
            className="transition-colors duration-300 ease-out group-hover:fill-white"/>
        </svg>
        );
      default:
        return null;
    }
  };

  return <div>{renderSVG()}</div>;
};
