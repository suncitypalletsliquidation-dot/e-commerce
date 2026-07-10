import { TrashIcon } from "@/assets/icons";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";

const SingleItem = ({ item, toggle }: any) => {
  const { removeItem } = useCart();

  const handleRemoveFromCart = () => {
    removeItem(item.id);
  };

  return (
    <div className="flex items-center justify-between gap-5 transition-all duration-200 hover:bg-gray-1/30 p-2 rounded-lg">
      <div className="flex items-center w-full gap-6">
        <div className="flex items-center justify-center rounded-[10px] bg-gray-2 max-w-[90px] w-full h-22.5 relative">
          <Image 
            src={item.image} 
            alt={item.name} 
            width={100} 
            height={100} 
            className="object-contain max-h-full max-w-full p-2"
          />
        </div>

        <div>
          <h3 className="mb-1 font-medium duration-200 ease-out text-dark hover:text-blue">
            <Link onClick={toggle} href={`/products/${item.slug}`}>
              {item.name}
            </Link>
          </h3>
          <div className="flex flex-col gap-0.5">
            <p className="text-custom-sm text-dark-2">Qty: {item.quantity}</p>
            <p className="text-custom-sm font-medium text-dark">${(item.price / 100).toFixed(2)}</p>
          </div>
        </div>
      </div>

      <button
        onClick={handleRemoveFromCart}
        aria-label="Remove product from cart"
        className="flex items-center justify-center rounded-full flex-shrink-0 w-9.5 h-9.5 bg-gray-2 border border-gray-3 text-dark ease-out duration-200 hover:bg-red-light-6 hover:border-red-light-4 hover:text-red transition-colors"
      >
        <TrashIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SingleItem;
