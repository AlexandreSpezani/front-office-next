"use client";
import { Product } from "@/models";
import { useRef } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const dialogRef = useRef<HTMLDialogElement>(null!);

  return (
    <>
      <div
        className="flex justify-start m-4 bg-white rounded-lg overflow-hidden shadow-md"
        onClick={() => dialogRef.current.showModal()}
      >
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

      <dialog
        className="modal modal-bottom sm:modal-middle text-black"
        ref={dialogRef}
      >
        <div className="modal-box p-3">
          <div className="flex">
            <div className="bg-gray-600 bg-bottom bg-cover p-12 rounded-md text-white">
              {" "}
              image
            </div>
            <div className="flex flex-col ml-2">
              <h4 className="font-bold">{product.name}</h4>
              <p className="text-gray-500 text-xs">{product.description}</p>
              <h5>Alérgenos</h5>
              <p>- Nozes</p>
              <p>- Camarão</p>
              <p>- Kiwi</p>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
