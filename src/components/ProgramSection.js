import Image from "next/image";
import Link from "next/link";

const programs = [
    {
       title: "Sell Strong in Turbulent Times",
        src: "/sell-stronger-turbulent-times-sales-training-dubai.png",
        alt: "Sell Stronger in Turbulent Times - Sales Training Dubai",
        programId: "sell-strong-turbulent-times"    },
    {
        title: "Experiential Learning Workshop",
        src: "/training-consultancy-program-experiential-learning.png",
        alt: "Gen Z program",
        programId: "experiential-learning"
    },
    {
                title: "Crisis Management",
        src: "/crisis-management-leadership-training-dubai.png",
        alt: "Crisis Management Leadership Training Dubai",
        programId: "crisis-management"    },
];

export default function ProgramsSection() {
    return (
        <section className="w-full bg-white">
            <div className="border-t border-black/5">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 py-20 md:py-24">
                    {/* Heading + blurb */}
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#3A3A3A]">
                            Latest Developed Programs
                        </h2>
                        <p className="mt-4 text-[15px] sm:text-[16px] leading-7 text-[#6B6B6B]">
                            At Elevate, we design forward-thinking programs that address the
                            evolving needs of today's leaders and organizations. Each
                            initiative focuses on practical leadership, strategic agility, and
                            fostering a culture of engagement — delivered with our commitment
                            to excellence and alignment with the latest market trends.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="mt-16 grid grid-cols-1 gap-y-20 sm:gap-y-20 md:gap-y-0 md:grid-cols-3 md:gap-x-10">
                        {programs.map((p) => (
                            <Link
                                key={p.title}
                                href={`/programs#${p.programId}`}
                                className="relative group transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                            >
                                <article>
                                    {/* Image card */}
                                    <div className="overflow-hidden rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
                                        <div className="relative h-[280px] sm:h-[320px] md:h-[340px]">
                                            <Image
                                                src={p.src}
                                                alt={p.alt}
                                                fill
                                                priority={false}
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                sizes="(min-width:1024px) 380px, (min-width:768px) 33vw, 90vw"
                                            />
                                        </div>
                                    </div>

                                    {/* Caption card (overlapping bottom) */}
                                    <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 translate-y-[-20px] w-[85%] md:w-[88%]">
                                        <div className="rounded-xl bg-white px-6 py-4 shadow-[0_6px_20px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                                            <p className="text-[13px] sm:text-[14px] font-semibold tracking-tight text-[#3B3B3B] text-center leading-snug">
                                                {p.title}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
