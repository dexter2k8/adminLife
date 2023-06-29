interface IPayerProps {
  id: number;
  value: string;
}

export const payers: IPayerProps[] = [
  { id: 0, value: "Goyette" },
  { id: 1, value: "Krajcik" },
  { id: 2, value: "Upton" },
  { id: 3, value: "Harvey" },
];
export const billCodes: IPayerProps[] = [
  { id: 0, value: "1923091" },
  { id: 1, value: "CT1230" },
  { id: 2, value: "M289213" },
  { id: 3, value: "0287H77" },
  { id: 4, value: "Z2VFF09" },
  { id: 5, value: "1234568" },
  { id: 6, value: "1287098" },
];

export const adjustmentReasons: IPayerProps[] = [
  { id: 0, value: "Not found" },
  { id: 1, value: "Refused" },
  { id: 2, value: "Changed values" },
  { id: 3, value: "Unknown reason" },
];
