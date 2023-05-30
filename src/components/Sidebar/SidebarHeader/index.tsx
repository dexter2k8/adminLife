import styles from "./styles.module.scss";
import { MenuContext } from "@/hook/menuContext";
import { memo, useContext } from "react";
import PandaIcon from "../../../../public/PandaIcon";

function SidebarHeader() {
  const { collapsed } = useContext(MenuContext);
  return (
    <header className={styles.sidebarHeader}>
      <PandaIcon />
      <h2 className={collapsed ? styles.show : undefined}>AdminHub</h2>
    </header>
  );
}

export default memo(SidebarHeader);
