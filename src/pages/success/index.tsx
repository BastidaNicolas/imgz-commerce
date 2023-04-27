import Link from "next/link";
import cookie from "js-cookie"
import { useEffect } from "react";

export default function Success() {
  
    useEffect(() => {
        cookie.remove('imgz-cart')
    }, []);

  return (
    <div className="flex flex-col items-center w-full h-screen justify-center text-3xl font-bold">
      Thanks for shopping with us!
      <Link className="text-base underline font-normal mt-5" href={"/"}>
        Go back to the shop {">"}
      </Link>
    </div>
  );
}
