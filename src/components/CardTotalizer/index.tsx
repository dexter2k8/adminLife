import { Skeleton } from "@mui/material";
import style from "./styles.module.scss";
import { memo } from "react";
import CountUp from "react-countup";

interface ICardTotalizerProps {
  title?: string;
  value: number | undefined;
  color?: string;
  decimals?: number | 0;
  prefix?: string;
  suffix?: string;
  strapline?: string;
}

function CardTotalizer({ title, value, color, decimals, prefix, suffix, strapline }: ICardTotalizerProps) {
  return (
    <>
      <div className={style.container}>
        <h3>{title}</h3>
        {typeof value === "number" ? (
          <>
            <CountUp
              // start={0}
              end={value}
              decimal="."
              prefix={prefix}
              suffix={suffix}
              decimals={decimals}
              duration={1}
              style={{ color: `${color}` }}
            />
            <h4>{strapline}</h4>
          </>
        ) : (
          <>
            <Skeleton width="10rem" height={80} />
            <Skeleton width="6rem" height={30} />
          </>
        )}
      </div>
    </>
  );
}

export default memo(CardTotalizer);
