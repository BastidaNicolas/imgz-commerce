import { TotalCartItemsContext } from "@/context/context";
import cookie from "js-cookie";
import { useContext } from "react";

export default function AddBtn({data}:any ) {

  const {totalCartItem, setTotalCartItem}:any = useContext(TotalCartItemsContext)

  const handleCartCookie = (data:any) => {
    const cartCookie = cookie.get('imgz-cart')
    if(cartCookie){
      const arrary = JSON.stringify([...JSON.parse(cartCookie), {"title":data.title, "price":data.price, "priceId": data.priceId, "imageUrl": data.imageUrl, "id": data.id}])
      cookie.set('imgz-cart', arrary)
      setTotalCartItem(totalCartItem + 1)
      return
    }
    const arrary = JSON.stringify([{"title":data.title, "price":data.price, "priceId": data.priceId, "imageUrl": data.imageUrl, "id": data.id}])
    cookie.set('imgz-cart', arrary)
    setTotalCartItem(totalCartItem + 1)
    return
  }

    return (
      <button onClick={() => handleCartCookie(data)} className='w-full text-lg bg-black text-white py-2.5 px-8 font-medium truncate'>
        ADD TO CART
      </button>
    )
  }
  