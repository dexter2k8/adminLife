import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { memo } from "react";
import { Box } from "@mui/material";
import { styledBox, styledDatagrid } from "./styles";

interface IDataGridProps {
  columns: GridColDef[];
  rows: GridRowsProp;
}

function Table({ columns, rows }: IDataGridProps) {
  return (
    <Box sx={styledBox}>
      <DataGrid
        sx={styledDatagrid}
        rows={rows}
        columns={columns}
        // initialState={{
        //   pagination: { paginationModel: { pageSize: 25 } }, // rows per page default
        // }}
        // pageSizeOptions={[5, 10, 25]} // rows per page options
        // checkboxSelection // set a checkbox to select multiple items

        // paginationMode="server" // table paginated by server
        // rowCount={500} // custom number of rows
        // loading={isLoading} // loading animation when changing page
      />
    </Box>
  );
}

export default memo(Table);
