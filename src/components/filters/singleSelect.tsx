import CheckBtn from "../buttons/checkBtn";
import { useRouter } from "next/router";

export default function SingleSelect({ option, routestate, setFilerRoute }: any) {
  const router = useRouter();
  const { filterBy, min, max } = router.query;

  const checkIfSelected = (value: any) => {
    if (min == value[0] && max == value[1]) {
      setFilerRoute({ ...router.query, page: "1", max: undefined, min: undefined });
      return;
    }

    setFilerRoute({ ...router.query, page: "1", min: value[0], max: value[1] });
    return;
  };

  console.log(option.options);

  return (
    <div className="w-full">
      <div className="text-xl font-bold mb-12 capitalize">{option.name}</div>
      {option.options.map((item: any, index: any) => (
        <CheckBtn
          key={index}
          name={item.name}
          value={item.value}
          filter={[Number(routestate.min), Number(routestate.max)]}
          fnc={checkIfSelected}
        ></CheckBtn>
      ))}
    </div>
  );
}
