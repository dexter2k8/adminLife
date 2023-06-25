"use client";
import { Dispatch, SetStateAction, createContext, useMemo, useState } from "react";
import { IContextProps } from "./authContext";
import { defaultDate } from "@/components/Calendar";
import { Range } from "react-date-range";
import { providers } from "@/mock/selectProvider";
import { IProvider } from "@/interfaces";

interface IMenuContext {
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
  activeDate: number;
  setActiveDate: Dispatch<SetStateAction<number>>;
  selectedDate: Range;
  setSelectedDate: Dispatch<SetStateAction<Range>>;
  analyticsTab: string;
  setAnalyticsTab: Dispatch<SetStateAction<string>>;
  providerSelected: IProvider;
  setProviderSelected: Dispatch<SetStateAction<IProvider>>;
  totalBills: number;
  setTotalBills: Dispatch<SetStateAction<number>>;
}

export const MenuContext = createContext({} as IMenuContext);

function MenuProvider({ children }: IContextProps) {
  const [activePage, setActivePage] = useState<number>(-1); //set the active page when sidebar changes
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [activeDate, setActiveDate] = useState<number>(5); // set the active button on calendar
  const [selectedDate, setSelectedDate] = useState<Range>(defaultDate); // set the active selected calendar date
  const [analyticsTab, setAnalyticsTab] = useState<string>("0"); // set the active tokenized claims
  const [providerSelected, setProviderSelected] = useState<IProvider>(providers[3]); //selected provider
  const [totalBills, setTotalBills] = useState<number>(0); // get total bills value

  const values = useMemo(
    (): IMenuContext => ({
      activePage,
      setActivePage,
      collapsed,
      setCollapsed,
      activeDate,
      setActiveDate,
      selectedDate,
      setSelectedDate,
      analyticsTab,
      setAnalyticsTab,
      providerSelected,
      setProviderSelected,
      totalBills,
      setTotalBills,
    }),
    [activePage, collapsed, activeDate, selectedDate, analyticsTab, providerSelected, totalBills]
  );

  return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>;
}

export default MenuProvider;
