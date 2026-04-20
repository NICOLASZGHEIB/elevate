"use client";
import Image from "next/image";
import bgImage from "../../public/training-consultancy-Company-Dubai-MENA.png";
import ContactModalButton from "@/components/ContactModalButton";

export default function Hero() {
    return (
        <section className="relative w-full h-[50vh] flex items-center">
            <Image
                src={bgImage}
                alt="Leadership, sales and productivity training consultancy in Dubai and the MENA region"
                fill
                priority
                className="object-cover object-center scale-x-[-1]"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 w-full">
                <div className="mx-auto max-w-7xl px-6 md:px-12 flex justify-start">
                    <div className="max-w-3xl text-left">
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-100 leading-tight">
                            Elevate Training and Consultancy<br />
                            Dubai & MENA Region
                        </h1>
                        <p className="mt-4 text-sm md:text-base text-gray-200 max-w-xl">
                            Elevate Training and Consultancy is a leading corporate training provider based in Dubai, specializing in leadership development, sales excellence, and productivity growth.

                            We help organizations transform their teams and achieve measurable results across the MENA Region.
                        </p>
                        <ContactModalButton className="mt-6 inline-block">
                            Contact Us
                        </ContactModalButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
