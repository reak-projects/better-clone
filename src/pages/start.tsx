import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Phone, ArrowRight, Home, DollarSign, Landmark, ArrowLeft, CheckCircle } from "lucide-react";
import styles from "@/styles/Start.module.css";

type Step = 1 | 2 | 3 | "success";
type Purpose = "buy" | "refi" | "equity" | null;

export default function StartPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [purpose, setPurpose] = useState<Purpose>(null);
  const [budget, setBudget] = useState<number>(400000);
  const [zip, setZip] = useState<string>("");

  const handlePurposeSelect = (selectedPurpose: Purpose) => {
    setPurpose(selectedPurpose);
    setStep(2);
  };

  const handleNextStep2 = () => {
    setStep(3);
  };

  const handleNextStep3 = () => {
    if (zip.length >= 5) {
      setStep("success");
    } else {
      alert("Please enter a valid 5 or 6 digit ZIP code.");
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      setPurpose(null);
    } else if (step === 3) {
      setStep(2);
    }
  };

  // Determine progress percentage
  let progressWidth = "25%";
  if (step === 2) progressWidth = "50%";
  if (step === 3) progressWidth = "75%";
  if (step === "success") progressWidth = "100%";

  return (
    <>
      <Head>
        <title>Get Started | Pre-Approval | Better</title>
        <meta
          name="description"
          content="Start your pre-approval online with Better. Zero lender fees, commission-free support, and instant rate quotes with no credit score impact."
        />
      </Head>

      <div className={styles.startPage}>
        {/* Progress Bar */}
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: progressWidth }} />
        </div>

        {/* Simplified Header */}
        <header className={styles.header}>
          <Link href="/" aria-label="Better.com Home">
            <svg
              className={styles.logo}
              viewBox="0 0 85 22"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.405 16.593v-8.86h2.775V16.59h-2.775zm1.387-10.42c-.93 0-1.57-.655-1.57-1.554 0-.912.64-1.568 1.57-1.568.943 0 1.58.656 1.58 1.568 0 .899-.637 1.554-1.58 1.554zM24.78 12.023c0 2.87-1.897 4.792-4.766 4.792-2.883 0-4.792-1.921-4.792-4.792v-3.766h2.775v3.704c0 1.34.82 2.213 2.017 2.213 1.196 0 1.99-.86 1.99-2.213v-3.704h2.776v3.766zm9.213.918h-6.241c.21 1.258 1.16 1.986 2.457 1.986.993 0 1.765-.4 2.115-.992h2.905c-.604 2.11-2.43 3.52-5.02 3.52-3.415 0-5.324-2.128-5.324-4.896 0-2.853 1.922-4.992 5.097-4.992 3.161 0 4.975 2.043 4.975 4.887v.487zm-2.842-1.815c-.172-1.121-.992-1.745-2.096-1.745-1.121 0-1.933.624-2.146 1.745h4.242zm11.393-.162h-1.688v3.313c0 .888.375 1.242.984 1.242h.704v2.32c-.525.074-1.171.112-1.812.112-2.004 0-2.99-.893-2.99-3.08v-3.907h-1.425v-2.313h1.425V5.992h2.776v2.66h1.688v2.312c-.001.001-.001.001 0 0zm6.059 0h-1.687v3.313c0 .888.375 1.242.984 1.242h.703v2.32c-.524.074-1.171.112-1.812.112-2.004 0-2.99-.893-2.99-3.08v-3.907h-1.425v-2.313h1.425V5.992h2.775v2.66h1.688v2.312h.001zm11.096.918h-6.241c.21 1.258 1.16 1.986 2.457 1.986.993 0 1.765-.4 2.115-.992h2.905c-.604 2.11-2.43 3.52-5.02 3.52-3.415 0-5.324-2.128-5.324-4.896 0-2.853 1.922-4.992 5.097-4.992 3.161 0 4.975 2.043 4.975 4.887v.487zm-2.842-1.815c-.172-1.121-.992-1.745-2.096-1.745-1.121 0-1.933.624-2.146 1.745h4.242zm9.646-4.604c.487 0 .97.042 1.402.13v2.753a4.704 4.704 0 00-1.62-.266c-1.626 0-2.583.942-2.583 2.766v3.253h-2.776V8.587h2.73v1.312c.513-.986 1.545-1.48 2.847-1.48z" />
            </svg>
          </Link>
          <a href="tel:415-523-8837" className={styles.phoneLink}>
            <Phone size={14} /> (415) 523-8837
          </a>
        </header>

        {/* Wizard Main Content */}
        <main className={styles.mainContent}>
          {step === 1 && (
            <>
              <div className={styles.avatarSection}>
                <div className={styles.avatar}>B</div>
                <div className={styles.onlineIndicator} />
              </div>
              <h1 className={styles.question}>Hi, I&apos;m Betsy!<br />What can I help you with today?</h1>
              
              <div className={styles.cardsList}>
                <button
                  className={styles.optionCard}
                  onClick={() => handlePurposeSelect("buy")}
                >
                  <div className={styles.cardLeft}>
                    <div className={styles.iconWrapper}>
                      <Home size={22} />
                    </div>
                    <span className={styles.cardLabel}>Buying a home</span>
                  </div>
                  <ArrowRight className={styles.arrowIcon} size={20} />
                </button>

                <button
                  className={styles.optionCard}
                  onClick={() => handlePurposeSelect("refi")}
                >
                  <div className={styles.cardLeft}>
                    <div className={styles.iconWrapper}>
                      <DollarSign size={22} />
                    </div>
                    <span className={styles.cardLabel}>Refinance my mortgage</span>
                  </div>
                  <ArrowRight className={styles.arrowIcon} size={20} />
                </button>

                <button
                  className={styles.optionCard}
                  onClick={() => handlePurposeSelect("equity")}
                >
                  <div className={styles.cardLeft}>
                    <div className={styles.iconWrapper}>
                      <Landmark size={22} />
                    </div>
                    <span className={styles.cardLabel}>Get cash from my home</span>
                  </div>
                  <ArrowRight className={styles.arrowIcon} size={20} />
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <button onClick={handleBack} className={styles.phoneLink} style={{ alignSelf: "flex-start", marginBottom: "24px", cursor: "pointer", display: "flex", gap: "6px" }}>
                <ArrowLeft size={14} /> Back
              </button>
              
              <h1 className={styles.question}>
                {purpose === "buy" ? "What is the purchase price of your target home?" : "What is the estimated value of your home?"}
              </h1>

              <div style={{ width: "100%", marginBottom: "40px", textAlign: "center" }}>
                <div style={{ fontSize: "40px", fontWeight: 800, color: "var(--better-green)", marginBottom: "20px" }}>
                  ${budget.toLocaleString()}
                </div>
                <input
                  type="range"
                  min="50000"
                  max="2000000"
                  step="10000"
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                  style={{
                    WebkitAppearance: "none",
                    width: "100%",
                    height: "8px",
                    borderRadius: "4px",
                    background: "var(--better-border)",
                    outline: "none"
                  }}
                />
              </div>

              <button
                className={styles.optionCard}
                onClick={handleNextStep2}
                style={{
                  backgroundColor: "var(--better-green)",
                  color: "var(--better-white)",
                  border: "none",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "18px",
                  padding: "16px 0",
                  borderRadius: "50px",
                  cursor: "pointer"
                }}
              >
                Next Step
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <button onClick={handleBack} className={styles.phoneLink} style={{ alignSelf: "flex-start", marginBottom: "24px", cursor: "pointer", display: "flex", gap: "6px" }}>
                <ArrowLeft size={14} /> Back
              </button>

              <h1 className={styles.question}>Enter your ZIP code to check custom rates</h1>

              <div style={{ width: "100%", marginBottom: "40px" }}>
                <input
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  placeholder="e.g. 421005"
                  maxLength={6}
                  style={{
                    width: "100%",
                    padding: "16px 20px",
                    fontSize: "20px",
                    fontWeight: 600,
                    borderRadius: "12px",
                    border: "2px solid var(--better-border)",
                    textAlign: "center",
                    outline: "none"
                  }}
                />
              </div>

              <button
                className={styles.optionCard}
                onClick={handleNextStep3}
                style={{
                  backgroundColor: "var(--better-green)",
                  color: "var(--better-white)",
                  border: "none",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "18px",
                  padding: "16px 0",
                  borderRadius: "50px",
                  cursor: "pointer"
                }}
              >
                Complete Pre-Approval
              </button>
            </>
          )}

          {step === "success" && (
            <>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", animation: "fadeIn 0.5s ease" }}>
                <div style={{ color: "var(--better-green-light)", marginBottom: "24px" }}>
                  <CheckCircle size={80} fill="var(--better-green)" />
                </div>
                <h1 className={styles.question}>Congratulations! You are Pre-Approved!</h1>
                <p style={{ fontSize: "16px", color: "var(--better-text-secondary)", lineHeight: "1.6", marginBottom: "32px", maxWidth: "480px" }}>
                  Based on your target value of <strong>${budget.toLocaleString()}</strong> in ZIP code <strong>{zip}</strong>, you qualify for a Better Mortgage loan. A representative will reach out shortly to lock in your rates.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
                  <Link
                    href={`/mortgage-calculator?zip=${zip}&taxes=${Math.round(budget * 0.0125 / 12)}`}
                    className={styles.optionCard}
                    style={{
                      backgroundColor: "var(--better-green)",
                      color: "var(--better-white)",
                      border: "none",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "16px",
                      padding: "14px 0",
                      borderRadius: "50px"
                    }}
                  >
                    View Mortgage Calculator
                  </Link>
                  <Link
                    href="/"
                    className={styles.optionCard}
                    style={{
                      backgroundColor: "var(--better-white)",
                      color: "var(--better-green)",
                      border: "2px solid var(--better-green)",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "16px",
                      padding: "14px 0",
                      borderRadius: "50px"
                    }}
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </>
          )}
        </main>

        {/* Stats Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContainer}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>$100B+</div>
              <div className={styles.statDesc}>Home loans funded online</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>400K+</div>
              <div className={styles.statDesc}>Customers served</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>17 Days</div>
              <div className={styles.statDesc}>Average closing time</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
