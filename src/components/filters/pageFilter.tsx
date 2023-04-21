import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PageFilter({ option }: any) {
  const router = useRouter();

  const [page, setPage] = useState({ ...router.query, page: 1 });

  const changePage = (value: any) => {
    router.push(
      {
        pathname: "/",
        query: value,
      },
      undefined,
      { shallow: true }
    );
  };

  useEffect(() => {
    setPage({ ...router.query, page: Number(router.query.page) });
  }, [router.query.page]);

  return (
    <div className="flex items-center justify-center mb-14">
      <button
        className={router.query.page === "1" ? "hidden" : ""}
        onClick={() =>
          changePage({ ...router.query, page: Number(router.query.page) - 1 })
        }
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_768_2)">
            <path d="M13 1L5 9L13 17" stroke="black" strokeWidth="3" />
          </g>
          <defs>
            <clipPath id="clip0_768_2">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="flex items-center mx-3.5 md:mx-5 overflow-x-auto">
        {/* MAKE MARGIN NOT APEAR IF IT'S THE LAST NUMBER, ALSO ADJUST COLOR AND WEIGHT BASED ON IF IT IS THE CURRENT PAGE*/}
        <button
          className={
            router.query.page === "1"
              ? "text-3xl font-bold text-black mr-3.5 md:mr-5"
              : "text-3xl text-neutral-400 mr-3.5 md:mr-5"
          }
          onClick={() => changePage({ ...router.query, page: 1 })}
        >
          1
        </button>
        <button
          className={
            router.query.page === "2"
              ? "text-3xl font-bold text-black mr-3.5 md:mr-5"
              : "text-3xl text-neutral-400 mr-3.5 md:mr-5"
          }
          onClick={() => changePage({ ...router.query, page: 2 })}
        >
          2
        </button>
        <button
          className={
            router.query.page === "3"
              ? "text-3xl font-bold text-black mr-3.5 md:mr-5"
              : "text-3xl text-neutral-400 mr-3.5 md:mr-5"
          }
          onClick={() => changePage({ ...router.query, page: 3 })}
        >
          3
        </button>
        <button
          className={
            router.query.page === "4"
              ? "text-3xl font-bold text-black mr-3.5 md:mr-5"
              : "text-3xl text-neutral-400 mr-3.5 md:mr-5"
          }
          onClick={() => changePage({ ...router.query, page: 4 })}
        >
          4
        </button>
      </div>
      <button
        className={router.query.page === "4" ? "hidden" : ""}
        onClick={() =>
          changePage({ ...router.query, page: Number(router.query.page) + 1 })
        }
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_768_2)">
            <path d="M5 17L13 9L5 1" stroke="black" strokeWidth="3" />
          </g>
          <defs>
            <clipPath id="clip0_768_2">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}
