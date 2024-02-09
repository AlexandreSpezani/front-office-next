import { TagCategory } from "@/models";

export default async function TagCategoryCarousel({
  tagCategories,
}: {
  tagCategories: TagCategory[];
}) {
  return (
    <div className="carousel mt-3 px-2">
      {tagCategories.map((tagCategory, index) => (
        <div key={index} className="carousel-item mr-2 rounded-lg bg-white text-black px-3 py-2 opacity-75 hover:opacity-100">
          <h2>{tagCategory.code}</h2>
        </div>
      ))}
    </div>
  );
}
