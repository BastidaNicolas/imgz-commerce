import Image from "next/image";
import AddBtn from "../buttons/addBtn";

export default function CardMd({product}:any) {
  return (
    <div className="group flex flex-col w-full lg:max-w-[17.625rem]">
      <div className="relative h-[24.875rem] w-full mb-3">
        <div className= {`${product.isBestSeller ? 'absolute':'hidden'} bg-white z-10 text-xl py-1 px-3`}>
          Best Seller
        </div>
        <Image
          className="object-cover"
          src={product.imageUrl}
          alt={product.title + ' image'}
          fill
          sizes="(max-width: 768px) 90vw,
                  (max-width: 1200px) 50vw,
                  30vw"
          loading="lazy"
        ></Image>
        <div className="hidden group-hover:block absolute w-full bottom-0" >
          <AddBtn data={product} />
        </div>
      </div>
      <div className="text-xl text-neutral-600 font-bold mb-1 capitalize">{product.category}</div>
      <div className="text-4xl text-black font-bold mb-2.5 truncate capitalize">{product.title}</div>
      <div className="text-3xl text-neutral-600">$ {product.price}</div>
    </div>
  );
}
