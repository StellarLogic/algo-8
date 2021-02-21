import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";

const theme = createMuiTheme({
  palette: {
    colors: {
      primary: "#20a4ef",
      secondary: "#d5ebf9",
      ternary: "#f0f5f9",
      active: "#6d7785",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          background: () => theme.palette.colors.ternary,
        },
      },
    },
  },
});

const AppThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default connect()(AppThemeProvider);
