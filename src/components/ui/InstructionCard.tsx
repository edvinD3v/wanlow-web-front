interface InstructionCardProps {
    id: number;
}

export default function InstructionCard({ id }: InstructionCardProps) {
  const instructionData = [
    {
      id: 1,
      image: "/images/box1.webp",
      number: "1",
      title: "Order Your First Box",
      description: "You'll start with the Welcome Box, followed by 12 amazing boxes to discover",
    },
    {
      id: 2,
      image: "/images/box2.webp",
      number: "2",
      title: "Delivered To Your Door",
      description: "Check your mailbox monthly",
    },
    {
      id: 3,
      image: "/images/box3.webp",
      number: "3",
      title: "Get Outside And Have Some Fun!",
      description: "In the backyard or the backcountry, Wanlow is designed to inspire kids to spend more time outdoors",
    }
  ];
  const item = instructionData.find((data) => data.id === id);
  
  if (!item) return null;
  
  return (
    <div className="relative flex flex-col flex-1 justify-start items-center min-w-[355px] max-w-[550px]">
      <img
          className="w-full block object-contain max-h-full"
          src={item.image}
          alt="Box"
      />
      <div className="flex flex-col items-center w-[70%] -mt-61 h-fit md:w-[80%]">
          <p
              className="text-[#7EC6BC] text-center text-[102px] leading-none"
              style={{ fontFamily: "Mouse Memoirs, sans-serif", WebkitTextStroke: "1px white",}}
          >
              {item.number}
          </p>
          <h1 
              className="text-textPrimary text-[25px] mb-[15px] -m-[5px]"
              style={{ fontFamily: "Mouse Memoirs, sans-serif"}}
          >
              {item.title}
          </h1>
          <p
              className="text-textPrimary text-[18px] text-center break-words"
              style={{ fontFamily: "Noto Sans Display, sans-serif"}}
          >
              {item.description}
          </p>
      </div>
    </div>
  );
}
  