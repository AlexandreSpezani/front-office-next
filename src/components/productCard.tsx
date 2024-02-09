import { Product } from "@/models";

export default async function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="flex justify-start m-4 bg-white rounded-lg overflow-hidden shadow-md">
      <div className="bg-gray-600 bg-bottom bg-cover p-12 rounded-tl-lg">
        {" "}
        image
      </div>
      <div className="flex flex-col justify-between w-full pl-1 text-black">
        <div>
          <h4 className="font-bold">{product.name}</h4>
          <p className="text-gray-500 text-xs">{product.description}</p>
        </div>
        <div className="flex justify-end">
          <span className="text-white bg-black rounded-tl-3xl py-1 px-2 w-20 text-xs text-right">
            {product.price} $
          </span>
        </div>
      </div>
    </div>
  );
}
