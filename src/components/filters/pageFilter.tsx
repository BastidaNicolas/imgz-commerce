import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PageFilter({ pages, handleScroll }: any) {
  const router = useRouter();

  const [page, setPage] = useState({ ...router.query, page: "1" });

  const changePage = (value: any) => {
    handleScroll()
    router.push(
      {
        pathname: "/",
        query: value,
      },
      undefined,
      { shallow: true },
    );
    return
  };

  const generatePages = (totalPages: any) => {
    const pages = [];
    for (let onPage = 1; onPage <= totalPages; onPage++) {
      pages.push(
        <button
          key={onPage}
          className={Number(page.page) === onPage ? "text-3xl font-bold text-black mr-3.5 md:mr-5" : "text-3xl text-neutral-400 mr-3.5 md:mr-5"}
          onClick={() => changePage({ ...router.query, page: onPage })}
        >
          {onPage}
        </button>,
      );
    }
    return <>{pages}</>;
  };

  useEffect(() => {
    setPage({ ...router.query, page: router.query.page as string });
  }, [router.query.page]);

  return (
    <div className="flex items-center justify-center mb-14">
      <button
        className={page.page === "1" ? "hidden" : ""}
        onClick={() => changePage({ ...router.query, page: Number(router.query.page) - 1 })}
        aria-label="go to previous page"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <div className="flex items-center mx-3.5 md:mx-5 overflow-x-auto">{generatePages(pages)}</div>
      <button
        className={Number(page.page) === pages ? "hidden" : ""}
        onClick={() => changePage({ ...router.query, page: Number(router.query.page) + 1 })}
        aria-label="go to next page"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
