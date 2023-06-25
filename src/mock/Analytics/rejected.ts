export const rejectedRows = [
  {
    id: 1,
    pcn: 12345,
    payer: "Humana",
    cptCodes: 32,
    date: "01.20.2022",
    status: "Rejected",
    loss: 649,
  },
  {
    id: 2,
    pcn: 12346,
    payer: "Cigna",
    cptCodes: 31,
    date: "02.10.2022",
    status: "Rejected",
    loss: 807.15,
  },
  {
    id: 3,
    pcn: 12347,
    payer: "Humana",
    cptCodes: 2,
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
    label: "Cigna",
    value: 50,
  },
  {
    label: "VHA",
    value: 120,
  },
  {
    label: "Tricare",
    value: 180,
  },
  {
    label: "Humana",
    value: 200,
  },
];

export const rejectionsCptCodes = [
  {
    label: "CPT-4481",
    value: 88,
  },
  {
    label: "CPT-5629",
    value: 121,
  },
  {
    label: "CPT-2064",
    value: 156,
  },
  {
    label: "CPT-8590",
    value: 193,
  },
  {
    label: "CPT-8312",
    value: 229,
  },
];
