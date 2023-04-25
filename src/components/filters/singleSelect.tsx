import CheckBtn from "../buttons/checkBtn";
import { useRouter } from "next/router";

export default function SingleSelect({
  option,
  selectedFilters,
  setFilerRoute,
}: any) {
  const router = useRouter();
  const {page, filterBy } = router.query;

  const checkIfSelected = (value: string) => {
    if (Array.isArray(filterBy)) {
      if (filterBy.includes(value)) {
        setFilerRoute({...router.query, page: '1', filterBy: [...filterBy.filter((item: any) => item !== value)]});
        return;
      }

      let tempArr = filterBy.filter((filter: string) => {
        return !option.options.some((item: any) => item.value.includes(filter));
      });

      // tempArr.push(value);
      setFilerRoute({...router.query, page: '1', filterBy: [...tempArr, value]});
      return;
    }
    if(filterBy === value){
      setFilerRoute({...router.query, page: '1', filterBy: []});
      return;
    }
    if(!option.options.some((item: any) => item.value.includes(filterBy))){
      setFilerRoute({...router.query, page: '1', filterBy: [filterBy, value]});
      return;
    }
    setFilerRoute({...router.query, page: '1', filterBy: value});
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
