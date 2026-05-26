import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import styles from "./Header.module.css";

interface HeaderProps {
  isHomepage?: boolean;
}

export default function Header({ isHomepage = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const router = useRouter();

  // Scroll handler for homepage transparent-to-white transition
  useEffect(() => {
    if (!isHomepage) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  }, [router.asPath]);

  // Determine header variant class
  let headerClass = styles.standardWhite;
  if (isHomepage) {
    headerClass = isScrolled ? styles.scrolledWhite : styles.homepageTransparent;
  }

  const toggleMobileDropdown = (item: string) => {
    if (activeMobileDropdown === item) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(item);
    }
  };

  return (
    <>
      <header className={`${styles.header} ${headerClass}`}>
        <div className={styles.leftNav}>
          <Link href="/" className={styles.logoLink} aria-label="Better.com Home">
            {/* SVG Logo of Better */}
            <svg
              className={styles.logo}
              viewBox="0 0 85 22"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.405 16.593v-8.86h2.775V16.59h-2.775zm1.387-10.42c-.93 0-1.57-.655-1.57-1.554 0-.912.64-1.568 1.57-1.568.943 0 1.58.656 1.58 1.568 0 .899-.637 1.554-1.58 1.554zM24.78 12.023c0 2.87-1.897 4.792-4.766 4.792-2.883 0-4.792-1.921-4.792-4.792v-3.766h2.775v3.704c0 1.34.82 2.213 2.017 2.213 1.196 0 1.99-.86 1.99-2.213v-3.704h2.776v3.766zm9.213.918h-6.241c.21 1.258 1.16 1.986 2.457 1.986.993 0 1.765-.4 2.115-.992h2.905c-.604 2.11-2.43 3.52-5.02 3.52-3.415 0-5.324-2.128-5.324-4.896 0-2.853 1.922-4.992 5.097-4.992 3.161 0 4.975 2.043 4.975 4.887v.487zm-2.842-1.815c-.172-1.121-.992-1.745-2.096-1.745-1.121 0-1.933.624-2.146 1.745h4.242zm11.393-.162h-1.688v3.313c0 .888.375 1.242.984 1.242h.704v2.32c-.525.074-1.171.112-1.812.112-2.004 0-2.99-.893-2.99-3.08v-3.907h-1.425v-2.313h1.425V5.992h2.776v2.66h1.688v2.312c-.001.001-.001.001 0 0zm6.059 0h-1.687v3.313c0 .888.375 1.242.984 1.242h.703v2.32c-.524.074-1.171.112-1.812.112-2.004 0-2.99-.893-2.99-3.08v-3.907h-1.425v-2.313h1.425V5.992h2.775v2.66h1.688v2.312h.001zm11.096.918h-6.241c.21 1.258 1.16 1.986 2.457 1.986.993 0 1.765-.4 2.115-.992h2.905c-.604 2.11-2.43 3.52-5.02 3.52-3.415 0-5.324-2.128-5.324-4.896 0-2.853 1.922-4.992 5.097-4.992 3.161 0 4.975 2.043 4.975 4.887v.487zm-2.842-1.815c-.172-1.121-.992-1.745-2.096-1.745-1.121 0-1.933.624-2.146 1.745h4.242zm9.646-4.604c.487 0 .97.042 1.402.13v2.753a4.704 4.704 0 00-1.62-.266c-1.626 0-2.583.942-2.583 2.766v3.253h-2.776V8.587h2.73v1.312c.513-.986 1.545-1.48 2.847-1.48z" />
            </svg>
          </Link>
          <ul className={styles.navLinks}>
            <li className={styles.navItem}>
              <span className={styles.navItemLink}>
                Buy <ChevronDown size={14} />
              </span>
              <div className={styles.dropdown}>
                <Link href="/mortgage-calculator" className={styles.dropdownItem}>
                  Mortgage Calculator
                </Link>
                <Link href="/start" className={styles.dropdownItem}>
                  Apply Now
                </Link>
                <Link href="/about-us" className={styles.dropdownItem}>
                  About Us
                </Link>
              </div>
            </li>
            <li className={styles.navItem}>
              <span className={styles.navItemLink}>
                Refinance <ChevronDown size={14} />
              </span>
              <div className={styles.dropdown}>
                <Link href="/start" className={styles.dropdownItem}>
                  Refinance Rates
                </Link>
                <Link href="/mortgage-calculator" className={styles.dropdownItem}>
                  Calculator
                </Link>
              </div>
            </li>
            <li className={styles.navItem}>
              <span className={styles.navItemLink}>
                Home Equity <ChevronDown size={14} />
              </span>
              <div className={styles.dropdown}>
                <Link href="/start" className={styles.dropdownItem}>
                  HELOC Rates
                </Link>
                <Link href="/mortgage-calculator" className={styles.dropdownItem}>
                  Compare Options
                </Link>
              </div>
            </li>
            <li className={styles.navItem}>
              <span className={styles.navItemLink}>
                Rates <ChevronDown size={14} />
              </span>
              <div className={styles.dropdown}>
                <Link href="/mortgage-calculator" className={styles.dropdownItem}>
                  Latest Rates
                </Link>
              </div>
            </li>
            <li className={styles.navItem}>
              <span className={styles.navItemLink}>
                Better+ <ChevronDown size={14} />
              </span>
              <div className={styles.dropdown}>
                <Link href="/about-us" className={styles.dropdownItem}>
                  Our Mission
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.rightNav}>
          <div className={styles.phoneWrapper} aria-label="Call support">
            <Phone size={16} />
            <div className={styles.phoneTooltip}>
              Call us: (415) 523-8837
            </div>
          </div>
          <Link href="/start" className={styles.signinLink}>
            Sign in
          </Link>
          <Link href="/start" className={styles.getStartedBtn}>
            Get started
          </Link>

          <button
            className={styles.hamburger}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className={`${styles.bar} ${isMobileMenuOpen ? styles.barOpen : ""}`} />
            <div className={`${styles.bar} ${isMobileMenuOpen ? styles.barOpen : ""}`} />
            <div className={`${styles.bar} ${isMobileMenuOpen ? styles.barOpen : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.mobileOverlayOpen : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.mobileDrawerOpen : ""}`}>
        <nav className={styles.mobileDrawerNav}>
          <li className={styles.mobileNavItem}>
            <button
              onClick={() => toggleMobileDropdown("buy")}
              className={styles.mobileNavTrigger}
            >
              Buy <ChevronDown size={18} />
            </button>
            {activeMobileDropdown === "buy" && (
              <ul className={styles.mobileSubnav}>
                <li>
                  <Link href="/mortgage-calculator" className={styles.mobileSubnavItem}>
                    Mortgage Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/start" className={styles.mobileSubnavItem}>
                    Apply Now
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className={styles.mobileSubnavItem}>
                    About Us
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className={styles.mobileNavItem}>
            <button
              onClick={() => toggleMobileDropdown("refinance")}
              className={styles.mobileNavTrigger}
            >
              Refinance <ChevronDown size={18} />
            </button>
            {activeMobileDropdown === "refinance" && (
              <ul className={styles.mobileSubnav}>
                <li>
                  <Link href="/start" className={styles.mobileSubnavItem}>
                    Refinance Rates
                  </Link>
                </li>
                <li>
                  <Link href="/mortgage-calculator" className={styles.mobileSubnavItem}>
                    Calculator
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className={styles.mobileNavItem}>
            <button
              onClick={() => toggleMobileDropdown("equity")}
              className={styles.mobileNavTrigger}
            >
              Home Equity <ChevronDown size={18} />
            </button>
            {activeMobileDropdown === "equity" && (
              <ul className={styles.mobileSubnav}>
                <li>
                  <Link href="/start" className={styles.mobileSubnavItem}>
                    HELOC Rates
                  </Link>
                </li>
                <li>
                  <Link href="/mortgage-calculator" className={styles.mobileSubnavItem}>
                    Compare Options
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className={styles.mobileNavItem}>
            <button
              onClick={() => toggleMobileDropdown("rates")}
              className={styles.mobileNavTrigger}
            >
              Rates <ChevronDown size={18} />
            </button>
            {activeMobileDropdown === "rates" && (
              <ul className={styles.mobileSubnav}>
                <li>
                  <Link href="/mortgage-calculator" className={styles.mobileSubnavItem}>
                    Latest Rates
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className={styles.mobileNavItem}>
            <button
              onClick={() => toggleMobileDropdown("plus")}
              className={styles.mobileNavTrigger}
            >
              Better+ <ChevronDown size={18} />
            </button>
            {activeMobileDropdown === "plus" && (
              <ul className={styles.mobileSubnav}>
                <li>
                  <Link href="/about-us" className={styles.mobileSubnavItem}>
                    Our Mission
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </nav>

        <div className={styles.mobileBottom}>
          <a href="tel:415-523-8837" className={styles.mobilePhone}>
            <Phone size={18} /> (415) 523-8837
          </a>
          <Link href="/start" className={styles.signinLink} style={{ fontWeight: 600 }}>
            Sign in
          </Link>
          <Link
            href="/start"
            className={styles.getStartedBtn}
            style={{ textAlign: "center", backgroundColor: "var(--better-green)", color: "var(--better-white)" }}
          >
            Get started
          </Link>
        </div>
      </div>
    </>
  );
}
