import { Dispatch, SetStateAction, memo, useCallback, useState } from "react";
import TabContext from "@mui/lab/TabContext";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { boxStyle, boxTabsStyle, panelStyle, tabStyle } from "./styles";
import Calendar from "../Calendar";
// import { useRouter } from "next/navigation";
import { ITabListProps } from "@/interfaces";

interface ITabPaginationProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  tabList: ITabListProps[];
  page: string;
}

function TabPagination({ activeTab, setActiveTab, tabList, page }: ITabPaginationProps) {
  // const router = useRouter();
  const handleChange = useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      // router does not working due to MirageJS conflict.
      // router.replace(`${page}?activeTab=${tabList[Number(newValue)].label}`);
      setActiveTab(newValue);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setActiveTab]
  );

  return (
    <Box sx={boxStyle}>
      <TabContext value={activeTab}>
        <Box sx={boxTabsStyle}>
          {/* Listagem das tabs */}
          <TabList TabIndicatorProps={{ sx: { height: "4px" } }} onChange={handleChange}>
            {tabList.map((el, i) => (
              <Tab key={i} sx={tabStyle} label={el.label} value={String(i)} />
            ))}
          </TabList>
          <Calendar />
        </Box>
        {/* Seleção da tab ativa */}
        <TabPanel sx={panelStyle} value={activeTab}>
          {tabList[Number(activeTab)].tabPage}
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default memo(TabPagination);
