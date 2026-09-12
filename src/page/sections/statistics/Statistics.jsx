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
                        value={1751000000}
                        label="Total Kills"
                        icon={<Sword className={styles.icon} size={48} />}
                    />
                </div>

                {/* Ligne droite */}
                <div className={`${styles.galleryRow} ${styles.right}`}>
                    <StatCounter
                        value={7500000}
                        label="Deaths"
                        icon={<Skull className={styles.icon} size={48} />}
                    />
                    <StatCounter
                        value={1165700}
                        label="Merit"
                        icon={<Medal className={styles.icon} size={48} />}
                    />
                </div>

                {/* Ligne gauche */}
                <div className={`${styles.galleryRow} ${styles.left}`}>
                    <StatCounter
                        value={54110}
                        label="Alliance Helps"
                        icon={<HandHeart className={styles.icon} size={48} />}
                    />
                    <StatCounter
                        value={1300}
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
                                wood: "5.1B",
                                food: "4.8B",
                                stone: "3.7B",
                                gold: "1.9B"
                            }}
                        />
                        <ResourceCard
                            type="accelerators"
                            stats={{
                                construction: "20d 17h",
                                healing: "8d 17h",
                                training: "1266d 14h",
                                universal: "1478d 10h"
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}