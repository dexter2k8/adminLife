import { ISelectProps } from "@/components/Calendar";
import { Range } from "react-date-range";
import format from "date-fns/format";

// formatted date to display
export const formatDate = (dateObj: ISelectProps | Range) =>
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
