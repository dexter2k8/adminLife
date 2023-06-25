export const styledBox = {
  height: "calc(100vh - 14.375rem)",
  width: "100%",
  "& .status div": {
    padding: ".25rem .5rem",
    borderRadius: ".5rem",
  },
  "& .accepted div": {
    background: "#EFFAE9",
    color: "#017215",
  },
  "& .rejected div": {
    background: "#FCEBEE",
    color: "#A92C2A",
  },
  "& .pending div": {
    background: "#E1F5FE",
    color: "#00579A",
  },
  "& .paid": {
    color: "#017215",
  },
  "& .loss": {
    color: "#A92C2A",
  },
};

export const styledDatagrid = {
  fontSize: 18,
  ".MuiDataGrid-columnSeparator": {
    display: "none",
  },
  "&.MuiDataGrid-root": {
    border: "none",
  },
  ".MuiDataGrid-columnHeaders div": {
    fontWeight: "600",
  },

  ".MuiDataGrid-row": {
    cursor: "pointer",
  },

  ".MuiDataGrid-cell:focus": {
    outline: "none",
  },
};
