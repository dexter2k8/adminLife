import { faker } from "@faker-js/faker";
import { Response, Server } from "miragejs";

// eslint-disable-next-line import/no-anonymous-default-export
export default (server: Server) => {
  server.get(
    "overviewStats",
    () => {
      const overviewStats = {
        accepted: faker.number.int({ min: 100000, max: 200000 }),
        rejected: faker.number.int({ min: 2000, max: 20000 }),
        pending: faker.number.int({ min: 20000, max: 80000 }),
      };

      return new Response(200, {}, overviewStats);
    },
    { timing: 600 }
  );
};
