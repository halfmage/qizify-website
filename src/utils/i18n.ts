export const slugTranslationMap: Record<string, string> = {
	'/learnslice-vs-traditional-training': '/de/learnslice-vs-traditionelle-ausbildung',
	'/learnslice-vs-simpleclub': '/de/learnslice-vs-simpleclub',
	'/de/learnslice-vs-traditionelle-ausbildung': '/learnslice-vs-traditional-training',
	'/de/learnslice-vs-simpleclub': '/learnslice-vs-simpleclub',
};

export function getAlternatePath(path: string, fromLang: 'en' | 'de'): string {
	if (slugTranslationMap[path]) return slugTranslationMap[path];
	if (fromLang === 'en') return path === '/' ? '/de' : `/de${path}`;
	return path === '/de' ? '/' : path.replace(/^\/de/, '');
}
