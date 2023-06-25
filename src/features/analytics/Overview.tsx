import style from "./styles.module.scss";
import { memo } from "react";
import CardTotalizer from "@/components/CardTotalizer";
import Table from "@/components/Tables";
import { overviewRows, overviewStats } from "@/mock/Analytics/overview";
import { payers, billCodes } from "@/mock/Analytics/filter";
import { overviewColumns } from "@/components/Tables/columns";
import Filter from "@/components/Filter";

function Overview() {
  return (
    <div>
      <section className={style.cards}>
        <CardTotalizer
          title="Accepted"
          color="var(--card-accepted)"
          value={(100 * overviewStats.accepted) / overviewStats.total}
          suffix="%"
          strapline={`${overviewStats.accepted} Bills`}
        />
        <CardTotalizer
          title="Rejected"
          color="var(--card-rejected)"
          value={(100 * overviewStats.rejected) / overviewStats.total}
          suffix="%"
          strapline={`${overviewStats.rejected} Bills`}
        />
        <CardTotalizer
          title="Pending"
          color="var(--card-pending)"
          value={(100 * overviewStats.pending) / overviewStats.total}
          suffix="%"
          strapline={`${overviewStats.pending} Bills`}
        />
      </section>

      <section className={style.filters}>
        <Filter title="Payers" items={payers} />
        <Filter title="Bill codes" items={billCodes} />
      </section>

      <Table columns={overviewColumns} rows={overviewRows} />
    </div>
  );
}

export default memo(Overview);
