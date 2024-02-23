import TagCategories from "@/components/tag-categories";
import {
  getAllTagCategories,
  getTagCategoryAssociatedEntities,
} from "@/actions/get-tag-categories";
import { getTenantConfiguration } from "@/actions/get-tenant-configuration";
import TagCategoryCarousel from "@/components/tags-category-carousel";
import { Suspense } from "react";
import Skel from "./Skel";

export default async function TagCategoriesPage({
  params,
  searchParams,
}: {
  params: { tenantCode: string };
  searchParams: { tagCategoryCode?: string };
}) {
  const tenantConfiguration = await getTenantConfiguration(params.tenantCode);

  if (!searchParams.tagCategoryCode) {
    searchParams.tagCategoryCode = tenantConfiguration.defaultTagCategory;
  }

  const tagCategories = await getAllTagCategories(params.tenantCode);

  const tagCategoriesAssociationItems = await getTagCategoryAssociatedEntities(
    params.tenantCode,
    searchParams.tagCategoryCode
  );

  return (
    <div className="text-white">
      <div className="bg-tenant-background bg-cover justify-center items-center bg-center flex flex-col pt-3 pb-3 shadow-inset min-h-40">
        <h2>{tenantConfiguration.name}</h2>
        <div className="flex flex-col justify-center">
          <div className="flex"></div>
          <p>
            {tenantConfiguration.address.street} ,{" "}
            {tenantConfiguration.address.number} -{" "}
            {tenantConfiguration.address.city} -{" "}
            {tenantConfiguration.address.country}
          </p>
          {tenantConfiguration.weekdays.map((weekday) => (
            <div key={weekday.name}>
              <details className="collapse collapse-plus">
                <summary className="collapse-title">
                  <h5>{weekday.name}</h5>
                </summary>
                <div className="collapse-content">
                  <div className="schedules flex flex-col items-end">
                    {weekday.schedules.map((schedule, index) => (
                      <p key={index}>
                        {schedule.start} - {schedule.end}
                      </p>
                    ))}
                  </div>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>

      <TagCategoryCarousel
        tagCategories={tagCategories}
        defaultTagCategory={searchParams.tagCategoryCode}
      />

      <TagCategories
        tagCategoryAssociationItems={tagCategoriesAssociationItems}
      />

      {/* <Suspense fallback={<Skel />}>
        <TagCategoriesSkeleton />
      </Suspense> */}
    </div>
  );
}

async function TagCategoriesSkeleton() {
  await new Promise((r) => {
    setTimeout(() => r("merda"), 4000);
  });

  return <div>FOADSI</div>;
}
