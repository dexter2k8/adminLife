import { Response, Server } from "miragejs";
import { faker } from "@faker-js/faker";

// eslint-disable-next-line import/no-anonymous-default-export
export default (server: Server) => {
  server.get(
    "/dashboardOverviewClaims",
    () => {
      const acceptedRejected = {
        total: faker.number.int({ min: 0, max: 999 }),
        accepted: faker.datatype.number({ min: 0, max: 999 }),
        rejected: faker.datatype.number({ min: 0, max: 999 }),
      };

      return new Response(200, {}, acceptedRejected);
    },
    { timing: 1000 }
  );
};
