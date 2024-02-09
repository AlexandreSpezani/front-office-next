import { TagCategoryAssociatedEntities } from "@/models";
import ProductCard from "./productCard";

export default async function TagCategories({ tag }: { tag: TagCategoryAssociatedEntities }) {
  return (
    <div className="text-white">

      <h1>{tag.tag}</h1>
      <div className="products">
        {tag.products.map((product) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>
    </div>
  );
}
