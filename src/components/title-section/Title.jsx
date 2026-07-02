import { useRef, useEffect, useState } from "react";
import styles from "./title.module.css";

export default function Title({ text, id }) {
    const titleRef = useRef(null);
    const [lineWidth, setLineWidth] = useState(0);

    useEffect(() => {
        if (!titleRef.current) return;

        const w = titleRef.current.offsetWidth;

        // Responsive multiplier based on screen width
        const screenWidth = window.innerWidth;

        let multiplier = 3; // Desktop

        if (screenWidth < 700) {
            multiplier = 2; // Mobile
        } else if (screenWidth < 1024) {
            multiplier = 2.5; // Tablet
        }

        setLineWidth(w * multiplier);
    }, [text]);

    return (
        <div id={id} className={styles.wrapper}>
            <div ref={titleRef} className={styles.title}>
                {text}
            </div>

            <div
                className={styles.lineCircleWrapper}
                style={{ width: lineWidth ? `${lineWidth}px` : "auto" }}
            >
                <div className={styles.line}></div>
                <div className={styles.circle}></div>
                <div className={styles.line}></div>
            </div>
        </div>
    );
}