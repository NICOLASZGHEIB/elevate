import Image from "next/image";
import founderImg from "../../public/founder.png"; // adjust path if needed

export default function FounderMessage() {
    return (
        <section className="w-full bg-[#EFEFEF]">
            <div className="mx-auto max-w-7xl px-6 md:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:gap-12">
                    {/* LEFT: Fixed-width image */}
                    <div className="flex-shrink-0 flex justify-center md:justify-start">
                        <div className="relative w-[260px] sm:w-[300px] md:w-[360px] lg:w-[420px]">
                            <Image
                                src={founderImg}
                                alt="Fayez Helou — Founder & CEO"
                                priority
                                className="h-auto w-full object-contain"
                            />
                        </div>
                    </div>

                    {/* RIGHT: Text fills the gap */}
                    <div className="flex-1 mt-8 md:mt-0 text-[#3A3A3A]">
                        <h2 className="text-sm font-semibold tracking-[0.18em] text-[#4D4D4D] uppercase">
                            A Message From Our Founder & CEO
                        </h2>

                        <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[#5A5A5A]">
                            <p>
                                At the core of our mission is a powerful conviction: sustainable business success
                                begins with the right culture—one that empowers people, ignites growth, and elevates
                                results.
                            </p>
                            <p>
                                When I founded this company, my vision was clear: to transform organizational
                                culture into a catalyst for developing future business leaders equipped with the
                                skills, agility, and mindset to thrive in a world defined by rapid change, market
                                complexity, and technological advancement.
                            </p>
                            <p>
                                We believe leadership is not just a position—it’s a capability that must be nurtured
                                across all levels of an organization. We enable companies to navigate challenges
                                with confidence and seize opportunities with speed.
                            </p>
                            <p>
                                Every initiative we deliver is rooted in this belief, driving measurable impact and
                                shaping cultures that inspire performance today and leadership excellence tomorrow.
                            </p>
                            <p>
                                Thank you for being part of this journey toward transformation, growth, and enduring
                                success.
                            </p>
                        </div>

                        <div className="mt-6">
                            <div className="font-semibold text-[#2F2F2F]">Fayez Helou</div>
                            <div className="mt-1 text-xs text-[#6E6E6E]">
                                Founder and CEO of Elevate Advisory Management Consulting
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
