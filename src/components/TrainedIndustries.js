// app/components/TrainedIndustries.jsx
export default function TrainedIndustries() {
  const industries = [
    "BANKING",
    "INSURANCE",
    "OIL & GAS",
    "RESTAURANTS",
    "HEALTHCARE",
    "MEDIA",
    "HOSPITALITY",
    "TELECOM",
    "FMCG",
    "IT",
    "NGOS",
    "REAL ESTATE",
    "AGRICULTURE",
    "MANUFACTURING",
    "FASHION",
    "LOGISTICS",
    "RETAIL",
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-10 md:py-16">
        {/* Heading */}
        <h2 className="italic font-semibold tracking-wide text-[28px] md:text-[34px] text-slate-900">
          TRAINED INDUSTRIES
        </h2>

        {/* Subtext */}
        <p className="mt-3 text-slate-600 text-[15px] md:text-[16px] leading-relaxed max-w-3xl">
          Elevate's unique framework blends proven leadership methodologies across more than 20+ industries as highlighted below.
        </p>

        {/* Pills row (wraps neatly, no scroll) */}
        <div className="mt-6 flex flex-wrap gap-1.5 md:gap-3">
          {industries.map((industry) => (
            <div
              key={industry}
              className="px-2.5 py-1 md:px-4 md:py-2 bg-gray-100 rounded-lg text-[#2D4245] font-semibold text-[10px] md:text-[14px]"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
