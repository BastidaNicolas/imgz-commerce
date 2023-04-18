import Image from "next/image";

export default function CardSm() {
  return (
    <div className="group flex justify-between items-center w-full mb-1">
      <div className="truncate m-1" >
        <div className="text-lg md:text-xl text-black font-bold mb-1 md:mb-2.5 truncate">Samurai King Resting</div>
        <div className="text-xl md:text-3xl text-neutral-600 truncate">$100.00</div>
      </div>
      <div className="relative h-[4rem] md:h-[5.375rem] max-w-[7rem] md:max-w-[9.313rem] w-full">
        <Image
          className="object-cover"
          src={"https://i.imgur.com/LANAaYd.jpg"}
          alt="image"
          fill
        ></Image>
      </div>
    </div>
  );
}
