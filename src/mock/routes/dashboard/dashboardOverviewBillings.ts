import { Response, Server, Request } from "miragejs";
import { faker } from "@faker-js/faker";
import { overviewDate } from "@/utils/lib";

// eslint-disable-next-line import/no-anonymous-default-export
export default (server: Server) => {
  server.get(
    "/dashboardOverviewBillings",
    () => {
      const data = Array.from({ length: 12 });
      const dashboardOverviewBilings = [] as Object[];
      data.forEach((el, i) =>
        dashboardOverviewBilings.push({
          transaction_date: overviewDate(i),
          total_accepted: faker.number.int({ min: 100000, max: 200000 }),
          total_rejected: faker.number.int({ min: 10000, max: 80000 }),
          total_pending: faker.number.int({ min: 10000, max: 80000 }),
        })
      );

      return new Response(200, {}, dashboardOverviewBilings);
    },
    { timing: 1000 }
  );
};
