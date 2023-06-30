import { DataGrid, GridColDef, GridRowsProp, GridRowParams } from "@mui/x-data-grid";
import { memo, KeyboardEvent, useState, Dispatch } from "react";
import { Box, Pagination } from "@mui/material";
import { paginationBox, styledBox, styledDatagrid } from "./styles";

interface IDataGridProps {
  columns: GridColDef[];
  rows: GridRowsProp;
  rowCount: number;
  rowClick?(data: GridRowParams<any>): void;
  isLoading: boolean;
  // setLimit: Dispatch<React.SetStateAction<number>>;
  // setOffset: Dispatch<React.SetStateAction<number>>;
}

function Table({ columns, rows, rowCount, rowClick, isLoading /* setLimit, setOffset */ }: IDataGridProps) {
  const [page, setPage] = useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const pageCount = Math.ceil(rowCount / rowsPerPage);

  // set selected page
  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
    // setOffset((pageNumber - 1) * rowsPerPage);
  };

  // regex to enter only integer on input
  const validateNumber = (e: KeyboardEvent<HTMLInputElement>) => {
    const num = +e.currentTarget.value;
    if (e.key == "Enter")
      if (num < 1 || num > pageCount) e.currentTarget.value = "";
      else handlePageChange(num);
    else if (!/[0-9]/.test(e.key) && e.key != "Backspace") e.preventDefault();
  };

  // customized numbered pagination style
  const CustomPagination = () => {
    const min = 1 + (page - 1) * rowsPerPage;
    const max = page * rowsPerPage < rowCount ? page * rowsPerPage : rowCount;

    return (
      <Box sx={paginationBox}>
        <span>{`Showing ${min}-${max} of ${rowCount} bills`}</span>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Pagination
            shape="rounded"
            color="primary"
            count={pageCount}
            page={page}
            boundaryCount={1}
            onChange={(e, i) => handlePageChange(i)}
          />

          <div>
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setPage(1);
                setRowsPerPage(+e.target.value);
                // setLimit(+e.target.value);
                // setOffset(0);
              }}
            >
              <option value="10">10 / page</option>
              <option value="30">30 / page</option>
              <option value="50">50 / page</option>
            </select>

            <span>Go to</span>
            <input onKeyDown={validateNumber} />
            <span>Page</span>
          </div>
        </div>
      </Box>
    );
  };

  return (
    <Box sx={styledBox}>
      <DataGrid
        sx={styledDatagrid}
        rows={rows}
        columns={columns}
        rowCount={rowCount} // custom number of rows
        onRowClick={rowClick}
        // paginationMode="server" // table paginated by server
        localeText={{ footerRowSelected: () => undefined }} // remove footer whitespace
        // components={{ Pagination: CustomPagination }} //show custom pagination
        // initialState={{
        //   pagination: { paginationModel: { pageSize: 25 } }, // rows per page default
        // }}
        // pageSizeOptions={[5, 10, 25]} // rows per page options
        // checkboxSelection // set a checkbox to select multiple items

        loading={isLoading} // loading animation when changing page
      />
    </Box>
  );
}

export default memo(Table);
