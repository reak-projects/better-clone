import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./MortgageCalculator.module.css";

export default function MortgageCalculator() {
  const router = useRouter();

  // Core Inputs State
  const [homePrice, setHomePrice] = useState<number>(400000);
  const [downPayment, setDownPayment] = useState<number>(80000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTerm, setLoanTerm] = useState<number>(30); // in years
  const [zipCode, setZipCode] = useState<string>("421005");
  
  // Extra Inputs
  const [hoa, setHoa] = useState<number>(150);
  const [queryTaxes, setQueryTaxes] = useState<number | null>(null);

  // Parse URL query parameters once router is ready
  useEffect(() => {
    if (!router.isReady) return;

    const { taxes, zip } = router.query;
    if (zip && typeof zip === "string") {
      setZipCode(zip);
    }
    if (taxes && typeof taxes === "string") {
      const parsedTax = parseFloat(taxes);
      if (!isNaN(parsedTax)) {
        setQueryTaxes(parsedTax);
      }
    }
  }, [router.isReady, router.query]);

  // Synchronize Down Payment when Home Price changes
  const handleHomePriceChange = (val: number) => {
    setHomePrice(val);
    // Keep down payment percentage, calculate new dollar amount
    const newDp = Math.round((downPaymentPercent / 100) * val);
    setDownPayment(newDp);
  };

  // Synchronize Down Payment dollar input
  const handleDownPaymentChange = (val: number) => {
    // Clamp to home price
    const clampedVal = Math.min(val, homePrice);
    setDownPayment(clampedVal);
    
    // Recalculate percentage
    if (homePrice > 0) {
      const pct = (clampedVal / homePrice) * 100;
      // Round to 1 decimal place
      setDownPaymentPercent(parseFloat(pct.toFixed(1)));
    }
  };

  // Synchronize Down Payment percentage input
  const handleDownPaymentPercentChange = (val: number) => {
    // Clamp between 0 and 100
    const clampedPct = Math.min(Math.max(val, 0), 100);
    setDownPaymentPercent(clampedPct);
    
    // Recalculate dollar amount
    const newDp = Math.round((clampedPct / 100) * homePrice);
    setDownPayment(newDp);
  };

  // Calculations
  const principal = Math.max(homePrice - downPayment, 0);
  const monthlyRate = (interestRate / 100) / 12;
  const numberOfPayments = loanTerm * 12;

  // Monthly Principal and Interest (P&I)
  let pAndI = 0;
  if (principal > 0) {
    if (monthlyRate === 0) {
      pAndI = principal / numberOfPayments;
    } else {
      pAndI = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
              (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }
  }

  // Monthly Property Tax
  // If ?taxes=265 is in query, use 265, otherwise default to 1.25% of home price annually
  const propertyTax = queryTaxes !== null ? queryTaxes : Math.round((homePrice * 0.0125) / 12);

  // Monthly Homeowner's Insurance
  // Default to 0.3% of home price annually
  const homeownerInsurance = Math.round((homePrice * 0.003) / 12);

  // Monthly PMI (Private Mortgage Insurance)
  // If down payment is less than 20%, PMI is ~0.75% of loan amount annually, else 0
  const isPmiApplicable = downPaymentPercent < 20;
  const pmi = isPmiApplicable ? Math.round((principal * 0.0075) / 12) : 0;

  // Total Monthly Payment
  const totalPayment = Math.round(pAndI + propertyTax + homeownerInsurance + hoa + pmi);

  // Circle details for SVG Donut chart
  const radius = 80;
  const circumference = 2 * Math.PI * radius; // ~502.65

  // Segments details
  const segments = [
    { name: "Principal & Interest", value: Math.round(pAndI), color: "#004733" },
    { name: "Property Tax", value: propertyTax, color: "#017848" },
    { name: "Homeowner's Insurance", value: homeownerInsurance, color: "#8b5cf6" },
    { name: "HOA Fees", value: hoa, color: "#eab308" },
    { name: "PMI", value: pmi, color: "#f43f5e" },
  ].filter(seg => seg.value > 0); // Only render segments > 0

  // Calculate segment offsets
  let accumulatedOffset = 0;

  return (
    <div className={styles.calculatorWrapper}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Mortgage Calculator</h1>
        <p className={styles.subtitle}>
          Calculate your monthly mortgage payment including principal and interest, taxes, insurance, and HOA fees. Adjust the sliders to see how changes affect your payment.
        </p>
      </div>

      {/* Big Display Section */}
      <div className={styles.displaySection}>
        <div className={styles.displayLeft}>
          <span className={styles.displayLabel}>Estimated Monthly Payment</span>
          <div className={styles.monthlyPayment}>
            ${totalPayment.toLocaleString()}/mo
          </div>
        </div>
        <div className={styles.displayRight}>
          <button 
            className={styles.preApprovedBtn}
            onClick={() => router.push("/start")}
          >
            Get pre-approved
          </button>
        </div>
      </div>

      {/* Two Column Grid */}
      <div className={styles.calculatorGrid}>
        
        {/* Left: Inputs */}
        <div className={styles.inputsContainer}>
          {/* Home Price Input */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <span className={styles.inputLabel}>Home price</span>
              <div className={styles.inputValueBox}>
                <span>$</span>
                <input
                  type="text"
                  value={homePrice.toLocaleString()}
                  onChange={(e) => {
                    const cleanVal = parseInt(e.target.value.replace(/,/g, "")) || 0;
                    handleHomePriceChange(cleanVal);
                  }}
                />
              </div>
            </div>
            <input
              type="range"
              min="50000"
              max="2000000"
              step="5000"
              value={homePrice}
              onChange={(e) => handleHomePriceChange(parseInt(e.target.value))}
              className={styles.slider}
              aria-label="Home price slider"
            />
          </div>

          {/* Down Payment Input */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <span className={styles.inputLabel}>Down payment</span>
              <div className={styles.downPaymentRow}>
                <div className={styles.dpDollarBox}>
                  <span>$</span>
                  <input
                    type="text"
                    value={downPayment.toLocaleString()}
                    onChange={(e) => {
                      const cleanVal = parseInt(e.target.value.replace(/,/g, "")) || 0;
                      handleDownPaymentChange(cleanVal);
                    }}
                  />
                </div>
                <div className={styles.dpPercentBox}>
                  <input
                    type="number"
                    value={downPaymentPercent}
                    step="0.1"
                    onChange={(e) => handleDownPaymentPercentChange(parseFloat(e.target.value) || 0)}
                  />
                  <span>%</span>
                </div>
              </div>
            </div>
            <input
              type="range"
              min="0"
              max={homePrice}
              step="1000"
              value={downPayment}
              onChange={(e) => handleDownPaymentChange(parseInt(e.target.value))}
              className={styles.slider}
              aria-label="Down payment slider"
            />
          </div>

          {/* Interest Rate Input */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <span className={styles.inputLabel}>Interest rate</span>
              <div className={styles.inputValueBox}>
                <input
                  type="number"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                />
                <span>%</span>
              </div>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              step="0.05"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              className={styles.slider}
              aria-label="Interest rate slider"
            />
          </div>

          {/* Secondary Inputs Grid */}
          <div className={styles.secInputsRow}>
            <div className={styles.inputGroup}>
              <span className={styles.inputLabel}>Loan term</span>
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                className={styles.selectBox}
                aria-label="Loan term select"
              >
                <option value={30}>30-year fixed</option>
                <option value={20}>20-year fixed</option>
                <option value={15}>15-year fixed</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <span className={styles.inputLabel}>ZIP code</span>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                className={styles.zipBox}
                maxLength={6}
                placeholder="ZIP Code"
                aria-label="ZIP Code input"
              />
            </div>

            <div className={styles.inputGroup}>
              <span className={styles.inputLabel}>HOA fees</span>
              <div className={styles.inputValueBox} style={{ width: "100%" }}>
                <span>$</span>
                <input
                  type="text"
                  value={hoa.toLocaleString()}
                  onChange={(e) => {
                    const cleanVal = parseInt(e.target.value.replace(/,/g, "")) || 0;
                    setHoa(cleanVal);
                  }}
                />
                <span style={{ fontSize: "12px", color: "var(--better-text-secondary)" }}>/mo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Charts & Breakdown */}
        <div className={styles.breakdownContainer}>
          {/* Donut Chart Visual */}
          <div className={styles.chartBlock}>
            <svg className={styles.donutSvg}>
              {segments.map((seg, idx) => {
                const percentage = seg.value / totalPayment;
                const strokeLength = percentage * circumference;
                const strokeOffset = circumference - accumulatedOffset;
                
                // Advance offset
                accumulatedOffset += strokeLength;

                return (
                  <circle
                    key={idx}
                    cx="110"
                    cy="110"
                    r={radius}
                    className={styles.donutSegment}
                    stroke={seg.color}
                    strokeDasharray={`${strokeLength} ${circumference}`}
                    strokeDashoffset={strokeOffset}
                  />
                );
              })}
            </svg>
            <div className={styles.chartCenterText}>
              <span className={styles.chartCenterLabel}>Monthly</span>
              <span className={styles.chartCenterVal}>${totalPayment.toLocaleString()}</span>
            </div>
          </div>

          {/* Breakdown Items Table */}
          <div className={styles.breakdownList}>
            {segments.map((seg, idx) => (
              <div key={idx} className={styles.breakdownItem}>
                <div className={styles.itemLeft}>
                  <div className={styles.itemDot} style={{ backgroundColor: seg.color }} />
                  <span className={styles.itemName}>{seg.name}</span>
                </div>
                <span className={styles.itemVal}>${seg.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Additional FAQ Section */}
      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>About this mortgage calculator</h2>
        
        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How is your monthly payment calculated?</h3>
          <p className={styles.faqAnswer}>
            The monthly payment calculation is based on the home price, your down payment, interest rate, and the term of the loan. In addition to Principal &amp; Interest, home ownership entails other recurring fees such as property taxes, home insurance, HOA, and Private Mortgage Insurance (PMI) if you put down less than 20%.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>The Mortgage Payment Formula</h3>
          <p className={styles.faqAnswer}>
            To calculate the base Principal and Interest monthly payment ($M$), we use the standard amortization formula:
          </p>
          <div className={styles.formulaBox}>
            M = P * [ r * (1 + r)^n ] / [ (1 + r)^n - 1 ]
            <br /><br />
            Where:
            <br />
            P = Principal loan amount (Home Price - Down Payment)
            <br />
            r = Monthly interest rate (Annual Rate / 100 / 12)
            <br />
            n = Total number of payments (Loan Term in Years * 12)
          </div>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.faqQuestion}>How do Property Taxes and Insurance impact payments?</h3>
          <p className={styles.faqAnswer}>
            Property taxes are assessed by your local county government and typically average 1% to 2% of the home value annually. Homeowner&apos;s insurance is required by lenders to protect the home against damage. HOA fees are paid directly to a homeowner&apos;s association if you purchase a condo or home within a managed community.
          </p>
        </div>
      </section>
    </div>
  );
}
