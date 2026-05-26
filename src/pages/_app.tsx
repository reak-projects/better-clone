import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isStartPage = router.pathname === "/start";

  return (
    <div className={`${inter.variable}`} style={{ fontFamily: "var(--font-inter)" }}>
      {isStartPage ? (
        <Component {...pageProps} />
      ) : (
        <>
          <Header isHomepage={router.pathname === "/"} />
          <main style={{ minHeight: "60vh" }}>
            <Component {...pageProps} />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
