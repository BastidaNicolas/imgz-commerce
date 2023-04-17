import Image from "next/image";
import AddBtn from "../buttons/addBtn";

export default function CardXl() {
  return (
    <div className="group flex flex-col w-full pb-16 border-b border-neutral-300 mb-16">
      <div className="mb-11 grid grid-cols-10  gap-y-7">
        <div className="text-3xl font-bold truncate col-start-1 col-end-11 lg:col-start-1 lg:col-end-9 row-span-1" >Samurai King Resting</div>
        <div className="w-full bottom-0 col-start-1 col-end-11 lg:col-start-9 lg:col-end-11 row-span-1 row-start-3 row-end-4 lg:row-start-1 lg:row-end-2">
          <AddBtn></AddBtn>
        </div>
        <div className="relative h-[34.563rem] w-full col-span-10 row-span-2 row-start-2 row-end-3 lg:row-start-2 lg:row-end-3">
          <Image
            className="object-cover"
            src={"https://i.imgur.com/LANAaYd.jpg"}
            alt="image"
            fill
          ></Image>
          <div className="absolute bg-white z-10 text-xl py-5 px-14 bottom-0 left-0">
            Photo of the day
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <div className="font-bold text-xl mb-4 truncate">
            About the Samurai King Resting
          </div>
          <div className="font-bold text-xl mb-4 text-neutral-600">Pets</div>
          <p className="text-lg mb-4 text-neutral-600 max-w-[43.125rem]">
            So how did the classical Latin become so incoherent? According to
            McClintock, a 15th century typesetter likely scrambled part of
            Cicero's De Finibus in order to provide placeholder text to mockup
            various fonts for a type specimen book.So how did the classical
            Latin become so incoherent? According to McClintock, a 15th century
            typesetter likely scrambled part of Cicero's De Finibus in order to
            provide placeholder text to mockup various fonts for a type specimen
            book.So how did the classical Latin become so incoherent? According
            to McClintock.
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="font-bold text-xl mb-8 truncate">People also buy</div>
          <div className="flex mb-14" >
            <div className="relative ml-8 w-[7.313rem] h-[9.188rem]">
              <Image
                className="object-cover"
                src={"https://i.imgur.com/LANAaYd.jpg"}
                alt="image"
                fill
              ></Image>
            </div>
            <div className="relative ml-8 w-[7.313rem] h-[9.188rem]">
              <Image
                className="object-cover"
                src={"https://i.imgur.com/LANAaYd.jpg"}
                alt="image"
                fill
              ></Image>
            </div>
            <div className="relative ml-8 w-[7.313rem] h-[9.188rem]">
              <Image
                className="object-cover"
                src={"https://i.imgur.com/LANAaYd.jpg"}
                alt="image"
                fill
              ></Image>
            </div>
          </div>
          <div className="font-bold text-xl mb-4 truncate">Details</div>
          <div className="text-base mb-4 text-neutral-600">
            Size: 1020 x 1020 pixel
          </div>
          <div className="text-base text-neutral-600">Size: 15 mb</div>
        </div>
      </div>
    </div>
  );
}
