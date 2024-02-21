"use client";
import { TagCategory } from "@/models";
import { useState } from "react";

export default function TagCategoryCarousel({
  tagCategories,
  defaultTagCategory,
}: {
  tagCategories: TagCategory[];
  defaultTagCategory: string;
}) {
  const [activeTagCategory, setActiveTagCategory] =
    useState<String>(defaultTagCategory);

  return (
    <div className="carousel mt-3 px-2">
      {tagCategories.map((tagCategory, index) => (
        <div
          key={index}
          className={`carousel-item mr-2 rounded-lg bg-white text-black px-3 py-2 opacity-75 hover:opacity-100
          ${tagCategory.code == activeTagCategory ? "opacity-100" : ""}`}
          onClick={() => {
            setActiveTagCategory(tagCategory.code);
          }}
        >
          <h4>{tagCategory.code}</h4>
        </div>
      ))}
    </div>
  );
}
