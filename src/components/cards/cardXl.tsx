import Image from "next/image";
import AddBtn from "../buttons/addBtn";

export default function CardXl({ photoOfTheDay, peopleAlsoBuy }: any) {
  const renderPeopleAlsoBuy = (value: any[]) => {
    return (
      <>
        {value.map((product) => (
          <div key={product.id} className="relative mr-7 lg:mr-0 ml-0 lg:ml-8 w-[6.098rem] md:w-[7.313rem] h-[7.661rem] md:h-[9.188rem]">
            <Image
              className="object-cover"
              src={product.imageUrl}
              alt={"image of " + product.title}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 20vw,
                  10vw"
              placeholder="blur"
            ></Image>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="group flex flex-col w-full pb-16 border-b border-neutral-300 mb-16">
      <div className="mb-11 grid grid-cols-10  gap-y-7">
        <div className="text-3xl font-bold truncate col-start-1 col-end-11 lg:col-start-1 lg:col-end-9 row-span-1 capitalize">
          {photoOfTheDay.title}
        </div>
        <div className="w-full bottom-0 col-start-1 col-end-11 lg:col-start-9 lg:col-end-11 row-span-1 row-start-3 row-end-4 lg:row-start-1 lg:row-end-2">
          <AddBtn data={photoOfTheDay} />
        </div>
        <div className="relative h-[14.938rem] md:h-[34.563rem] w-full col-span-10 row-span-2 row-start-2 row-end-3 lg:row-start-2 lg:row-end-3">
          <Image
            className="object-cover"
            src={photoOfTheDay.imageUrl}
            alt={"image of " + photoOfTheDay.title}
            sizes="(max-width: 768px) 90vw,
                  (max-width: 1200px) 50vw,
                  65vw"
            fill
            placeholder="blur"
            priority
          ></Image>
          <div className="absolute bg-white z-10 text-base md:text-xl py-5 px-14 bottom-0 left-0">Photo of the day</div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <div className="font-bold text-xl mb-8 mb:mb-4 truncate capitalize">{"About the " + photoOfTheDay.title}</div>
          <div className="hidden md:block font-bold text-xl mb-4 text-neutral-600 capitalize">{photoOfTheDay.category}</div>
          <p className="text-lg mb-8 mb:mb-4 text-neutral-600 max-w-[43.125rem]">{photoOfTheDay.description}</p>
        </div>
        <div className="flex flex-col items-start lg:items-end">
          <div className="font-bold text-xl mb-8 truncate">People also buy</div>
          <div className="w-full flex mb-14 justify-start lg:justify-end">{renderPeopleAlsoBuy(peopleAlsoBuy)}</div>
          <div className="font-bold text-xl mb-4 truncate">Details</div>
          <div className="text-xl mb:text-base mb-4 text-neutral-600">
            {"Size: " + photoOfTheDay.details.size.width + " x " + photoOfTheDay.details.size.height + " cm "}
          </div>
          <div className="text-xl mb:text-base text-neutral-600">{"Weight: " + photoOfTheDay.details.weight + " g"}</div>
        </div>
      </div>
    </div>
  );
}
