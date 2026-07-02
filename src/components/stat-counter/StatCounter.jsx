import { useState, useEffect } from "react";
import useInView from "../../hooks/useInView";
import style from "./statCounter.module.css";

export default function StatCounter({ value, label, icon }) {
    const [displayedValue, setDisplayedValue] = useState(0);
    const [ref, inView] = useInView();

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const duration = 1000;
        const stepTime = 16;
        const increment = value / (duration / stepTime);

        const counter = setInterval(() => {
            start += increment;
            if (start >= value) {
                start = value;
                clearInterval(counter);
            }
            setDisplayedValue(Math.floor(start));
        }, stepTime);

        return () => clearInterval(counter);
    }, [inView, value]);

    return (
        <div ref={ref} className={style.counter}>
            <div className={style.valueWrapper}>
                
                {icon}

                <div className={style.valueContent}>
                    <span className={style.value}>
                        {/* Format number with spaces as thousand separators (e.g. 1 690 804 610) */}
                        {displayedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                    </span>
                    <span className={style.label}>{label}</span>
                </div>
            </div>
        </div>
    );
}