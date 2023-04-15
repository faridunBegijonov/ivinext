import "@/src/app/styles/globals.css";
import type { AppProps } from "next/app";
import { LayoutComponent } from "@/src/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}
