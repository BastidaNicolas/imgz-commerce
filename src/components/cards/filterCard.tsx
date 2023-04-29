import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FiltersOpenContext } from "@/context/context";

import MultiSelect from "../filters/multiSelect";
import SingleSelect from "../filters/singleSelect";
import ClearBtn from "../buttons/clearBtn";
import SaveBtn from "../buttons/saveBtn";
import OrderFilter from "../filters/orderFilter";

const category = {
  name: "category",
  options: [
    { value: "people", name: "people" },
    { value: "nature", name: "nature" },
    { value: "items", name: "items" },
  ],
};
const priceRange = {
  name: "price range",
  options: [
    { value: [0, 50], name: "< 50" },
    { value: [50, 100], name: "50 - 100" },
    { value: [100, 0], name: "> 100" },
  ],
};

export default function FilterCard() {
  const { filterMenuOpen, setFilterMenuOpen }: any = useContext(FiltersOpenContext);

  const router = useRouter();
  const { filterBy, min, max } = router.query;
  const [selectedFilters, setSelectedFilters] = useState({
    ...router.query,
    filterBy: [""],
  });
  const [minState, setMinState] = useState({
    ...router.query,
  });

  const setFilerRoute = (value: any) => {
    router.push(
      {
        pathname: "/",
        query: value,
      },
      undefined,
      { shallow: true },
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

  useEffect(() => {
    if (!min) {
      setMinState({
        ...router.query,
        min: undefined,
      });
      return;
    }
    setMinState({
      ...router.query,
      min: min,
    });
  }, [min]);

  useEffect(() => {
    if (!max) {
      setMinState({
        ...router.query,
        max: undefined,
      });
      return;
    }
    setMinState({
      ...router.query,
      max: max,
    });
  }, [max]);

  return (
    <>
      <div
        className={`${
          filterMenuOpen ? "block" : "translate-y-[85vh]"
        } w-full fixed left-0 bottom-0 duration-300 lg:relative lg:max-w-[17rem] lg:mr-12 z-40 bg-white pb-32 lg:pb-0 pt-7 lg:pt-0 px-10 lg:px-0 h-[40rem] max-h-full lg:h-fit`}
      >
        <div className="lg:hidden flex items-center justify-between">
          <div className=" text-3xl font-bold">Filter</div>
        </div>
        <div className="w-full h-full lg:h-fit overflow-y-auto">
          <div className="w-full">
            <div className="lg:hidden my-4 lg:my-0">
              <OrderFilter></OrderFilter>
            </div>
            <MultiSelect option={category} selectedFilters={selectedFilters} setFilerRoute={setFilerRoute}></MultiSelect>
            <div className="border-b border-neutral-300 mb-8"></div>
            <SingleSelect option={priceRange} routestate={minState} setFilerRoute={setFilerRoute}></SingleSelect>
          </div>
        </div>
      </div>
      <div
        className={`${
          filterMenuOpen ? "flex" : "flex translate-y-52"
        } lg:hidden w-full fixed left-0 bottom-0 delay-75 duration-300 z-50 pt-6 pb-8 px-5 border-t-4 border-neutral-300 bg-white`}
      >
        <ClearBtn setState={setFilerRoute} value={{ page: "1", orderBy: "price", ascending: "desc" }}></ClearBtn>
        <div className="mx-2.5"></div>
        <SaveBtn handleFunc={() => setFilterMenuOpen(false)}></SaveBtn>
      </div>
    </>
  );
}
