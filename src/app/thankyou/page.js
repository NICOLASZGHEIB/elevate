// pages/thank-you.js (or /thank-you/page.jsx if using app router)
import Link from "next/link";

export default function ThankYou() {
    return (
        <section className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-20">
            <div className="max-w-2xl text-center">
                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-green-600"
                    >
                        <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {/* Heading */}
                <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                    Thank you for connecting with Elevate!
                </h1>

                {/* Message */}
                <p className="text-lg text-gray-600 mb-8">
                    We’ve received your request for program details.
                    Our team will be in touch with you shortly to discuss how we can
                    support your growth journey.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/programs"
                        className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition"
                    >
                        Explore More Programs
                    </Link>
                </div>
            </div>
        </section>
    );
}
