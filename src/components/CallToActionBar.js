// components/CallToActionBar.tsx
"use client";
import ContactModalButton from "@/components/ContactModalButton";

export default function CallToActionBar() {
    return (
        <section className="w-full bg-[#f5f5f5] border-b">
            <div className="mx-auto max-w-5xl px-6 py-12 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#2e2f2f]">
                    The Results you want are one Click Away.
                </h2>

                <div className="mt-6">
                    <ContactModalButton className="px-6 py-3">
                        Connect with us
                    </ContactModalButton>
                </div>
            </div>
        </section>
    );
}
