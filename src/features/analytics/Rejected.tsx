import style from "./styles.module.scss";
import { memo } from "react";
import CardTotalizer from "@/components/CardTotalizer";
import { rejectedRows, rejectedStats, rejectionsCptCodes, rejectionsPayer } from "@/mock/Analytics/rejected";
import ChartHorizontalBar from "@/components/Charts/ChartHorizontalBar";
import Table from "@/components/Tables";
import Filter from "@/components/Filter";
import { adjustmentReasons, billCodes, payers } from "@/mock/Analytics/filter";
import { rejectedColumns } from "@/components/Tables/columns";

function Rejected() {
  return (
    <div>
      <section className={`${style.cards} ${style.charts}`}>
        <CardTotalizer
          title="Rejections"
          color="var(--card-rejected-color)"
          value={rejectedStats.rejections}
          strapline={20}
          decimals={0}
        />

        <ChartHorizontalBar title="Rejection by Payer" data={rejectionsPayer} chartHeight={164} cardHeight="250px" />

        <ChartHorizontalBar
          title="Rejection by Bill Codes"
          data={rejectionsCptCodes}
          chartHeight={164}
          cardHeight="250px"
        />
      </section>

      <section className={style.filters}>
        <Filter title="Payers" items={payers} />
        <Filter title="Bill codes" items={billCodes} />
        <Filter title="Adjustment Reason" items={adjustmentReasons} />
      </section>

      <Table isLoading={false} columns={rejectedColumns} rows={rejectedRows} rowCount={rejectedRows.length ?? 10}
 />
    </div>
  );
}

export default memo(Rejected);
