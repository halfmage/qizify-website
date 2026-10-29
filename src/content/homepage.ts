// Homepage copy for / and /de, rendered by src/components/pages/HomePage.astro.
// Study numbers come from the research page content so the two never drift apart.
import de from './de.json';
import en from './en.json';

const deStudy = de.research.findings.items;
const enStudy = en.research.findings.items;

export const homepage = {
	de: {
		path: '/de',
		title: 'KI-Lernplattform mit persönlichem KI-Tutor | LearnSlice',
		description: 'LearnSlice macht aus Ihren Inhalten und Zielen einen persönlichen KI-Tutor für jede Person: Lernpfad, Jobsimulationen, Quizze, Analytics. Server in Deutschland.',
		ctaLabel: 'Kostenlose Demo buchen',
		hero: {
			eyebrow: 'KI-Lernplattform',
			headline: 'Jeder Mensch verdient\neinen persönlichen Tutor.',
			subheadline: 'Für Azubis, neue Mitarbeitende und Ihr ganzes Team: LearnSlice macht aus Ihren Inhalten einen Tutor, der jede Person zu ihrem Ziel führt. Rund um die Uhr.',
			ctaSecondary: 'Demo live ausprobieren',
			stats: [
				{ value: deStudy[0].stat, label: 'der Antworten mit Quelle' },
				{ value: deStudy[1].stat, label: 'erreichten nahezu volles Verständnis' },
				{ value: deStudy[2].stat, label: 'fanden ihr Lerntempo passend' },
			],
			statsNote: 'Studie mit der FH Dortmund, 50 Studierende',
			statsNoteHref: '/de/forschung',
			trustLine: '30+ Unternehmen · DSGVO-konform betrieben · Server in Deutschland',
		},
		value: {
			label: 'Das Ergebnis',
			lines: ['Lernende, die liefern.', 'Führungskräfte, die Fortschritt sehen.'] as [string, string],
			sentence: 'Ein persönlicher KI-Tutor für jede Person, gebaut aus Ihren Inhalten und Zielen.',
		},
		features: {
			badge: 'Was ein guter Tutor tut',
			headline: 'Ein guter Tutor beantwortet nicht nur Fragen.',
			items: [
				{ icon: 'hugeicons:target-02', title: 'Kennt das Ziel.', description: 'Aus Ihren Inhalten und dem Ziel jeder Person entsteht ein eigener Lernpfad, der sich mit jedem Schritt anpasst.' },
				{ icon: 'hugeicons:ai-chat-02', title: 'Ist da, wenn man ihn braucht.', description: 'Antworten rund um die Uhr, jede mit Quelle aus Ihren Unterlagen.' },
				{ icon: 'hugeicons:game-controller-01', title: 'Lässt üben.', description: 'Jobsimulationen und Quizze aus dem echten Arbeitsalltag, mit sofortigem Feedback.' },
				{ icon: 'hugeicons:analytics-up', title: 'Weiß, wo jemand steht.', description: 'Analytics zeigen Lernenden, Ausbildern und Führungskräften den Fortschritt und wo es hakt.' },
			],
		},
		companions: {
			id: 'begleiter',
			label: 'Begleiter',
			headline: 'Ein Tutor für jedes Ziel',
			subheadline: 'Alle Begleiter laufen auf derselben Plattform. Starten Sie mit einem fertigen Begleiter oder mit einem, der auf Ihr Thema zugeschnitten ist.',
			items: [
				{
					status: 'Einsatzbereit',
					title: 'KI-Tutor für die Ausbildung',
					body: 'IHK-Prüfungsvorbereitung, Einarbeitung und Upskilling für Azubis, mit den Inhalten ihres Ausbildungsberufs und Ihrem Firmenwissen.',
					image: '/images/solutions/learnslice-analytics.webp',
					imageAlt: 'Lern-Analytics im KI-Tutor: Beherrschungsquote, Trefferquote und Fortschritt pro Thema',
					href: '/de/ki-tutor-ausbildung',
					linkLabel: 'Zum KI-Tutor für die Ausbildung',
				},
				{
					status: 'Beispiel aus einem Kundenprojekt',
					title: 'Finanz-Begleiter',
					body: 'Finanzbildung für junge Menschen: ein Finanz-Check und geführte Lernprogramme, unter der Marke eines Partners.',
					image: '/images/solutions/financial-companion.webp',
					imageAlt: 'Finanz-Begleiter mit Finanz-Check und Lernprogramm',
					href: '#demo-request',
					linkLabel: 'Ähnlichen Begleiter besprechen',
				},
				{
					status: 'In Entwicklung',
					title: 'Gründer-Begleiter',
					body: 'Begleitet Gründerinnen und Gründer Schritt für Schritt auf dem Weg zum eigenen Unternehmen.',
					image: '/images/solutions/founder-companion-de.webp',
					imageAlt: 'Gründer-Begleiter mit Modi für Pitch Deck, Finanzplan, Businessplan und Gründungsschritte',
					href: '#demo-request',
					linkLabel: 'Interesse melden',
				},
				{
					status: 'Für Ihr Thema',
					title: 'Ihr eigener Begleiter',
					body: 'Ihr Thema, Ihre Inhalte, Ihre Marke: Wir richten den Begleiter auf Ihre Ziele und Ihre Lernenden aus.',
					image: '/images/solutions/custom-companion-de.webp',
					imageAlt: 'Eigener Begleiter: Inhalte hochladen, Ziel festlegen, Marke wählen, mit Vorschau des fertigen Tutors',
					href: '#demo-request',
					linkLabel: 'Ihr Thema besprechen',
				},
			],
		},
		steps: {
			label: 'So starten Sie',
			headline: 'In drei Schritten zum eigenen Tutor',
			items: [
				{ title: 'Demo und Ziel', body: 'In 30 Minuten zeigen wir Ihnen die Plattform und klären Ihr Ziel, Ihre Lernenden und Ihre Inhalte.' },
				{ title: 'Pilot zum Festpreis', body: '10 Wochen mit Ihren Lernenden und Ihren Inhalten, zu einem festen Preis und mit vorher vereinbarten Zielen.' },
				{ title: 'Einsatz im Alltag', body: 'Danach läuft der Tutor per Lizenz weiter: auf Servern in Deutschland, auf einem dedizierten EU-Server oder bei Ihnen.' },
			],
		},
		// The data-protection answer (faq item with id "data-protection" in de.json) goes between these.
		faqBefore: [
			{ question: 'Was ist LearnSlice?', answer: 'LearnSlice ist eine KI-Lernplattform. Sie macht aus Ihren Inhalten und Zielen einen persönlichen Tutor für jede Person: mit eigenem Lernpfad, Jobsimulationen und Quizzen, Antworten rund um die Uhr und Analytics für Verantwortliche.' },
			{ question: 'Ist das nur ein Chatbot?', answer: 'Nein. Der Chat ist einer von vier Bausteinen. Dazu kommen der persönliche Lernpfad, Übungen in Jobsimulationen und Quizzen sowie Analytics, die Fortschritt und Lücken sichtbar machen.' },
			{ question: 'Ersetzt LearnSlice unser LMS?', answer: 'Nein. LearnSlice läuft eigenständig oder ergänzt Ihr bestehendes LMS. Sie müssen nichts ablösen, um zu starten.' },
			{ question: 'Woher kommen die Inhalte?', answer: 'Aus Ihren Unterlagen, zum Beispiel Handbüchern, Prozessbeschreibungen oder Schulungsmaterial. Für die Ausbildung sind prüfungsrelevante Inhalte bereits enthalten. Jede Antwort verweist auf die Stelle, aus der sie stammt.' },
		],
		faqAfter: [
			{ question: 'Was kostet LearnSlice?', answer: 'Sie starten mit einem Pilot zu einem festen Preis. Danach zahlen Sie eine jährliche Lizenz pro Person, Support ist inklusive. Individuelle Anpassungen oder Integrationen kalkulieren wir vorab. Den Preis für Ihre Teamgröße nennen wir Ihnen in der Demo.' },
			{ question: 'Was bedeutet die KI-Verordnung für uns?', answer: 'LearnSlice zeigt zu jeder Antwort die Quelle, Ausbilder können Inhalte freigeben, und die Daten bleiben in der EU. Welche Pflichten der KI-Verordnung für Ihren konkreten Einsatz gelten, klären Sie bitte mit Ihrer Rechtsberatung. Diese Angaben sind allgemeine Informationen und keine Rechtsberatung.' },
		],
		cta: {
			label: 'Für Ausbildung, HR und Weiterbildung',
			headline: 'Wie sähe Ihr persönlicher Tutor aus?',
			subheadline: 'In 30 Minuten zeigen wir Ihnen die Plattform an Ihrem Thema. Danach wissen Sie, ob ein Pilot zu Ihnen passt.',
			note: 'Unser Team begleitet Sie vom ersten Gespräch bis zum Einsatz im Alltag.',
		},
	},
	en: {
		path: '/',
		title: 'AI Learning Platform with a Personal AI Tutor | LearnSlice',
		description: 'LearnSlice turns your content and goals into a personal AI tutor for every learner: learning path, job simulations, quizzes and analytics. Hosted in Germany.',
		ctaLabel: 'Book a free demo',
		hero: {
			eyebrow: 'AI learning platform',
			headline: 'Every learner deserves\na personal tutor.',
			subheadline: 'For apprentices, new hires and your whole team: LearnSlice turns your content into a tutor that takes every learner to their goal. 24/7.',
			ctaSecondary: 'Try the live demo',
			stats: [
				{ value: enStudy[0].stat, label: 'of answers cite a source' },
				{ value: enStudy[1].stat, label: 'reached near-complete mastery' },
				{ value: enStudy[2].stat, label: 'found the learning pace right' },
			],
			statsNote: 'Study with FH Dortmund, 50 students',
			statsNoteHref: '/research',
			trustLine: '30+ companies · Run GDPR-compliant · Hosted in Germany',
		},
		value: {
			label: 'The outcome',
			lines: ['Learners who deliver.', 'Managers who see progress.'] as [string, string],
			sentence: 'A personal AI tutor for every learner, built from your content and goals.',
		},
		features: {
			badge: 'What a good tutor does',
			headline: "A good tutor doesn't just answer questions.",
			items: [
				{ icon: 'hugeicons:target-02', title: 'Knows the goal.', description: "Your content and each learner's goal become their own learning path, which adapts with every step." },
				{ icon: 'hugeicons:ai-chat-02', title: 'Is there when you need it.', description: 'Answers 24/7, each with a source from your documents.' },
				{ icon: 'hugeicons:game-controller-01', title: 'Lets you practise.', description: 'Job simulations and quizzes from real work, with instant feedback.' },
				{ icon: 'hugeicons:analytics-up', title: 'Knows where everyone stands.', description: 'Analytics show learners, trainers and managers the progress and where it gets stuck.' },
			],
		},
		companions: {
			id: 'companions',
			label: 'Companions',
			headline: 'A tutor for every goal',
			subheadline: 'All companions run on the same platform. Start with a ready-made companion or one tailored to your topic.',
			items: [
				{
					status: 'Ready to use',
					title: 'AI tutor for apprenticeships',
					body: 'IHK exam prep, onboarding and upskilling for apprentices, with the content of their occupation and your company knowledge.',
					image: '/images/solutions/learnslice-analytics.webp',
					imageAlt: 'Learning analytics in the AI tutor: mastery rate, accuracy and progress per topic',
					href: '/ai-tutor-apprenticeships',
					linkLabel: 'See the AI tutor for apprenticeships',
				},
				{
					status: 'Example from a client project',
					title: 'Financial companion',
					body: "Financial literacy for young people: a financial check-up and guided learning programmes, under a partner's brand.",
					image: '/images/solutions/financial-companion.webp',
					imageAlt: 'Financial companion with a financial check-up and a learning programme',
					href: '#demo-request',
					linkLabel: 'Discuss a similar companion',
				},
				{
					status: 'In development',
					title: 'Founder companion',
					body: 'Guides founders step by step on the way to their own company.',
					image: '/images/solutions/founder-companion-en.webp',
					imageAlt: 'Founder companion with modes for pitch deck, financial plan, business plan and founding steps',
					href: '#demo-request',
					linkLabel: 'Register your interest',
				},
				{
					status: 'For your topic',
					title: 'Your own companion',
					body: 'Your topic, your content, your brand: we set the companion up for your goals and your learners.',
					image: '/images/solutions/custom-companion-en.webp',
					imageAlt: 'Your own companion: upload content, set the goal, choose your brand, with a preview of the finished tutor',
					href: '#demo-request',
					linkLabel: 'Discuss your topic',
				},
			],
		},
		steps: {
			label: 'How to start',
			headline: 'Three steps to your own tutor',
			items: [
				{ title: 'Demo and goal', body: 'In 30 minutes we show you the platform and clarify your goal, your learners and your content.' },
				{ title: 'Fixed-price pilot', body: '10 weeks with your learners and your content, at a fixed price and with goals agreed up front.' },
				{ title: 'Everyday use', body: 'After that the tutor runs on a licence: on servers in Germany, on a dedicated EU server, or on yours.' },
			],
		},
		// The data-protection answer (faq item with id "data-protection" in en.json) goes between these.
		faqBefore: [
			{ question: 'What is LearnSlice?', answer: 'LearnSlice is an AI learning platform. It turns your content and goals into a personal tutor for every learner: their own learning path, job simulations and quizzes, answers 24/7, and analytics for the people responsible.' },
			{ question: 'Is it just a chatbot?', answer: 'No. Chat is one of four parts. The others are the personal learning path, practice in job simulations and quizzes, and analytics that make progress and gaps visible.' },
			{ question: 'Does LearnSlice replace our LMS?', answer: "No. LearnSlice runs on its own or alongside your existing LMS. You don't have to replace anything to get started." },
			{ question: 'Where does the content come from?', answer: 'From your documents, for example manuals, process descriptions or training material. For apprenticeships, exam-relevant content is already included. Every answer points to the passage it comes from.' },
		],
		faqAfter: [
			{ question: 'What does LearnSlice cost?', answer: 'You start with a pilot at a fixed price. After that you pay an annual licence per learner, with support included. Custom adjustments or integrations are quoted up front. We give you the price for your team size in the demo.' },
			{ question: 'What does the EU AI Act mean for us?', answer: 'LearnSlice shows the source of every answer, trainers can approve content, and data stays in the EU. Which AI Act obligations apply to your specific use is a question for your legal counsel. This is general information, not legal advice.' },
		],
		cta: {
			label: 'For training, HR and L&D',
			headline: 'What would your personal tutor look like?',
			subheadline: "In 30 minutes we show you the platform on your topic. Afterwards you'll know whether a pilot fits.",
			note: 'Our team is with you from the first call to everyday use.',
		},
	},
};
