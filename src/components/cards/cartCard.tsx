import ClearBtn from "../buttons/clearBtn";
import ExitBtn from "../buttons/exitBtn";
import PayBtn from "../buttons/payBtn";
import CardSm from "./cardSm";

export default function CartCard({ isOpen, setIsOpen }: any) {
  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } absolute mt-8 right-0 bg-white group flex-col justify-between items-center max-w-md w-full py-5 px-6 border-4 border-neutral-300 max-h-[30.313rem]`}
    >
      <div className="mb-6 w-full flex justify-end">
        <ExitBtn setIsOpen={setIsOpen}></ExitBtn>
      </div>
      <div className=" border-b mb-6 w-full overflow-y-auto">
        <CardSm></CardSm>
        <CardSm></CardSm>
        <CardSm></CardSm>
        <CardSm></CardSm>
        <CardSm></CardSm>
      </div>
      <div className="w-full flex">
        <ClearBtn></ClearBtn>
        <div className="mx-2.5"></div>
        <PayBtn></PayBtn>
      </div>
    </div>
  );
}
