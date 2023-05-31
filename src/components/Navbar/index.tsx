"use client";
import styles from "./styles.module.scss";
import { memo, useContext } from "react";
import ProviderSelect from "../ProviderSelect";
import { MenuContext } from "@/hook/menuContext";
import { IconButton } from "@mui/material";
import { InputBase } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  const { collapsed, setCollapsed } = useContext(MenuContext);
  return (
    <div className={styles.container}>
      <section>
        <IconButton onClick={() => setCollapsed(!collapsed)}>
          <MenuOutlinedIcon />
        </IconButton>
        <div className={styles.inputbox}>
          <InputBase sx={{ ml: 2, flex: 1, transition: "0.3s" }} placeholder="Search" />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
      </section>
      <ProviderSelect />
    </div>
  );
}

export default memo(Navbar);
