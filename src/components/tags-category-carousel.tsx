"use client";
import { TagCategory } from "@/models";
import { useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function TagCategoryCarousel({
  tagCategories,
  defaultTagCategory,
}: {
  tagCategories: TagCategory[];
  defaultTagCategory: string;
}) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace, refresh } = useRouter();

  const [activeTagCategory, setActiveTagCategory] =
    useState<String>(defaultTagCategory);

  function handleTagCategoryChange(value: string) {
    const params = new URLSearchParams(searchParams);

    params.set("tagCategoryCode", value);

    replace(`${pathName}?${params.toString()}`);
  }

  return (
    <div className="carousel mt-3 px-2">
      {tagCategories.map((tagCategory, index) => (
        <div
          key={index}
          className={`carousel-item mr-2 rounded-lg bg-white text-black px-3 py-2 hover:opacity-100
          ${
            tagCategory.code == activeTagCategory ? "opacity-100" : "opacity-75"
          }`}
          onClick={() => {
            handleTagCategoryChange(tagCategory.code);
            setActiveTagCategory(tagCategory.code);
          }}
        >
          <h4>{tagCategory.code}</h4>
        </div>
      ))}
    </div>
  );
}
