// Wrap numeric tokens (percentages, currency, durations) in a <strong class="text-accent">
// span so amber proof points read at a glance. Input is trusted content from src/content,
// not user data, so building HTML by string concatenation is safe here.
//
// Matches: "30 %", "€20.000", "9K €", "75K €", "8–12 Std.", "4–6 Monate", "8 Wochen",
//          "12 Stunden", "100 %", "8 weeks", "50% less"
const NUMBER_RE = /(€\s?\d[\d.,]*\s?(?:K|€)?|\d+(?:[–-]\d+)?\s?(?:K\s?€|%|Stunden?|Std\.|Monate?|Wochen?|weeks?|months?|hours?|min\.?))/g;

function escapeHtml(str) {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

export function highlightNumbers(text, colorClass = 'text-accent') {
	if (!text) return '';
	const escaped = escapeHtml(text);
	return escaped.replace(NUMBER_RE, `<strong class="${colorClass} font-semibold">$1</strong>`);
}
