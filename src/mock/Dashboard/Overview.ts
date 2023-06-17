export const rejectAdjustmentReason = [
  {
    label: "18",
    description: "Exact duplicate service. Start: 01/01/1995 | Last Modified: 06/02/2013",
    status: "activated",
    value: 602,
  },
  {
    label: "22",
    description:
      "This care may be covered by another payer per coordination of benefits. Start: 01/01/1995 | Last Modified: 09/30/2007",
    status: "activated",
    value: 613,
  },
  {
    label: "26",
    description: "Expenses incurred prior to coverage. Start: 01/01/1995",
    status: "activated",
    value: 644,
  },
  {
    label: "31",
    description: "Patient cannot be identified as our insured. Start: 01/01/1995 | Last Modified: 09/30/2007",
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
    description: "National Provider Identifier - Not matched. Start: 07/09/2007 | Last Modified: 09/30/2007",
    status: "activated",
    value: 1199,
  },
  {
    label: "252",
    description:
      "Another documentation is required to adjudicate this service. At least one Remark Code must be provided (may be comprised of either the Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT). Start: 09/30/2012 | Last Modified: 06/02/2013",
    status: "activated",
    value: 1612,
  },
  {
    label: "45",
    description:
      "Charge exceeds fee schedule allowable or contracted/legislated fee arrangement. Usage: This adjustment amount cannot equal the total service or billing charge amount; and must not duplicate provider adjustment amounts (payments and contractual reductions) that have resulted from prior payer(s) adjudication. Start: 01/01/1995 | Last Modified: 07/01/2017",
    status: "activated",
    value: 1958,
  },
  {
    label: "24",
    description:
      "Charges are covered under a capitation agreement/managed care plan. Start: 01/01/1995 | Last Modified: 09/30/2007",
    status: "activated",
    value: 2299,
  },
  {
    label: "16",
    description:
      "Service lacks information or has submission error(s). Usage: Do not use this code for billing attachment(s)/other documentation. At least one Remark Code must be provided (may be comprised of either the Reject Reason Code, or Remittance Advice Remark Code that is not an ALERT.) Refer to the Policy Identification Segment, if present. Start: 01/01/1995 | Last Modified: 03/01/2018",
    status: "activated",
    value: 2636,
  },
];

export const mostRejectedCodes = [
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
    name: "UNITED MEDICAL INSTITUTE",
    value: 185095,
  },
  {
    name: "MEDICAL CENTER",
    value: 174144,
  },
  {
    name: "SANTA CLAUS HEALTH",
    value: 163342,
  },
  {
    name: "XAVIER",
    value: 159520,
  },
  {
    name: "CURITIBA BLUE",
    value: 151706,
  },
];

export const rejectedByPayer = [
  {
    name: "UNITED MEDICAL INSTITUTE",
    value: 42560,
  },
  {
    name: "CURITIBA BLUE",
    value: 41487,
  },
  {
    name: "XAVIER",
    value: 41371,
  },
  {
    name: "GOLDEN PILL",
    value: 33399,
  },
  {
    name: "GREEN LIFE",
    value: 15368,
  },
];
