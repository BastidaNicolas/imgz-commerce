import { Archivo } from "next/font/google";
import CardMd from "@/components/cards/cardMd";
import CardXl from "@/components/cards/cardXl";
import FilterCard from "@/components/cards/filterCard";
import Header from "@/components/header";
import { useMemo, useState } from "react";
import { FilterContext, FiltersOpenContext } from "@/helpers/context";
import ToggleFilterBtn from "@/components/buttons/toggleFilterBtn";
import OrderFilter from "@/components/filters/orderFilter";

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {

  
  const [filters, setFilters] = useState([]);
  const filterValue: any = useMemo(() => ({ filters, setFilters }), [filters]);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const filterMenuOpenValue: any = useMemo(() => ({ filterMenuOpen, setFilterMenuOpen }),[filterMenuOpen]);

  return (
    <main
      className={`${archivo.className} flex m-2 xl:m-auto max-w-7xl flex-col items-center`}
    >
      <Header></Header>
      <CardXl></CardXl>
      <FilterContext.Provider value={filterValue}>
        <FiltersOpenContext.Provider value={filterMenuOpenValue}>
          <section className="w-full">
            <div className="flex items-center justify-between mb-11">
              <div className="flex items-center flex-flow truncate">
                <div className="font-bold text-lg md:text-3xl">Photography</div>
                <div className="font-bold text-3xl md:text-4xl mx-2 ">/</div>
                <div className="text-lg md:text-3xl text-neutral-400 truncate">Premium Photos</div>
              </div>
              <div className="hidden lg:block">
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
                <div className="text-center">1 2 3</div>
              </div>
            </div>
          </section>
        </FiltersOpenContext.Provider>
      </FilterContext.Provider>
    </main>
  );
}
