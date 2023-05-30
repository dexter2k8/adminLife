import { MenuContext } from "@/hook/menuContext";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useContext } from "react";

interface ISidebarTitleProps {
  title: string;
}

function SidebarTitle({ title }: ISidebarTitleProps) {
  const { collapsed } = useContext(MenuContext);
  return (
    <section className={styles.sidebarTitle}>
      <h2 className={collapsed ? styles.collapsed : styles.expanded}>{title}</h2>
    </section>
  );
}

export default SidebarTitle;
