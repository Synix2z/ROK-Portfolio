import styles from "./troops.module.css";

/* Images */
import T1Belier from "../../images/troops/T1_Belier.webp";
import T4Archer from "../../images/troops/T4_Archer.webp";
import T4Cav from "../../images/troops/T4_Cav.webp";
import T4Inf from "../../images/troops/T4_Inf.webp";
import T5Inf from "../../images/troops/T5_Inf.webp";

export default function Troops() {
    const troops = [
        { img: T5Inf, count: "300k" },
        { img: T4Inf, count: "775k" },
        { img: T4Cav, count: "444k" },
        { img: T4Archer, count: "700k" },
        { img: T1Belier, count: "300k" },
    ];

    return (
        <div className={styles.troopsSection}>
            <div className={styles.title}>Troops :</div>

            <div className={styles.troopsRow}>
                {troops.map((t, i) => (
                    <div key={i} className={styles.troopItem}>
                        <img src={t.img} alt="Troop" className={styles.troopImage} 
                            loading="lazy"
                            decoding="async" />
                        <div className={styles.troopCount}>{t.count}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}