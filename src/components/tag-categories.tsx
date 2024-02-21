"use client";
import { Product, TagCategoryAssociatedEntities } from "@/models";
import ProductCard from "./product-card";
import { useState } from "react";

export default function TagCategories({
  tagCategoryAssociationItems,
}: {
  tagCategoryAssociationItems: TagCategoryAssociatedEntities[];
}) {
  const [filteredTagCategories, setFilteredTagCategories] = useState<
    TagCategoryAssociatedEntities[]
  >(Array.from(tagCategoryAssociationItems));

  function handleSearch(searchParam: string) {
    var test: TagCategoryAssociatedEntities[] = JSON.parse(
      JSON.stringify(tagCategoryAssociationItems)
    );

    let filtered = test.filter((tc) => {
      const isTagCategoryMatched = tc.tag
        .toLowerCase()
        .includes(searchParam.toLowerCase());

      const filteredProducts = tc.products.filter((p) =>
        p.name.toLowerCase().includes(searchParam.toLowerCase())
      );

      if (filteredProducts.length > 0) {
        tc.products = filteredProducts;
      }

      // const isProductTagsMatched = tc.products.reduce(
      //   (acc: string[], curr: Product) => acc.concat(curr.tagCodes),
      //   [""]
      // );

      return isTagCategoryMatched || filteredProducts.length > 0;
    });

    setFilteredTagCategories(filtered);
  }

  return (
    <div>
      <label className="input input-bordered flex items-center gap-2 mx-5 mt-5">
        <input
          className="w-full text-black"
          type="text"
          placeholder="O que você está procurando?"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="#000"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      <div className="tag-categories mt-5 p-2">
        {filteredTagCategories?.map((tagCategory) => (
          <div key={tagCategory.tag} className="text-white">
            <h2>{tagCategory.tag}</h2>
            <div className="products">
              {tagCategory.products.map((product) => (
                <ProductCard key={product.code} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
