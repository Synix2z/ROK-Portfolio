import styles from "./timelineEvent.module.css";

export default function TimelineStat({ Icon, color, value, label }) {
    return (
        <div className={styles.stat}>
            <Icon size={30} color={color} />
            <div className={styles.statValue}>{value}</div>
            <div className={styles.statLabel}>{label}</div>
        </div>
    );
}