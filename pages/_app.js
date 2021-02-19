import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { AuthProvider } from "../auth";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CssBaseline />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
