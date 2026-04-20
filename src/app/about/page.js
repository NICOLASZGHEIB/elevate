import AboutStats from "@/components/AboutStats";
import RegionMapGL from "@/components/Map";
import OurEdge from "@/components/OurEdge";
import ExpertsBlock from "@/components/QuoteSection";
import TrainedIndustries from "@/components/TrainedIndustries";


export const metadata = {
    title: "About Elevate Consulting | Corporate Training Company Dubai & Lebanon",
    description:
        "Discover Elevate — a trusted corporate training and consultancy firm with 30+ years of leadership, sales, and productivity excellence. Learn our story and impact.",
    keywords: [
        "corporate training company",
        "leadership training Dubai",
        "sales and productivity consultancy",
    ],
    alternates: {
        canonical: "https://www.elevate-mena.com/about",
    },
};



export default function AboutPage() {
    return (<>
        <ExpertsBlock />
        <div className="sm:w-full md:w-11/12 mx-auto">

            <AboutStats />
            <OurEdge />
            <TrainedIndustries />
            <RegionMapGL />
        </div>
    </>
    );
}
