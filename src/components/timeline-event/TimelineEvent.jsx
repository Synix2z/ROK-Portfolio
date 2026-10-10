import styles from "./timelineEvent.module.css";
import { Swords, Skull, HeartPulse, Trophy, Info, CircleCheck } from "lucide-react";
import TimelineStat from "./TimelineStat";

// 125400000 -> "125,4 M"
function formatNumber(n) {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(".", ",")} M`;
    if (n >= 1_000) return `${Math.round(n / 1_000)} K`;
    return String(n);
}

const STATS = [
    { key: "killPoints", label: "Kill Points", Icon: Swords, color: "#A78BFA" },
    { key: "deaths", label: "Deaths", Icon: Skull, color: "#f03232" },
    { key: "healingPoints", label: "Healing Points", Icon: HeartPulse, color: "#38bdf8" },
    { key: "merits", label: "Merits", Icon: Trophy, color: "#fff77a" },
];

export default function TimelineEvent({ kingdom, startDate, endDate, stats, image }) {
    return (
        <article className={`${styles.card} ${stats ? "" : styles.compact}`}>
            {stats && (
                <div className={styles.image}>
                    {image && (
                        <img
                            src={image}
                            alt=""
                            onError={(e) => (e.currentTarget.style.display = "none")}
                        />
                    )}
                </div>
            )}

            <div className={styles.content}>
                <span className={`${styles.badge} ${stats ? styles.complete : styles.history}`}>
                    {stats ? (
                        <>
                            <CircleCheck size={16} /> Complet Result
                        </>
                    ) : (
                        "KD History"
                    )}
                </span>

                <div className={styles.dates}>
                    {startDate} — {endDate}
                </div>
                <h3 className={styles.title}>SoC — Kingdom {kingdom}</h3>

                {stats ? (
                    <div className={styles.stats}>
                        {STATS.map(({ key, label, Icon, color }) => (
                            <TimelineStat
                                key={key}
                                Icon={Icon}
                                color={color}
                                value={formatNumber(stats[key])}
                                label={label}
                            />
                        ))}
                    </div>
                ) : (
                    <div className={styles.empty}>
                        <Info size={24} />
                        <div>
                            <strong>No statistics recorded</strong>
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}