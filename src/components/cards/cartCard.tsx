import ClearBtn from "../buttons/clearBtn";
import ExitBtn from "../buttons/exitBtn";
import CardSm from "./cardSm";

export default function CartCard({isOpen, setIsOpen}:any) {
  return (
    <div className={`${isOpen ? 'flex':'hidden'} absolute mt-8 right-0 bg-white group flex-col justify-between items-center max-w-md w-full py-5 px-6 border-4 border-neutral-300`}>
      <div className="mb-6 w-full flex justify-end">
        <ExitBtn setIsOpen={setIsOpen} ></ExitBtn>
      </div>
      <div className="pb-6 border-b mb-6 w-full">
        <CardSm></CardSm>
      </div>
      <ClearBtn></ClearBtn>
    </div>
  );
}
