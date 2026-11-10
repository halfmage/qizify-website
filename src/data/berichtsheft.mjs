// Shared facts, IDs and links for the Berichtsheft posts, the timeline, the sign-up
// block and the free-Berichtsheft landing page.
// Dates come from the IHK pages listed in the `sources` frontmatter of
// /de/blog/ihk-berichtsheft-alternative (each with its retrieval date). Change a
// date here and the timeline follows; the MDX prose still states the dates in
// text, so search the three Berichtsheft posts for the old date too.

/** Last day the IHK "Digitales Berichtsheft" is usable, per several IHKs. */
export const IHK_SHUTDOWN_DATE = '2026-12-31';
/** New companies not activated since (IHK Hannover). */
export const IHK_NO_NEW_COMPANIES_DATE = '2025-09-22';
/** IHK Karlsruhe shut its own online portal earlier. */
export const IHK_KARLSRUHE_SHUTDOWN_DATE = '2026-06-30';
/** Date the IHK pages were last checked. */
export const BERICHTSHEFT_STATUS_DATE = '2026-11-02';

/**
 * Anchor id of the in-post sign-up block per language. BerichtsheftSignup renders
 * it, and the 'berichtsheft' ctaVariant in BlogLayout links the nav CTA to it, so
 * the two can never drift apart. The ids predate the launch (waitlist era) and stay
 * unchanged so existing links keep working.
 */
export const SIGNUP_ID = { de: 'kostenlos', en: 'free-version' };

/**
 * Free tier facts. Must match learnslice-sme lib/plan.ts (FREE_AUSBILDER_LIMIT,
 * FREE_AZUBI_LIMIT). Change them there first, then here.
 */
export const FREE_AUSBILDER_LIMIT = 1;
export const FREE_AZUBI_LIMIT = 3;

/** Shared CTA copy for every free-Berichtsheft button, block and sidebar. */
export const CTA_LABEL = { de: 'Kostenlos starten', en: 'Start for free' };
/** The free-plan limit in one sentence, wherever the offer is summarised. */
export const FREE_LIMIT_NOTE = {
	de: `Kostenlos für ${FREE_AUSBILDER_LIMIT} Ausbilder und bis zu ${FREE_AZUBI_LIMIT} Azubis. Ohne Zahlungsdaten.`,
	en: `Free for ${FREE_AUSBILDER_LIMIT} trainer and up to ${FREE_AZUBI_LIMIT} apprentices. No payment details.`,
};
/** Hero pill on the homepage and the apprenticeship page. Remove both usages when the campaign ends. */
export const ANNOUNCEMENT_LABEL = { de: 'Neu: Digitales Berichtsheft kostenlos', en: 'New: free digital training logbook' };

/** Landing page for the free Berichtsheft, per language. Registered in page-pairs.mjs. */
export const LANDING_PATH = { de: '/de/berichtsheft-kostenlos', en: '/free-training-logbook' };

const APP_SIGNUP = 'https://app.learnslice.com/sign-up';

/**
 * Sign-up link into the app with campaign parameters, so sign-ups can be traced to
 * the page they came from once the app records them. `content` is the page or
 * placement, e.g. a post slug or "landing-hero".
 */
export function signupUrl(content) {
	const params = new URLSearchParams({
		utm_source: 'learnslice.com',
		utm_medium: 'website',
		utm_campaign: 'free-berichtsheft',
		utm_content: content,
	});
	return `${APP_SIGNUP}?${params}`;
}

/** Slug for utm_content from a page path, e.g. /de/blog/berichtsheft-digital → berichtsheft-digital. */
export function pathSlug(pathname) {
	const clean = pathname.replace(/(\.html|\/)$/, '');
	return clean.split('/').filter(Boolean).pop() || 'home';
}
