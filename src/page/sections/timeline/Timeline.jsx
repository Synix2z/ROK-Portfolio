import styles from "./timeline.module.css";

/* Components */
import Title from "../../../components/title-section/Title";
import TimelineEvent from "../../../components/timeline-event/TimelineEvent";

export default function Timeline() {
    const events = [
        {
            dateStart: "9 August 2023",
            dateEnd: "2 October 2023",
            title: "KvK Soc",
            kd: "2259",
            stats: { kills: "No data", deaths: "No data" },
        },
        {
            dateStart: "22 November 2023",
            dateEnd: "15 January 2024",
            title: "KvK Soc",
            kd: "3064",
            stats: { kills: "No data", deaths: "No data" },
        },
        {
            dateStart: "21 February 2024",
            dateEnd: "14 April 2024",
            title: "KvK Soc",
            kd: "3064",
            stats: { kills: "No data", deaths: "No data" },
        },
        {
            dateStart: "15 May 2024",
            dateEnd: "7 July 2024",
            title: "KvK Soc",
            kd: "3064",
            stats: { kills: "No data", deaths: "No data" },
        },
        {
            dateStart: "7 August 2024",
            dateEnd: "29 September 2024",
            title: "KvK Soc",
            kd: "3064",
            stats: { kills: "No data", deaths: "No data" },
        },
        {
            dateStart: "30 October 2024",
            dateEnd: "22 December 2024",
            title: "KvK Soc",
            kd: "3064",
            stats: { kills: "No data", deaths: "No data" },
        },
        {
            dateStart: "22 January 2025",
            dateEnd: "15 March 2025",
            title: "KvK Soc",
            kd: "3064",
            stats: { kills: "No data", deaths: "No data" },
        },
        {
            dateStart: "30 April 2025",
            dateEnd: "21 June 2025",
            title: "KvK Soc",
            kd: "3064",
            stats: { kills: "~ 445M", deaths: "~ 557k" },
        },
        {
            dateStart: "1st October 2025",
            dateEnd: "22 November 2025",
            title: "KvK Soc",
            kd: "3345",
            stats: { kills: "No data", deaths: "No data" },
        },
        {
            dateStart: "13 March 2026",
            dateEnd: "4 May 2026",
            title: "KvK Soc",
            kd: "2159",
            stats: { kills: "~ 53M", deaths: "~96k" },
            comment: "My team wasn’t very strong and I took a two-month break, so I didn’t take part much in this KvK.",
        },
    ];

    return (
        <>
            <Title text="KD & KvK Timeline" id="timeline-title" />
            <div className={styles.timeline}>
                <div className={styles.verticalLine}></div>
                {events.map((event, i) => (
                    <TimelineEvent
                        key={i}
                        index={i + 1}
                        side={i % 2 === 0 ? "left" : "right"}
                        {...event}
                    />
                ))}
            </div>
        </>
    );
}