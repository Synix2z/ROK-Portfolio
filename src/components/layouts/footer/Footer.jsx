import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>

                {/* Left — Links */}
                <div className={styles.informations}>
                    <div className={styles.footerNav}>
                        <Link to="/legal" className={styles.footerLink}>Legal Mentions</Link>
                        <Link to="/tech-stack" className={styles.footerLink}>Tech Stack</Link>
                    </div>
                </div>

                {/* Center — copyright */}
                <p className={styles.footerText}>
                    © 2026 Synix2z — All rights reserved
                </p>

                {/* Right — Contact */}
                <div className={styles.footerLinks}>
                    <p className={styles.id}>ID : 131046134</p>
                </div>

            </div>
        </footer>
    );
}