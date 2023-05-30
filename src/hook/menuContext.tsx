"use client";
import { Dispatch, SetStateAction, createContext, useMemo, useState } from "react";
import { IContextProps } from "./authContext";
import { defaultDate } from "@/components/Calendar";
import { Range } from "react-date-range";

interface IMenuContext {
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
  activeDate: number;
  setActiveDate: Dispatch<SetStateAction<number>>;
  selectedDate: Range;
  setSelectedDate: Dispatch<SetStateAction<Range>>;
  tokenizedTab: string;
  setTokenizedTab: Dispatch<SetStateAction<string>>;
}

export const MenuContext = createContext({} as IMenuContext);

function MenuProvider({ children }: IContextProps) {
  const [activePage, setActivePage] = useState<number>(-1); //set the active page when sidebar changes
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [activeDate, setActiveDate] = useState<number>(5); // set the active button on calendar
  const [selectedDate, setSelectedDate] = useState<Range>(defaultDate); // set the active selected calendar date
  const [tokenizedTab, setTokenizedTab] = useState<string>("0"); // set the active tokenized claims

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
      tokenizedTab,
      setTokenizedTab,
    }),
    [activeDate, activePage, collapsed, selectedDate, tokenizedTab]
  );

  return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>;
}

export default MenuProvider;
