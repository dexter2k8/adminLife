import { Server } from "miragejs";

import dashboardOverviewBilings from "./routes/dashboard/dashboardOverviewBillings";

export function makeServer({ environment = "development" }) {
  const server = new Server({
    environment,

    routes() {
      if (typeof window !== "undefined") {
        const NativeXMLHttpRequest = window.XMLHttpRequest;

        // @ts-ignore
        window.XMLHttpRequest = function XMLHttpRequest(...rest) {
          // @ts-ignore
          const request = new NativeXMLHttpRequest(rest);
          // @ts-ignore
          delete request.onloadend;
          return request;
        };
      }

      (this.namespace = "api"), dashboardOverviewBilings(this);
      //   AcceptedRejected(this);
      //   TotalClaims(this);
      //   PendingClaims(this);

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
