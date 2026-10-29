// Homepage copy for / and /de lives in homepage.json, rendered by
// src/components/pages/HomePage.astro and also read by scripts/generate-llms-full.mjs.
// Study numbers are looked up by id in the research page content, so a reordered or
// missing finding fails the build instead of pairing a number with the wrong label.
import data from './homepage.json';
import de from './de.json';
import en from './en.json';

type Lang = 'de' | 'en';

const findings = { de: de.research.findings.items, en: en.research.findings.items };

function build(lang: Lang) {
	const copy = data[lang];
	const stats = copy.hero.stats.map(({ studyId, label }) => {
		const finding = findings[lang].find((item) => item.id === studyId);
		if (!finding) throw new Error(`homepage: research finding "${studyId}" missing in ${lang}.json`);
		return { value: finding.stat, label };
	});
	return {
		...copy,
		hero: { ...copy.hero, stats },
		value: { ...copy.value, lines: copy.value.lines as [string, string] },
	};
}

export const homepage = { de: build('de'), en: build('en') };
