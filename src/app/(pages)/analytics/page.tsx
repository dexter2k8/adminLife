"use client";
import { useContext } from "react";
import styles from "../dashboard/page.module.scss";
import { MenuContext } from "@/hook/menuContext";
import Header from "@/components/Header";
import TabPagination from "@/components/TabPagination";
import { ITabListProps } from "@/interfaces";
import { formatNumber } from "@/utils/lib";
import Overview from "@/features/analytics/Overview";
import Accepted from "@/features/analytics/Accepted";
import Rejected from "@/features/analytics/Rejected";
import Pending from "@/features/analytics/Pending";

export default function Analytics() {
  const { analyticsTab, setAnalyticsTab, totalBills } = useContext(MenuContext);

  const tabList: ITabListProps[] = [
    { label: "Overview", tabPage: <Overview /> },
    { label: "Accepted", tabPage: <Accepted /> },
    { label: "Rejected", tabPage: <Rejected /> },
    { label: "Pending", tabPage: <Pending /> },
  ];

  return (
    <div className={styles.container}>
      <Header title="Analytics" subtitle={`Total: ${formatNumber(totalBills)} bills`} />
      <TabPagination activeTab={analyticsTab} setActiveTab={setAnalyticsTab} tabList={tabList} page="analytics" />
    </div>
  );
}
