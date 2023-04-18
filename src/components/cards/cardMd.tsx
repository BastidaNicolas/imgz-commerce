import Image from "next/image";
import AddBtn from "../buttons/addBtn";

export default function CardMd() {
  return (
    <div className="group flex flex-col w-full lg:max-w-[17.625rem]">
      <div className="relative h-[24.875rem] w-full mb-3">
        <div className="absolute bg-white z-10 text-xl py-1 px-3">
          Best Seller
        </div>
        <Image
          className="object-cover"
          src={"https://i.imgur.com/LANAaYd.jpg"}
          alt="image"
          fill
        ></Image>
        <div className="hidden group-hover:block absolute w-full bottom-0" >
          <AddBtn></AddBtn>
        </div>
      </div>
      <div className="text-xl text-neutral-600 font-bold mb-1">People</div>
      <div className="text-4xl text-black font-bold mb-2.5">Man</div>
      <div className="text-3xl text-neutral-600">$100.00</div>
    </div>
  );
}
