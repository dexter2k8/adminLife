import { CSSProperties } from "@material-ui/styles";

export const styledBox: CSSProperties = {
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

export const styledDatagrid: CSSProperties = {
  fontSize: 18,
  fontFamily: 'inherit',
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

export const paginationBox: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "0 1.6rem",
  fontFamily: "__Nunito_Sans_9c5fb3",
  span: {
    fontSize: ".875rem",
    cursor: "default",
  },
  select: {
    width: "6.25rem",
    height: "1.5rem",
    textAlign: "center",
    margin: "0 .75rem",
    borderRadius: ".25rem",
    border: "1px solid var(--li-hover)",
    cursor: "pointer",
    fontFamily: "__Nunito_Sans_9c5fb3",
  },
  input: {
    width: "2.5rem",
    height: "1.5rem",
    margin: "0 .375rem",
    borderRadius: ".25rem",
    textAlign: "center",
    border: "1px solid var(--li-hover)",
    fontFamily: "__Nunito_Sans_9c5fb3",
  },
};
