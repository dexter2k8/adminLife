import { Response, Server } from "miragejs";
import { rejectAdjustmentReason } from "@/mock/Dashboard/Overview";

// eslint-disable-next-line import/no-anonymous-default-export
export default (server: Server) => {
  server.get(
    "/rejectedAndAdjustmentReasons",
    () => {
      return new Response(200, {}, rejectAdjustmentReason);
    },
    { timing: 400 } // set a delay time to send the return
  );
};
