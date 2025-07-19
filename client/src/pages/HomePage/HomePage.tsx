import { Stat, Feature, Step } from "@/types/common";
import Button from "@components/reusables/Button/Button";
import SectionHeader from "@components/SectionHeader/SectionHeader";
import FeatureCard from "@components/reusables/FeatureCard/FeatureCard";
import StatCard from "@components/reusables/StatCard/StatCard";
import StepCard from "@components/reusables/StepCard/StepCard";
import styles from "./HomePage.module.scss";

export default function HomePage() {
    const stats: Stat[] = [
        { number: "100%", label: "Free to use" },
        { number: "Simple", label: "Setup process" },
        { number: "Secure", label: "Data handling" },
    ];

    const features: Feature[] = [
        {
            icon: "💰",
            title: "Spending Insights",
            description:
                "Visualize your subscription spending with detailed analytics and identify cost-saving opportunities.",
        },
        {
            icon: "📋",
            title: "Centralized Dashboard",
            description:
                "View all your subscriptions in one organized dashboard with easy-to-understand overviews and management tools.",
        },
        {
            icon: "📊",
            title: "Time-Based Tracking",
            description:
                "Monitor your subscription costs over custom time periods to understand spending patterns and budget effectively.",
        },
    ];

    const steps: Step[] = [
        {
            number: 1,
            title: "Sign Up",
            description:
                "Create your SubSentry account and get started with tracking your subscriptions in minutes.",
        },
        {
            number: 2,
            title: "Add Your Subscriptions",
            description:
                "Manually add all your subscription services with their costs and billing cycles to build your personal list.",
        },
        {
            number: 3,
            title: "Monitor & Save",
            description:
                "Track your spending over time and identify opportunities to cut costs and optimize your budget.",
        },
    ];

    return (
        <div className={styles.homePage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <h1 className={styles.fadeInUp}>
                        Take Control of Your <span className={styles.highlight}>Subscriptions</span>
                    </h1>
                    <p className={styles.fadeInUp}>
                        Stop overpaying for forgotten subscriptions. SubSentry tracks and helps you
                        manage all your recurring payments in one simple dashboard.
                    </p>

                    <div className={styles.heroButtons}>
                        <Button size="lg">Get Started</Button>
                    </div>

                    <div className={styles.heroStats}>
                        {stats.map((stat, index) => (
                            <StatCard key={index} number={stat.number} label={stat.label} />
                        ))}
                    </div>
                </div>
                <div className={styles.heroBackground}></div>
            </section>

            {/* Features Section */}
            <section id="features" className={styles.features}>
                <div>
                    <SectionHeader
                        title="Powerful Features"
                        subtitle="Everything you need to master your subscription spending and never miss a payment again."
                    />

                    <div className={styles.featuresGrid}>
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className={styles.howItWorks}>
                <div>
                    <SectionHeader
                        title="How It Works"
                        subtitle="Get started in minutes and take control of your subscription spending."
                    />

                    <div className={styles.steps}>
                        {steps.map((step, index) => (
                            <StepCard
                                key={index}
                                number={step.number}
                                title={step.title}
                                description={step.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div>
                    <h2>Ready to Take Control?</h2>
                    <p>Join us and start saving money with SubSentry.</p>
                    <Button size="lg">Get Started</Button>
                </div>
            </section>
        </div>
    );
}
