import styles from "@site/src/css/landing.module.css";
import Link from "@docusaurus/Link";

export default function HowItWorks() {
  return (
    <section className={styles.howSection} id="how-it-works">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <p className={styles.sectionSubtitle}>
          Instant payments powered by the{" "}
          <Link to={"/docs/z402/introduction"}>z402 protocol</Link>
        </p>
      </div>

      <div className={styles.howSteps}>
        <div className={styles.howStep}>
          <div className={styles.stepNumber}>01</div>
          <div className={styles.stepContent}>
            <h3>Approval for future payments</h3>
            <p>
              The buyer agent enables future instant payments to a seller agent,
              under the hood it's using our smart contract
            </p>
          </div>
        </div>

        <div className={styles.stepConnector}></div>

        <div className={styles.howStep}>
          <div className={styles.stepNumber}>02</div>
          <div className={styles.stepContent}>
            <h3>Initialize Payment</h3>
            <p>
              The buyer agent buys a service offered by the seller agent and
              sends a cryptographic proof of the payment, all in the same HTTP
              request
            </p>
          </div>
        </div>

        <div className={styles.stepConnector}></div>

        <div className={styles.howStep}>
          <div className={styles.stepNumber}>03</div>
          <div className={styles.stepContent}>
            <h3>Instant Verification</h3>
            <p>
              The seller agent verifies the payment is valid completely
              off-chain, allowing for instant transactions. No extra HTTP
              requests, no waiting for the blockchain
            </p>
          </div>
        </div>

        <div className={styles.stepConnector}></div>

        <div className={styles.howStep}>
          <div className={styles.stepNumber}>04</div>
          <div className={styles.stepContent}>
            <h3>Parallel Settlement</h3>
            <p>
              The seller agent can withdraw the buyer payment at a later moment
              or in parallel during execution, using the payment proof they
              have. The smart contract will verify independently the correctness
              of the payment proof
            </p>
          </div>
        </div>

        <div className={styles.stepConnector}></div>

        <div className={styles.howStep}>
          <div className={styles.stepNumber}>05</div>
          <div className={styles.stepContent}>
            <h3>Eat. Pay. Repeat</h3>
            <p>
              The buyer agent can repeat step 2 when they want and enjoy instant
              payments with no limits!
            </p>
          </div>
        </div>
      </div>

      <div className={styles.howCta}>
        <p className={styles.howCtaText}>Want to know more?</p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/blog/building-the-internet-of-agents-with-z402"
            className={`${styles.btn} ${styles.btnOutline}`}
          >
            Read the intro post
          </Link>
          <Link to="/docs" className={`${styles.btn} ${styles.btnOutline}`}>
            Read the Docs
          </Link>
          {/* <Link */}
          {/*   to="/core-values" */}
          {/*   className={`${styles.btn} ${styles.btnOutline}`} */}
          {/* > */}
          {/*   Read Core Values */}
          {/* </Link> */}
        </div>
      </div>
    </section>
  );
}
