import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, Home as HomeIcon, Percent, ShieldCheck, DollarSign } from "lucide-react";
import styles from "@/styles/Home.module.css";

type TabKey = "buy" | "refi" | "heloc";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKey>("buy");

  const tabContent = {
    buy: {
      heading: "Buy a home with confidence",
      description: "Our online pre-approval takes as little as 3 minutes. No commitment, no credit impact, and zero lender fees. Our non-commissioned loan officers are here to help you get into your dream home.",
      cta: "Apply for a purchase loan",
      link: "/start",
      rates: [
        { term: "30-Yr Fixed", rate: "6.250%", apr: "6.312%" },
        { term: "15-Yr Fixed", rate: "5.500%", apr: "5.620%" },
        { term: "5/1 ARM", rate: "5.875%", apr: "6.450%" },
      ]
    },
    refi: {
      heading: "Save money on your monthly payments",
      description: "Refinance your mortgage with Better and lock in a lower interest rate. Track rate movements, see how much you could save each month, and complete your application entirely online.",
      cta: "See refinance rates",
      link: "/start",
      rates: [
        { term: "30-Yr Fixed Refi", rate: "6.125%", apr: "6.185%" },
        { term: "15-Yr Fixed Refi", rate: "5.375%", apr: "5.495%" },
      ]
    },
    heloc: {
      heading: "Tap your home's equity with a HELOC",
      description: "Get cash out of your home to renovate, pay off high-interest debt, or cover major expenses. Borrow up to 90% of your home's value with a competitive, flexible line of credit.",
      cta: "Check my HELOC equity",
      link: "/start",
      rates: [
        { term: "HELOC Variable", rate: "7.990%", apr: "8.120%" },
        { term: "10-Yr Fixed Draw", rate: "8.250%", apr: "8.380%" },
      ]
    }
  };

  return (
    <>
      <Head>
        <title>Better Mortgage | Commission-Free Mortgages & Home Loans</title>
        <meta
          name="description"
          content="Better.com makes homeownership simpler, faster, and more accessible. Complete online application, zero lender fees, and transparent rates."
        />
        <meta property="og:title" content="Better Mortgage | Commission-Free Mortgages" />
        <meta
          property="og:description"
          content="Replicated Better.com homepage with full interactive mortgage calculator, start application, and about pages."
        />
        <meta property="og:image" content="/better_hero_mockup.png" />
      </Head>

      <div className={styles.page}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Mortgages<br />made simple</h1>
            
            <div className={styles.ctaWrapper}>
              <Link href="/start" className={styles.heroCta}>
                Start my approval
              </Link>
              <div className={styles.heroSubtext}>
                <span>⏱️ 3 min</span>
                <span>|</span>
                <span>No credit impact</span>
              </div>
            </div>

            <div className={styles.ratingWrapper}>
              <div className={styles.stars}>
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" style={{ clipPath: "polygon(0 0, 60% 0, 60% 100%, 0 100%)" }} />
              </div>
              <span><strong>4.6</strong> Google rating (400k+ reviews)</span>
            </div>
          </div>

          <div className={styles.heroImageWrapper}>
            <Image
              src="/better_hero_mockup.png"
              alt="Better Mortgage Dashboard Mockup"
              width={450}
              height={450}
              priority
              className={styles.heroImage}
            />
          </div>
        </section>

        {/* Tabbed Interactive Section */}
        <section className={styles.tabsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Find your match</span>
            <h2 className={styles.sectionTitle}>Get the mortgage options you need in minutes</h2>
          </div>

          <div className={styles.tabButtons}>
            <button
              onClick={() => setActiveTab("buy")}
              className={`${styles.tabBtn} ${activeTab === "buy" ? styles.activeTabBtn : ""}`}
            >
              Buying a home
            </button>
            <button
              onClick={() => setActiveTab("refi")}
              className={`${styles.tabBtn} ${activeTab === "refi" ? styles.activeTabBtn : ""}`}
            >
              Refinancing
            </button>
            <button
              onClick={() => setActiveTab("heloc")}
              className={`${styles.tabBtn} ${activeTab === "heloc" ? styles.activeTabBtn : ""}`}
            >
              Home Equity (HELOC)
            </button>
          </div>

          <div className={styles.tabContent}>
            <div className={styles.tabText}>
              <h3 className={styles.tabHeading}>{tabContent[activeTab].heading}</h3>
              <p className={styles.tabDescription}>{tabContent[activeTab].description}</p>
              <Link href={tabContent[activeTab].link} className={styles.tabCta}>
                {tabContent[activeTab].cta}
              </Link>
            </div>

            <div className={styles.tabImageWrapper}>
              <div style={{ width: "100%", maxWidth: "420px" }}>
                <h4 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "16px", color: "var(--better-green)" }}>
                  Current Sample Rates
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {tabContent[activeTab].rates.map((rateObj, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "16px",
                        backgroundColor: "var(--better-white)",
                        borderRadius: "10px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.03)",
                        border: "1px solid rgba(0,0,0,0.05)"
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>{rateObj.term}</span>
                      <div style={{ display: "flex", gap: "20px" }}>
                        <span>Rate: <strong style={{ color: "var(--better-accent)" }}>{rateObj.rate}</strong></span>
                        <span style={{ color: "var(--better-text-secondary)", fontSize: "13px" }}>APR: {rateObj.apr}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: "11px", color: "var(--better-text-secondary)", marginTop: "16px", lineHeight: "1.4" }}>
                  *Rates for illustrative purposes only. Actual interest rates may vary based on ZIP code, credit score, and down payment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial & Social Proof Section */}
        <section className={styles.testimonials}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtitle}>Loved by homeowners</span>
            <h2 className={styles.sectionTitle}>What our customers are saying</h2>
          </div>

          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                &ldquo;Better made my home loan process incredibly fast and straightforward. I loved being able to upload documents and track progress in real-time. Saved over $3,000 in lender fees!&rdquo;
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>JS</div>
                <div>
                  <div className={styles.authorName}>Jonathan S.</div>
                  <div className={styles.authorLocation}>Dallas, TX • Purchased in 2025</div>
                </div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                &ldquo;The refinance calculator was spot-on. I checked my rate, locked it, and closed the refinance in less than 3 weeks. Extremely professional service with zero pressure.&rdquo;
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>MR</div>
                <div>
                  <div className={styles.authorName}>Maria R.</div>
                  <div className={styles.authorLocation}>San Jose, CA • Refinanced in 2026</div>
                </div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                &ldquo;No commissions for loan officers means you get honest advice instead of hard selling. The HELOC process was entirely digital, transparent, and quick.&rdquo;
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>DK</div>
                <div>
                  <div className={styles.authorName}>David K.</div>
                  <div className={styles.authorLocation}>Chicago, IL • HELOC in 2026</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Stats */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNum}>$100B+</div>
              <div className={styles.statLabel}>Loans funded online</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNum}>400K+</div>
              <div className={styles.statLabel}>Customers served</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNum}>$0</div>
              <div className={styles.statLabel}>Lender fees charged</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNum}>17 Days</div>
              <div className={styles.statLabel}>Average closing time</div>
            </div>
          </div>
        </section>

        {/* Product Cards Section */}
        <section className={styles.productsSection}>
          <div className={styles.sectionHeader} style={{ marginBottom: "64px" }}>
            <span className={styles.sectionSubtitle}>Our Offerings</span>
            <h2 className={styles.sectionTitle}>Simple homeownership products</h2>
          </div>

          <div className={styles.productsGrid}>
            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <HomeIcon size={24} />
              </div>
              <h3 className={styles.productTitle}>Mortgages</h3>
              <p className={styles.productDesc}>
                Whether you are buying a home or refinancing your existing loan, enjoy a commission-free, zero-lender-fee online application.
              </p>
              <Link href="/mortgage-calculator" className={styles.productLink}>
                Compare mortgage rates <ArrowRight size={16} />
              </Link>
            </div>

            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <Percent size={24} />
              </div>
              <h3 className={styles.productTitle}>Home Equity Line</h3>
              <p className={styles.productDesc}>
                Unlock the value built up in your home with a Better HELOC. Apply in minutes and receive funds in days.
              </p>
              <Link href="/start" className={styles.productLink}>
                Learn about HELOC <ArrowRight size={16} />
              </Link>
            </div>

            <div className={styles.productCard}>
              <div className={styles.productIcon}>
                <ShieldCheck size={24} />
              </div>
              <h3 className={styles.productTitle}>Home Insurance</h3>
              <p className={styles.productDesc}>
                Protect your biggest asset. Compare policies from top-rated insurers in minutes and bundle to save more.
              </p>
              <Link href="/start" className={styles.productLink}>
                Get an insurance quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className={styles.ctaBanner}>
          <h2 className={styles.ctaTitle}>Ready to get started?</h2>
          <p className={styles.ctaSubtitle}>
            Complete your online profile in 3 minutes, check custom rates, and get pre-approved with zero impact to your credit score.
          </p>
          <Link href="/start" className={styles.ctaBtn}>
            Start my approval
          </Link>
        </section>
      </div>
    </>
  );
}
