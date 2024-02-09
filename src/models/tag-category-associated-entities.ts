import Product from "./product";

export default interface TagCategoryAssociatedEntities {
    tag: string,
    products: Product[]
}