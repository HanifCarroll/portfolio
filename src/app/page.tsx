"use client";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    AlarmClock,
    CalendarDays,
    CheckCircle2,
    Key,
    PenTool,
    Power,
    Receipt,
    Rocket,
    ShieldCheck,
    Wrench,
    XCircle,
} from "lucide-react";

const painPoints = [
    `You have a SaaS idea but no technical partner to build it.`,
    `You're worried about wasting months and thousands of dollars on the wrong features.`,
    `You need to get paying customers to prove traction before you even think about raising funds.`,
];

const steps = [
    {
        title: "Kickoff & Product Blueprint (Days 1-2)",
        description: `We map your vision, lock scope, and create a clickable prototype so we're aligned before development begins.`,
        icon: PenTool,
    },
    {
        title: "Build Sprint & Iterations (Days 3-10)",
        description: `I build the core SaaS workflow, authentication, billing, and essential analytics with rapid feedback loops using your input.`,
        icon: Wrench,
    },
    {
        title: "Launch & Handoff (Days 11-14)",
        description: `We deploy to production, polish the experience, and make sure you're confident running and demoing your product.`,
        icon: Rocket,
    },
];

const guaranteeItems = [
    {
        title: "Completion Guarantee",
        description:
            "If we pass the 2-week mark due to a delay on my end, I work for free until the agreed-upon MVP is launched.",
        icon: AlarmClock,
    },
    {
        title: "Momentum Promise",
        description:
            "You'll get clear daily updates, recorded walkthroughs, and priority access so you always know exactly what's shipping next.",
        icon: Power,
    },
    {
        title: "Fixed-Price Guarantee",
        description:
            "The price we agree on is the price you pay. No surprise fees or budget overruns.",
        icon: Receipt,
    },
    {
        title: "Full Ownership",
        description:
            "You get 100% ownership of all the code, IP, and infrastructure. No lock-in, ever.",
        icon: Key,
    },
];

const testimonials = [
    {
        quote: "Hanif is awesome, delivers high quality work, strong attention to detail, reliable, and communicates great. Whether handling complex builds, troubleshooting under pressure, fast turnarounds or adapting quickly to shifting priorities Hanif was dependable every step of the way.",
        author: "Markis Zarate",
        role: "Founder, Zarate Studios",
        image: "/img/markis.jpeg",
    },
    {
        quote: "Hanif helped me find that clarity. He guided me toward what I need to focus on first, and what’s going to matter most right now. I left the call feeling like I know what small shifts I can make to move forward with purpose, clarity, and a stronger experience for my users.",
        author: "Austin Lowther",
        role: "Founder, LangLibros",
        image: "/img/austin.jpeg",
    },
    {
        quote: "He quickly understood our needs, both from a business and aesthetic perspective, and translated them into a clean, functional website in no time. His professionalism, kindness, and data-driven approach made the entire process seamless and stress-free. The result exceeded our expectations.",
        author: "Monica Londoño",
        role: "Co-Founder, Punto de Partida",
        image: "/img/monica.jpeg",
    },
];

const projects = [
    {
        title: "Vox Prismatic – Content Creation Suite",
        description: "Turns transcripts into LinkedIn-ready posts in minutes.",
        features: [
            "Project workspaces with transcripts and post history",
            "AI-assisted editor with inline status controls",
            "Hashtag management and approval workflow",
            "Schedule-ready LinkedIn publishing pipeline",
        ],
        tech: "Laravel, Vue, GPT-5, Google Gemini",
        demoLink: "https://voxprismatic.com",
        image: "/img/vox-prismatic-posts.png",
        imageAlt: "Vox Prismatic posts dashboard with pending content queue",
    },
    {
        title: "HablaBA – Neighborhood Language Exchanges",
        description: "Hyper-local meetups that turn Buenos Aires language practice into curated, real-world sessions.",
        features: [
            "Explore upcoming exchanges by neighborhood, format, and language pairing",
            "Capacity tracking shows confirmed seats across small-group and 1-on-1 sessions",
            "Host profiles and scheduling tools keep RSVP coordination effortless",
            "Notification prompts keep joins, chat updates, and changes on your radar",
        ],
        tech: "Laravel, Vue",
        demoLink: "#",
        image: "/img/habla-ba-explore.png",
        imageAlt: "HablaBA explore page listing Buenos Aires language exchanges",
    },
];

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* 1. Hero Section */}
            <section id="home" className="px-6 py-28 md:py-32">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                        Launch Your SaaS in 2 Weeks.
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                        I help non-technical founders go from an idea to a
                        revenue-ready product, without writing a line of code or
                        giving up equity.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-4">
                        <Button size="lg" asChild>
                            <Link
                                href="https://cal.com/hanifcarroll/strategy"
                                className="inline-flex items-center gap-2"
                            >
                                <CalendarDays
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                                Book a Free Discovery Call
                            </Link>
                        </Button>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                        30 minutes. No sales pitch. Just honest advice for your
                        MVP.
                    </p>
                </div>
            </section>

            {/* 2. Problem / Pain Section */}
            <section className="bg-muted/40 px-6 py-20">
                <div className="mx-auto max-w-5xl">
                    <h2 className="text-3xl font-semibold md:text-4xl">
                        Does This Sound Familiar?
                    </h2>
                    <ul className="mt-10 space-y-6 text-lg">
                        {painPoints.map((point) => (
                            <li key={point} className="flex items-start gap-3">
                                <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-500" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 3. Solution / Offer Section */}
            <section id="offer" className="px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-semibold md:text-4xl">
                            Your 2-Week Path to Paying Customers
                        </h2>
                        <p className="mt-6 text-muted-foreground">
                            This is a fixed-scope, fixed-price sprint designed
                            to turn your vision into a real business asset.
                        </p>
                    </div>
                    <div className="mt-14 grid gap-6 md:grid-cols-3">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <Card key={step.title} className="h-full">
                                    <CardHeader className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <Badge
                                                variant="outline"
                                                className="text-xs font-semibold uppercase tracking-wide"
                                            >
                                                Step {index + 1}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-xl leading-tight">
                                            {step.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base leading-relaxed">
                                            {step.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. Is This For You Section */}
            <section className="border-y px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl font-semibold md:text-4xl">
                        A Partnership Built for a Specific Founder
                    </h2>
                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle className="text-2xl">
                                    This is for you if...
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-5 text-base">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2
                                            className="mt-1 h-5 w-5 text-emerald-500"
                                            aria-hidden="true"
                                        />
                                        <span>{`You're a founder or domain expert with deep industry knowledge.`}</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2
                                            className="mt-1 h-5 w-5 text-emerald-500"
                                            aria-hidden="true"
                                        />
                                        <span>{`You have clarity on the problem and the must-have features.`}</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2
                                            className="mt-1 h-5 w-5 text-emerald-500"
                                            aria-hidden="true"
                                        />
                                        <span>{`You have the budget to invest in building a professional MVP.`}</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2
                                            className="mt-1 h-5 w-5 text-emerald-500"
                                            aria-hidden="true"
                                        />
                                        <span>{`You're ready to collaborate and move fast to hit the 2-week timeline.`}</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle className="text-2xl">
                                    This is NOT for you if...
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-5 text-base">
                                    <li className="flex items-start gap-3">
                                        <XCircle
                                            className="mt-1 h-5 w-5 text-destructive"
                                            aria-hidden="true"
                                        />
                                        <span>{`You need a consumer-facing mobile app.`}</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle
                                            className="mt-1 h-5 w-5 text-destructive"
                                            aria-hidden="true"
                                        />
                                        <span>{`You require complex enterprise features from day one.`}</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle
                                            className="mt-1 h-5 w-5 text-destructive"
                                            aria-hidden="true"
                                        />
                                        <span>{`You need an open-ended discovery project before building.`}</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle
                                            className="mt-1 h-5 w-5 text-destructive"
                                            aria-hidden="true"
                                        />
                                        <span>{`You're looking for a technical co-founder (I'm a service partner).`}</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 5. About Me Section */}
            <section className="px-6 py-24">
                <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 md:flex-row md:items-center md:gap-16">
                    <div className="w-full space-y-6 md:max-w-2xl">
                        <h2 className="text-3xl font-semibold md:text-4xl">
                            Meet Your Technical Partner
                        </h2>
                        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                            <p>
                                {`Hi, I'm Hanif. For 8 years, I've been a full-stack software engineer. Now, I do one thing: I help non-technical founders navigate the critical 0-to-1 journey.`}
                            </p>
                            <p>
                                {`I'm not just a hired coder; I'm a strategic partner who translates your business vision into a revenue-ready product. My entire process is built on speed, clear communication (in plain English), and a relentless focus on getting you to your first paying customer.`}
                            </p>
                        </div>
                    </div>
                    <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl bg-muted md:ml-auto">
                        <Image
                            src="/headshot.webp"
                            alt="Hanif Carroll"
                            fill
                            sizes="(max-width: 768px) 320px, 320px"
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* 6. What I've Built Section */}
            <section id="work" className="bg-muted/20 px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-semibold md:text-4xl">
                            What I&apos;ve Built
                        </h2>
                        <p className="mt-6 text-muted-foreground">
                            Two-week build patterns I lean on to deliver fast, production-ready SaaS.
                        </p>
                    </div>
                    <div className="mt-14 grid gap-6 md:grid-cols-2">
                        {projects.map((project) => (
                            <Card key={project.title} className="flex h-full flex-col">
                                <CardHeader className="space-y-5">
                                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted">
                                        {project.image ? (
                                            <Image
                                                src={project.image}
                                                alt={project.imageAlt}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 600px"
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="h-full w-full bg-gradient-to-br from-primary/10 via-transparent to-primary/30" />
                                        )}
                                    </div>
                                    <div>
                                        <CardTitle className="text-2xl leading-tight">
                                            {project.title}
                                        </CardTitle>
                                        <div className="mt-2 font-mono text-sm text-muted-foreground">
                                            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                                        </div>
                                        <CardDescription className="mt-4 text-base leading-relaxed">
                                            {project.description}
                                        </CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex flex-1 flex-col justify-between gap-6">
                                    <ul className="space-y-2 text-sm text-foreground">
                                        {project.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2">
                                                <span className="mt-[2px] text-primary">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="space-y-3 text-sm font-medium text-muted-foreground">
                                        <p>
                                            <span className="font-semibold text-foreground">Tech:</span> {project.tech}
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            <Button asChild variant="secondary" size="sm">
                                                <Link href={project.demoLink}>View Live Site</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Social Proof / Testimonials Section */}
            <section id="proof" className="bg-muted/30 px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl font-semibold md:text-4xl">
                        Trusted by Founders
                    </h2>
                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {testimonials.map((testimonial) => (
                            <Card key={testimonial.author} className="h-full">
                                <CardContent className="flex h-full flex-col justify-between gap-6 pt-6">
                                    <p className="text-base leading-relaxed text-foreground">
                                        “{testimonial.quote}”
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="relative h-14 w-14 overflow-hidden rounded-full bg-muted">
                                            <Image
                                                src={testimonial.image}
                                                alt={`${testimonial.author} headshot`}
                                                fill
                                                sizes="56px"
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            <p className="font-semibold text-foreground">
                                                {testimonial.author}
                                            </p>
                                            <p>{testimonial.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Pricing Section */}
            <section id="pricing" className="px-6 py-24">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-3xl font-semibold md:text-4xl">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-6 text-muted-foreground">
                        The 2-Week MVP Launch Package
                    </p>
                    <p className="mt-2 text-muted-foreground">
                        A fixed-price investment to take you from idea to
                        revenue-ready SaaS.
                    </p>
                    <Card className="mx-auto mt-12 max-w-3xl">
                        <CardHeader className="space-y-4">
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                <Badge
                                    variant="secondary"
                                    className="rounded-full px-3 py-1 text-sm font-medium"
                                >
                                    2-Week Build Intensive
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                    Only 2 Spots Available
                                </span>
                            </div>
                            <CardTitle className="text-4xl font-bold">
                                $5,000
                            </CardTitle>
                            <CardDescription className="text-base text-muted-foreground">
                                Payable in 2 milestones: 50% upfront, 50% at
                                launch.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-base leading-relaxed text-muted-foreground">
                            <p className="font-semibold text-foreground">
                                What you get:
                            </p>
                            <ul className="space-y-2 text-left list-disc list-inside">
                                <li>
                                    Feature blueprint and clickable prototype
                                </li>
                                <li>
                                    Production-ready build with auth, billing,
                                    and core workflow
                                </li>
                                <li>
                                    Launch support plus recorded training and
                                    handoff
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* 9. Guarantee / Risk Reversal Section */}
            <section className="bg-primary/5 px-6 py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="flex items-center gap-3">
                        <ShieldCheck className="h-8 w-8 text-primary" />
                        <h2 className="text-3xl font-semibold md:text-4xl">
                            Your No-Risk Launch Guarantee
                        </h2>
                    </div>
                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        {guaranteeItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Card key={item.title} className="h-full">
                                    <CardHeader className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <Icon
                                                    className="h-5 w-5"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <CardTitle className="text-xl">
                                                {item.title}
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base leading-relaxed">
                                            {item.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
