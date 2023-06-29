import { IDataTable } from "@/interfaces";
import api from "@/services/api";
import { GenericAbortSignal } from "axios";

interface IRequestDataList {
  startDate: Date | string;
  endDate: Date | string;
  provider: string;
  signal?: GenericAbortSignal;
}

export async function getdataTable({
  startDate,
  endDate,
  provider,
  signal,
}: IRequestDataList): Promise<IDataTable[] | undefined> {
  const params = {
    signal,
    params: {
      start_date: startDate,
      end_date: endDate,
      provider: provider,
    },
  };

  try {
    const response = await api.get("/api/dataTable", params);

    // sort the list by transaction_date
    const sortedData: IDataTable[] = response.data.sort(
      (a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    return sortedData;
  } catch (error) {
    console.error(error);
  }
}
