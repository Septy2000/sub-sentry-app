import { Stat, Feature, Step } from "@/types/common";
import Button from "@components/reusables/Button/Button";
import SectionHeader from "@components/SectionHeader/SectionHeader";
import FeatureCard from "@components/reusables/FeatureCard/FeatureCard";
import StatCard from "@components/reusables/StatCard/StatCard";
import StepCard from "@components/reusables/StepCard/StepCard";
import styles from "./HomePage.module.scss";

export default function HomePage() {
    const stats: Stat[] = [
        { number: "$2.3B", label: "Saved by users" },
        { number: "50K+", label: "Active users" },
        { number: "99.9%", label: "Uptime" },
    ];

    const features: Feature[] = [
        {
            icon: "📊",
            title: "Smart Tracking",
            description:
                "Automatically detect and categorize your subscriptions across all connected accounts and cards.",
        },
        {
            icon: "🔔",
            title: "Renewal Alerts",
            description:
                "Get notified before renewals so you can cancel unwanted subscriptions or negotiate better rates.",
        },
        {
            icon: "💰",
            title: "Spending Insights",
            description:
                "Visualize your subscription spending with detailed analytics and identify cost-saving opportunities.",
        },
        {
            icon: "🔒",
            title: "Bank-Level Security",
            description:
                "Your financial data is protected with 256-bit encryption and read-only access to your accounts.",
        },
        {
            icon: "📱",
            title: "Mobile App",
            description:
                "Manage your subscriptions on-the-go with our intuitive mobile app for iOS and Android.",
        },
        {
            icon: "🎯",
            title: "Cancel Assistant",
            description:
                "Get help canceling subscriptions with direct links, phone numbers, and cancellation guides.",
        },
    ];

    const steps: Step[] = [
        {
            number: 1,
            title: "Connect Your Accounts",
            description:
                "Securely link your bank accounts and credit cards to start tracking automatically.",
        },
        {
            number: 2,
            title: "AI Detection",
            description:
                "Our smart algorithms identify and categorize all your subscription services instantly.",
        },
        {
            number: 3,
            title: "Monitor & Save",
            description:
                "Get alerts, insights, and recommendations to optimize your subscription spending.",
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
                        Stop overpaying for forgotten subscriptions. SubSentry tracks, alerts, and
                        helps you manage all your recurring payments in one powerful dashboard.
                    </p>

                    <div className={styles.heroButtons}>
                        <Button size="lg">Start Free Trial</Button>
                        <Button variant="outline" size="lg">
                            Watch Demo
                        </Button>
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
                    <p>Join thousands of users who have already saved money with SubSentry.</p>
                    <Button size="lg">Start Your Free Trial</Button>
                </div>
            </section>
        </div>
    );
}
