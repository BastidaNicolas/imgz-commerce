export default function PayBtn({handleFunc}:any) {
    return (
      <button onClick={handleFunc} className='w-full text-lg bg-black text-white py-2.5 px-8 font-medium truncate'>
        CHECKOUT
      </button>
    )
  }
  