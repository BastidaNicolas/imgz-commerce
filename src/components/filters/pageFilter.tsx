export default function PageFilter({ option }: any) {
  return (
    <div className="flex items-center justify-center mb-14">
      <button>
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
        <button className="text-3xl font-bold text-black mr-3.5 md:mr-5">1</button>
        <button className="text-3xl text-neutral-400 mr-3.5 md:mr-5">2</button>
        <button className="text-3xl text-neutral-400 mr-3.5 md:mr-5">3</button>
        <button className="text-3xl text-neutral-400 ">4</button>
      </div>
      <button>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_768_2)">
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
