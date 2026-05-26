import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/About.module.css";

type YearKey = "2014" | "2016" | "2018" | "2020" | "2022" | "2026";

interface Milestone {
  year: string;
  title: string;
  text: string;
}

export default function AboutUs() {
  const [selectedYear, setSelectedYear] = useState<YearKey>("2014");

  const timelineMilestones: Record<YearKey, Milestone> = {
    "2014": {
      year: "2014",
      title: "Founding the Idea",
      text: "After losing a home due to a slow, paper-heavy traditional mortgage application process, our founders set out to digitize home lending, removing the stress, commissions, and hidden fees.",
    },
    "2016": {
      year: "2016",
      title: "Launching Better Mortgage",
      text: "We obtained our lending licenses and officially launched Better Mortgage. We introduced our 3-minute pre-approvals, completely eliminating lender commissions from the equation.",
    },
    "2018": {
      year: "2018",
      title: "Funding Our First $1 Billion",
      text: "We scaled our operations to cover 30+ states, grew our team to hundreds of mortgage professionals, and funded our first $1,000,000,000 in home loans with 98% customer satisfaction.",
    },
    "2020": {
      year: "2020",
      title: "Automating the System",
      text: "During a historic homebuying boom, we introduced advanced automation in document collection and automated rate matches. We funded more than $25B in mortgages in a single year.",
    },
    "2022": {
      year: "2022",
      title: "Introducing Better+ Ecosystem",
      text: "We expanded beyond lending, launching Better Insurance, Better Settlement Services, and a partner network of real estate agents, creating a one-stop-shop for homeownership.",
    },
    "2026": {
      year: "2026",
      title: "Serving 400K+ Homeowners",
      text: "Today, we have funded over $100B in loans. We are fully licensed in all 50 states, continuously refining our technology to make getting a mortgage as simple as buying a pair of shoes online.",
    },
  };

  return (
    <>
      <Head>
        <title>About Us | Better Mortgage</title>
        <meta
          name="description"
          content="Learn about Better.com's mission to make homeownership simpler, faster, and more accessible for all Americans. Read our story and milestones."
        />
      </Head>

      <div className={styles.aboutPage}>
        {/* Mission Hero Section */}
        <section className={styles.missionSection}>
          <span className={styles.missionLabel}>Our Mission</span>
          <h1 className={styles.missionTitle}>
            We&apos;re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
          </h1>
        </section>

        {/* Status Quo Section */}
        <section className={styles.statusQuoSection}>
          <div className={styles.statusQuoContainer}>
            <div className={styles.statusQuoText}>
              <h2 className={styles.statusQuoTitle}>The status quo is broken</h2>
              <p className={styles.statusQuoDesc}>
                The traditional mortgage process is slow, confusing, and expensive. It is filled with unnecessary paperwork, pushy commission-based sales agents, and hidden fees that drive up costs.
              </p>
              <p className={styles.statusQuoDesc}>
                At Better, we replaced the commission structure with a streamlined, digital platform. Our loan officers are salaried, not commissioned, so their only incentive is to help you get the best deal.
              </p>
              <Link href="/start" className={styles.storyCta}>
                Get Started
              </Link>
            </div>

            <div className={styles.statusQuoImageWrapper}>
              <Image
                src="/ceo_story.png"
                alt="Executive Member at Better"
                width={480}
                height={480}
                className={styles.ceoImage}
              />
            </div>
          </div>
        </section>

        {/* How We're Changing Things Section */}
        <section className={styles.darkSection}>
          <div className={styles.darkContainer}>
            <h2 className={styles.darkTitle}>How we are changing things</h2>
            
            <div className={styles.darkGrid}>
              <div className={styles.darkCard}>
                <div className={styles.cardNum}>01</div>
                <h3 className={styles.cardTitle}>Direct Digital Platform</h3>
                <p className={styles.cardText}>
                  We digitized the entire process. Upload documents securely, sync with your bank accounts, and run instant credit checks online.
                </p>
              </div>

              <div className={styles.darkCard}>
                <div className={styles.cardNum}>02</div>
                <h3 className={styles.cardTitle}>No Commissioned Sales</h3>
                <p className={styles.cardText}>
                  Our mortgage consultants are paid a salary, not commissions. They focus on giving you honest advice, not pushing specific loan terms.
                </p>
              </div>

              <div className={styles.darkCard}>
                <div className={styles.cardNum}>03</div>
                <h3 className={styles.cardTitle}>$0 Lender Fees</h3>
                <p className={styles.cardText}>
                  We don&apos;t charge origination fees, application fees, or underwriting fees. We pass the savings directly to you in the form of lower interest rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className={styles.timelineSection}>
          <h2 className={styles.timelineTitle}>Our Journey</h2>
          
          <div className={styles.timelineNav}>
            {Object.keys(timelineMilestones).map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year as YearKey)}
                className={`${styles.timelineBtn} ${selectedYear === year ? styles.activeTimelineBtn : ""}`}
              >
                {year}
              </button>
            ))}
          </div>

          <div className={styles.timelineContent} key={selectedYear}>
            <div className={styles.timelineYear}>{timelineMilestones[selectedYear].year}</div>
            <h3 className={styles.timelineMilestone}>{timelineMilestones[selectedYear].title}</h3>
            <p className={styles.timelineText}>{timelineMilestones[selectedYear].text}</p>
          </div>
        </section>

        {/* Backed By Section */}
        <section className={styles.backedSection}>
          <h2 className={styles.backedTitle}>Backed by leading institutions</h2>
          <div className={styles.logoGrid}>
            <span className={styles.partnerName}>SoftBank</span>
            <span className={styles.partnerName}>Ally Bank</span>
            <span className={styles.partnerName}>Citi</span>
            <span className={styles.partnerName}>American Express</span>
            <span className={styles.partnerName}>Goldman Sachs</span>
          </div>
        </section>
      </div>
    </>
  );
}
