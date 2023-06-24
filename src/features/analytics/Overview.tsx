import style from "./styles.module.scss";
import { memo } from "react";
import CardTotalizer from "@/components/CardTotalizer";
import Table from "@/components/Tables";
import { overviewRows, overviewStats } from "@/mock/TokenizedClaims/overview";
import { payers, cptCodes } from "@/mock/TokenizedClaims/filter";
import { overviewColumns } from "@/components/Tables/columns";
import Filter from "@/components/Filter";

function Overview() {
  return (
    <div>
      <section className={style.cards}>
        <CardTotalizer
          title="Accepted"
          color="var(--card-accepted-color)"
          value={(100 * overviewStats.accepted) / overviewStats.total}
          suffix="%"
          strapline={`${overviewStats.accepted} Claims`}
        />
        <CardTotalizer
          title="Rejected"
          color="var(--card-rejected-color)"
          value={(100 * overviewStats.rejected) / overviewStats.total}
          suffix="%"
          strapline={`${overviewStats.rejected} Claims`}
        />
        <CardTotalizer
          title="Outstanding"
          color="var(--card-outstanding-color)"
          value={(100 * overviewStats.outstanding) / overviewStats.total}
          suffix="%"
          strapline={`${overviewStats.outstanding} Claims`}
        />
      </section>

      <section className={style.filters}>
        <Filter title="Payers" items={payers} />
        <Filter title="CTP codes" items={cptCodes} />
      </section>

      <Table columns={overviewColumns} rows={overviewRows} />
    </div>
  );
}

export default memo(Overview);
