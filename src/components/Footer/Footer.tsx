import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import styles from "./Footer.module.css";

// Custom SVG components for social icons to guarantee cross-compatibility
const Facebook = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Twitter = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Linkedin = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logoArea}>
          <svg
            className={styles.logo}
            viewBox="0 0 85 22"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.405 16.593v-8.86h2.775V16.59h-2.775zm1.387-10.42c-.93 0-1.57-.655-1.57-1.554 0-.912.64-1.568 1.57-1.568.943 0 1.58.656 1.58 1.568 0 .899-.637 1.554-1.58 1.554zM24.78 12.023c0 2.87-1.897 4.792-4.766 4.792-2.883 0-4.792-1.921-4.792-4.792v-3.766h2.775v3.704c0 1.34.82 2.213 2.017 2.213 1.196 0 1.99-.86 1.99-2.213v-3.704h2.776v3.766zm9.213.918h-6.241c.21 1.258 1.16 1.986 2.457 1.986.993 0 1.765-.4 2.115-.992h2.905c-.604 2.11-2.43 3.52-5.02 3.52-3.415 0-5.324-2.128-5.324-4.896 0-2.853 1.922-4.992 5.097-4.992 3.161 0 4.975 2.043 4.975 4.887v.487zm-2.842-1.815c-.172-1.121-.992-1.745-2.096-1.745-1.121 0-1.933.624-2.146 1.745h4.242zm11.393-.162h-1.688v3.313c0 .888.375 1.242.984 1.242h.704v2.32c-.525.074-1.171.112-1.812.112-2.004 0-2.99-.893-2.99-3.08v-3.907h-1.425v-2.313h1.425V5.992h2.776v2.66h1.688v2.312c-.001.001-.001.001 0 0zm6.059 0h-1.687v3.313c0 .888.375 1.242.984 1.242h.703v2.32c-.524.074-1.171.112-1.812.112-2.004 0-2.99-.893-2.99-3.08v-3.907h-1.425v-2.313h1.425V5.992h2.775v2.66h1.688v2.312h.001zm11.096.918h-6.241c.21 1.258 1.16 1.986 2.457 1.986.993 0 1.765-.4 2.115-.992h2.905c-.604 2.11-2.43 3.52-5.02 3.52-3.415 0-5.324-2.128-5.324-4.896 0-2.853 1.922-4.992 5.097-4.992 3.161 0 4.975 2.043 4.975 4.887v.487zm-2.842-1.815c-.172-1.121-.992-1.745-2.096-1.745-1.121 0-1.933.624-2.146 1.745h4.242zm9.646-4.604c.487 0 .97.042 1.402.13v2.753a4.704 4.704 0 00-1.62-.266c-1.626 0-2.583.942-2.583 2.766v3.253h-2.776V8.587h2.73v1.312c.513-.986 1.545-1.48 2.847-1.48z" />
          </svg>
          <p className={styles.tagline}>
            Better is a family of companies providing homeownership services, including lending, real estate, insurance, and settlement.
          </p>
          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className={styles.linksArea}>
          <div className={styles.column}>
            <span className={styles.columnTitle}>Products</span>
            <ul className={styles.columnLinks}>
              <li><Link href="/start" className={styles.link}>Apply Now</Link></li>
              <li><Link href="/mortgage-calculator" className={styles.link}>Mortgage Calculator</Link></li>
              <li><Link href="/start" className={styles.link}>Refinance Rates</Link></li>
              <li><Link href="/start" className={styles.link}>HELOC Rates</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <span className={styles.columnTitle}>Company</span>
            <ul className={styles.columnLinks}>
              <li><Link href="/about-us" className={styles.link}>About Us</Link></li>
              <li><Link href="/about-us" className={styles.link}>Our Mission</Link></li>
              <li><Link href="/about-us" className={styles.link}>Careers</Link></li>
              <li><Link href="/about-us" className={styles.link}>Press</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <span className={styles.columnTitle}>Contact Us</span>
            <ul className={styles.columnLinks}>
              <li><a href="mailto:support@better.com" className={styles.link}>support@better.com</a></li>
              <li><a href="tel:415-523-8837" className={styles.link}>(415) 523-8837</a></li>
              <li><span className={styles.link} style={{ cursor: "default" }}>Mon - Fri, 9am - 6pm EST</span></li>
            </ul>
          </div>

          <div className={styles.column}>
            <span className={styles.columnTitle}>Legal</span>
            <ul className={styles.columnLinks}>
              <li><Link href="/about-us" className={styles.link}>NMLS Consumer Access</Link></li>
              <li><Link href="/about-us" className={styles.link}>Privacy Policy</Link></li>
              <li><Link href="/about-us" className={styles.link}>Terms of Use</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.middleSection}>
        <p>
          Better Mortgage Corporation is a direct lender. NMLS #330511. Equal Housing Lender. © 2026 Better Mortgage Corporation. All rights reserved. 3 World Trade Center, 59th Floor, New York, NY 10007.
        </p>
        <p className={styles.nmlsInfo}>
          To view licensing details, please visit the NMLS Consumer Access page. Licensing details are updated periodically. All loans are subject to credit and underwriting approval.
        </p>
        <p>
          * Better Mortgage is an Equal Housing Lender. As prohibited by federal law, we do not engage in business practices that discriminate on the basis of race, color, religion, national origin, sex, marital status, age (provided the applicant has the capacity to contract), because all or part of the applicant&apos;s income derives from any public assistance program, or because the applicant has in good faith exercised any right under the Consumer Credit Protection Act.
        </p>
      </div>

      <div className={styles.bottomSection}>
        <div>
          <span>© 2026 Better. All rights reserved.</span>
        </div>
        <div className={styles.badges}>
          <div className={styles.badge}>
            <Home size={16} />
            <span>Equal Housing Opportunity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
