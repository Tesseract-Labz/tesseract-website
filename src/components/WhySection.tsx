import { useState, useEffect } from "react";
import type { ReactElement } from "react";
import styles from "@site/src/css/landing.module.css"; // module import

interface Feature {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: ReactElement;
}

const features: Feature[] = [
  {
    id: "truly-instant",
    name: "Truly instant",
    title: "Truly instant",
    description:
      "Make and receive payments with 0 milliseconds network delay. Your agents can't go faster than this!",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
  },
  {
    id: "micropayments-accepted",
    name: "Micropayments accepted",
    title: "Micropayments",
    description:
      "The underling protocol, z402, is an open standard that doesn't charge any fees. Very low transaction fees (less than 0.001\$ typically) come from the underling blockchain, thanks to z402 you can even batch transactions and save big! Enjoy subcent payments!",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
  },
  {
    id: "secure",
    name: "Secure",
    title: "Secure",
    description:
      "Get peace of mind knowing your payments are processed by a trustless, unstoppable, audited smart contract. You don't need to trust anyone, not even us.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
  },
  {
    id: "extremely-compatible",
    name: "Extremely compatible",
    title: "Extremely compatible",
    description:
      "The z402 is compatibile with x402 and supports almost all blockchains, including Ethereum, XRP and all EVM compatible chains, more soon!\nIf you're coming for x402, this greatly extends your reach compared to x402.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    id: "fully-private",
    name: "Fully Private",
    title: "Fully Private",
    description:
      "In order to work, the z402 protocol needs a buyer, a seller and the blockchain, that's it. No registrations, no restrictions, no selling your data.\nPlus, all our software is designed with privacy in mind following a stric no logging policy. Did you notice there is no cookie banner? Did I mention we don't store any cookies?",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    ),
  },
  {
    id: "open-source",
    name: "Open Source",
    title: "Open Source",
    description:
      "Enjoy open source code you can trust and run yourself. All our software and smart contracts are free and open source software for you to explore, hack and share. Our protocol z402 is an open standard that extends and improves x402.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    id: "quickstart",
    name: "Quickstart",
    title: "Quickstart",
    description:
      "Pay and get paid in no time with our quickstart: no credit card, registration or whatsoever required. Start building in minutes with our SDK, if you're already running on x402  it takes even less and you stay compatible with your current configuration.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
        <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
        <line x1="12" y1="20" x2="12.01" y2="20"></line>
      </svg>
    ),
  },
];

export default function WhySection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    setProgress(0);
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % features.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, selectedIndex]);

  useEffect(() => {
    if (isPaused) return;

    const duration = 4500;
    const steps = 60;
    const increment = 100 / steps;
    const stepDuration = duration / steps;

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + increment));
    }, stepDuration);

    return () => clearInterval(progressInterval);
  }, [isPaused, selectedIndex]);

  const handleFeatureHover = (index: number) => {
    setHoveredIndex(index);
    setSelectedIndex(index);
    setIsPaused(true);
    setProgress(0);
  };

  const handleFeatureLeave = () => {
    setHoveredIndex(null);
    setIsPaused(false);
    setProgress(0);
  };

  const selectedFeature = features[selectedIndex];

  return (
    <section className={styles.whySection} id="why">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Why Tesseract?</h2>
        <p className={styles.sectionSubtitle}>
          The payment infrastructure AI agents deserve
        </p>
      </div>

      <div className={styles.featureOverviewCard}>
        <div className={styles.featureList}>
          {features.map((feature, index) => (
            <button
              key={feature.id}
              className={`${styles.featureItem} ${
                index === selectedIndex ? styles.active : ""
              }`}
              onMouseEnter={() => handleFeatureHover(index)}
              onMouseLeave={handleFeatureLeave}
            >
              <div className={styles.featureItemIcon}>{feature.icon}</div>
              <span className={styles.featureItemName}>{feature.name}</span>
              <div className={styles.featureItemProgress}>
                <div
                  className={styles.featureItemProgressBar}
                  style={{
                    width: index === selectedIndex ? `${progress}%` : "0%",
                  }}
                ></div>
              </div>
            </button>
          ))}
        </div>

        <div className={styles.featureDetail}>
          <div key={selectedFeature.id} className={styles.featureDetailContent}>
            <div className={styles.featureDetailIcon}>
              {selectedFeature.icon}
            </div>
            <h3 className={styles.featureDetailTitle}>
              {selectedFeature.title}
            </h3>
            <p className={styles.featureDetailDescription}>
              {selectedFeature.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
