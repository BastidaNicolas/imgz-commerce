import { Archivo } from "next/font/google";
import { useEffect, useMemo, useState } from "react";
import {
  CartListContext,
  FilterContext,
  FiltersOpenContext,
  ProductListContext,
} from "@/helpers/context";

import CardMd from "@/components/cards/cardMd";
import CardXl from "@/components/cards/cardXl";
import FilterCard from "@/components/cards/filterCard";
import Header from "@/components/header";
import ToggleFilterBtn from "@/components/buttons/toggleFilterBtn";
import OrderFilter from "@/components/filters/orderFilter";
import PageFilter from "@/components/filters/pageFilter";
import { useRouter } from "next/router";

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
  const [filters, setFilters] = useState([]);
  const filterValue: any = useMemo(() => ({ filters, setFilters }), [filters]);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const filterMenuOpenValue: any = useMemo(
    () => ({ filterMenuOpen, setFilterMenuOpen }),
    [filterMenuOpen]
  );
  const [productList, setProductList] = useState([]);
  const productListMemo: any = useMemo(
    () => ({ productList, setProductList }),
    [productList]
  );
  const [cartList, setCartList] = useState([]);
  const cartListMemo: any = useMemo(
    () => ({ cartList, setCartList }),
    [cartList]
  );

  const fetchData = async () => {
    const data = await fetch('/api/hello');
    const res = data.json()
    return console.log(res);
  }

  const router = useRouter();
  const {filterBy} = router.query;

  useEffect(() => {
    router.push(
      {
        pathname: "/",
        query: {page: 1, orderBy: "price", ascending: false},
      },
      undefined,
      { shallow: true }
    );
  },[])

  return (
    <main
      className={`${archivo.className} flex m-2 xl:m-auto max-w-7xl flex-col items-center`}
    >
      <CartListContext.Provider value={cartListMemo}>
        <Header></Header>
        <ProductListContext.Provider value={productListMemo}>
          <CardXl></CardXl>
          <FilterContext.Provider value={filterValue}>
            <FiltersOpenContext.Provider value={filterMenuOpenValue}>
              <section className="w-full">
                <div className="flex items-center justify-between mb-11">
                  <div className="flex items-center flex-flow truncate">
                    <div className="font-bold text-lg md:text-3xl">
                      Photography
                    </div>
                    <div className="font-bold text-3xl md:text-4xl mx-2 ">
                      /
                    </div>
                    <div className="text-lg md:text-3xl text-neutral-400 truncate">
                      Premium Photos
                    </div>
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
                      <CardMd></CardMd>
                      <CardMd></CardMd>
                      <CardMd></CardMd>
                      <CardMd></CardMd>
                      <CardMd></CardMd>
                      <CardMd></CardMd>
                    </div>
                    <PageFilter></PageFilter>
                  </div>
                </div>
              </section>
            </FiltersOpenContext.Provider>
          </FilterContext.Provider>
        </ProductListContext.Provider>
      </CartListContext.Provider>
    </main>
  );
}
