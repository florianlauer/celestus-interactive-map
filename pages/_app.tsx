import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
