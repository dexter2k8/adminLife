export const claimStatus = [
  {
    transaction_date: "Jul 2022",
    total_accepted: "191904",
    total_rejected: "37666",
    total_outstanding: "105295",
  },
  {
    transaction_date: "Aug 2023",
    total_accepted: "163996",
    total_rejected: "25840",
    total_outstanding: "137524",
  },
  {
    transaction_date: "Feb 2022",
    total_accepted: "179803",
    total_rejected: "54170",
    total_outstanding: "86802",
  },
  {
    transaction_date: "Sep 2022",
    total_accepted: "171939",
    total_rejected: "31040",
    total_outstanding: "127371",
  },
  {
    transaction_date: "Oct 2022",
    total_accepted: "126227",
    total_rejected: "23503",
    total_outstanding: "197574",
  },
  {
    transaction_date: "Mar 2023",
    total_accepted: "149736",
    total_rejected: "29993",
    total_outstanding: "120081",
  },
  {
    transaction_date: "Oct 2023",
    total_accepted: "75972",
    total_rejected: "14789",
    total_outstanding: "234544",
  },
  {
    transaction_date: "Mar 2022",
    total_accepted: "208515",
    total_rejected: "50054",
    total_outstanding: "92692",
  },
  {
    transaction_date: "Aug 2022",
    total_accepted: "187663",
    total_rejected: "36851",
    total_outstanding: "100155",
  },
  {
    transaction_date: "Jan 2023",
    total_accepted: "127427",
    total_rejected: "40955",
    total_outstanding: "123729",
  },
  {
    transaction_date: "Feb 2023",
    total_accepted: "126058",
    total_rejected: "26801",
    total_outstanding: "124071",
  },
  {
    transaction_date: "Apr 2022",
    total_accepted: "198717",
    total_rejected: "44912",
    total_outstanding: "92558",
  },
  {
    transaction_date: "Apr 2023",
    total_accepted: "154922",
    total_rejected: "27607",
    total_outstanding: "147885",
  },
  {
    transaction_date: "May 2023",
    total_accepted: "147252",
    total_rejected: "26096",
    total_outstanding: "139966",
  },
  {
    transaction_date: "Jun 2023",
    total_accepted: "101256",
    total_rejected: "19510",
    total_outstanding: "173316",
  },
  {
    transaction_date: "Jul 2023",
    total_accepted: "80923",
    total_rejected: "14234",
    total_outstanding: "209453",
  },
  {
    transaction_date: "Nov 2023",
    total_accepted: "44290",
    total_rejected: "6584",
    total_outstanding: "272053",
  },
  {
    transaction_date: "Dec 2023",
    total_accepted: "17410",
    total_rejected: "2526",
    total_outstanding: "314395",
  },
  {
    transaction_date: "Jan 2022",
    total_accepted: "161706",
    total_rejected: "58341",
    total_outstanding: "81783",
  },
  {
    transaction_date: "May 2022",
    total_accepted: "199181",
    total_rejected: "39189",
    total_outstanding: "105461",
  },
  {
    transaction_date: "Jun 2022",
    total_accepted: "188653",
    total_rejected: "36402",
    total_outstanding: "96002",
  },
  {
    transaction_date: "Sep 2023",
    total_accepted: "150698",
    total_rejected: "21545",
    total_outstanding: "166794",
  },
  {
    transaction_date: "Nov 2022",
    total_accepted: "96993",
    total_rejected: "17012",
    total_outstanding: "199925",
  },
  {
    transaction_date: "Dec 2022",
    total_accepted: "164985",
    total_rejected: "25603",
    total_outstanding: "132995",
  },
];

export const rejectAdjustmentReason = [
  {
    label: "18",
    description:
      "Exact duplicate claim/service (Use only with Group Code OA except where state workers' compensation regulations requires CO)Start: 01/01/1995 | Last Modified: 06/02/2013",
    status: "activated",
    value: 602,
  },
  {
    label: "22",
    description:
      "This care may be covered by another payer per coordination of benefits.Start: 01/01/1995 | Last Modified: 09/30/2007",
    status: "activated",
    value: 613,
  },
  {
    label: "26",
    description: "Expenses incurred prior to coverage.Start: 01/01/1995",
    status: "activated",
    value: 644,
  },
  {
    label: "31",
    description: "Patient cannot be identified as our insured.Start: 01/01/1995 | Last Modified: 09/30/2007",
    status: "activated",
    value: 721,
  },
  {
    label: "IVO",
    description: "-",
    status: "-",
    value: 759,
  },
  {
    label: "208",
    description: "National Provider Identifier - Not matched.Start: 07/09/2007 | Last Modified: 09/30/2007",
    status: "activated",
    value: 1199,
  },
  {
    label: "252",
    description:
      "An attachment/other documentation is required to adjudicate this claim/service. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT).Start: 09/30/2012 | Last Modified: 06/02/2013",
    status: "activated",
    value: 1612,
  },
  {
    label: "45",
    description:
      "Charge exceeds fee schedule/maximum allowable or contracted/legislated fee arrangement. Usage: This adjustment amount cannot equal the total service or claim charge amount; and must not duplicate provider adjustment amounts (payments and contractual reductions) that have resulted from prior payer(s) adjudication. (Use only with Group Codes PR or CO depending upon liability)Start: 01/01/1995 | Last Modified: 07/01/2017",
    status: "activated",
    value: 1958,
  },
  {
    label: "24",
    description:
      "Charges are covered under a capitation agreement/managed care plan.Start: 01/01/1995 | Last Modified: 09/30/2007",
    status: "activated",
    value: 2299,
  },
  {
    label: "16",
    description:
      "Claim/service lacks information or has submission/billing error(s). Usage: Do not use this code for claims attachment(s)/other documentation. At least one Remark Code must be provided (may be comprised of either the NCPDP Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.) Refer to the 835 Healthcare Policy Identification Segment (loop 2110 Service Payment Information REF), if present.Start: 01/01/1995 | Last Modified: 03/01/2018",
    status: "activated",
    value: 2636,
  },
];

export const mostRejectedCPT = [
  {
    label: "83735",
    value: 98674,
  },
  {
    label: "99232",
    value: 119137,
  },
  {
    label: "1126F",
    value: 130874,
  },
  {
    label: "99233",
    value: 132258,
  },
  {
    label: "36415",
    value: 139446,
  },
  {
    label: "99213",
    value: 167790,
  },
  {
    label: "80053",
    value: 219058,
  },
  {
    label: "99214",
    value: 228304,
  },
  {
    label: "85025",
    value: 257826,
  },
  {
    label: "0250",
    value: 511439,
  },
];

export const acceptedByPayer = [
  {
    name: "UNITED HEALTHCARE INSURANCE COMPANY",
    value: 185095,
  },
  {
    name: "MEDICARE PART B",
    value: 174144,
  },
  {
    name: "FIRST COAST SERVICE OPTIONS, INC.",
    value: 163342,
  },
  {
    name: "AETNA",
    value: 159520,
  },
  {
    name: "FLORIDA BLUE",
    value: 151706,
  },
];

export const rejectedByPayer = [
  {
    name: "UNITED HEALTHCARE INSURANCE COMPANY",
    value: 42560,
  },
  {
    name: "FLORIDA BLUE",
    value: 41487,
  },
  {
    name: "AETNA",
    value: 41371,
  },
  {
    name: "STATE OF FLORIDA MEDICAID",
    value: 33399,
  },
  {
    name: "HUMANA INC.",
    value: 15368,
  },
];
