export default function ExitBtn({setIsOpen}:any) {
  return (
    <button className="" onClick={() => setIsOpen(false)}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=""
      >
        <g clipPath="url(#clip0_717_394)">
          <path d="M2 2L20 20" stroke="black" strokeWidth="4" />
          <path d="M2 20L20 2" stroke="black" strokeWidth="4" />
        </g>
        <defs>
          <clipPath id="clip0_717_394">
            <rect width="22" height="22" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}
