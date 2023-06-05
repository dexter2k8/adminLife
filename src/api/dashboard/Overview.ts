import api from "@/services/api";
import { GenericAbortSignal } from "axios";

interface IRequestDataList {
  startDate: Date | string;
  endDate: Date | string;
  provider: string;
  signal?: GenericAbortSignal;
}

export interface IClaimStatus {
  transaction_date: string;
  total_accepted: string;
  total_rejected: string;
  total_outstanding: string;
}

export interface IRejectedAndAdjustmentReasons {
  label: string;
  description: string;
  status: string;
  value: number;
}

export async function getClaimStatusOverview({
  startDate,
  endDate,
  provider,
  signal,
}: IRequestDataList): Promise<IClaimStatus | undefined> {
  try {
    const response = await api.get("/api/dashboardOverviewClaims", {
      signal,
      params: {
        start_date: startDate,
        end_date: endDate,
        provider: provider,
      },
    });

    // sort the list by transaction_date
    const sortedData: IClaimStatus = response.data.result.sort(
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
