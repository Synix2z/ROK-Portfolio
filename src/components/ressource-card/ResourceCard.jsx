import styles from "./resourceCard.module.css";
import { Trees, Wheat, Mountain, Coins, Timer } from "lucide-react";

const ACCELERATOR_ICONS = {
    construction: <Timer size={24} />,
    healing: <Timer size={24} />,
    training: <Timer size={24} />,
    universal: <Timer size={24} />,
};

const RESOURCE_ICONS = {
    wood: <Trees size={24} />,
    food: <Wheat size={24} />,
    stone: <Mountain size={24} />,
    gold: <Coins size={24} />,
};

const RESOURCE_LABELS = {
    wood: "Wood",
    food: "Food",
    stone: "Stone",
    gold: "Gold",
};

const ACCELERATOR_LABELS = {
    construction: "Construction",
    healing: "Healing",
    training: "Training",
    universal: "Universal",
};

export default function ResourceCard({ type, stats }) {
    const isAccelerator = type === "accelerators";
    const icons = isAccelerator ? ACCELERATOR_ICONS : RESOURCE_ICONS;
    const labels = isAccelerator ? ACCELERATOR_LABELS : RESOURCE_LABELS;

    return (
        <div className={`${styles.card} ${isAccelerator ? styles.blue : styles.green}`}>
            <h3 className={styles.cardTitle}>
                {isAccelerator ? "Accelerators" : "Resources"}
            </h3>
            <div className={styles.statsList}>
                {Object.entries(stats).map(([key, value]) => (
                    <div key={key} className={styles.statItem}>
                        <span className={styles.icon}>{icons[key]}</span>
                        <span className={styles.label}>{labels[key]}</span>
                        <span className={styles.value}>{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}