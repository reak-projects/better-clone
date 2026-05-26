import React from "react";
import Head from "next/head";
import MortgageCalculator from "@/components/MortgageCalculator/MortgageCalculator";

export default function MortgageCalculatorPage() {
  return (
    <>
      <Head>
        <title>Mortgage Calculator | Home Loan Payment Calculator | Better</title>
        <meta
          name="description"
          content="Estimate your monthly mortgage payments with Better's free mortgage calculator. Input home price, down payment, and interest rate to see payment breakdown."
        />
      </Head>
      <div style={{ backgroundColor: "var(--better-bg)", minHeight: "100vh", paddingTop: "40px" }}>
        <MortgageCalculator />
      </div>
    </>
  );
}
