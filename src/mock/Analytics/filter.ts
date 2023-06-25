interface IPayerProps {
  id: number;
  value: string;
}

export const payers: IPayerProps[] = [
  { id: 0, value: "Humana" },
  { id: 1, value: "Cigna" },
  { id: 2, value: "DHA" },
  { id: 3, value: "VHA" },
];
export const billCodes: IPayerProps[] = [
  { id: 0, value: "1923091" },
  { id: 1, value: "CT-1230" },
  { id: 2, value: "M2892133" },
  { id: 3, value: "0287H77" },
  { id: 4, value: "Z-2VFF09" },
  { id: 5, value: "1234568" },
  { id: 6, value: "1287098" },
];

export const adjustmentReasons: IPayerProps[] = [
  { id: 0, value: "Not found" },
  { id: 1, value: "Refused" },
  { id: 2, value: "Changed values" },
  { id: 3, value: "Unknown reason" },
];
