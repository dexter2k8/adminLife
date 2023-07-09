import style from "./styles.module.scss";
import { memo, useContext, useEffect, useState } from "react";
import CardTotalizer from "@/components/CardTotalizer";
import Table from "@/components/Tables";
import { payers, billCodes } from "@/mock/Analytics/filter";
import { overviewColumns } from "@/components/Tables/columns";
import Filter from "@/components/Filter";
import api from "@/services/api";
import { MenuContext } from "@/hook/menuContext";
import { formatNumber, stringDate } from "@/utils/lib";
import { getdataTable } from "@/api/analytics/Overview";
import { IDataTable } from "@/interfaces";

interface IOverviewStats {
  accepted: number;
  rejected: number;
  pending: number;
}

interface IResponse {
  data: IOverviewStats;
}

function Overview() {
  const { totalBills, setTotalBills, selectedDate, providerSelected } = useContext(MenuContext);
  const [overviewStats, setOverviewStats] = useState<IOverviewStats | undefined>();
  const [dataTable, setDataTable] = useState<IDataTable[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const params = {
    startDate: stringDate(selectedDate.startDate as Date),
    endDate: stringDate(selectedDate.endDate as Date),
    provider: providerSelected.value,
  };

  const fetchOverviewStats = async () => {
    try {
      const response: IResponse = await api.get("/api/overviewStats");
      setOverviewStats(response.data);
      setTotalBills(response.data.accepted + response.data.rejected + response.data.pending);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDataTable = async () => {
    setIsLoading(true);
    getdataTable(params)
      .then(setDataTable)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchOverviewStats();
    fetchDataTable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [providerSelected, selectedDate]);

  return (
    <div>
      <section className={style.cards}>
        <CardTotalizer
          title="Accepted"
          color="var(--card-accepted)"
          decimals={1}
          value={overviewStats && (100 * overviewStats.accepted) / totalBills}
          suffix="%"
          strapline={overviewStats && overviewStats.accepted}
        />
        <CardTotalizer
          title="Rejected"
          color="var(--card-rejected)"
          decimals={1}
          value={overviewStats && (100 * overviewStats.rejected) / totalBills}
          suffix="%"
          strapline={overviewStats && overviewStats.rejected}
        />
        <CardTotalizer
          title="Pending"
          color="var(--card-pending)"
          decimals={1}
          value={overviewStats && (100 * overviewStats.pending) / totalBills}
          suffix="%"
          strapline={overviewStats && overviewStats.pending}
        />
      </section>

      <section className={style.filters}>
        <Filter title="Payers" items={payers} />
        <Filter title="Bill codes" items={billCodes} />
      </section>

      <Table
        columns={overviewColumns}
        rows={dataTable ?? []}
        rowCount={dataTable?.length ?? 10}
        isLoading={isLoading}
      />
    </div>
  );
}

export default memo(Overview);
