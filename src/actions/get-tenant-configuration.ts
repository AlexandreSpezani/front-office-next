"use server";

import { Tenant } from "@/models";
import { fetchGraphQL } from "./graphql-client";

export async function getTenantConfiguration(
  tenantCode: string
): Promise<Tenant> {
  const query =`
  query ($code:Int!){
    tenantConfiguration(code: $code) {
      code
      name
      defaultTagCategory
      template
      address {
        street
        number
        city
        country
      }
      weekdays {
        name
        schedules {
          start
          end
        }
      }
    }
  }`;

  const tenantConfiguration = await fetchGraphQL<{
    tenantConfiguration: Tenant;
  }>(query, {
    code: parseInt(tenantCode),
  });

  return tenantConfiguration.tenantConfiguration;
}
