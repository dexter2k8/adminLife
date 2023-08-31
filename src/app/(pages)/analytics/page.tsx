"use client";
import { useContext } from "react";
import styles from "../dashboard/page.module.scss";
import { MenuContext } from "@/hook/menuContext";
import Header from "@/components/Header";
import TabPagination from "@/components/TabPagination";
import { ITabListProps } from "@/interfaces";
import Overview from "@/features/analytics/Overview";
import { formatNumber } from "@/utils/lib";
import Accepted from "@/features/analytics/Accepted";

export default function Analytics() {
  const { analyticsTab, setAnalyticsTab, totalBills } = useContext(MenuContext);

  const tabList: ITabListProps[] = [
    { label: "Overview", tabPage: <Overview /> },
    { label: "Accepted", tabPage: <Accepted /> },
    // { label: "Rejected", tabPage: <Rejected /> },
    // { label: "Outstanding", tabPage: <Outstanding /> },
  ];

  return (
    <div className={styles.container}>
      <Header title="Analytics" subtitle={`Total: ${formatNumber(totalBills)} bills`} />
      <TabPagination activeTab={analyticsTab} setActiveTab={setAnalyticsTab} tabList={tabList} page="analytics" />
    </div>
  );
}
