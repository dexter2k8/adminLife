import { IDataTable } from "@/interfaces";
import { faker } from "@faker-js/faker";
import { Response, Server } from "miragejs";

const statusCode = ["Accepted", "Rejected", "Pending"];

// eslint-disable-next-line import/no-anonymous-default-export
export default (server: Server) => {
  server.get(
    "dataTable",
    (schema, request) => {
      const dataTable: IDataTable[] = [...Array(55)].map((_, index) => {
        return {
          id: index,
          transaction: faker.string.alphanumeric(5),
          payer: faker.company.name(),
          billCode: faker.number.int({ min: 1, max: 32 }),
          date: faker.date.between({ from: "2022-01-01T00:00:00.000Z", to: new Date().toDateString() }),
          status: statusCode[faker.number.int({ min: 0, max: 2 })],
        };
      });

      // filter the list based on date params
      const req = request.queryParams;
      const unixStartDate = Date.parse(req.start_date + "") || 0;
      const unixEndDate = Date.parse(req.end_date + "") || Date.parse(`${new Date()}`);
      const filteredData = dataTable.filter(
        (el) => new Date(el.date).getTime() >= unixStartDate && new Date(el.date).getTime() <= unixEndDate
      );

      return new Response(200, {}, filteredData);
    },
    { timing: 600 }
  );
};
