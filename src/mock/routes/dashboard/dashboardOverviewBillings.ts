import { Response, Server } from "miragejs";
import { faker } from "@faker-js/faker";
import { overviewDate } from "@/utils/lib";
import { IClaimStatus } from "@/interfaces";

// eslint-disable-next-line import/no-anonymous-default-export
export default (server: Server) => {
  server.get(
    "/dashboardOverviewBillings",
    (schema, request) => {
      const data = Array.from({ length: 12 });
      const dashboardOverviewBilings = [] as IClaimStatus[];
      data.forEach((el, i) =>
        dashboardOverviewBilings.push({
          transaction_date: overviewDate(i),
          total_accepted: faker.number.int({ min: 100000, max: 200000 }),
          total_rejected: faker.number.int({ min: 10000, max: 80000 }),
          total_pending: faker.number.int({ min: 10000, max: 80000 }),
        })
      );

      // filter the list based on date params
      const req = request.queryParams;
      const unixStartDate = Date.parse(req.start_date + "") || 0;
      const unixEndDate = Date.parse(req.end_date + "") || Date.parse(`${new Date()}`);
      const filteredData = dashboardOverviewBilings.filter(
        (el) => Date.parse(el.transaction_date) >= unixStartDate && Date.parse(el.transaction_date) <= unixEndDate
      );

      return new Response(200, {}, filteredData);
    },
    { timing: 1000 } // set a delay time to send the return
  );
};
