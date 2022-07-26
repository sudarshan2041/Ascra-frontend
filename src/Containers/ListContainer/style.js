import { styled, Box, Autocomplete, TextField } from "@mui/material";

export const ListContainerStyle = styled(Box)({
  width: "100%",
  height: "100vh",
  padding: "50px",
});

export const Title = styled("div")({
  fontSize: "18px",
  fontWeight: "bold",
  margin: "20px 0",
});

export const Wrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
});

export const Table = styled("table")({
  border: "1px solid black",
  textAlign: "center",
  borderCollapse: "collapse",
});

export const TH = styled("th")({
  border: "1px solid black",
  textAlign: "center",
  padding: "15px",
});
export const TR = styled("tr")({
  border: "1px solid black",
  textAlign: "center",
  padding: "15px",
});
export const TD = styled("td")({
  border: "1px solid black",
  textAlign: "center",
  padding: "15px",
});

// table, td, th {
//   border: 1px solid #ddd;
//   text-align: left;
// }

// table {
//   border-collapse: collapse;
//   width: 100%;
// }

// th, td {
//   padding: 15px;
// }

export const ErrorMsg = styled("p")({
  fontSize: "12px",
  color: "red",
  margin: "0 10px",
  padding: "unset",
  textAlign: "start",
});

export const AutoCompleteTextField = styled(Autocomplete)(() => ({
  "& .MuiOutlinedInput-root": {
    padding: "10px ",
  },
  "& .MuiOutlinedInput-root .MuiAutocomplete-input": {
    padding: "unset !important",
    width: "unset !important",
    fontSize: "12px",
  },
}));

export const InputTextField = styled(TextField)({
  width: "100%",
  marginTop: "3px",
  borderRadius: "5px",
  "& input": {
    fontSize: "12px",
    padding: "10px 14px",
  },
});

export const LabelStyle = styled("div")({
  fontSize: "14px",
  margin: "10px  0 5px 0",
});
export const Header = styled("div")({
  fontSize: "18px",
  fontWeight: "bold",
  marginLeft: "160px",
});

export const FormWrapper = styled(Box)`
  position: fixed;
  z-index: 9999;
  padding-top: 20px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const FormCard = styled(Box)`
  background-color: #fff;
  margin: auto;
  padding: 20px;
  width: 500px;
  min-height: 200px;
  border-radius: 10px;
`;
