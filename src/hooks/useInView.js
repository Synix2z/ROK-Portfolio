import { useEffect, useRef, useState } from "react";

/* Detects when an element becomes visible in the viewport */
export default function useInView(threshold = 0.1) {
    // Reference to the DOM element we want to observe
    const ref = useRef(null);

    // True when the element is visible on screen
    const [inView, setInView] = useState(false);

    useEffect(() => {
        // Create the observer that watches visibility changes
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the element is visible, update state
                if (entry.isIntersecting) {
                    setInView(true);

                    // Stop observing after the first trigger
                    observer.disconnect();
                }
            },
            { threshold } // Visibility percentage required to trigger
        );

        // Start observing the element when it's available
        if (ref.current) observer.observe(ref.current);

        // Cleanup when the component unmounts
        return () => observer.disconnect();
    }, [threshold]);

    // Return the ref to attach + the visibility state
    return [ref, inView];
}