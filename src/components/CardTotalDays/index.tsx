import { type } from "os";
import style from "./styles.module.css";
import { memo } from "react";
import CountUp from "react-countup";

type TGbClass = "salmon" | "lightGreen" | "lightPink";

interface ICardTotalizerProps {
  title?: string;
  value: number;
  bgClass: TGbClass;
  color?: string;
  decimals?: number | 0;
  prefix?: string;
  suffix?: string;
  strapline?: string;
}

function CardTotalDays({ title, value, bgClass, color, decimals, prefix, suffix, strapline }: ICardTotalizerProps) {
  return (
    <>
      <div className={style.container}>
        <h3>{title}</h3>
        <div className={style.mainRow}>
          <CountUp
            // start={0}
            end={value}
            decimal="."
            prefix={prefix}
            decimals={decimals}
            duration={1}
            style={{ color: `${color}` }}
          />
          <strong>{suffix}</strong>
        </div>
        <h4
          className={
            bgClass === "salmon" ? style.salmon : bgClass === "lightGreen" ? style.lightGreen : style.lightPink
          }
        >
          {strapline}
        </h4>
      </div>
    </>
  );
}

export default memo(CardTotalDays);
