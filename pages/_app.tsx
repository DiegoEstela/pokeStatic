import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { darckTheme } from "@/themes";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darckTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
