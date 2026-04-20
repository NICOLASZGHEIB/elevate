"use client";
import Image from "next/image";

export default function ModernMap() {
    return (
        <section className="w-full bg-white pb-12 md:pb-16">
            {/* Section Heading */}
            <div className="mx-auto max-w-7xl px-6 md:px-8 py-10">
                <div className="max-w-full mx-auto">
                    <h2 className="italic font-semibold tracking-wide text-[28px] md:text-[34px] text-slate-900">
                        GLOBAL PRESENCE
                    </h2>
                    <p className="mt-3 text-slate-600 text-[15px] md:text-[16px] leading-relaxed">
                        We provide executive training across diverse industries, including Dubai, KSA, Qatar, Lebanon and many more in the MENA region.
                    </p>
                </div>
            </div>

            {/* Map Image */}
            <div className="mx-auto max-w-7xl px-6 md:px-8">
                <div className="mt-8 md:mt-10 w-full bg-white flex items-center justify-center rounded-2xl overflow-hidden">
                    <Image
                        src="/map.png?v=2"
                        alt="Elevate Consulting global presence map"
                        width={1600}
                        height={900}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}

