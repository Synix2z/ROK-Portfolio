import styles from "./statistics.module.css";
import { Zap, Sword, Skull, Medal, HandHeart, CalendarDays } from "lucide-react";

/* Components */
import Title from "../../../components/title-section/Title";
import ProgressiveBar from "../../../components/progressive-bar/ProgressiveBar";
import StatCounter from "../../../components/stat-counter/StatCounter";
import Troops from "../../../components/troops/Troops";
import ResourceCard from "../../../components/ressource-card/ResourceCard";

export default function Statistics() {
    return (
        <>
            <Title text="Statistics" id="statistics-title" />

            <div className={styles.statisticsContent}>
                <div className={styles.vipTitle}>Progression to reach VIP 16</div>
                <div className={styles.vipBarWrapper}>
                    <ProgressiveBar current={1363980} max={1500000} />
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
                        value={1844746000}
                        label="Total Kills"
                        icon={<Sword className={styles.icon} size={48} />}
                    />
                </div>

                {/* Ligne droite */}
                <div className={`${styles.galleryRow} ${styles.right}`}>
                    <StatCounter
                        value={7600000}
                        label="Deaths"
                        icon={<Skull className={styles.icon} size={48} />}
                    />
                    <StatCounter
                        value={1165700}
                        label="Highest Acclaim"
                        icon={<Medal className={styles.icon} size={48} />}
                    />
                </div>

                {/* Ligne gauche */}
                <div className={`${styles.galleryRow} ${styles.left}`}>
                    <StatCounter
                        value={54424}
                        label="Alliance Helps"
                        icon={<HandHeart className={styles.icon} size={48} />}
                    />
                    <StatCounter
                        value={1314}
                        label="Approximate Days Played"
                        icon={<CalendarDays className={styles.icon} size={48} />}
                    />
                </div>

                <Troops /> 

                <div className={styles.resourcesSection}>
                    <div className={styles.resourcesTitle}>Last Update :</div>
                    <div className={styles.resourcesRow}>
                        <ResourceCard
                            type="resources"
                            stats={{
                                wood: "4.8B",
                                food: "4.6B",
                                stone: "3.9B",
                                gold: "2B"
                            }}
                        />
                        <ResourceCard
                            type="accelerators"
                            stats={{
                                construction: "5d 13h",
                                healing: "0d",
                                training: "1368d 23h",
                                universal: "1497d 10h"
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}