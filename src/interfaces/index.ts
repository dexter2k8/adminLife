import { ReactElement } from "react";

export interface ITabListProps {
  label: string;
  tabPage: ReactElement;
}

export interface IClaimStatus {
  transaction_date: string;
  total_accepted: string | number;
  total_rejected: string | number;
  total_pending: string | number;
}

export interface IRejectedAndAdjustmentReasons {
  label: string;
  description: string;
  status: string;
  value: number;
}

export interface ISelectProps {
  title: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
}

export interface IProvider {
  label: string;
  value: string;
  image: string;
}
