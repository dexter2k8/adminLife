import styles from "./styles.module.scss";
import { memo, useContext, useEffect, useRef, useState } from "react";
import { MenuContext } from "@/hook/menuContext";
import { Skeleton } from "@mui/material";
import CountUp from "react-countup";
import ChartVerticalBar from "@/components/Charts/ChartVerticalBar";
import ChartHorizontalBar from "@/components/Charts/ChartHorizontalBar";
import ChartDonut from "@/components/Charts/ChartDonut";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SouthWestIcon from "@mui/icons-material/SouthWest";
import { getClaimStatusOverview, getRejectedAndAdjustmentReasons } from "@/api/dashboard/Overview";
import { stringDate } from "@/utils/lib";
import { acceptedByPayer, mostRejectedCodes, rejectedByPayer } from "@/mock/Dashboard/Overview";
import { IClaimStatus, IRejectedAndAdjustmentReasons } from "@/interfaces";

const totalAcceptedByPayerColors = ["#00579A", "#029BE4", "#4FC3F6", "#B3E5FB", "#E1F5FE"];

const totalRejectedByPayerColors = ["#A92C2A", "#E3595A", "#E69C9E", "#F9CED4", "#FCEBEE"];

const iconStyle = {
  backgroundColor: "#e1f5fe",
  color: "#3197b3",
  borderRadius: "4px",
  padding: "6px",
  fontSize: "30px",
};

function Overview() {
  const { selectedDate } = useContext(MenuContext); // get the selected date
  const { providerSelected } = useContext(MenuContext); // set the provider
  const [claimStatus, setClaimStatus] = useState<IClaimStatus[] | undefined>();
  const [rejectedAndAdjustment, setRejectedAndAdjustment] = useState<IRejectedAndAdjustmentReasons[] | undefined>();

  const requestClaimStatus = useRef<AbortController | null>(null);
  const requestRejectedAndAdjustment = useRef<AbortController | null>(null);

  const fetchClaimStatus = () => {
    //Aborta a requisição pendente, se houver uma instância de AbortController atribuída à variável
    if (requestClaimStatus.current) {
      requestClaimStatus.current.abort();
    }

    const controller = new AbortController(); //Cria uma nova instância do AbortController antes de fazer a solicitação da API
    const { signal } = controller; // Recebe a propriedade signal do AbortController

    requestClaimStatus.current = controller; //Atribui o controlador à variável de controle

    // recebe o Claim Status Overview da api e armazena em claimStatus
    getClaimStatusOverview({
      startDate: stringDate(selectedDate.startDate as Date),
      endDate: stringDate(selectedDate.endDate as Date),
      provider: providerSelected.value,
      signal,
    })
      .then(setClaimStatus)
      .catch((error) => console.error(error));
  };

  const fetchRejectedAndAdjustment = () => {
    if (requestRejectedAndAdjustment.current) {
      requestRejectedAndAdjustment.current.abort();
    }

    const controller = new AbortController();
    const { signal } = controller;

    requestRejectedAndAdjustment.current = controller;

    getRejectedAndAdjustmentReasons({
      startDate: stringDate(selectedDate.startDate as Date),
      endDate: stringDate(selectedDate.endDate as Date),
      provider: providerSelected.value,
      signal,
    })
      .then(setRejectedAndAdjustment)
      .catch((error) => console.error(error));
  };

  const fetchAll = () => {
    fetchClaimStatus();
    fetchRejectedAndAdjustment();
  };

  // Executa as requisições das api's
  useEffect(() => {
    fetchAll();

    return () => {
      requestClaimStatus.current?.abort();
      requestRejectedAndAdjustment.current?.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate, providerSelected]);

  return (
    <div className={styles.container}>
      <section className={styles.rowContainer}>
        <div className={styles.cardContainer} style={{ width: "60%" }}>
          <div className={styles.cardHeader}>
            <strong>Billing status overview</strong>
            <small>Volume of accepted, rejected, and pending billings</small>
          </div>
          <div>
            {!!claimStatus?.length ? (
              <ChartVerticalBar data={claimStatus} />
            ) : (
              <>
                <Skeleton style={{ margin: "3% 27% 0%" }} variant="rectangular" width={"46%"} height={20} />
                <Skeleton style={{ margin: "4% 5% 6%" }} variant="rectangular" width={"90%"} height={237} />
              </>
            )}
          </div>
        </div>
        <div className={styles.columnContainer} style={{ width: "40%" }}>
          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
              <strong>Billing volume</strong>
              <small>Total billing volume</small>
            </div>
            <div className={styles.totalBody}>
              <div className={styles.totalContainer}>
                <p>Total Billings</p>
                <h3>
                  <CountUp end={2.97} decimals={2} suffix={"M"} duration={1} />
                </h3>
              </div>
              <div className={styles.totalContainer}>
                <p>Accepted/Rejected</p>
                <h3>
                  <CountUp end={1.79} decimals={2} suffix={"M"} duration={1} />
                </h3>
              </div>
              <div className={styles.totalContainer}>
                <p>Pending</p>
                <h3>
                  <CountUp end={1.18} decimals={2} suffix={"M"} duration={1} />
                </h3>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
              <strong>Billings balance</strong>
              <small>Difference of what has been billed and accepted</small>
            </div>
            <div className={styles.totalBody}>
              <div className={styles.totalContainer}>
                <p>
                  <NorthEastIcon style={iconStyle} />
                  Total Billed
                </p>
                <h3>
                  <CountUp end={11.67} decimals={2} suffix={"B"} duration={1} />
                </h3>
              </div>
              <div className={styles.totalContainer}>
                <p>
                  {" "}
                  <SouthWestIcon style={iconStyle} />
                  Total Accepted
                </p>
                <h3>
                  <CountUp end={7.01} decimals={2} suffix={"B"} duration={1} />
                </h3>
              </div>
            </div>
            <div className={styles.cardBody}>
              <strong>From Total Accepted</strong>
              <div className={styles.balanceContainer}>
                <p>Paid</p>
                <h3>
                  <CountUp end={1.13} decimals={2} prefix="$" suffix={"B"} duration={1} />
                </h3>
              </div>
              <div className={styles.balanceContainer}>
                <p>Adjustments</p>
                <h3>
                  <CountUp end={1.8} decimals={2} prefix="$" suffix={"B"} duration={1} />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.rowContainer}>
        <div className={styles.cardContainer} style={{ width: "60%" }}>
          <div className={styles.cardHeader}>
            <strong>Rejected and Adjustment reasons</strong>
            <small>Amount of rejection and adjustment reasons</small>
          </div>
          <div>
            {!!rejectedAndAdjustment ? (
              <ChartHorizontalBar data={rejectedAndAdjustment} chartHeight={264} cardHeight="320px" />
            ) : (
              <>
                <Skeleton style={{ margin: "3% 27% 0%" }} variant="rectangular" width={"46%"} height={20} />
                <Skeleton style={{ margin: "4% 5% 6%" }} variant="rectangular" width={"90%"} height={237} />
              </>
            )}
          </div>
        </div>
        <div className={styles.cardContainer} style={{ width: "40%" }}>
          <div className={styles.cardHeader}>
            <strong>Most rejected billing codes</strong>
            <small>10 most rejected billing codes</small>
          </div>
          <div>
            <ChartHorizontalBar data={mostRejectedCodes} chartHeight={264} cardHeight="320px" />
          </div>
        </div>
      </section>

      <section className={styles.rowContainer}>
        <div className={styles.cardContainer} style={{ width: "50%" }}>
          <div className={styles.cardHeader}>
            <strong>Accepted by payer</strong>
            <small>% of total accepted billings by payer</small>
          </div>
          <div>
            <ChartDonut data={acceptedByPayer} colors={totalAcceptedByPayerColors} />
          </div>
        </div>
        <div className={styles.cardContainer} style={{ width: "50%" }}>
          <div className={styles.cardHeader}>
            <strong>Rejected by payer</strong>
            <small>% of total rejected billings by payer</small>
          </div>
          <div>
            <ChartDonut data={rejectedByPayer} colors={totalRejectedByPayerColors} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default memo(Overview);
