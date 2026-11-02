// Shared facts and IDs for the Berichtsheft posts, the timeline and the waitlist.
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
 * Anchor id of the free-tier waitlist per language. BerichtsheftWaitlist renders
 * it, and the 'waitlist' ctaVariant in BlogLayout links nav, sidebar and footer
 * CTAs to it, so the two can never drift apart.
 */
export const WAITLIST_ID = { de: 'kostenlos', en: 'free-version' };
