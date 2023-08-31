import style from "./styles.module.scss";
import { memo } from "react";
import CardTotalizer from "@/components/CardTotalizer";
import Table from "@/components/Tables";
import Filter from "@/components/Filter";
import { adjustmentReasons, billCodes, payers } from "@/mock/Analytics/filter";
import { acceptedRows, acceptedStats } from "@/mock/Analytics/accepted";
import { acceptedColumns } from "@/components/Tables/columns";

function Accepted() {
  return (
    <div>
      <section className={style.cards}>
        <CardTotalizer
          title="Total Billed"
          color="var(--font-default)"
          value={acceptedStats.billed}
          prefix="$"
          suffix="M"
          decimals={0}
        />
        <CardTotalizer
          title="Total Paid"
          color="var(--card-accepted)"
          value={acceptedStats.paid}
          prefix="$"
          suffix="M"
          decimals={2}
        />
        <CardTotalizer
          title="Adjustments"
          color="var(--card-rejected)"
          value={acceptedStats.adjustments}
          prefix="$"
          suffix="M"
          decimals={1}
        />
      </section>

      <section className={style.filters}>
        <Filter title="Payers" items={payers} />
        <Filter title="Bill codes" items={billCodes} />
        <Filter title="Adjustment Reason" items={adjustmentReasons} />
      </section>

      <Table
        columns={acceptedColumns}
        rows={acceptedRows ?? []}
        rowCount={acceptedRows.length ?? 10}
        isLoading={false}
      />
    </div>
  );
}

export default memo(Accepted);
