import React from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Landing from "./components/Landing";

const theme = createTheme({
  "palette": {
    "common": { "black": "#000", "white": "#fff" },
    "background": { "paper": "#fff", "default": "#fafafa" },
    "primary": {
    "main": "rgba(33, 58, 98, 1)"
    },
    "secondary": {
     "main": "rgba(252, 163, 16, 1)",
    },
    "error": {
     "main": "rgba(94, 43, 53, 1)",
    },
    "text": {
      "primary": "rgba(0, 0, 0, 0.87)",
      "secondary": "rgba(20, 53, 61, 1)",
      "disabled": "rgba(0, 0, 0, 0.38)",
      "hint": "rgba(0, 0, 0, 0.38)"
    }
  }
});

function App() {
 
  return (
   <>
  <ThemeProvider theme={theme} >
  <CssBaseline />
  <Landing/>
  </ThemeProvider>
   
    </>
  );
}

export default App;
