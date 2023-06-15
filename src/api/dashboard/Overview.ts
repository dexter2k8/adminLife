import { IClaimStatus, IRejectedAndAdjustmentReasons } from "@/interfaces";
import api from "@/services/api";
import { GenericAbortSignal } from "axios";

interface IRequestDataList {
  startDate: Date | string;
  endDate: Date | string;
  provider: string;
  signal?: GenericAbortSignal;
}

export async function getClaimStatusOverview({
  startDate,
  endDate,
  provider,
  signal,
}: IRequestDataList): Promise<IClaimStatus | undefined> {
  try {
    const response = await api.get("/api/dashboardOverviewBillings", {
      signal,
      params: {
        start_date: startDate,
        end_date: endDate,
        provider: provider,
      },
    });

    // sort the list by transaction_date
    const sortedData: IClaimStatus = response.data.sort(
      (a: IClaimStatus, b: IClaimStatus) => Date.parse(a.transaction_date) - Date.parse(b.transaction_date)
    );
    return sortedData;
  } catch (error) {
    console.error(error);
  }
}

export async function getRejectedAndAdjustmentReasons({
  startDate,
  endDate,
  provider,
  signal,
}: IRequestDataList): Promise<IRejectedAndAdjustmentReasons | undefined> {
  try {
    const response = await api.get("/api/rejectedAndAdjustmentReasons", {
      signal,
      params: {
        start_date: startDate,
        end_date: endDate,
        provider: provider,
      },
    });
    return response.data.result;
  } catch (error) {
    console.error(error);
  }
}
