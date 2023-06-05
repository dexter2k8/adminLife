import style from "./styles.module.css";
import { memo } from "react";
import dynamic from "next/dynamic";
const Charts = dynamic(() => import("echarts-for-react"));

interface IChartBarProps {
  title?: string;
  data: IData[];
  cardHeight?: string;
  chartHeight?: number;
}
interface IData {
  label: string;
  value: number;
  description?: string;
}

function ChartHorizontalBar({ title, data, cardHeight, chartHeight }: IChartBarProps) {
  const circle = (color: string) =>
    `<span style="display: inline-block; background: ${color}; height: 10px; width: 10px; border-radius: 50%"></span>`;
  const chartOptions: echarts.EChartsOption = {
    // animation: true,
    // animationDuration: 500, // default = 1000
    grid: { left: "1%", right: "8%", height: chartHeight, top: 10, containLabel: true },
    xAxis: {
      type: "value",
      axisLabel: { show: false }, //remove os valores no eixo
    },
    yAxis: {
      type: "category",
      data: data.map((el) => el.label),
      axisLine: { show: false }, // remove marcação vertical no inicio do eixo
      axisTick: { show: false }, // remove marcação horizontal no eixo
      axisLabel: {
        // fontFamily: `"Nunito Sans", sans-serif`,
        fontSize: 14,
      },
    },
    series: [
      {
        data: data.map((el) => (el?.description ? { value: el.value, description: el.description } : el.value)),
        type: "bar",
        showBackground: true, //mostra cor de fundo atrás das barras
        color: "#0077ba", //cor da barra
        // backgroundStyle: { //cor do fundo atrás das barras
        //   color: "rgba(220, 220, 220, 0.8)",
        // },
        itemStyle: {
          borderRadius: 4, //raio na borda da barra
        },
        //mostrar os valores na barra
        label: {
          show: true,
          position: "outside",
        },
      },
    ],
    textStyle: {
      fontFamily: `"Nunito Sans", sans-serif`,
      // fontSize: "14px",
    },
    //mostrar tooltip ao passar o mouse na barra
    tooltip: {
      trigger: "axis",
      align: "left",
      formatter: function (params: any) {
        if (params[0].data?.description)
          return `<div style="white-space: pre-line; text-align: justify">${params[0].data.description}</div>`;
        else return params[0].name + "<br/>" + circle(params[0].color) + " : " + params[0].value;
      },
    },
  };

  return (
    <div className={style.container} style={{ maxHeight: cardHeight }}>
      <h3>{title}</h3>
      <Charts option={chartOptions} />
    </div>
  );
}

export default memo(ChartHorizontalBar);
