"use client";
import styles from "./page.module.scss";
import { useState } from "react";
import Header from "@/components/Header";
import TabPagination from "@/components/TabPagination";
import { ITabListProps } from "@/interfaces";
import Overview from "@/features/dashboard/Overview";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<string>("0");
  const tabList: ITabListProps[] = [{ label: "Overview", tabPage: <Overview /> }];
  return (
    <div className={styles.container}>
      <Header title="Dashboard" subtitle="Welcome to your dashboard" />
      <TabPagination
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabList={tabList}
        page="dashboard"
      />
    </div>
  );
}
