import cookie from "js-cookie";
import { loadStripe } from "@stripe/stripe-js";

import ClearBtn from "../buttons/clearBtn";
import ExitBtn from "../buttons/exitBtn";
import PayBtn from "../buttons/payBtn";
import CardSm from "./cardSm";
import { trpc } from "@/utils/trpc";

export default function CartCard({ isOpen, setIsOpen, cartItems, setTotalCartItem }: any) {

  const creatCheckout = trpc.handleCheckoutSession.useMutation()
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY||'');

  const handleClearCart = (value: string) => {
    setIsOpen(false);
    cookie.set("imgz-cart", value);
    setTotalCartItem(0);
  };
  const handlePay = async () =>{
    const resp = await creatCheckout.mutateAsync(cartItems);
    const stripe = await stripePromise;

    if(stripe !== null){
      await stripe.redirectToCheckout({
        sessionId: resp.id
      })
    }
  }

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
            <PayBtn handleFunc={handlePay} ></PayBtn>
          </div>
        </>
      ) : (
        <div className="text-center pt-10 pb-14">Cart is empty! :(</div>
      )}
    </div>
  );
}
