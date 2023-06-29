import { Server } from "miragejs";

import dashboardOverviewBillings from "./routes/dashboard/dashboardOverviewBillings";
import rejectedAndAdjustmentReasons from "./routes/dashboard/rejectedAndAdjustmentReasons";
import overviewStats from "./routes/analytics/overviewStats";
import dataTable from "./routes/analytics/dataTable";

export function makeServer({ environment = "development" }) {
  const server = new Server({
    environment,

    routes() {
      this.namespace = "api";

      dashboardOverviewBillings(this);
      rejectedAndAdjustmentReasons(this);
      overviewStats(this);
      dataTable(this);

      this.namespace = ""; // Reset namespace to avoid route definition error
      this.passthrough(); // Avoid throw an JS error if makes an invalid request
    },
  });

  return server;
}
