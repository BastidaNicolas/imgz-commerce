import { useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { FiltersOpenContext } from "@/helpers/context";

import MultiSelect from "../filters/multiSelect";
import SingleSelect from "../filters/singleSelect";
import ExitBtn from "../buttons/exitBtn";
import ClearBtn from "../buttons/clearBtn";
import SaveBtn from "../buttons/saveBtn";
import OrderFilter from "../filters/orderFilter";

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
    { value: "cheap", name: "cheap" },
    { value: "expensive", name: "expensive" },
    { value: "alright", name: "alright" },
  ],
};

//HAVE TO IMPLEMENT SOMETHING THAT WOULD MAKE CALLS AUTAMATICALY IF IN >= MD WIDTH SCREEN
//AND HAVE TO CLICK SAVEBTN ON SMALLER SCREENS

export default function FilterCard() {
  const { filterMenuOpen, setFilterMenuOpen }: any =
    useContext(FiltersOpenContext);

  const router = useRouter();
  const { filterBy } = router.query;
  const [selectedFilters, setSelectedFilters] = useState({
    ...router.query,
    filterBy: [''],
  });

  const setFilerRoute = (value: any) => {
    router.push(
      {
        pathname: "/",
        query: value,
      },
      undefined,
      { shallow: true }
    );
  };

  const handleResizeWindow = () => {
    if (window.innerWidth >= 1024) {
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

  useEffect(() => {
    if (!filterBy) {
      setSelectedFilters({
        ...router.query,
        filterBy: [],
      });
      return;
    }
    if (Array.isArray(filterBy)) {
      setSelectedFilters({
        ...router.query,
        filterBy: filterBy,
      });
      return;
    }
    setSelectedFilters({
      ...router.query,
      filterBy: [filterBy],
    });
  }, [filterBy]);

  return (
    <>
      <div
        className={`${
          filterMenuOpen ? "block" : "hidden"
        } w-full fixed left-0 bottom-0  lg:relative lg:max-w-[17rem] lg:mr-12 z-40 bg-white pb-32 lg:pb-0 pt-7 lg:pt-0 px-10 lg:px-0 h-[40rem] max-h-full lg:h-fit`}
      >
        <div className="lg:hidden flex items-center justify-between">
          <div className=" text-3xl font-bold">Filter</div>
          <ExitBtn setIsOpen={setFilterMenuOpen}></ExitBtn>
        </div>
        <div className="w-full h-full lg:h-fit overflow-y-auto">
          <div className="w-full">
            <div className="lg:hidden my-4 lg:my-0">
              <OrderFilter></OrderFilter>
            </div>
            <MultiSelect
              option={category}
              selectedFilters={selectedFilters}
              setFilerRoute={setFilerRoute}
            ></MultiSelect>
            <div className="border-b border-neutral-300 mb-8"></div>
            <SingleSelect
              option={priceRange}
              selectedFilters={selectedFilters}
              setFilerRoute={setFilerRoute}
            ></SingleSelect>
          </div>
        </div>
      </div>
      <div
        className={`${
          filterMenuOpen ? "flex" : "hidden"
        } lg:hidden w-full fixed left-0 bottom-0 z-50 pt-6 pb-8 px-5 border-t-4 border-neutral-300 bg-white`}
      >
        <ClearBtn
          setState={setFilerRoute}
          value={{ ...router.query, filterBy: [] }}
        ></ClearBtn>
        <div className="mx-2.5"></div>
        <SaveBtn handleFunc={() => console.log("handled")}></SaveBtn>
      </div>
    </>
  );
}
