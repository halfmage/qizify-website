// Builds the Word downloads for the Ausbildungsplan template pair:
//   public/downloads/ausbildungsplan-vorlage.docx        (DE post)
//   public/downloads/apprenticeship-plan-template.docx   (EN post)
// The content mirrors the CopyBlock template in both posts; keep them in sync.
// Run: npm i --no-save docx && node scripts/build-plan-template-docx.cjs

const fs = require('fs');
const path = require('path');
const {
	Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType,
	ShadingType, BorderStyle, AlignmentType, HeadingLevel, Footer, PageNumber,
	LevelFormat, TableLayoutType,
} = require('docx');

const ACCENT = '1F6F5C';
const FIELD = 'F2F5F4';
const MUTED = '6B7280';
const BORDER = { style: BorderStyle.SINGLE, size: 4, color: 'C9CFCD' };
const BORDERS = { top: BORDER, bottom: BORDER, left: BORDER, right: BORDER };
const NO_BORDER = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const CONTENT_WIDTH = 9638; // A4 minus 2 cm margins

const t = {
	de: {
		file: 'ausbildungsplan-vorlage.docx',
		title: 'Betrieblicher Ausbildungsplan',
		subtitle: 'nach § 14 Absatz 1 Nummer 1 BBiG, Anlage zum Ausbildungsvertrag',
		howto: 'So nutzen Sie die Vorlage: Graue Felder ausfüllen, Beispielzeilen in eckigen Klammern ersetzen, nicht benötigte Zeilen löschen. Weitere Zeilen fügen Sie in Word mit Rechtsklick > Einfügen > Zeilen unterhalb ein.',
		master: [
			['Ausbildungsbetrieb', '[Name, Anschrift]'],
			['Ausbildungsberuf', '[Bezeichnung nach Ausbildungsordnung]'],
			['Auszubildende/r', '[Name, Geburtsdatum]'],
			['Ausbildungsdauer', '[X Jahre, Beginn/Ende]'],
			['Ausbildende/r', '[Name, Funktion]'],
			['Verantwortliche/r Ausbilder/in', '[Name, Qualifikation/AEVO]'],
			['Erstellt am / Version', '[Datum] / [X]'],
		],
		s1: '1. Ausbildungsrahmenplan',
		s1text: 'Übernommen aus der Ausbildungsordnung des Berufs [Bezeichnung], BGBl. Teil I, vom [Datum]. Fachlicher Rahmen: [Link oder Fundstelle].',
		s2: '2. Sachliche Gliederung',
		s2head: ['Nr.', 'Kompetenzbereich', 'Lerninhalte', 'Zeitrahmen (Wochen)'],
		s2rows: [
			['1.1', '[z. B. Betrieb und Arbeitsorganisation]', '[Einführung, Datenschutz, Arbeitssicherheit]', '4'],
			['1.2', '[Fachkompetenz A]', '[Teilkompetenz 1, Teilkompetenz 2, …]', '12'],
			['2.1', '[Fachkompetenz B]', '[…]', '10'],
		],
		s3: '3. Zeitliche Gliederung',
		s3head: ['Jahr', 'Halbjahr', 'Inhalte (Kompetenzbereich)', 'Einsatzort/Abteilung', 'Verantwortlich'],
		s3rows: [
			['1', '1', '1.1, 1.2', '[Abteilung]', '[Name]'],
			['1', '2', '2.1', '[Abteilung]', '[Name]'],
			['2', '1', '[…]', '[…]', '[…]'],
			['2', '2', '[…]', '[…]', '[…]'],
			['3', '1', '[…]', '[…]', '[…]'],
			['3', '2', 'Prüfungsvorbereitung', 'Zentrale Ausbildung', '[Name]'],
		],
		s4: '4. Überbetriebliche Lehrgänge und Berufsschule',
		s4head: ['Block', 'Inhalt', 'Zeitraum', 'Ort'],
		s4rows: [['ÜLU-Block 1', '[Thema]', '[Datum]', '[HWK/IHK]'], ['Berufsschule', '[Blockunterricht/Teilzeit]', '[Zeitraum]', '[Schule]']],
		s5: '5. Lern- und Leistungskontrollen',
		s5head: ['Kontrolle', 'Datum', 'Verantwortlich'],
		s5rows: [
			['Probezeit-Bewertung nach § 20 BBiG', '', ''],
			['Beurteilungsgespräch nach 6 Monaten', '', ''],
			['IHK-Zwischenprüfung bzw. Abschlussprüfung Teil 1', '', ''],
			['Jährliches Beurteilungsgespräch', '', ''],
			['IHK-Abschlussprüfung bzw. Teil 2', '', ''],
		],
		s6: '6. Verantwortlichkeiten',
		s6head: ['Rolle', 'Name', 'Aufgabe'],
		s6rows: [
			['Ausbildende/r (Betrieb)', '', 'Verantwortet die Gesamtausbildung nach § 14 BBiG'],
			['Ausbilder/in', '', 'Fachliche und persönliche Betreuung'],
			['Ausbildungsbeauftragte/r (Abteilung)', '', 'Fachliche Anleitung in der Abteilung'],
			['Personal/HR', '', 'Vertragliche und organisatorische Betreuung'],
		],
		s7: '7. Anlagen',
		s7items: ['Ausbildungsvertrag', 'Ausbildungsordnung des Berufs', 'Berichtsheft-Vorlage (digital oder analog)', 'Datenschutzhinweise für Auszubildende'],
		s8: '8. Änderungshistorie',
		s8head: ['Version', 'Datum', 'Änderung', 'Bearbeitet von'],
		s8rows: [['1', '[Datum]', 'Erstfassung', '[Name]']],
		sign: 'Kenntnisnahme',
		signText: 'Der Ausbildungsplan wurde besprochen und dem Auszubildenden ausgehändigt.',
		signers: ['Ort, Datum, Ausbildende/r', 'Ort, Datum, Ausbilder/in', 'Ort, Datum, Auszubildende/r'],
		signMinor: 'Bei minderjährigen Auszubildenden zusätzlich: gesetzliche Vertretung',
		check: 'Checkliste: Ist der Plan einsatzbereit?',
		checkIntro: 'Wer zwei oder mehr Punkte nicht abhaken kann, hat formal einen Plan, aber keinen, der die Ausbildung wirklich steuert.',
		checkItems: [
			'Ausbildungsrahmenplan stimmt mit der aktuell geltenden Fassung der Ausbildungsordnung überein',
			'Sachliche und zeitliche Gliederung sind lückenlos, kein Kompetenzbereich ist unbesetzt',
			'Jeder Zeitraum ist einer Abteilung und einem Verantwortlichen zugeordnet',
			'Überbetriebliche Lehrgänge sind mit konkreten Terminen eingeplant',
			'IHK-Zwischen- und Abschlussprüfung sind als Meilensteine markiert',
			'Der Plan ist für den jeweiligen Azubi personalisiert (Vorwissen, Rotationen, individuelle Anforderungen)',
			'Datenschutz- und Berichtsheftpflichten sind erwähnt',
			'Der Plan liegt dem Azubi ausgehändigt vor, nicht nur in der Personalakte',
			'Das Dokument ist versioniert: jede Änderung hat ein Datum und einen Bearbeiter',
		],
		footer: 'Kostenlose Vorlage von LearnSlice · learnslice.com/de/blog/ausbildungsplan-vorlage-kostenlos · Keine Rechtsberatung',
		page: 'Seite ',
		of: ' von ',
	},
	en: {
		file: 'apprenticeship-plan-template.docx',
		title: 'Company Apprenticeship Plan',
		subtitle: 'under § 14 paragraph 1 number 1 BBiG, annex to the apprenticeship contract',
		howto: 'How to use this template: fill in the grey fields, replace the sample rows in square brackets and delete rows you do not need. To add rows in Word, right-click a row > Insert > Rows below.',
		master: [
			['Training company', '[Name, address]'],
			['Apprenticeship profession', '[As defined in the training ordinance]'],
			['Apprentice', '[Name, date of birth]'],
			['Duration', '[X years, start/end]'],
			['Training employer', '[Name, function]'],
			['Responsible trainer', '[Name, AEVO qualification]'],
			['Created / version', '[Date] / [X]'],
		],
		s1: '1. Training Framework Plan',
		s1text: 'Taken from the training ordinance for [profession], Federal Law Gazette Part I, dated [date]. Technical framework: [link or reference].',
		s2: '2. Factual Structure',
		s2head: ['No.', 'Competency area', 'Learning content', 'Timeframe (weeks)'],
		s2rows: [
			['1.1', '[e.g. Company and work organization]', '[Introduction, data protection, workplace safety]', '4'],
			['1.2', '[Technical competency A]', '[Sub-skill 1, sub-skill 2, …]', '12'],
			['2.1', '[Technical competency B]', '[…]', '10'],
		],
		s3: '3. Temporal Structure',
		s3head: ['Year', 'Half-year', 'Content (competency area)', 'Location/department', 'Responsible'],
		s3rows: [
			['1', '1', '1.1, 1.2', '[Department]', '[Name]'],
			['1', '2', '2.1', '[Department]', '[Name]'],
			['2', '1', '[…]', '[…]', '[…]'],
			['2', '2', '[…]', '[…]', '[…]'],
			['3', '1', '[…]', '[…]', '[…]'],
			['3', '2', 'Exam preparation', 'Central training', '[Name]'],
		],
		s4: '4. Inter-Company Training (ÜLU) and Vocational School',
		s4head: ['Block', 'Content', 'Timeframe', 'Location'],
		s4rows: [['ÜLU block 1', '[Topic]', '[Date]', '[Chamber location]'], ['Vocational school', '[Block or part-time]', '[Period]', '[School]']],
		s5: '5. Learning and Performance Reviews',
		s5head: ['Review', 'Date', 'Responsible'],
		s5rows: [
			['Probation assessment under § 20 BBiG', '', ''],
			['Assessment meeting after 6 months', '', ''],
			['IHK interim exam or final exam part 1', '', ''],
			['Annual performance review', '', ''],
			['IHK final exam or part 2', '', ''],
		],
		s6: '6. Responsibilities',
		s6head: ['Role', 'Name', 'Task'],
		s6rows: [
			['Training employer (company)', '', 'Overall responsibility under § 14 BBiG'],
			['Trainer', '', 'Technical and personal supervision'],
			['Department-level instructor', '', 'On-the-job guidance in the department'],
			['HR', '', 'Contract and organizational support'],
		],
		s7: '7. Annexes',
		s7items: ['Apprenticeship contract', 'Training ordinance for the profession', 'Training logbook template (digital or analog)', 'Data protection notice for apprentices'],
		s8: '8. Change Log',
		s8head: ['Version', 'Date', 'Change', 'Edited by'],
		s8rows: [['1', '[Date]', 'First version', '[Name]']],
		sign: 'Acknowledgement',
		signText: 'The apprenticeship plan was discussed with the apprentice and handed over.',
		signers: ['Place, date, training employer', 'Place, date, trainer', 'Place, date, apprentice'],
		signMinor: 'For apprentices under 18, also: legal guardian',
		check: 'Checklist: Is the Plan Ready to Use?',
		checkIntro: 'If you cannot tick two or more items, you have a plan on paper, but not one that actually steers the training.',
		checkItems: [
			'The framework plan matches the currently valid version of the training ordinance',
			'Factual and temporal structure have no gaps; no competency area is left unassigned',
			'Every period is assigned to a department and a responsible person',
			'Inter-company training is scheduled with concrete dates',
			'IHK interim and final exams are marked as milestones',
			'The plan is personalized for the apprentice (prior knowledge, rotations, individual needs)',
			'Data protection and training logbook duties are mentioned',
			'The apprentice has a copy, not just the HR file',
			'The document is versioned: every change has a date and an editor',
		],
		footer: 'Free template by LearnSlice · learnslice.com/blog/apprenticeship-plan-template-free · Not legal advice',
		page: 'Page ',
		of: ' of ',
	},
};

const run = (text, opts = {}) => {
	const placeholder = /^\[.*\]$|^…$|^\[…\]$/.test(text.trim());
	return new TextRun({ text, color: placeholder ? MUTED : undefined, ...opts });
};
const para = (text, opts = {}) => new Paragraph({ children: [run(text, opts.run)], spacing: { after: 120 }, ...opts.p });
const heading = (text) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(text)] });

function cell(text, width, { header = false, field = false } = {}) {
	return new TableCell({
		width: { size: width, type: WidthType.DXA },
		borders: BORDERS,
		shading: header
			? { type: ShadingType.CLEAR, color: 'auto', fill: ACCENT }
			: field ? { type: ShadingType.CLEAR, color: 'auto', fill: FIELD } : undefined,
		margins: { top: 80, bottom: 80, left: 120, right: 120 },
		children: [new Paragraph({ children: [header ? new TextRun({ text, bold: true, color: 'FFFFFF' }) : run(text)] })],
	});
}

// Data table: header row, sample rows, plus empty rows to fill in.
function table(widths, head, rows, emptyRows = 2) {
	const blank = widths.map(() => '');
	const all = [...rows, ...Array(emptyRows).fill(blank)];
	return new Table({
		width: { size: CONTENT_WIDTH, type: WidthType.DXA },
		columnWidths: widths,
		layout: TableLayoutType.FIXED,
		rows: [
			new TableRow({ tableHeader: true, children: head.map((h, i) => cell(h, widths[i], { header: true })) }),
			...all.map((r) => new TableRow({ cantSplit: true, children: r.map((v, i) => cell(v, widths[i], { field: true })) })),
		],
	});
}

function masterTable(rows) {
	const widths = [3400, CONTENT_WIDTH - 3400];
	return new Table({
		width: { size: CONTENT_WIDTH, type: WidthType.DXA },
		columnWidths: widths,
		layout: TableLayoutType.FIXED,
		rows: rows.map(([label, value]) => new TableRow({
			children: [
				new TableCell({
					width: { size: widths[0], type: WidthType.DXA }, borders: BORDERS,
					margins: { top: 80, bottom: 80, left: 120, right: 120 },
					children: [new Paragraph({ children: [new TextRun({ text: label, bold: true })] })],
				}),
				cell(value, widths[1], { field: true }),
			],
		})),
	});
}

function signatures(labels) {
	const gap = 400;
	const w = Math.floor((CONTENT_WIDTH - gap * (labels.length - 1)) / labels.length);
	const widths = labels.flatMap((_, i) => (i ? [gap, w] : [w]));
	widths[widths.length - 1] += CONTENT_WIDTH - widths.reduce((a, b) => a + b, 0);
	const none = { top: NO_BORDER, bottom: NO_BORDER, left: NO_BORDER, right: NO_BORDER };
	return new Table({
		width: { size: CONTENT_WIDTH, type: WidthType.DXA },
		columnWidths: widths,
		layout: TableLayoutType.FIXED,
		rows: [new TableRow({
			children: widths.map((width, i) => new TableCell({
				width: { size: width, type: WidthType.DXA },
				borders: i % 2 || !labels[i / 2] ? none : { ...none, top: { style: BorderStyle.SINGLE, size: 6, color: '374151' } },
				margins: { top: 60, left: 0, right: 0 },
				children: [new Paragraph({ children: i % 2 || !labels[i / 2] ? [] : [new TextRun({ text: labels[i / 2], size: 18, color: MUTED })] })],
			})),
		})],
	});
}

const spacer = (after = 120) => new Paragraph({ spacing: { after }, children: [] });

function build(lang) {
	const c = t[lang];
	const children = [
		new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun(c.title)] }),
		new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: c.subtitle, color: MUTED })] }),
		new Paragraph({
			spacing: { after: 240 },
			shading: { type: ShadingType.CLEAR, color: 'auto', fill: 'EAF3F0' },
			border: { left: { style: BorderStyle.SINGLE, size: 18, color: ACCENT, space: 8 } },
			children: [new TextRun({ text: c.howto, size: 19 })],
		}),
		masterTable(c.master),
		heading(c.s1), para(c.s1text),
		heading(c.s2), table([900, 2900, 4038, 1800], c.s2head, c.s2rows, 3),
		heading(c.s3), table([1300, 1100, 2738, 2500, 2000], c.s3head, c.s3rows, 0),
		heading(c.s4), table([2000, 3638, 2000, 2000], c.s4head, c.s4rows, 2),
		heading(c.s5), table([5038, 2000, 2600], c.s5head, c.s5rows, 1),
		heading(c.s6), table([3200, 2400, 4038], c.s6head, c.s6rows, 1),
		heading(c.s7),
		...c.s7items.map((item) => new Paragraph({ numbering: { reference: 'boxes', level: 0 }, children: [new TextRun(item)] })),
		heading(c.s8), table([1100, 1700, 4638, 2200], c.s8head, c.s8rows, 3),
		new Paragraph({ heading: HeadingLevel.HEADING_2, pageBreakBefore: true, children: [new TextRun(c.sign)] }), para(c.signText),
		spacer(600), signatures(c.signers),
		spacer(600), signatures([c.signMinor, '', '']),
		spacer(240),
		heading(c.check), para(c.checkIntro, { run: { color: MUTED } }),
		...c.checkItems.map((item) => new Paragraph({ numbering: { reference: 'boxes', level: 0 }, spacing: { after: 100 }, children: [new TextRun(item)] })),
	];

	return new Document({
		creator: 'LearnSlice',
		title: c.title,
		styles: {
			default: { document: { run: { font: 'Arial', size: 20 } } },
			paragraphStyles: [
				{ id: 'Title', name: 'Title', basedOn: 'Normal', run: { size: 40, bold: true, color: '111827' }, paragraph: { spacing: { after: 60 } } },
				{ id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 26, bold: true, color: ACCENT }, paragraph: { spacing: { before: 320, after: 120 }, keepNext: true, outlineLevel: 1 } },
			],
		},
		numbering: {
			config: [{
				reference: 'boxes',
				levels: [{ level: 0, format: LevelFormat.BULLET, text: '☐', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 400, hanging: 400 } }, run: { font: 'Segoe UI Symbol' } } }],
			}],
		},
		sections: [{
			properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } } },
			footers: {
				default: new Footer({
					children: [new Paragraph({
						alignment: AlignmentType.CENTER,
						children: [
							new TextRun({ text: `${c.footer} · ${c.page}`, size: 16, color: MUTED }),
							new TextRun({ children: [PageNumber.CURRENT], size: 16, color: MUTED }),
							new TextRun({ text: c.of, size: 16, color: MUTED }),
							new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 16, color: MUTED }),
						],
					})],
				}),
			},
			children,
		}],
	});
}

const outDir = path.join(__dirname, '..', 'public', 'downloads');
fs.mkdirSync(outDir, { recursive: true });
for (const lang of Object.keys(t)) {
	Packer.toBuffer(build(lang)).then((buf) => {
		fs.writeFileSync(path.join(outDir, t[lang].file), buf);
		console.log(`wrote public/downloads/${t[lang].file}`);
	});
}
