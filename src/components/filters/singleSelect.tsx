import { useContext } from "react";
import CheckBtn from "../buttons/checkBtn";
import { FilterContext } from "@/helpers/context";

export default function SingleSelect({ option }: any) {

  const {filters, setFilters}:any = useContext(FilterContext);

  const checkIfSelected = (value: string) => {
    if (filters.includes(value)) {
      setFilters([...filters.filter((item: any) => item !== value)]);
      return;
    }

    let tempArr = filters.filter((filter:string) => {
        return !option.options.some((item:any) => item.value.includes(filter));
      }
    )

    tempArr.push(value)
    setFilters(tempArr);
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
          filter={filters}
          fnc={checkIfSelected}
        ></CheckBtn>
      ))}
    </div>
  );
}
