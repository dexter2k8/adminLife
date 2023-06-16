import style from "./styles.module.scss";
import { memo } from "react";
import dynamic from "next/dynamic";
const Charts = dynamic(() => import("echarts-for-react"));

function ChartDonut({ title, data, colors }: any) {
  const chartOptions: echarts.EChartsOption = {
    tooltip: {
      trigger: "item",
      align: "center",
    },
    legend: {
      top: "0",
      left: "center",
    },
    series: [
      {
        top: "10%",
        bottom: "-10%",
        type: "pie",
        radius: ["57%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        color: colors,
        data: data,
      },
    ],
  };
  return (
    <div className={style.container}>
      <h3>{title}</h3>
      <Charts option={chartOptions} />
    </div>
  );
}

export default memo(ChartDonut);
