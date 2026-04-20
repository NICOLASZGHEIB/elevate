"use client";
import { useState, useEffect } from "react";
import ProgramCard from "./ProgramCardDesk";

export default function ProgramSections({
    heading,
    blurb,
    columns = { base: 1, md: 2, lg: 2 },
    items = [],
    color = "#2c4244",
}) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if any item in this section has an ID matching the URL hash
        if (typeof window !== 'undefined') {
            const hash = window.location.hash.substring(1);
            if (hash && items.some(item => item.id === hash)) {
                setIsOpen(true);
            }
        }
    }, [items, heading]);

    const gridClass = [
        "grid gap-6",
        `grid-cols-${columns.base || 1}`,
        columns.md ? `md:grid-cols-${columns.md}` : "",
        columns.lg ? `lg:grid-cols-${columns.lg}` : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <section className="mt-10 md:mt-12">
            {/* Collapsible Section heading */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between group hover:opacity-80 transition-opacity"
                aria-expanded={isOpen}
            >
                <h3 className="text-left text-[22px] md:text-[24px] font-semibold text-slate-800">
                    {heading}
                </h3>
                <svg
                    className={`w-6 h-6 text-slate-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {/* Collapsible content */}
            <div
                className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[10000px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                {/* Blurb box with HTML rendering */}
                <div
                    className="mt-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-[13.5px] leading-6 text-slate-600"
                    dangerouslySetInnerHTML={{ __html: blurb }}
                />

                {/* Program cards grid */}
                <div className={`mt-5 ${gridClass}`}>
                    {items.map((it) => (
                        <ProgramCard key={it.title} {...it} color={color} />
                    ))}
                </div>
            </div>
        </section>
    );
}
