import ProgramSections from "../../components/ProgramSections";

export const metadata = {
    title: "Training Programs Dubai | Elevate",
    description:
        "Discover Elevate's 70+ custom corporate training programs in Dubai. Leadership development, sales training, and productivity workshops tailored for your team. Proven results across MENA region.",
    keywords: [
        "training programs dubai",
        "custom training programs",
        "corporate training programs dubai",
        "leadership programs dubai",
        "sales training programs",
        "productivity programs",
        "custom corporate programs",
        "executive training programs",
        "management training programs dubai",
        "professional development programs",
        "business training programs",
        "leadership development programs dubai",
        "sales workshops dubai",
        "team training programs",
    ],
    alternates: {
        canonical: "https://www.elevate-mena.com/programs",
    },
    openGraph: {
        title: "Training Programs Dubai | Elevate",
        description: "70+ tailored corporate training programs in leadership, sales & productivity. Proven results for teams across Dubai & MENA region.",
        url: "https://www.elevate-mena.com/programs",
        siteName: "Elevate",
        images: [
            {
                url: "https://www.elevate-mena.com/training-programs-dubai.png",
                width: 1200,
                height: 630,
                alt: "Elevate Custom Training Programs Dubai",
            },
        ],
        locale: "en_AE",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Training Programs Dubai | Elevate",
        description: "70+ tailored corporate training programs in leadership, sales & productivity. Proven results across MENA.",
        images: ["https://www.elevate-mena.com/training-programs-dubai.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function CustomProgramsPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Elevate Training Programs",
        "description": "Custom corporate training programs in leadership, sales, and productivity",
        "url": "https://www.elevate-mena.com/programs",
        "numberOfItems": 70,
        "itemListElement": [
            {
                "@type": "Course",
                "name": "Leadership Development Programs",
                "description": "Comprehensive leadership training including The Legendary Leader, EI in the Age of AI, Culture Transformation, and more",
                "provider": {
                    "@type": "Organization",
                    "name": "Elevate Training and Consultancy",
                    "url": "https://www.elevate-mena.com"
                },
                "coursePrerequisites": "None",
                "educationalLevel": "Executive, Manager, Team Leader",
                "inLanguage": "en",
                "availableLanguage": ["en", "ar"]
            },
            {
                "@type": "Course",
                "name": "Sales Training Programs",
                "description": "Professional sales training including Sales Force Leadership, Relationship Selling, and Growth Strategies",
                "provider": {
                    "@type": "Organization",
                    "name": "Elevate Training and Consultancy",
                    "url": "https://www.elevate-mena.com"
                },
                "coursePrerequisites": "None",
                "educationalLevel": "Sales Professional, Sales Manager, Executive",
                "inLanguage": "en",
                "availableLanguage": ["en", "ar"]
            },
            {
                "@type": "Course",
                "name": "Productivity & Performance Programs",
                "description": "Productivity enhancement programs including Goal Setting, Change Management, Gen Z Workplace, and more",
                "provider": {
                    "@type": "Organization",
                    "name": "Elevate Training and Consultancy",
                    "url": "https://www.elevate-mena.com"
                },
                "coursePrerequisites": "None",
                "educationalLevel": "All Levels",
                "inLanguage": "en",
                "availableLanguage": ["en", "ar"]
            }
        ]
    };

    return (
        <main className="bg-[#F7FAFC]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <div className="mx-auto max-w-7xl px-6 md:px-8 py-10 md:py-14">
                {/* Page heading */}
                <h1 className="text-[28px] md:text-[34px] font-semibold text-slate-900">
                    Custom Training Programs Dubai
                </h1>
                <p className="mt-2 max-w-3xl text-[14.5px] md:text-[15px] leading-7 text-slate-600">
                    Explore Elevate's 70+ transformative training programs in Leadership, Sales & Productivity designed to boost engagement, drive measurable results, and transform teams across Dubai and the MENA region.
                </p>

                {/* Sales Programs */}
                <ProgramSections
                    heading="Sales Programs"
                    color="#2c4244"
                    blurb="We approach <strong>sales as a consultative</strong>, value-driven process
                    that builds long-term client relationships. Our sales training
                    series <strong>empowers individuals and teams to understand customer needs, present solutions with confidence, and close deals effectively</strong> while maintaining integrity and delivering measurable business growth."
                    items={[
                        {
                            title: "Sales Force Leadership",
                            image: "/sales-force-leadership-training-dubai.png",
                            description:
                                "Traditional sales management is no longer enough. Today's leaders must inspire, strategize, and build self-reliant sales teams. In this program, sales leaders learn to assess team competencies, define the right team structure, and adopt leadership styles that maximize performance. Discover how to move from supervision to true sales leadership and lead a team that consistently achieves targets. Step up to lead your sales force into peak performance.",
                            subtitle: "Step up to lead your sales force into peak performance"
                        },
                        {
                            title: "Elevate Your Sales Process",
                            subtitle: "Hit every target with confidence!",
                            image: "/sales-process-training-dubai.png",
                            description:
                                "In a competitive, tech-driven market, an outdated sales process holds you back. This program introduces Elevate's Professional 5 Sales Stages Process, guiding teams and leaders to align with modern challenges. You'll learn to streamline steps, boost efficiency, and drive results with a process built for today's buyers. Elevate your sales process and hit every target with confidence.",
                        },
                        {
                            title: "Elevate Your Relationship Selling Strategies",
                            subtitle: "Upgrade your sales game by making relationships your biggest advantage",
                            image: "/relationship-selling-strategies-training-dubai.png",
                            description:
                                "Sales success is built on strong relationships, not just transactions. This program helps you segment your portfolio, apply relationship-building matrices, and integrate product management strategies that impact results. By mastering the art of professional connection, you transform customer interactions into long-term partnerships. Upgrade your sales game by making relationships your biggest advantage.",
                        },
                        {
                            title: "Growth Strategies to Double Your Sales",
                            subtitle: "Unlock the strategies that double your sales and transform your results!",
                            image: "/growth-strategies-double-sales-training-dubai.png",
                            description:
                                "What if you could move beyond survival and consistently exceed your targets? This program reveals the four proven growth strategies, territory and account management best practices, and the secret formula for double-digit selling. By applying these tools, you'll learn to maximize results and join the top-performing ranks. Unlock the strategies that double your sales and transform your results.",
                        },
                    ]}
                />

                {/* Leadership Programs */}
                <ProgramSections
                    heading="Leadership Programs"
                    color="#8f9784"
                    blurb="At Elevate, <strong>leadership</strong> is about more than holding a title — it's
                    about inspiring action, building trust, and guiding teams toward shared success.
                    <strong> Our leadership programs equip professionals with strategic thinking, emotional intelligence, and decision-making skills to drive performance</strong> culture in complex, fast-changing environments."
                    items={[
                        {
                            title: "The Legendary Leader",
                            subtitle: "Join the Legendary Leader journey and elevate your leadership legacy!",
                            image: "/legendary-leader-workshop-training-dubai.png",
                            description:
                                "Thousands of managers worldwide have transformed through this immersive experience. Participants learn to adapt leadership styles, develop teams effectively, give impactful feedback, and resolve problems that affect performance and retention. The result: stronger communication, inspired teams, and measurable impact. Join the Legendary Leader journey and elevate your leadership legacy.",
                        },
                        {
                            title: "Leading with EI in the Age of AI",
                            subtitle: "Lead with EI, embrace AI, and future-proof your leadership impact.",
                            image: "/training-consultancy-program-EI-AI.jpg",
                            description:
                                "Technology advances quickly, but leadership must remain human. This program blends emotional intelligence with digital fluency, equipping leaders to prioritize empathy, communication, and innovation while integrating AI for efficiency. Lead with EI, embrace AI, and future-proof your leadership impact.",
                            id: "ei-ai"
                        },
                        {
                            title: "Culture Transformation to Inspire Trust",
                            subtitle: "Transform your culture into one where trust fuels success.",
                            image: "/culture-transformation-trust-training-dubai.png",
                            description:
                                "Every organization has a culture — few build it intentionally. In this program, leaders learn about the four types of organizational culture, the steps to shift toward trust, and the direct impact this has on results. Transform your culture into one where trust fuels success.",
                            id: "culture-transformation"
                        },
                        {
                            title: "Boost Engagement",
                            subtitle: "Learn to inspire your team's energy, not just manage their work.",
                            image: "/boost-employee-engagement-training-dubai.png",
                            description:
                                "Employee engagement isn't about perks or events — it's a leadership responsibility that directly affects morale, productivity, and profitability. This program uncovers the leadership cores that drive sustainable engagement and introduces practical boosters leaders can apply. Learn to inspire your team's energy, not just manage their work.",
                        },
                        {
                            title: "Building High Performing Teams",
                            subtitle: "Build teams that don't just work together but thrive together.",
                            image: "/building-high-performing-teams-training-dubai.png",
                            description:
                                "Great results start with strong relationships. This program equips leaders and future successors with tools to recognize strengths, foster trust, and adapt communication to develop high performing teams. Beyond the office, these skills empower leaders to create meaningful connections in everyday life. Build teams that don't just work together but thrive together.",
                        },
                        {
                            title: "Be Yourself Leader",
                            subtitle: "Discover your authentic leadership style and move forward with purpose.",
                            image: "/authentic-leadership-training-dubai.png",
                            description:
                                "True leadership starts with clarity of direction and measurable goals. This program empowers individuals to set SMART goals, harness the power of execution, and shift from blame-storming to productive brainstorming. Discover your authentic leadership style and move forward with purpose.",
                        },
                        {
                            title: "Coaching With Purpose",
                            subtitle: "Turn coaching into your most powerful leadership tool.",
                            image: "/coaching-with-purpose-training-dubai.png",
                            description:
                                "Coaching is more than telling — it's about asking, listening, and empowering. This program gives leaders a clear model for coaching that builds trust, enhances skills, and improves engagement. Learn when to coach, how to give feedback, and how to accelerate development. Turn coaching into your most powerful leadership tool.",
                        },
                    ]}
                />

                {/* Productivity Programs */}
                <ProgramSections
                    heading="Productivity Programs"
                    color="#848445"
                    blurb="  <strong>Productivity</strong> is the balance between efficiency and excellence.
                    Our programs provide practical tools and systems for <strong>time management, workflow optimization, and goal alignment, enabling professionals to achieve more</strong> with less stress and drive sustainable results.
                </p>"
                    columns={{ base: 1, md: 2, lg: 3 }}
                    items={[
                        {
                            title: "The Power of Execution and Goal Setting",
                            subtitle: "Master the power of execution and achieve what truly matters.",
                            image: "/execution-goal-setting-training-dubai.png",
                            description:
                                "When results stall, it's often because teams lose sight of their Most Important Goal. This program provides a results-driven framework for identifying priorities and executing them with discipline and clarity. Master the power of execution and achieve what truly matters.",
                        },
                        {
                            title: "Influence With Impact Through Colors",
                            subtitle: "Unlock the colors of human behavior and strengthen your workplace impact.",
                            image: "/personality-colors-influence-training-dubai.png",
                            description:
                                "Success depends on relationships and understanding people. In this interactive program, you'll discover your personality style, learn to recognize others', and adapt communication for greater influence. Unlock the colors of human behavior and strengthen your workplace impact.",
                        },
                        {
                            title: "Change Management",
                            subtitle: "Lead change with confidence instead of reacting to it.",
                            image: "/change-management-training-dubai.png",
                            description:
                                "Change is constant but not always easy. This program helps leaders and teams understand the stages of change, navigate resistance, and adopt strategies that drive innovation and results. Lead change with confidence instead of reacting to it.",
                        },
                        {
                            title: "Gen Z At The Workplace",
                            subtitle: "Bridge the generation gap and build a culture where Gen Z thrives.",
                            image: "/gen-z-workplace-training-dubai.png",
                            description:
                                "Four generations now share the workplace — are you ready for Gen Z? This program explores their behaviors, values, and expectations, and how to engage and retain them. Bridge the generation gap and build a culture where Gen Z thrives.",
                            id: "gen-z-workplace"
                        },
                        {
                            title: "Experiential Learning",
                            subtitle: "Turn every activity into a lesson that sticks.",
                            image: "/experiential-learning-training-dubai.png",
                            description:
                                "Forget traditional team building — experience drives learning. This program uses gamification and real business simulations to improve collaboration and decision-making. Turn every activity into a lesson that sticks.",
                            id: "experiential-learning"
                        },
                        {
                            title: "Planning and Organizing for Productivity",
                            subtitle: "Plan smarter, work better, and reclaim your productivity.",
                            image: "/planning-organizing-productivity-training-dubai.png",
                            description:
                                "Burnout kills productivity, but effective planning restores energy and results. This program shows teams how to manage tasks, organize workflows, and develop skills that reduce stress and boost efficiency. Plan smarter, work better, and reclaim your productivity.",
                        },
                        {
                            title: "Secrets of Body Language",
                            subtitle: "Learn the secrets of body language and master the art of unspoken influence.",
                            image: "/body-language-training-dubai.png",
                            description:
                                "Words may lie, but body language doesn't. This program teaches how to read signals, improve negotiation, and strengthen communication through nonverbal cues. Learn the secrets of body language and master the art of unspoken influence.",
                        },
                        {
                            title: "Presentation Skills & Public Speaking",
                            subtitle: "Elevate your communication and present with impact.",
                            image: "/public-speaking-presentation-skills-training-dubai.png",
                            description:
                                "Public speaking is a career game-changer. In this hands-on program, participants practice structuring messages, presenting with authority, managing anxiety, and using visuals effectively. With video feedback and coaching, you'll leave ready to command any stage. Elevate your communication and present with impact.",
                        },
                        {
                            title: "Hard-to-Please Customers",
                            subtitle: "Elevate your communication and present with impact.",
                            image: "/difficult-customer-service-training-dubai.png",
                            description:
                                "Every tough customer is an opportunity in disguise. This program introduces the four types of difficult customers and the strategies to convert them into loyal advocates. Turn challenges into wins and make every customer an ambassador.",
                        },
                        {
                            title: "Principles of Success",
                            subtitle: "Turn challenges into wins and make every customer an ambassador.",
                            image: "/principles-of-success-training-dubai.png",
                            description:
                                "Success follows principles, not luck. This program challenges participants to leave their comfort zone, shift perspectives, and adopt behaviors that create real change. Apply the principles of success and unlock new levels of achievement.",
                        },
                        {
                            title: "Creativity & Innovation",
                            subtitle: "Empower your team to think differently and innovate with confidence.",
                            image: "/creativity-innovation-training-dubai.png",
                            description:
                                "Innovation is no longer optional — it's essential. In this two-day program, participants learn creative thinking tools, lateral problem-solving, and proven methods to break traditional patterns. Empower your team to think differently and innovate with confidence.",
                        },
                        {
                            title: "Total Customer Experience",
                            subtitle: "Design intentional experiences and turn customers into lifelong partners.",
                            image: "/total-customer-experience-training-dubai.png",
                            description:
                                "Customer loyalty is shaped by the entire journey, not just service. This program teaches how to align touchpoints, impact departments, and culture to deliver an experience that keeps customers returning. Design intentional experiences and turn customers into lifelong partners.",
                        },
                        {
                            title: "Teambuilding Activities",
                            subtitle: "Design intentional experiences and turn customers into lifelong partners.",
                            image: "/team-building-activities-dubai.png",
                            description:
                                "True teamwork is built beyond the office walls. This program uses engaging outdoor activities to strengthen bonds, communication, and cooperation in a joyful way. Take your team outside the office and bring back stronger connections.",
                        },
                    ]}
                />
            </div>
        </main>
    );
}
