interface WelcomeListItemProps {
    id: number;
}

export default function WelcomeListItem({ id }: WelcomeListItemProps) {
    const itemData = [
        {
            id: 1,
            description: "Colorful backpack for all of your new gear",
        },
        {
            id: 2,
            description: "Treasure Map to collect your monthly badges as your progress through the subscription",
        },
        {
            id: 3,
            description: "Nature journal to keep track of your drawings and learnings",
        },
        {
            id: 4,
            description: "Booklet full of activities, games and learning material",
        }
    ];
    const item = itemData.find((data) => data.id === id);
  
    if (!item) return null;
    

    return (
        <div className="flex">
            <img className="w-[25px] object-contain mr-[15px]" src="/icons/star.webp" alt="" />
            <p className="text-textPrimary text-[18px] leading-[28px] font-medium" style={{ fontFamily: "Noto Sans Display, sans-serif"}}>{item.description}</p>
        </div>
    )
}