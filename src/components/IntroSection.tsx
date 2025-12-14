import Link from "@docusaurus/Link";
import styles from "@site/src/css/landing.module.css";
import InternetOfAgentsNetwork from "@site/src/components/InternetOfAgentsNetwork";

export default function IntroSection() {
  return (
    <section className={styles.whySection} id="why">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          How the future of payments looks like?
        </h2>
        <p className={styles.sectionSubtitle}>
          A big network of humans and AI collaborating on complex tasks
        </p>

        <InternetOfAgentsNetwork />

        <p>
          We envision a world where humans and machines can collaborate and
          solve the hardest problems of our society. Tesseract is building the
          payment layer that powers this vision: <b>z402</b>. Read our{" "}
          <Link to="/blog/building-the-internet-of-agents-with-z402">
            introductory article
          </Link>{" "}
          on what it is the <b>Internet of Agents</b>, what you can do with it
          and how we are bringing it to life with z402.
        </p>
      </div>
    </section>
  );
}
