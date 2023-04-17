
interface CheckBtnProps {
  value: string;
  name: string;
  filter: Array<string>;
  fnc:any
}

export default function CheckBtn({
  name,
  value,
  filter,
  fnc
}: CheckBtnProps) {

  return (
    <div className="flex items-center mb-8">
      <input
        className="appearance-none mr-5 md:mr-6 w-9 md:w-5 h-9 md:h-5 border-4 md:border-2 border-black hover:cursor-pointer checked:bg-check bg-center bg-no-repeat bg-contain"
        type="checkbox"
        name={name}
        id={name}
        value={value}
        checked={filter.includes(value)}
        onChange={() => fnc(value)}
        readOnly
      />
      <label className="hover:cursor-pointer text-xl capitalize" htmlFor={name}>
        {name}
      </label>
    </div>
  );
}
