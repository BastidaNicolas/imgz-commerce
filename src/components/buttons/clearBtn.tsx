export default function ClearBtn({setState, value}:any) {
    return (
      <button onClick={() => setState(value)} className='w-full text-lg text-black bg-white py-2.5 px-8 font-medium  border-[3px] border-black truncate'>
        CLEAR
      </button>
    )
  }
  