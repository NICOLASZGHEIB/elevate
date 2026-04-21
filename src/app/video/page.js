'use client'
export default function VideoPage() {
    return (
        <section className="bg-white min-h-screen flex flex-col items-center justify-center p-6">
            <video
                controls
                autoPlay
                playsInline
                className="w-full max-w-4xl rounded-md shadow-lg"
                preload="auto"
            >
                <source src="/Elevate-corporate-Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
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
