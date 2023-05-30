import styles from "./page.module.scss";
import Header from "@/components/Header";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      <h1>dashboard</h1>
    </div>
  );
}
