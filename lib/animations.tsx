"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollAnimation() {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return { ref, isVisible };
}

export function AnimatedSection({
    children,
    className = "",
    direction = "up",
}: {
    children: React.ReactNode;
    className?: string;
    direction?: "up" | "left" | "right";
}) {
    const { ref, isVisible } = useScrollAnimation();

    const animationClass = {
        up: "animate-on-scroll",
        left: "animate-on-scroll-left",
        right: "animate-on-scroll-right",
    }[direction];

    return (
        <div
            ref={ref}
            className={`${animationClass} ${isVisible ? "is-visible" : ""} ${className}`}
        >
            {children}
        </div>
    );
}
