import style from "./styles.module.scss";
import { memo, useContext, useEffect, useState } from "react";
import CardTotalizer from "@/components/CardTotalizer";
import Table from "@/components/Tables";
import { overviewRows } from "@/mock/Analytics/overview";
import { payers, billCodes } from "@/mock/Analytics/filter";
import { overviewColumns } from "@/components/Tables/columns";
import Filter from "@/components/Filter";
import api from "@/services/api";
import { MenuContext } from "@/hook/menuContext";

interface IOverviewStats {
  accepted: number;
  rejected: number;
  pending: number;
}

interface IResponse {
  data: IOverviewStats;
}

function Overview() {
  const { totalBills, setTotalBills } = useContext(MenuContext);
  const [overviewStats, setOverviewStats] = useState<IOverviewStats | undefined>();

  const fetchOverviewStats = async () => {
    try {
      const response: IResponse = await api.get("/api/overviewStats");
      setOverviewStats(response.data);
      setTotalBills(response.data.accepted + response.data.rejected + response.data.pending);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOverviewStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <section className={style.cards}>
        <CardTotalizer
          title="Accepted"
          color="var(--card-accepted)"
          value={overviewStats ? (100 * overviewStats.accepted) / totalBills : 0}
          suffix="%"
          strapline={`${overviewStats ? overviewStats.accepted : 0} Bills`}
        />
        <CardTotalizer
          title="Rejected"
          color="var(--card-rejected)"
          value={overviewStats ? (100 * overviewStats.rejected) / totalBills : 0}
          suffix="%"
          strapline={`${overviewStats ? overviewStats.rejected : 0} Bills`}
        />
        <CardTotalizer
          title="Pending"
          color="var(--card-pending)"
          value={overviewStats ? (100 * overviewStats.pending) / totalBills : 0}
          suffix="%"
          strapline={`${overviewStats ? overviewStats.pending : 0} Bills`}
        />
      </section>

      <section className={style.filters}>
        <Filter title="Payers" items={payers} />
        <Filter title="Bill codes" items={billCodes} />
      </section>

      <Table columns={overviewColumns} rows={overviewRows} rowCount={500} />
    </div>
  );
}

export default memo(Overview);
