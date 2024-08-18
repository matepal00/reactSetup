import { GlobalStyles as MuiGlobalStyles } from "@mui/material";

export const GlobalStyles = () => (
  <MuiGlobalStyles
    styles={{
      "*": {
        fontFamily: '"Poppins", sans-serif',
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      html: {
        width: "100%",
        height: "100%",
      },
      body: {
        width: "100%",
        height: "100%",
      },
      "#root": {
        width: "100%",
        height: "100%",
      },
    }}
  />
);
