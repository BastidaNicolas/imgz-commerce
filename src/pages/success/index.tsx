import Link from "next/link";
import cookie from "js-cookie";
import { useEffect } from "react";
import Head from "next/head";

export default function Success() {
  useEffect(() => {
    cookie.remove("imgz-cart");
  }, []);

  return (
    <>
      <Head>
        <title>Successful Order</title>
      </Head>
      <div className="transition-opacity text-center flex flex-col items-center w-full h-screen justify-center text-3xl font-bold max-w-xs m-auto px-2">
        Thanks for shopping with us!
        <Link className="text-base underline font-normal mt-5" href={"/"}>
          Go back to the shop {">"}
        </Link>
      </div>
    </>
  );
}
