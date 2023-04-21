import { useEffect, useState } from "react";
import CheckBtn from "../buttons/checkBtn";
import { useRouter } from "next/router";

export default function MultiSelect({ option, selectedFilters, setFilerRoute }: any) {

  const router = useRouter();
  const { page, filterBy } = router.query;


  const checkIfSelected = (value: string) => {
    if (Array.isArray(filterBy)) {
      if (filterBy.includes(value)) {
        setFilerRoute({
          page,
          filterBy: filterBy.filter((item) => item !== value),
        });
        return;
      }
      setFilerRoute({ page, filterBy: [...selectedFilters.filterBy, value] });
      return;
    }
    if (filterBy === value) {
      setFilerRoute({ page, filterBy: [] });
      return;
    }
    const newArray = filterBy ? [filterBy, value]:value
    setFilerRoute({ page, filterBy: newArray });
    return;
  };


  return (
    <div className="w-full">
      <div className="text-xl font-bold mb-12 capitalize">{option.name}</div>
      {option.options.map((item: any, index: any) => (
        <CheckBtn
          key={index}
          name={item.name}
          value={item.value}
          filter={selectedFilters.filterBy}
          fnc={checkIfSelected}
        ></CheckBtn>
      ))}
    </div>
  );
}
