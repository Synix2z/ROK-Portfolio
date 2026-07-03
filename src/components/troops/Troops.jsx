import styles from "./troops.module.css";

/* Images */
import T1Belier from "../../images/troops/T1_Belier.png";
import T4Archer from "../../images/troops/T4_Archer.png";
import T4Cav from "../../images/troops/T4_Cav.png";
import T4Inf from "../../images/troops/T4_Inf.png";
import T5Inf from "../../images/troops/T5_Inf.png";

export default function Troops() {
    const troops = [
        { img: T5Inf, count: "300k" },
        { img: T4Inf, count: "652k" },
        { img: T4Cav, count: "610k" },
        { img: T4Archer, count: "600k" },
        { img: T1Belier, count: "300k" },
    ];

    return (
        <div className={styles.troopsSection}>
            <div className={styles.title}>Troops</div>

            <div className={styles.troopsRow}>
                {troops.map((t, i) => (
                    <div key={i} className={styles.troopItem}>
                        <img src={t.img} alt="Troop" className={styles.troopImage} />
                        <div className={styles.troopCount}>{t.count}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}