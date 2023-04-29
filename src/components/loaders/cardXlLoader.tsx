export default function CardXlLoader() {
  return (
    <div className="group flex flex-col w-full pb-16 border-b border-neutral-300 mb-16">
      <div className="mb-11 grid grid-cols-10  gap-y-7">
        <div className="col-start-1 col-end-10 lg:col-start-1 lg:col-end-9 row-span-1 bg-neutral-300 animate-pulse h-12  max-w-3xl"></div>
        <div className="w-full bottom-0 col-start-1 col-end-11 lg:col-start-9 lg:col-end-11 row-span-1 row-start-3 row-end-4 lg:row-start-1 lg:row-end-2 bg-neutral-300 animate-pulse h-12"></div>
        <div className="relative h-[14.938rem] md:h-[34.563rem] w-full col-span-10 row-span-2 row-start-2 row-end-3 lg:row-start-2 lg:row-end-3 bg-neutral-300 animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <div className="mb-8 mb:mb-4 truncate bg-neutral-300 animate-pulse h-5 w-full max-w-sm"></div>
          <div className="hidden md:block mb-4 bg-neutral-300 animate-pulse h-5 w-full max-w-[10rem]"></div>
          <p className="text-lg mb-8 mb:mb-4 text-neutral-600 max-w-[43.125rem] bg-neutral-300 animate-pulse h-52"></p>
        </div>
        <div className="flex flex-col items-start lg:items-end">
          <div className=" mb-8 bg-neutral-300 animate-pulse h-5 w-full max-w-[10rem]"></div>
          <div className="w-full flex mb-14 justify-start lg:justify-end">
            <div className="relative mr-7 lg:mr-0 ml-0 lg:ml-8 w-[6.098rem] md:w-[7.313rem] h-[7.661rem] md:h-[9.188rem] bg-neutral-300 animate-pulse"></div>
            <div className="relative mr-7 lg:mr-0 ml-0 lg:ml-8 w-[6.098rem] md:w-[7.313rem] h-[7.661rem] md:h-[9.188rem] bg-neutral-300 animate-pulse"></div>
            <div className="relative mr-7 lg:mr-0 ml-0 lg:ml-8 w-[6.098rem] md:w-[7.313rem] h-[7.661rem] md:h-[9.188rem] bg-neutral-300 animate-pulse"></div>
          </div>
          <div className=" mb-4  bg-neutral-300 animate-pulse h-5 w-full max-w-[6rem]"></div>
          <div className="text-xl mb:text-base mb-4 text-neutral-600 bg-neutral-300 animate-pulse h-5  w-full max-w-[10rem]"></div>
          <div className="text-xl mb:text-base text-neutral-600 bg-neutral-300 animate-pulse  w-full max-w-[10rem] h-5"></div>
        </div>
      </div>
    </div>
  );
}
