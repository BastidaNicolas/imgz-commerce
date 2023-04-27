import cookie from "js-cookie";

import ClearBtn from "../buttons/clearBtn";
import ExitBtn from "../buttons/exitBtn";
import PayBtn from "../buttons/payBtn";
import CardSm from "./cardSm";

export default function CartCard({ isOpen, setIsOpen, cartItems, setTotalCartItem }: any) {
  const handleClearCart = (value: string) => {
    setIsOpen(false);
    cookie.set("imgz-cart", value);
    setTotalCartItem(0);
  };

  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } absolute mt-8 right-0 bg-white group flex-col justify-between items-center max-w-md w-full py-5 px-6 border-4 border-neutral-300 max-h-[30.313rem]`}
    >
      <div className="mb-6 w-full flex justify-end">
        <ExitBtn setIsOpen={setIsOpen}></ExitBtn>
      </div>
      {cartItems.length !== 0 ? (
        <>
          <div className=" border-b mb-6 w-full overflow-y-auto">
            {cartItems.map((item: any, index:number) => (
              <CardSm key={item.id + index} data={item} />
            ))}
          </div>
          <div className="w-full flex flex-col md:flex-row">
            <ClearBtn setState={(value: string) => handleClearCart(value)} value={""}></ClearBtn>
            <div className="mb-1 md:mx-2.5"></div>
            <PayBtn></PayBtn>
          </div>
        </>
      ) : (
        <div className="text-center p-10">Cart is empty! :(</div>
      )}
    </div>
  );
}
