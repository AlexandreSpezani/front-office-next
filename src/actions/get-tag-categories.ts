"use server";

import { TagCategory, TagCategoryAssociatedEntities } from "@/models";
import { fetchGraphQL } from "./graphql-client";

export async function getAllTagCategories(
  tenantCode: string
): Promise<TagCategory[]> {
  const query = ` 
  query ($tenantCode: Int!) {
    allTagCategories(query: { tenantCode: $tenantCode }) {
      code
    }
  }`;

  const tagCategories = await fetchGraphQL<{ allTagCategories: TagCategory[] }>(
    query,
    {
      tenantCode: parseInt(tenantCode),
    }
  );

  return tagCategories.allTagCategories;
}

export async function getTagCategoryAssociatedEntities(
  tenantCode: string,
  tagCategoryCode: string
): Promise<TagCategoryAssociatedEntities[]> {
  const query = `
  query ($tenantCode: Int!, $tagCategoryCode: String!) {
    tagCategoryAssociatedEntities(query: { tenantCode: $tenantCode, tagCategoryCode: $tagCategoryCode }) {
      tag,
      products{
        name,
        code,
        description,
        price,
        tagCodes
    }
  }
  }`;

  const tagCategoryAssociatedItems = await fetchGraphQL<{
    tagCategoryAssociatedEntities: TagCategoryAssociatedEntities[];
  }>(query, {
    tenantCode: parseInt(tenantCode),
    tagCategoryCode: tagCategoryCode,
  });

  return tagCategoryAssociatedItems.tagCategoryAssociatedEntities;
}
