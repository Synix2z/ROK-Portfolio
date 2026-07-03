import styles from "./statistics.module.css";
import { Zap, Sword, Skull, Medal, HandHeart, CalendarDays } from "lucide-react";

/* Components */
import Title from "../../../components/title-section/Title";
import ProgressiveBar from "../../../components/progressive-bar/ProgressiveBar";
import StatCounter from "../../../components/stat-counter/StatCounter";
import ResourceCard from "../../../components/ressource-card/ResourceCard";

export default function Statistics() {
    return (
        <>
            <Title text="Statistics" id="statistics-title" />

            <div className={styles.statisticsContent}>
                <div className={styles.vipTitle}>Progression to reach VIP 16</div>
                <div className={styles.vipBarWrapper}>
                    <ProgressiveBar current={1196000} max={1500000} />
                </div>
            </div>

            <div className={styles.gallery}>

                {/* Ligne gauche */}
                <div className={`${styles.galleryRow} ${styles.left}`}>
                    <StatCounter
                        value={57000000}
                        label="Approximate Power"
                        icon={<Zap className={styles.icon} size={48} />}
                    />
                    <StatCounter
                        value={1671000000}
                        label="Total Kills"
                        icon={<Sword className={styles.icon} size={48} />}
                    />
                </div>

                {/* Ligne droite */}
                <div className={`${styles.galleryRow} ${styles.right}`}>
                    <StatCounter
                        value={7272375}
                        label="Deaths"
                        icon={<Skull className={styles.icon} size={48} />}
                    />
                    <StatCounter
                        value={0}
                        label="Merit"
                        icon={<Medal className={styles.icon} size={48} />}
                    />
                </div>

                {/* Ligne gauche */}
                <div className={`${styles.galleryRow} ${styles.left}`}>
                    <StatCounter
                        value={51947}
                        label="Alliance Helps"
                        icon={<HandHeart className={styles.icon} size={48} />}
                    />
                    <StatCounter
                        value={1230}
                        label="Approximate Days Played"
                        icon={<CalendarDays className={styles.icon} size={48} />}
                    />
                </div>

                <div className={styles.resourcesSection}>
                    <div className={styles.resourcesTitle}>Last Update :</div>
                    <div className={styles.resourcesRow}>
                        <ResourceCard
                            type="resources"
                            stats={{
                                wood: "5.2B",
                                food: "4.9B",
                                stone: "3.4B",
                                gold: "1.8B"
                            }}
                        />
                        <ResourceCard
                            type="accelerators"
                            stats={{
                                construction: "19d 12h",
                                healing: "19d 17h",
                                training: "1218d 7h",
                                universal: "1227d 10h"
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}