import { IDataTable } from "@/interfaces";
import { faker } from "@faker-js/faker";
import { Response, Server } from "miragejs";

const statusCode = ["Accepted", "Rejected", "Pending"];

// eslint-disable-next-line import/no-anonymous-default-export
export default (server: Server) => {
  server.get(
    "dataTable",
    () => {
      const dataTable: IDataTable[] = [...Array(5)].map((_, index) => {
        return {
          id: index,
          transaction: faker.string.alphanumeric(5),
          payer: faker.company.name(),
          billCode: faker.number.int({ min: 1, max: 32 }),
          date: faker.date.between({ from: "2022-01-01T00:00:00.000Z", to: new Date().toDateString() }),
          status: statusCode[faker.number.int({ min: 0, max: 2 })],
        };
      });

      return new Response(200, {}, dataTable);
    },
    { timing: 600 }
  );
};
