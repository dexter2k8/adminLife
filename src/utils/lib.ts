import { ISelectProps } from "@/components/Calendar";
import { Range } from "react-date-range";
import { addDays, format } from "date-fns";

// formatted date to display on calendar
export const calendarDate = (dateObj: ISelectProps | Range) =>
  `${format(dateObj.startDate as Date, "MM.dd.yyyy")} - ${format(dateObj.endDate as Date, "MM.dd.yyyy")}`;

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
