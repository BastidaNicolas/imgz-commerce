interface CheckBtnProps {
  value: string;
  name: string;
  filter: Array<string | number>;
  fnc: any;
}

function arraysMatch(arr1: number[], arr2: number[]) {
  // Check if arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Compare each element at the corresponding index
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

export default function CheckBtn({ name, value, filter, fnc }: CheckBtnProps) {
  return (
    <div className="flex items-center mb-8">
      <input
        className="appearance-none mr-5 md:mr-6 w-9 md:w-5 h-9 md:h-5 border-4 md:border-2 border-black hover:cursor-pointer checked:bg-check bg-center bg-no-repeat bg-contain"
        type="checkbox"
        name={name}
        id={name}
        value={value}
        checked={Array.isArray(value) ? arraysMatch(value, filter as number[]) : filter?.includes(value)}
        onChange={() => fnc(value)}
        readOnly
      />
      <label className="hover:cursor-pointer text-xl capitalize" htmlFor={name}>
        {name}
      </label>
    </div>
  );
}
