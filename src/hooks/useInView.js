import { useEffect, useRef, useState } from "react";

/* Detects when an element becomes visible in the viewport */
export default function useInView() {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Old browsers without IntersectionObserver: show the content directly
        if (!("IntersectionObserver" in window)) {
            setInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            // Trigger as soon as the top of the element enters the screen
            { threshold: 0, rootMargin: "0px 0px -50px 0px" }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return [ref, inView];
}