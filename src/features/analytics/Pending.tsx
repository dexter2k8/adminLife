import style from "./styles.module.scss";
import { memo, useState } from "react";
import GroupButtons from "@/components/GroupButtons";
import CardTotalDays from "@/components/CardTotalDays";
import Table from "@/components/Tables";
import { pendingBillCodes, pendingPayer, pendingRows } from "@/mock/Analytics/pending";
import Filter from "@/components/Filter";
import { addDays } from "date-fns";
import { billCodes, payers } from "@/mock/Analytics/filter";
import { overviewColumns } from "@/components/Tables/columns";
import ChartHorizontalBar from "@/components/Charts/ChartHorizontalBar";

export interface ISelectProps {
  title: string;
  startDate: Date;
  endDate: Date;
}

function Pending() {
  const [activeDate, setActiveDate] = useState<number>(0);
  const selectDates: ISelectProps[] = [
    { title: "All", startDate: new Date(), endDate: addDays(new Date(), 7) },
    { title: "0-30 Days", startDate: new Date(), endDate: addDays(new Date(), 30) },
    { title: "31-60 Days", startDate: new Date(), endDate: addDays(new Date(), 90) },
    { title: "61-90 Days", startDate: new Date(), endDate: addDays(new Date(), 180) },
  ];
  return (
    <div>
      <section className={style.days}>
        <GroupButtons activeItem={activeDate} setActiveItem={setActiveDate} selectItems={selectDates} />
        <h3>Total Pending: 1.023 ($2,041,129.00)</h3>
      </section>

      <section className={`${style.cards} ${style.charts}`}>
        <CardTotalDays
          title={selectDates[activeDate].title}
          color="var(--font-primary-color)"
          value={250}
          suffix="(25%)"
          strapline="$500k (25%)"
          decimals={0}
          bgClass="salmon"
        />
        <ChartHorizontalBar
          title="Top Pending Bill Codes"
          data={pendingBillCodes}
          chartHeight={164}
          cardHeight="250px"
        />
        <ChartHorizontalBar
          title="Top Pending Payer"
          data={pendingPayer}
          chartHeight={164}
          cardHeight="250px"
        />
      </section>

      <section className={style.filters}>
        <Filter title="Payers" items={payers} />
        <Filter title="Bill codes" items={billCodes} />
      </section>

      <Table isLoading={false} columns={overviewColumns} rows={pendingRows} rowCount={pendingRows?.length ?? 10}/>
    </div>
  );
}

export default memo(Pending);
