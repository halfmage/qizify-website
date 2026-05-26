// Canonical EN ↔ DE page pair table for LearnSlice.
// Source of truth for both head-level hreflang (src/utils/i18n.ts) and
// sitemap hreflang annotations (astro.config.mjs).
//
// Paths are listed without trailing slash. The site uses trailingSlash: 'never'.

export const SITE = 'https://learnslice.com';

// EN path → DE path. Add an entry here whenever a translated counterpart exists.
// Same-slug pairs (e.g. /agencies ↔ /de/agencies) are listed explicitly too so the
// sitemap serializer has a single source of truth and is consistent with the head.
export const EN_TO_DE = {
	'/': '/de',
	'/agencies': '/de/agencies',
	'/companies': '/de/companies',
	'/schools': '/de/schools',
	'/blog': '/de/blog',
	'/imprint': '/de/imprint',
	'/privacy': '/de/privacy',
	'/terms': '/de/terms',

	'/apprenticeship-savings-calculator': '/de/ausbildungskosten-rechner',
	'/learnslice-vs-cornelsen-ecademy': '/de/learnslice-vs-cornelsen-ecademy',
	'/learnslice-vs-prozubi': '/de/learnslice-vs-prozubi',
	'/learnslice-vs-simpleclub': '/de/learnslice-vs-simpleclub',
	'/learnslice-vs-traditional-training': '/de/learnslice-vs-traditionelle-ausbildung',
	'/learnslice-vs-vocanto': '/de/learnslice-vs-vocanto',

	'/blog/ai-in-vocational-training': '/de/blog/ki-in-der-ausbildung',
	'/blog/ai-tools-vocational-training': '/de/blog/ki-tools-ausbildung',
	'/blog/apprentice-onboarding': '/de/blog/azubi-onboarding',
	'/blog/apprenticeship-plan-template-free': '/de/blog/ausbildungsplan-vorlage-kostenlos',
	'/blog/digital-training-logbook': '/de/blog/berichtsheft-digital',
	'/blog/digitize-apprenticeship-training': '/de/blog/ausbildung-digitalisieren',
	'/blog/ihk-exam-preparation-digital': '/de/blog/ihk-pruefungsvorbereitung-digital',
	'/blog/ihk-exam-tips': '/de/blog/ihk-pruefung-tipps',
	'/blog/reduce-trainer-workload': '/de/blog/ausbilder-entlasten',
	'/blog/reduce-training-costs': '/de/blog/ausbildungskosten-senken',
	'/blog/save-time-mentoring-apprentices': '/de/blog/azubi-betreuung-zeit-sparen',
	'/blog/apprenticeship-framework-plan-explained': '/de/blog/ausbildungsrahmenplan-erklaert',
};

// Pages that exist only in one language and therefore should not emit
// hreflang alternates to a counterpart that does not exist.
export const EN_ONLY = new Set([
	'/blog/private-ai-employee-onboarding',
]);

export const DE_ONLY = new Set([
	'/de/blog/ausbildungsplan-erstellen-ki',
	'/de/blog/dsgvo-konforme-ki-tools-fuer-ausbilder',
]);

const DE_TO_EN = Object.fromEntries(
	Object.entries(EN_TO_DE).map(([en, de]) => [de, en]),
);

/**
 * Look up the counterpart path for a given page path.
 * Returns null when no counterpart exists (solo-language pages).
 *
 * @param {string} path - Current page path, e.g. "/blog/ihk-exam-tips" or "/de/agencies"
 * @param {'en' | 'de'} fromLang - Language of the current page
 * @returns {string | null}
 */
export function getAlternatePath(path, fromLang) {
	if (fromLang === 'en') {
		if (EN_ONLY.has(path)) return null;
		if (EN_TO_DE[path]) return EN_TO_DE[path];
		// Fallback for any page not in the table: prepend /de
		return path === '/' ? '/de' : `/de${path}`;
	}
	if (DE_ONLY.has(path)) return null;
	if (DE_TO_EN[path]) return DE_TO_EN[path];
	// Fallback: strip /de prefix
	return path === '/de' ? '/' : path.replace(/^\/de/, '');
}

/**
 * Build the sitemap pair table keyed by absolute URL.
 * @param {string} site - Site origin, no trailing slash
 */
export function buildUrlPairs(site) {
	// Site uses trailingSlash: 'never', so root is "https://site.com" (no slash).
	const toUrl = (p) => (p === '/' ? site : site + p);
	const pairs = Object.entries(EN_TO_DE).map(([en, de]) => ({
		enUrl: toUrl(en),
		deUrl: toUrl(de),
	}));
	const map = new Map();
	for (const pair of pairs) {
		map.set(pair.enUrl, pair);
		map.set(pair.deUrl, pair);
	}
	return map;
}
