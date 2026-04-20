// app/components/Insights.js
import { Star } from "lucide-react";

const testimonials = [
  {
    title: "Insurance Industry",
    role: "LEBANON – CEO",
    text: "Elevate have a lot of experience in insurance and after every training we accomplish more and more results through the company.",
    rating: 5,
  },
  {
    title: "Pharmaceutical Industry",
    role: "CEO – DUBAI",
    text: "We acknowledged in this training how goals should be supported with KPIs, and how to lead your own team to accomplish the results and targets you want.",
    rating: 5,
  },
  {
    title: "Industrial Industry",
    role: "COUNTRY MANAGER – KSA",
    text: "Professional, insightful, and results-driven. Elevate truly lives up to its name.",
    rating: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex space-x-1 mt-3">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={18}
          className={i < count ? "fill-[#858646] text-[#858646]" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function Insights() {
  return (
    <section className="bg-[#f5f5f5] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Left aligned title */}
        <h2 className="text-2xl font-bold mb-10 text-gray-800">
          Insight From the Inside
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-6 text-left flex flex-col justify-between border border-gray-200"
            >
              <div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{item.role}</p>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
              <StarRating count={item.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
