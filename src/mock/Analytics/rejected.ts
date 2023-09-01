export const rejectedRows = [
  {
    id: 1,
    transaction: 12345,
    payer: "Crossfire",
    billCode: 32,
    date: "01.20.2022",
    status: "Rejected",
    loss: 649,
  },
  {
    id: 2,
    transaction: 12346,
    payer: "Signal",
    billCode: 31,
    date: "02.10.2022",
    status: "Rejected",
    loss: 807.15,
  },
  {
    id: 3,
    transaction: 12347,
    payer: "Medication",
    billCode: 2,
    date: "03.30.2022",
    status: "Rejected",
    loss: 149,
  },
];

export const rejectedStats = { rejections: 2323, total: 11615 };

export const rejectionsPayer = [
  {
    label: "Others",
    value: 20,
  },
  {
    label: "Signal",
    value: 50,
  },
  {
    label: "MHA",
    value: 120,
  },
  {
    label: "Careless",
    value: 180,
  },
  {
    label: "Crossfire",
    value: 200,
  },
];

export const rejectionsCptCodes = [
  {
    label: "4481",
    value: 88,
  },
  {
    label: "5629",
    value: 121,
  },
  {
    label: "2064",
    value: 156,
  },
  {
    label: "8590",
    value: 193,
  },
  {
    label: "8312",
    value: 229,
  },
];
