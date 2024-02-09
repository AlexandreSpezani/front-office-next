import { TagCategoryAssociatedEntities } from "@/models";
import TagCategories from "@/components/tagCategories";
import {
  getAllTagCategories,
  getTagCategoryAssociatedEntities,
} from "@/actions/get-tag-categories";
import { getTenantConfiguration } from "@/actions/get-tenant-configuration";
import TagCategoryCarousel from "@/components/tags-category-carousel";

export default async function TagCategoriesPage({
  params,
}: {
  params: { tenantCode: string };
}) {
  const tenantConfiguration = await getTenantConfiguration(params.tenantCode);

  const tagCategories = await getAllTagCategories(params.tenantCode);

  const tagCategoriesAssociationItems = await getTagCategoryAssociatedEntities(
    params.tenantCode,
    tenantConfiguration.defaultTagCategory
  );

  return (
    <div className="text-white">
      <div className="bg-tenant-background bg-cover justify-center items-center bg-center flex flex-col pt-3 pb-3 shadow-inset min-h-40">
        <h1>{tenantConfiguration.name}</h1>
        <div className="flex flex-col justify-center">
          <p>
            {tenantConfiguration.address.street} -{" "}
            {tenantConfiguration.address.number}
          </p>
          {tenantConfiguration.weekdays.map((weekday) => (
            <div key={weekday.name}>
              <h4>{weekday.name}</h4>
              <div className="schedules">
                {weekday.schedules.map((schedule, index) => (
                  <p key={index}>
                    {schedule.start} - {schedule.end}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <TagCategoryCarousel tagCategories={tagCategories} />

      <div className="tag-categories mt-5 p-2">
        {tagCategoriesAssociationItems?.map((tagCategory) => (
          <TagCategories key={tagCategory.tag} tag={tagCategory} />
        ))}
      </div>
    </div>
  );
}
