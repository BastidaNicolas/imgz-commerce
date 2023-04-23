import { Archivo } from "next/font/google";
import { useEffect, useMemo, useState } from "react";
import { FiltersOpenContext } from "@/context/context";

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
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const filterMenuOpenValue: any = useMemo(() => ({ filterMenuOpen, setFilterMenuOpen }), [filterMenuOpen]);

  const fetchData = async (value: any) => {
    console.log(value);
    const data = await fetch("/api/hello");
    const res = data.json();
    return console.log(res);
  };

  const router = useRouter();

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
    if (router.isReady) {
      if (!router.query.page || !router.query.orderBy || !router.query.ascending) {
        handleQueries({ page: "1", orderBy: "price", ascending: "false" });
      }
      fetchData(router.query);
    }
  }, [router]);

  return (
    <main className={`${archivo.className} flex m-2 xl:m-auto max-w-7xl flex-col items-center`}>
      <Header></Header>
      <CardXl></CardXl>
      <FiltersOpenContext.Provider value={filterMenuOpenValue}>
        <section className="w-full">
          <div className="flex items-center justify-between mb-11">
            <div className="flex items-center flex-flow truncate">
              <div className="font-bold text-lg md:text-3xl">Photography</div>
              <div className="font-bold text-3xl md:text-4xl mx-2 ">/</div>
              <div className="text-lg md:text-3xl text-neutral-400 truncate">Premium Photos</div>
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
    </main>
  );
}
