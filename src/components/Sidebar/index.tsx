"use client";
import style from "./styles.module.scss";
import { MenuContext } from "@/hook/menuContext";
import { memo, useContext, useEffect } from "react";
import MenuItems, { IItemProps } from "./SidebarMenuItems";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import SidebarTitle from "./SidebarTitle";

import GridViewIcon from "@mui/icons-material/GridView";
import BarChartIcon from "@mui/icons-material/BarChart";
import { usePathname } from "next/navigation";

function Sidebar() {
  const { collapsed } = useContext(MenuContext);
  const pathname = usePathname();
  const { activePage, setActivePage } = useContext(MenuContext);
  const list: IItemProps[] = [
    { title: "Dashboard", icon: <GridViewIcon />, activeRoute: "dashboard" },
    { title: "Analytics", icon: <BarChartIcon />, activeRoute: "analytics" },
  ];

  useEffect(() => {
    const index = list.findIndex((el) => el.activeRoute === pathname);
    if (index !== -1) setActivePage(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className={`${style.container} ${collapsed ? style.collapsed : undefined}`}>
      <SidebarHeader />

      <SidebarTitle title={"Portal"} />

      <MenuItems list={list} activeItem={activePage} setActiveItem={setActivePage} />

      <SidebarFooter avatar={"/avatar.jpg"} username={"Admin"} email={"admin@mail.com"} />
    </nav>
  );
}

export default memo(Sidebar);
