import { useContext, useEffect, useState } from "react";
import MultiSelect from "../filters/multiSelect";
import SingleSelect from "../filters/singleSelect";
import ExitBtn from "../buttons/exitBtn";
import { FiltersOpenContext } from "@/helpers/context";

const category = {
  name: "category",
  options: [
    { value: "human", name: "human" },
    { value: "animal", name: "animal" },
    { value: "item", name: "item" },
  ],
};
const priceRange = {
  name: "price range",
  options: [
    { value: "cheap ", name: "cheap" },
    { value: "expensive", name: "expensive" },
    { value: "alright", name: "alright" },
  ],
};

export default function FilterCard() {
  const {filterMenuOpen, setFilterMenuOpen}:any = useContext(FiltersOpenContext);

  const handleResizeWindow = () => {
    if (window.innerWidth >= 768) {
      setFilterMenuOpen(true);
      return
    }
    setFilterMenuOpen(false);
    return;
  };

  useEffect(() => {
      window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <div className={`${filterMenuOpen ? 'block':'hidden'} w-full fixed bottom-0  md:relative md:max-w-[17rem] md:mr-12 z-50 bg-white pt-7 md:pt-0 px-10 md:px-0 h-5/6 md:h-fit`}>
      <div className="md:hidden flex items-center justify-between">
        <div className=" text-3xl font-bold">Filter</div>
        <ExitBtn setIsOpen={setFilterMenuOpen}></ExitBtn>
      </div>
      <div className="w-full">
        <MultiSelect option={category}></MultiSelect>
        <div className="border-b border-neutral-300 mb-8"></div>
        <SingleSelect option={priceRange}></SingleSelect>
      </div>
    </div>
  );
}
