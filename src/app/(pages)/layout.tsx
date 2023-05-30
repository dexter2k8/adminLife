import Sidebar from "@/components/Sidebar";
import styles from "./layout.module.scss";
import Navbar from "@/components/Navbar";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className={styles.container}>
      <Sidebar />
      <div>
        <Navbar />
        {children}
      </div>
    </section>
  );
}
