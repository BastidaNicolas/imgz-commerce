import { useContext } from "react";
import CheckBtn from "../buttons/checkBtn";
import { FilterContext } from "@/helpers/context";

export default function MultiSelect({ option }: any) {

  const {filters, setFilters}:any = useContext(FilterContext);


  const checkIfSelected = (value: string) => {
    if (filters.includes(value)) {
      return setFilters(filters.filter((item:any) => item !== value));
    }
    setFilters([...filters, value]);
    return 
  };

  return (
    <div className="w-full">
      <div className="text-xl font-bold mb-12 capitalize" >{option.name}</div>
      {option.options.map((item: any, index: any) => (
        <CheckBtn
          key={index}
          name={item.name}
          value={item.value}
          filter={filters}
          fnc={checkIfSelected}
        ></CheckBtn>
      ))}
    </div>
  );
}
