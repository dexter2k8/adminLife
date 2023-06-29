import { formatCurrency, formatDate } from "@/utils/lib";
import { GridCellParams, GridColDef } from "@mui/x-data-grid";
// seleção da classe para estilização da coluna status
const status = (params: GridCellParams<any>) => {
  if (params.value == "Accepted") return "status accepted";
  else if (params.value == "Rejected") return "status rejected";
  else if (params.value == "Pending") return "status pending";
  return "status";
};

const renderDate = {
  field: "date",
  headerName: "Date",
  flex: 1,
  renderCell({ row: { date } }: any) {
    return formatDate(date);
  },
};

export const overviewColumns: GridColDef[] = [
  { field: "transaction", headerName: "Transaction", flex: 1 },
  { field: "payer", headerName: "Payer", flex: 1 },
  { field: "billCode", headerName: "Bill Code", flex: 1, align: "center", headerAlign: "center" },
  renderDate,
  { field: "status", headerName: "Status", flex: 1, cellClassName: status },
];

export const acceptedColumns: GridColDef[] = [
  { field: "transaction", headerName: "Transaction", flex: 1 },
  { field: "payer", headerName: "Payer", flex: 1 },
  { field: "billCode", headerName: "Bill Code", flex: 1 },
  { field: "date", headerName: "Transaction Date", flex: 1 },
  { field: "status", headerName: "Status", flex: 1, cellClassName: status },
  {
    field: "billed",
    headerName: "Billed",
    flex: 1,
    renderCell({ row: { billed } }) {
      return formatCurrency(billed);
    },
  },
  {
    field: "paid",
    headerName: "Paid",
    flex: 1,
    renderCell({ row: { paid } }) {
      return <span className="paid">{formatCurrency(paid)}</span>;
    },
  },
];
export const rejectedColumns: GridColDef[] = [
  { field: "transaction", headerName: "Transaction", flex: 1 },
  { field: "payer", headerName: "Payer", flex: 1 },
  { field: "billCode", headerName: "Bill Code", flex: 1 },
  { field: "date", headerName: "Transaction Date", flex: 1 },
  { field: "status", headerName: "Status", flex: 1, cellClassName: status },
  {
    field: "loss",
    headerName: "Total Loss",
    flex: 1,
    renderCell({ row: { loss } }) {
      return <span className="loss">{formatCurrency(loss)}</span>;
    },
  },
];
