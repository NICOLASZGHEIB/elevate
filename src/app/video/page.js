'use client'
export default function VideoPage() {
    return (
        <section className="bg-white min-h-screen flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-4xl rounded-md shadow-lg overflow-hidden aspect-video">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/R3fODFUnx14?autoplay=1"
                    title="Elevate Corporate Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            <p className="text-sm md:text-base text-[#425466] mt-4 text-center max-w-2xl">
                Discover how Elevate has been transforming organizations worldwide for
                over 30 years—empowering leaders, driving growth, and delivering
                sustainable results.
            </p>
            <button
                onClick={() => window.history.back()}
                className="mt-6 inline-flex items-center gap-2 border border-[#D9DEE8] px-5 py-3 text-sm font-medium text-[#1D1D1D] hover:bg-gray-50 rounded"
            >
                ← Back
            </button>
        </section>
    );
}
