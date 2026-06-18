import type { ImageMetadata } from 'astro';
import casamoPhoto from '@src/assets/img/projects/casamo-homepage-viewport.jpg';
import genruptPhoto from '@src/assets/img/projects/genrupt-creative-ops-photo.png';
import muchoHangoutsPhoto from '@src/assets/img/projects/mucho-hangouts-feature.png';
import palabrunoPhoto from '@src/assets/img/projects/palabruno-reading-materials-photo.png';

export type ServiceOfferKey = 'mvp' | 'fractional';

export interface ServiceOfferProof {
	label: string;
	title: string;
	body: string;
	href: string;
	image: ImageMetadata;
	imageAlt: string;
	imageClass?: string;
}

export interface ServiceOffer {
	key: ServiceOfferKey;
	path: string;
	label: string;
	title: string;
	metaTitle: string;
	description: string;
	heroTitle: string;
	heroBody: string;
	price: string;
	chooserSummary: string;
	chooserCta: string;
	fitHeading: string;
	fitBody: string;
	fitSignals: string[];
	outcomesHeading: string;
	outcomes: Array<{
		title: string;
		body: string;
	}>;
	processHeading: string;
	process: Array<{
		title: string;
		body: string;
	}>;
	proofHeading: string;
	proof: ServiceOfferProof[];
	faqs: Array<{
		title: string;
		body: string;
	}>;
	finalHeading: string;
	finalBody: string;
}

export const serviceOffers: Record<ServiceOfferKey, ServiceOffer> = {
	mvp: {
		key: 'mvp',
		path: '/mvp-launch/',
		label: 'MVP Launch',
		title: '4-Week MVP Launch',
		metaTitle: '4-Week MVP Launch',
		description:
			'A focused product build for nontechnical founders who need a usable first version, clear scope, UX, implementation, and launch support from one senior product engineer.',
		heroTitle: 'Get the first useful version live.',
		heroBody:
			'I help nontechnical founders turn rough product ideas into focused web and mobile MVPs: scope, UX, build, launch support, and enough handoff clarity to keep moving after v1.',
		price: 'Starts at $10,000',
		chooserSummary: 'For nontechnical founders with a product idea that needs to become a usable first version.',
		chooserCta: 'Explore MVP launch',
		fitHeading: 'For founders who need the first real version, not a long requirements document.',
		fitBody:
			'This works best when the idea is specific enough to test, but still needs product judgment, UX decisions, and implementation discipline before it can become software.',
		fitSignals: [
			'You have a rough product idea, workflow, or prototype that needs a shippable shape.',
			'You need one person who can scope, design, build, and explain the tradeoffs.',
			'You want a real first version in front of users without building a team first.'
		],
		outcomesHeading: 'What you leave with',
		outcomes: [
			{
				title: 'A cut scope',
				body: 'The first version is narrowed to the smallest useful product that can create signal.'
			},
			{
				title: 'A usable product',
				body: 'The build is real enough for users, demos, sales conversations, or internal workflow validation.'
			},
			{
				title: 'A path after launch',
				body: 'You leave with the next product decisions, not just a codebase handed over without context.'
			}
		],
		processHeading: 'How the launch works',
		process: [
			{
				title: 'Shape the version',
				body: 'We turn the rough idea into a buildable scope, user flow, and launch target.'
			},
			{
				title: 'Build in one lane',
				body: 'I handle the product and implementation loop directly so decisions do not get lost between handoffs.'
			},
			{
				title: 'Launch with context',
				body: 'We package what shipped, what changed, and what should be validated next.'
			}
		],
		proofHeading: 'Relevant launch proof',
		proof: [
			{
				label: 'Founder MVP',
				title: 'Palabruno',
				body: 'A nontechnical founder moved from product idea to mobile subscriptions, web payments, and teacher workflows.',
				href: '/projects/palabruno/',
				image: palabrunoPhoto,
				imageAlt: 'Spanish reading materials with vocabulary, grammar, and pronunciation cards.'
			},
			{
				label: 'Decision MVP',
				title: 'Casamo',
				body: 'A travel decision product became a focused first version for remote workers comparing long-term stays.',
				href: '/projects/casamo/',
				image: casamoPhoto,
				imageAlt: 'Casamo homepage showing the stay search form and audit priorities over a furnished apartment.',
				imageClass: 'object-left-top'
			}
		],
		faqs: [
			{
				title: 'What if the first version should be smaller?',
				body: 'Good. The launch is meant to find the smallest useful version, not defend the largest initial idea.'
			},
			{
				title: 'Do I need a finished spec before we talk?',
				body: 'No. Bring the rough version: a workflow, idea, prototype, customer problem, or current product constraint.'
			},
			{
				title: 'What happens after the launch?',
				body: 'We use the shipped version to decide the next move. That may be iteration, handoff, or a fractional support phase.'
			}
		],
		finalHeading: 'Have a rough product idea?',
		finalBody: 'Use the call to decide whether this should become a 4-week launch, a smaller first step, or something to park.'
	},
	fractional: {
		key: 'fractional',
		path: '/fractional-product-engineering/',
		label: 'Fractional Product Engineering',
		title: 'Fractional Product Engineering',
		metaTitle: 'Fractional Product Engineering',
		description:
			'Fractional product engineering for founder-led teams that need senior product judgment, architecture decisions, UX execution, and shipping help without a full-time hire.',
		heroTitle: 'Senior product engineering without the full-time hire.',
		heroBody:
			'I work with founder-led teams that need senior product and engineering judgment around active product constraints: architecture calls, UX decisions, implementation, AI workflows, and delivery follow-through.',
		price: 'Fractional retainers',
		chooserSummary: 'For founder-led teams that need senior product engineering help without hiring full-time.',
		chooserCta: 'Explore fractional engineering',
		fitHeading: 'For teams with real product motion and a senior gap.',
		fitBody:
			'This is for teams that already have a product, customers, or a serious operating constraint, but need someone senior enough to make product and technical calls while still shipping.',
		fitSignals: [
			'Scope keeps slipping, or technical decisions are slowing the team down.',
			'You need one senior builder who can make architecture calls and ship.',
			'You have active product work where weekly judgment matters more than a one-time handoff.'
		],
		outcomesHeading: 'Where the support helps',
		outcomes: [
			{
				title: 'Clearer decisions',
				body: 'Product, UX, and architecture tradeoffs get named directly so the team can move.'
			},
			{
				title: 'Shipped improvements',
				body: 'The work stays close to implementation, not just advisory notes or strategy docs.'
			},
			{
				title: 'Less delivery drag',
				body: 'Ambiguous product work gets turned into scoped, buildable, testable steps.'
			}
		],
		processHeading: 'How the retainer works',
		process: [
			{
				title: 'Find the constraint',
				body: 'We start with the current bottleneck: product clarity, UX, architecture, team process, or implementation.'
			},
			{
				title: 'Ship against it',
				body: 'I help make the call, write the code where useful, and keep the work moving through review and release.'
			},
			{
				title: 'Leave the system stronger',
				body: 'The goal is not dependency. The product, code, and team context should get easier to operate.'
			}
		],
		proofHeading: 'Relevant fractional proof',
		proof: [
			{
				label: 'AI product platform',
				title: 'Genrupt',
				body: 'Commercial and reliability foundations helped move an AI creative platform beyond demo-stage workflows.',
				href: '/projects/genrupt/',
				image: genruptPhoto,
				imageAlt: 'E-commerce creative operations desk with packages, notes, and product materials.',
				imageClass: 'object-left-top'
			},
			{
				label: 'Fractional CTO',
				title: 'Mucho Hangouts',
				body: 'Fractional product and technical support helped stabilize foundations while the team kept shipping.',
				href: '/projects/mucho-hangouts/',
				image: muchoHangoutsPhoto,
				imageAlt: 'Mucho Hangouts product interface for social events and group discovery.'
			}
		],
		faqs: [
			{
				title: 'Is this advisory or implementation?',
				body: 'Both when useful. The value is senior judgment that stays close enough to the product and code to change the outcome.'
			},
			{
				title: 'What size team is this for?',
				body: 'Founder-led teams, small product teams, and operator-led businesses where a full-time senior hire is not the right first move.'
			},
			{
				title: 'What if the need is only short-term?',
				body: 'Then we define a tighter sprint or first phase. Fractional work should match the actual constraint, not become a default commitment.'
			}
		],
		finalHeading: 'Need senior product engineering support?',
		finalBody: 'Use the call to decide whether fractional support, a focused sprint, or a smaller diagnostic pass is the right first move.'
	}
};

export const serviceOfferList: ServiceOffer[] = [serviceOffers.mvp, serviceOffers.fractional];
