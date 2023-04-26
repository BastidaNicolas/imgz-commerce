import { Archivo } from "next/font/google";
import { useEffect, useMemo, useState } from "react";
import { FiltersOpenContext, TotalCartItemsContext } from "@/context/context";
import { useRouter } from "next/router";
import { trpc } from "@/utils/trpc";
import cookie from "js-cookie";
import Head from "next/head";

import CardMd from "@/components/cards/cardMd";
import CardXl from "@/components/cards/cardXl";
import FilterCard from "@/components/cards/filterCard";
import Header from "@/components/header";
import ToggleFilterBtn from "@/components/buttons/toggleFilterBtn";
import OrderFilter from "@/components/filters/orderFilter";
import PageFilter from "@/components/filters/pageFilter";
import CardXlLoader from "@/components/loaders/cardXlLoader";
import CardMdLoader from "@/components/loaders/cardMdLoader";

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "700"] });
const ITEMS_PER_PAGE = 6;

export default function Home() {
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const filterMenuOpenValue: any = useMemo(() => ({ filterMenuOpen, setFilterMenuOpen }), [filterMenuOpen]);
  const [totalCartItem, setTotalCartItem] = useState(0);
  const totalCartItemMemo: any = useMemo(() => ({ totalCartItem, setTotalCartItem }), [totalCartItem]);

  const router = useRouter();
  const { data, isLoading } = trpc.getProducts.useQuery({
    page: Number(router.query.page),
    amount: ITEMS_PER_PAGE,
    filters: router.query.filterBy as string[],
    orderBy: router.query.orderBy as string,
    ascending: router.query.ascending as string,
  });
  const photoOfTheDay = trpc.getPhotoOfTheDay.useQuery();
  const peopleAlsoBuy = trpc.getPeopleAlsoBuy.useQuery();

  const handleQueries = (value: any) => {
    router.push(
      {
        pathname: "/",
        query: value,
      },
      undefined,
      { shallow: true },
    );
  };

  useEffect(() => {
    const cookieData = cookie.get("imgz-cart");
    if (!cookieData) {
      cookie.set("imgz-cart", "");
    } else {
      setTotalCartItem(JSON.parse(cookieData).length);
    }
  }, []);

  useEffect(() => {
    if (router.isReady) {
      if (!router.query.page || !router.query.orderBy || !router.query.ascending) {
        handleQueries({ page: "1", orderBy: "price", ascending: "desc" });
      }
    }
  }, [router]);

  return (
    <main className={`${archivo.className} flex m-2 xl:m-auto max-w-7xl flex-col items-center`}>
      
      <TotalCartItemsContext.Provider value={totalCartItemMemo}>
        <Header></Header>
        {photoOfTheDay.isLoading && peopleAlsoBuy.isLoading ? (
          <CardXlLoader/>
        ) : (
          <CardXl photoOfTheDay={photoOfTheDay.data?.product} peopleAlsoBuy={peopleAlsoBuy.data?.products} />
        )}
        <FiltersOpenContext.Provider value={filterMenuOpenValue}>
          <section className="w-full">
            <div className="flex items-center justify-between mb-11">
              <div className="flex items-center flex-flow truncate">
                <div className="font-bold text-lg md:text-3xl">Photography</div>
                <div className="font-bold text-3xl md:text-4xl mx-2 ">/</div>
                <div className="text-lg md:text-3xl text-neutral-500 truncate">Premium Photos</div>
              </div>
              <div className="hidden lg:block w-min">
                <OrderFilter></OrderFilter>
              </div>
              <ToggleFilterBtn></ToggleFilterBtn>
            </div>
            <div className="flex ">
              <FilterCard></FilterCard>
              <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center w-full gap-12 mb-11">
                  {isLoading ? <CardMdLoader/>: data?.products.map((product: any) => <CardMd key={product.id} product={product} />)}
                </div>
                <PageFilter pages={data?.totalPages}></PageFilter>
              </div>
            </div>
          </section>
        </FiltersOpenContext.Provider>
      </TotalCartItemsContext.Provider>
    </main>
  );
}
