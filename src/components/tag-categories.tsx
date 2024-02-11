import { TagCategoryAssociatedEntities } from "@/models";
import ProductCard from "./product-card";

export default async function TagCategories({ tag }: { tag: TagCategoryAssociatedEntities }) {
  return (
    <div className="text-white">

      <h2>{tag.tag}</h2>
      <div className="products">
        {tag.products.map((product) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>
    </div>
  );
}
