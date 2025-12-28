import styles from "@site/src/css/landing.module.css";

export default function TrustedBy() {
  const logos = [
    { src: "google_logo.png", name: "Google", url: "https://www.google.com" },
    {
      src: "microsoft_logo.png",
      name: "Microsoft",
      url: "https://www.microsoft.com",
    },
    { src: "openai_logo.png", name: "OpenAI", url: "https://openai.com" },
    {
      src: "anthropic_logo.png",
      name: "Anthropic",
      url: "https://www.anthropic.com",
    },
    {
      src: "etherscan_logo.png",
      name: "Etherscan",
      url: "https://etherscan.io",
    },
    { src: "zama_logo.png", name: "Zama", url: "https://www.zama.org" },
  ];

  return (
    <section className={styles.trustedSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Trusted By</h2>
        <p className={styles.sectionSubtitle}>
          Leading AI and blockchain companies rely on Tesseract for their
          payment infrastructure
        </p>
      </div>

      <div className={styles.trustedLogos}>
        {logos.map((logo) => (
          <a
            key={logo.src}
            href={logo.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${logo.name} website`}
            className={styles.trustedLogoLink}
          >
            <span
              role="img"
              aria-label={`${logo.name} logo`}
              className={styles.trustedLogo}
              style={{
                WebkitMaskImage: `url(/media/${logo.src})`,
                maskImage: `url(/media/${logo.src})`,
              }}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
