import { useContext, useEffect, useState } from "react";
import MultiSelect from "../filters/multiSelect";
import SingleSelect from "../filters/singleSelect";
import ExitBtn from "../buttons/exitBtn";
import { FilterContext, FiltersOpenContext } from "@/helpers/context";
import ClearBtn from "../buttons/clearBtn";
import SaveBtn from "../buttons/saveBtn";

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

//HAVE TO IMPLEMENT SOMETHING THAT WOULD MAKE CALLS AUTAMATICALY IF IN >= MD WIDTH SCREEN 
//AND HAVE TO CLICK SAVEBTN ON SMALLER SCREENS

export default function FilterCard() {
  const { filterMenuOpen, setFilterMenuOpen }: any =
    useContext(FiltersOpenContext);
  const {setFilters}: any =
    useContext(FilterContext);

  const handleResizeWindow = () => {
    if (window.innerWidth >= 768) {
      setFilterMenuOpen(true);
      return;
    }
    setFilterMenuOpen(false);
    return;
  };

  useEffect(() => {
    handleResizeWindow();
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          filterMenuOpen ? "block" : "hidden"
        } w-full fixed left-0 bottom-0  md:relative md:max-w-[17rem] md:mr-12 z-40 bg-white pt-7 md:pt-0 px-10 md:px-0 h-5/6 md:h-fit`}
      >
        <div className="md:hidden flex items-center justify-between">
          <div className=" text-3xl font-bold">Filter</div>
          <ExitBtn setIsOpen={setFilterMenuOpen}></ExitBtn>
        </div>
        <div className="w-full h-[75%] md:h-fit overflow-y-auto">
          <div className="w-full">
            <MultiSelect option={category}></MultiSelect>
            <div className="border-b border-neutral-300 mb-8"></div>
            <SingleSelect option={priceRange}></SingleSelect>
          </div>
        </div>
      </div>
      <div
        className={`${
          filterMenuOpen ? "flex" : "hidden"
        } md:hidden w-full fixed left-0 bottom-0 z-50 pt-6 pb-8 px-5 border-t-4 border-neutral-300 bg-white`}
      >
        <ClearBtn setState={setFilters} value={['']} ></ClearBtn>
        <div className="mx-2.5" ></div>
        <SaveBtn handleFunc={()=> console.log("handled")}></SaveBtn>
      </div>
    </>
  );
}
