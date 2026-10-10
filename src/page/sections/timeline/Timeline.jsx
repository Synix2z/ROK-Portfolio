import { useState } from "react";
import styles from "./timeline.module.css";
import { kvkRecords } from "./data.front.ts";

/* Components */
import Title from "../../../components/title-section/Title";
import TimelineFilter from "../../../components/timeline-filter/TimelineFilter";
import TimelineEvent from "../../../components/timeline-event/TimelineEvent";

export default function Timeline() {
    const [filter, setFilter] = useState("stats");

    const records = kvkRecords.filter((r) => filter === "all" || r.stats);
    console.log(kvkRecords[3]);
    return (
        <>
            <Title text="KD & KvK Timeline" id="timeline-title" />

            <TimelineFilter value={filter} onChange={setFilter} />

            <div className={styles.timeline}>
                <div className={styles.verticalLine}></div>
                {records.map((record) => (
                    <div key={record.id} className={styles.item}>
                        <div className={styles.dot}></div>
                        <TimelineEvent {...record} />
                    </div>
                ))}
            </div>
        </>
    );
}