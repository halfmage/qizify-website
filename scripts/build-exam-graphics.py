#!/usr/bin/env python3
import os
from svg_lib import *   # resolved from this script's own directory (sys.path[0])

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                   "..", "public", "images", "blog") + os.sep
made = []

# ---------------------------------------------------------------- 1. bausteine
def bausteine(lang):
    de = lang == "de"
    d = Doc("Diagramm: die fünf Bausteine einer eigenen Prüfungsplattform, vom Rahmenstoffplan über Curriculum-Mapping, Fragenpool mit Taxonomiestufen, adaptive Wiederholung und Prüfungssimulation bis zum KI-Lernbegleiter auf Ihren eigenen Inhalten."
            if de else
            "Diagram: the five building blocks of a custom exam preparation platform, from the official syllabus through curriculum mapping, a tagged question bank, adaptive repetition and a mock exam to an AI tutor grounded in your own material.")
    d.head("Vom Rahmenstoffplan zur bestandenen Prüfung" if de else "From the official syllabus to a passed exam",
           "Die fünf Bausteine einer eigenen Prüfungsplattform" if de else "The five building blocks of a custom exam platform")
    d.band("Eingang: Rahmenstoffplan der IHK (7 Sachgebiete) und Ihre eigenen Kursunterlagen" if de else
           "Input: the regulator's published syllabus and your own course material")
    d.arrow()
    steps = ([("1", "Curriculum-Mapping", "Sachgebiete und Lernziele des Rahmenstoffplans werden zur Struktur der Plattform"),
              ("2", "Fragenpool mit Taxonomiestufen", "Jede Frage hängt an einem Lernziel und an der geforderten Anforderungstiefe"),
              ("3", "Adaptive Wiederholung", "Der Lernpfad priorisiert die Sachgebiete, in denen die Person noch schwach ist"),
              ("4", "Prüfungssimulation im Originalformat", "Gleiche Aufgabenzahl, gleiche Punktlogik, gleiche Zeit wie in der echten Prüfung"),
              ("5", "KI-Lernbegleiter auf Ihren Inhalten", "Erklärt Fehler mit Ihrem Kursmaterial, nicht mit Wissen aus dem offenen Internet")] if de else
             [("1", "Curriculum mapping", "The subject areas and learning objectives of the syllabus become the structure of the platform"),
              ("2", "Question bank with taxonomy levels", "Every question is tied to a learning objective and to the depth the exam demands"),
              ("3", "Adaptive repetition", "The learning path prioritises the subject areas where this learner is still weak"),
              ("4", "Mock exam in the real format", "Same task count, same scoring logic, same clock as the official exam"),
              ("5", "AI tutor grounded in your material", "Explains mistakes from your course content, not from the open internet")])
    d.steps(steps, accent_n="4")
    d.note("Ergebnis: belastbare Bestehensprognose je Teilnehmer und prüfsichere Nachweise für AZAV und Bildungsgutschein" if de else
           "Result: a defensible pass prediction per learner and audit-proof records for publicly funded training")
    return d.render(OUT + ("pruefungsplattform-bausteine-de.svg" if de else "pruefungsplattform-bausteine.svg"))

# ------------------------------------------------------------- 2. bestehensquote
def quote(lang):
    de = lang == "de"
    d = Doc("Balkendiagramm der Bestehensquoten bei IHK-Prüfungen 2024: von 54.405 Teilnehmenden an Fortbildungsprüfungen bestanden 70,9 Prozent, bei der Geprüften Schutz- und Sicherheitskraft 63,5 Prozent. Quelle: DIHK, IHK-Fortbildungsstatistik bundesweit, Berichtsjahr 2024."
            if de else
            "Bar chart of 2024 chamber exam pass rates: 70.9 percent of 54,405 candidates passed an advanced vocational examination, against 63.5 percent for the protection and security staff qualification. Source: DIHK national further-training statistics, 2024 reporting year.")
    d.head("Fast jede dritte IHK-Prüfung geht schief" if de else "Close to one chamber exam in three is failed",
           "Bestanden und nicht bestanden, Berichtsjahr 2024" if de else "Passed and failed, 2024 reporting year")
    d.bar_row("Alle IHK-Fortbildungsprüfungen" if de else "All advanced vocational exams",
              "54.405" if de else "54,405",
              [(0.709, BAR_CTX, "70,9 % bestanden" if de else "70.9% passed", INK),
               (0.291, ACCENT, "29,1 %" if de else "29.1%", INK_ON_ACC)])
    d.bar_row("Geprüfte Schutz- und Sicherheitskraft (IHK)" if de else "Protection and security staff qualification",
              "938",
              [(0.635, BAR_CTX, "63,5 % bestanden" if de else "63.5% passed", INK),
               (0.365, ACCENT, "36,5 %" if de else "36.5%", INK_ON_ACC)])
    d.legend([(BAR_CTX, "bestanden" if de else "passed"), (ACCENT, "nicht bestanden" if de else "failed")])
    d.note("Quelle: DIHK, IHK-Fortbildungsstatistik bundesweit, Berichtsjahr 2024. 38.570 von 54.405 Prüfungen bestanden; bei der Schutz- und Sicherheitskraft 596 von 938." if de else
           "Source: DIHK national further-training statistics, 2024 reporting year. 38,570 passes from 54,405 candidates; 596 from 938 for the security qualification.")
    return d.render(OUT + ("ihk-bestehensquote-de.svg" if de else "ihk-bestehensquote.svg"))

# ------------------------------------------------------------------- 3. aufbau
def aufbau(lang):
    de = lang == "de"
    d = Doc("Tabelle zum Aufbau der Sachkundeprüfung nach § 34a GewO, Teil 1 schriftlich gegen Teil 2 mündlich: 82 Multiple-Choice-Aufgaben gegenüber Situationsaufgaben in Gruppen von bis zu fünf Personen; 120 Minuten gegenüber etwa 15 Minuten; bestanden ab 60 von 120 Punkten mit Teilpunkten seit dem 1. Juli 2025, während zum mündlichen Teil nur zugelassen wird, wer den schriftlichen bestanden hat. Grundlage sind sieben Sachgebiete nach § 7 BewachV."
            if de else
            "Table of how the German section 34a security exam is structured, part 1 written against part 2 oral: 82 multiple-choice tasks against situational scenarios in groups of up to five; 120 minutes against around 15 minutes; a pass mark of 60 out of 120 points with partial credit since 1 July 2025, while only those who pass the written part are admitted to the oral one. Both rest on seven subject areas fixed in law.")
    d.head("Wie die Sachkundeprüfung § 34a GewO aufgebaut ist" if de else "How the § 34a security exam is structured",
           "Stand seit der Umstellung zum 1. Juli 2025" if de else "As it stands since the changeover on 1 July 2025")
    d.table(("", "Teil 1: schriftlich", "Teil 2: mündlich") if de else
            ("", "Part 1: written", "Part 2: oral"),
            ([("Format", "82 Aufgaben, Multiple Choice",
               "Situationsaufgaben in Gruppen von bis zu fünf Personen"),
              ("Dauer", "120 Minuten", "etwa 15 Minuten"),
              ("Bestehen", "60 von 120 Punkten, Teilpunkte seit 1. Juli 2025",
               "Zulassung nur mit bestandenem Teil 1")] if de else
             [("Format", "82 tasks, multiple choice",
               "Situational scenarios in groups of up to five"),
              ("Duration", "120 minutes", "around 15 minutes"),
              ("Passing", "60 of 120 points, partial credit since 1 July 2025",
               "Admission only with a passed part 1")]),
            widths=[96, 176, 176])
    d.band("Grundlage für beide Teile: sieben Sachgebiete nach § 7 BewachV, je Lernziel mit Taxonomiestufe im Rahmenstoffplan" if de else
           "Behind both parts: seven subject areas fixed in law, each with learning objectives and a taxonomy level")
    d.note("Die beiden Teile laufen nacheinander: zum mündlichen Teil wird nur zugelassen, wer den schriftlichen bestanden hat." if de else
           "The two parts run in sequence: only candidates who pass the written part are admitted to the oral one.")
    return d.render(OUT + ("pruefung-34a-aufbau-de.svg" if de else "pruefung-34a-aufbau.svg"))

# --------------------------------------------------------- 4. statisch vs aktiv
def statisch(lang):
    de = lang == "de"
    d = Doc("Vergleich, was ein Standard-LMS und eine eigene Plattform aus demselben Kursmaterial machen: aus Skript und Folien wird ein PDF und ein Video, gegenüber einem Lernpfad entlang des Stoffplans; aus Fragen wird ein einmaliges Quiz, gegenüber Fragen mit Lernziel und Anforderungstiefe; aus Fortschritt wird ein Häkchen, gegenüber Wiederholung dessen, was noch nicht sitzt; und für die Prüfung selbst bietet das Standard-LMS nichts, während die eigene Plattform eine Prüfungssimulation im Originalformat fährt. Die lernende Person liest, oder sie wird gefragt und korrigiert."
            if de else
            "Comparison of what a standard LMS and a platform you own each turn the same course material into: script and slides become a PDF and a video, against a path that follows the syllabus; questions become a one-off quiz, against questions each carrying an objective and a difficulty level; progress becomes a tick, against repetition of exactly what has not stuck; and for the exam itself a standard LMS offers nothing, where a platform you own runs a mock exam in the real format. The learner reads, or the learner is questioned.")
    d.head("Dieselben Inhalte, zwei sehr verschiedene Ergebnisse" if de else "The same content, two very different outcomes",
           "Ihr Material, und was die jeweilige Software daraus macht" if de else
           "Your material, and what each kind of software turns it into")
    d.matrix(("Im Standard-LMS" if de else "In a standard LMS",
              "In einer eigenen Plattform" if de else "In a platform you own"),
             ([("Skript und Folien", "ein PDF zum Herunterladen, ein Video",
                "ein Lernpfad entlang des Stoffplans"),
               ("Fragen", "ein einmaliges Quiz",
                "Lernziel und Anforderungstiefe bei jeder Frage"),
               ("Fortschritt", "ein Häkchen",
                "Wiederholung genau dessen, was noch nicht sitzt"),
               ("die Prüfung selbst", None,
                "eine Prüfungssimulation im Originalformat")] if de else
              [("script and slides", "a PDF to download, a video",
                "a path that follows the syllabus"),
               ("questions", "a one-off quiz",
                "an objective and a difficulty level on each"),
               ("progress", "a tick",
                "repetition of exactly what has not stuck"),
               ("the exam itself", None,
                "a mock exam in the real format")]),
             absent="nichts" if de else "nothing",
             foot=("Die lernende Person liest." if de else "The learner reads.",
                   "Sie wird gefragt und korrigiert." if de else "The learner is questioned."))
    d.note("In beiden Fällen bleibt das Material Ihres. Der Unterschied ist, ob es abgelegt oder benutzt wird." if de else
           "The material stays yours either way. The difference is whether it is stored or used.")
    return d.render(OUT + ("inhalte-statisch-aktiv-de.svg" if de else "inhalte-statisch-aktiv.svg"))

# ----------------------------------------------------------- 5. EU training hours
def hours():
    rows = [("Romania", 360), ("Sweden", 300), ("Bulgaria", 260), ("Poland", 245),
            ("Denmark", 222), ("Hungary", 200), ("Spain", 180), ("France", 175),
            ("Norway", 168), ("Germany", 40), ("Slovakia", 40), ("Estonia", 24)]
    d = Doc("Bar chart of the legal minimum for mandatory basic private security training by country: Romania 360 hours, Sweden 300, Bulgaria 260, Poland 245, Denmark 222, Hungary 200, Spain 180, France 175, Norway 168, Germany and Slovakia 40, Estonia 24. Source: CoESS and UNI Europa, Private Security Training in Europe, March 2026.")
    d.head("The same job, 24 mandatory hours or 360",
           "Legal minimum for basic private security training, hours, by country")
    for name, v in rows:
        d.hbar(name, v, 360, accent=(name == "Germany"), label_w=96)
    d.note("The Netherlands runs a one-year dual system instead. Longer vocational routes exist above these minimums: Spain to 400 hours, Hungary to 250, Denmark to two years.")
    d.note("Source: CoESS and UNI Europa, Private Security Training in Europe, March 2026 (EU-funded INTEL project, 26 countries surveyed).")
    return d.render(OUT + "eu-security-training-hours.svg")


for fn in (bausteine, quote, aufbau, statisch):
    for lg in ("de", "en"):
        made.append(fn(lg))
made.append(hours())
for m in made:
    print(m.split("/")[-1])
