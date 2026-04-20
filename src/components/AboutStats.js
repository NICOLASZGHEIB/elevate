import Link from "next/link";

export default function AboutUs() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
                    {/* LEFT SIDE */}
                    <div className="col-span-1 md:col-span-5 space-y-4">
                        <h3 className="text-2xl md:text-[28px] font-semibold italic text-[#1D1D1D]">
                            ABOUT US
                        </h3>

                        <h4 className="text-lg md:text-xl text-[#425466] font-medium">
                            Empowering Growth Elevating Results
                        </h4>

                        <p className="text-sm md:text-base text-[#425466] leading-6 md:leading-7">
                            We don't just train—we immerse you in practical, hands-on experiences designed to equip
                            you with the mindset, skillset, and toolset to thrive in today's dynamic world.
                        </p>

                        {/* CTA */}
                        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <Link
                                href="/video"
                                className="inline-flex items-center gap-3 border border-[#D9DEE8] px-5 py-3 text-sm font-medium text-[#1D1D1D] hover:bg-gray-50 rounded w-full sm:w-auto justify-center"
                            >
                                <span>Watch Video</span>
                                <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-[#1D1D1D] text-white text-[10px]">
                                    ►
                                </span>
                            </Link>

                        </div>
                    </div>

                    {/* DIVIDER (hidden on mobile) */}
                    <div className="hidden md:flex col-span-1 justify-center">
                        <div className="w-px bg-[#E7EBF3]" />
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="col-span-1 md:col-span-6">
                        <h5 className="text-lg md:text-[18px] font-medium text-[#425466] mb-6 md:mb-8">
                            Our Numbers Tell the <span className="italic font-semibold">Story</span>
                        </h5>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            <StatCard value="200,000+" label="Professionals Trained" elevated />
                            <StatCard value="70+" label="Tailored Programs" />
                            <StatCard value="20+" label="Industries Served" />
                            <StatCard value="13+" label="Countries Reached" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StatCard({ value, label, elevated }) {
    return (
        <div
            className={[
                "bg-white border border-[#E7EBF3] rounded-md px-6 py-6 text-center",
                elevated
                    ? "shadow-[0_12px_32px_rgba(0,0,0,0.1)]"
                    : "shadow-sm",
            ].join(" ")}
        >
            <div className="text-xl md:text-[30px] font-bold text-[#1D1D1D] mb-1 md:mb-2">
                {value}
            </div>
            <div className="text-sm md:text-[14px] text-[#425466] leading-snug">
                {label}
            </div>
        </div>
    );
}
