import { useContext, useEffect, useState } from "react";
import cookie from 'js-cookie';

import CartCard from "../cards/cartCard";
import { TotalCartItemsContext } from "@/context/context";

export default function CartBtn() {

  const cartCookie = cookie.get('imgz-cart');

  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState([]);
  const {totalCartItem, setTotalCartItem}:any = useContext(TotalCartItemsContext)

  const handelCartItemCount = () => {
    // const cart
  }

  useEffect(() => {
    if(cartCookie){
      const cookieData = JSON.parse(cartCookie)
      setCartItems(cookieData);
    }else{
      setCartItems([])
    }
  },[cartCookie])

  return (
    <div className="group" >
      <button onClick={() => setIsOpen(!isOpen)} >
        <svg
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 md:h-14 md:w-14"
        >
          <path
            d="M17.3982 34.9106H17.4007C17.4028 34.9106 17.4048 34.9102 17.4069 34.9102H46.0898C46.796 34.9102 47.4169 34.4417 47.6109 33.7628L53.939 11.6143C54.0754 11.1368 53.9798 10.6235 53.6811 10.2272C53.382 9.83084 52.9144 9.59766 52.418 9.59766H13.7497L12.6188 4.50838C12.4577 3.78452 11.8158 3.26953 11.0742 3.26953H1.58203C0.708206 3.26953 0 3.97774 0 4.85156C0 5.72539 0.708206 6.43359 1.58203 6.43359H9.8053C10.0055 7.33543 15.2172 30.7882 15.5171 32.1375C13.8358 32.8683 12.6562 34.5447 12.6562 36.4922C12.6562 39.1091 14.7854 41.2383 17.4023 41.2383H46.0898C46.9637 41.2383 47.6719 40.5301 47.6719 39.6562C47.6719 38.7824 46.9637 38.0742 46.0898 38.0742H17.4023C16.5302 38.0742 15.8203 37.3644 15.8203 36.4922C15.8203 35.6212 16.5277 34.9126 17.3982 34.9106V34.9106ZM50.3205 12.7617L44.8963 31.7461H18.6713L14.4525 12.7617H50.3205Z"
            fill="black"
          />
          <path
            d="M15.8203 45.9844C15.8203 48.6013 17.9495 50.7305 20.5664 50.7305C23.1834 50.7305 25.3125 48.6013 25.3125 45.9844C25.3125 43.3674 23.1834 41.2383 20.5664 41.2383C17.9495 41.2383 15.8203 43.3674 15.8203 45.9844ZM20.5664 44.4023C21.4386 44.4023 22.1484 45.1122 22.1484 45.9844C22.1484 46.8566 21.4386 47.5664 20.5664 47.5664C19.6942 47.5664 18.9844 46.8566 18.9844 45.9844C18.9844 45.1122 19.6942 44.4023 20.5664 44.4023Z"
            fill="black"
          />
          <path
            d="M38.1797 45.9844C38.1797 48.6013 40.3088 50.7305 42.9258 50.7305C45.5427 50.7305 47.6719 48.6013 47.6719 45.9844C47.6719 43.3674 45.5427 41.2383 42.9258 41.2383C40.3088 41.2383 38.1797 43.3674 38.1797 45.9844ZM42.9258 44.4023C43.798 44.4023 44.5078 45.1122 44.5078 45.9844C44.5078 46.8566 43.798 47.5664 42.9258 47.5664C42.0536 47.5664 41.3438 46.8566 41.3438 45.9844C41.3438 45.1122 42.0536 44.4023 42.9258 44.4023Z"
            fill="black"
          />
        </svg>
      </button>
      <div className="bg-black px-1 absolute right-6 md:-right-1 bottom-7 md:bottom-8 text-white text-xs">
        {totalCartItem}
      </div>
      <CartCard isOpen={isOpen} setIsOpen={setIsOpen} cartItems={cartItems} setTotalCartItem={setTotalCartItem}/>
    </div>
  );
}
