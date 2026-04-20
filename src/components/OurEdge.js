// app/components/OurEdge.jsx
export default function OurEdge() {
    const items = [
        {
            title: "Applied Learning",
            body: "Real-world scenarios, case studies, and simulations.",
        },
        {
            title: "Measurable Impact",
            body: "Customized programs designed for tangible business results.",
        },
        {
            title: "Global Standards, Regional Expertise",
            body: "Combining international best practices with deep local insight.",
        },
    ];

    return (
        <section className="w-full bg-white">
            <div className="mx-auto max-w-7xl px-6 md:px-8 py-10 md:py-16">
                {/* Heading */}
                <h2 className="italic font-semibold tracking-wide text-[28px] md:text-[34px] text-slate-900">
                    OUR PROMISE TO YOU
                </h2>

                {/* Features */}
                <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 md:gap-x-14">
                    {items.map((item) => (
                        <div key={item.title} className="max-w-sm">
                            <h3 className="text-[#425466] font-semibold text-[17px] md:text-[18px]">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-[#425466]  leading-7 text-[15px]">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
