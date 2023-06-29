import { Range } from "react-date-range";
import { addDays, format } from "date-fns";
import { ISelectProps } from "@/interfaces";

// formatted date to display on calendar
export const calendarDate = (dateObj: ISelectProps | Range) =>
  `${format(dateObj.startDate as Date, "MM.dd.yyyy")} - ${format(dateObj.endDate as Date, "MM.dd.yyyy")}`;

// formatted date to string date
export const formatDate = (dateObj: Date | string) => format(new Date(dateObj), "MM.dd.yyyy");

// number formatted tu USD currency
export const formatCurrency = (value: number): string => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return formatter.format(value);
};

export const stringDate = (dateObj: Date): string => format(dateObj, "MM-dd-yyyy");

//convert date to short string
export const overviewDate = (index: number): string => {
  const date = addDays(new Date(), -30 * index);
  return date.toLocaleDateString("en-us", { month: "short", year: "numeric" });
};

// thousands unit separator
export const formatNumber = (number: number): string => {
  const formattedInteger = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formattedInteger;
};
