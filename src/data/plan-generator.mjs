// Free Ausbildungsplan generator in the app (app.learnslice.com/ausbildungsplan).
// Every website link to it goes through planGeneratorUrl(), so the app can tell
// which page and placement a visitor came from: the generator carries
// utm_content on to the sign-up as utm_medium (learnslice-sme,
// components/plan-generator.tsx), with utm_source=plan-generator.

export const PLAN_GENERATOR = 'https://app.learnslice.com/ausbildungsplan';

// Occupations the generator offers (learnslice-sme lib/plan-generator.ts,
// PROGRAM_META). Update both when one is added.
export const PLAN_OCCUPATIONS = {
	de: [
		'Mechatroniker/-in',
		'Elektroniker/-in für Betriebstechnik',
		'Fachinformatiker/-in',
		'Industriekaufmann/-frau',
		'Kaufmann/-frau für Büromanagement',
	],
	en: [
		'Mechatroniker/-in (mechatronics technician)',
		'Elektroniker/-in für Betriebstechnik (industrial electrician)',
		'Fachinformatiker/-in (IT specialist)',
		'Industriekaufmann/-frau (industrial clerk)',
		'Kaufmann/-frau für Büromanagement (office management clerk)',
	],
};

export const PLAN_CTA_LABEL = { de: 'Plan in 2 Minuten erstellen', en: 'Create the plan in 2 minutes' };

/** Link to the generator. `content` is the page and placement, e.g. "ausbildungsplan-vorlage-kostenlos-box". */
export function planGeneratorUrl(content) {
	const params = new URLSearchParams({
		utm_source: 'learnslice.com',
		utm_medium: 'website',
		utm_campaign: 'plan-generator',
		utm_content: content,
	});
	return `${PLAN_GENERATOR}?${params}`;
}
