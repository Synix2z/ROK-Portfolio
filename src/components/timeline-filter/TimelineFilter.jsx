import styles from "./timelineFilter.module.css";
import { Filter, List, BarChart3 } from "lucide-react";

const OPTIONS = [
    { id: "all", label: "All KvKs", Icon: List },
    { id: "stats", label: "KvK with Statistics", Icon: BarChart3 },
];

export default function TimelineFilter({ value, onChange }) {
    return (
        <div className={styles.filter}>
            <div className={styles.info}>
                <Filter size={26} />
                <div>
                    <div className={styles.title}>Filter the KvKs</div>
                    <div className={styles.text}>Choose what you want to display in my timeline.</div>
                </div>
            </div>

            <div className={styles.buttons}>
                {OPTIONS.map(({ id, label, Icon }) => (
                    <button
                        key={id}
                        type="button"
                        className={`${styles.button} ${value === id ? styles.active : ""}`}
                        onClick={() => onChange(id)}
                    >
                        <Icon size={20} />
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
}