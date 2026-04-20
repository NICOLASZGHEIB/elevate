import Image from "next/image";
import officeImg from "../../public/quote.jpg";

export default function QuoteHero3D() {
    return (
        <section className="relative w-full bg-white py-14 sm:py-16 md:py-20">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-24">
                {/* Background Panel */}
                <div
                    aria-hidden
                    className="absolute right-0 top-6 sm:top-7 md:top-8 z-0 h-[320px] sm:h-[420px] md:h-[500px] w-full rounded-[28px] sm:rounded-[36px] md:rounded-[42px] shadow-[0_10px_35px_rgba(0,0,0,0.08)]"
                    style={{
                        backgroundColor: "rgba(133,134,70,0.10)",
                    }}
                />

                {/* Content */}
                <div className="relative grid grid-cols-12 items-center gap-6 sm:gap-8 md:gap-10 lg:gap-14">
                    {/* IMAGE */}
                    <div className="col-span-12 lg:col-span-6">
                        <div className="relative z-10 overflow-hidden w-full h-[260px] sm:h-[380px] md:h-[500px] rounded-[20px] sm:rounded-[26px] md:rounded-[34px] ring-1 ring-black/5 shadow-[0_12px_30px_rgba(0,0,0,0.14)] md:shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
                            <Image
                                src={officeImg}
                                alt="Team collaborating"
                                fill
                                className="object-cover"
                                sizes="(min-width:1280px) 560px, (min-width:768px) 48vw, 92vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* TEXT */}
                    <div className="col-span-12 lg:col-span-6 z-20 px-1 sm:px-0">
                        <h2 className="text-[#1D1D1D] font-extrabold leading-tight tracking-[-0.02em] text-[clamp(26px,6vw,56px)]">
                            “We don’t lower <br className="hidden md:block" />
                            the mountain. We <br className="hidden md:block" />
                            elevate ourselves.”
                        </h2>
                        <p className="mt-4 sm:mt-5 md:mt-6 max-w-[720px] text-[#425466] text-[15px] sm:text-[16px] md:text-[17px] leading-7 md:leading-8">
                            For over three decades, Elevate has been empowering professionals through
                            leadership, sales, and productivity training programs. Operating in Dubai and The MENA region, our mission is to transform people and organizations with measurable results.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
