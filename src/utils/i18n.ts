// Re-exports the canonical EN ↔ DE page-pair helpers.
// Source of truth lives in page-pairs.mjs so astro.config.mjs and TS callers
// share a single map.
export { getAlternatePath, EN_ONLY, DE_ONLY } from './page-pairs.mjs';
