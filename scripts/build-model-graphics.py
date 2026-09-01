#!/usr/bin/env python3
import os
from svg_lib import *   # resolved from this script's own directory (sys.path[0])

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                   "..", "public", "images", "blog") + os.sep
made = []


def hbar_stacked(d, name, sub, value, vmax, accent=False):
    """Model name + org on one line, bar with value beneath. Mobile-safe."""
    d.t(PAD, d.y + 13, name, T_SMALL, INK, 600)
    if sub:
        d.t(W - PAD, d.y + 13, sub, T_NOTE, MUTED, anchor="end")
    d.y += 20
    bw = (CW - 42) * (value / vmax)
    d.rect(PAD, d.y, max(round(bw, 1), 3), 16, ACCENT if accent else BAR_CTX, None, rx=4)
    d.t(PAD + bw + 8, d.y + 13, value, T_NOTE, ACCENT_LT if accent else MUTED, 600)
    d.y += 26


def score_row(d, name, sub, licence, status, ok=True):
    h = 62
    d.rect(PAD, d.y, CW, h, PANEL, ACCENT if not ok else STROKE, sw=2 if not ok else 1)
    d.t(PAD + 16, d.y + 25, name, T_BODY, INK, 600)
    d.t(W - PAD - 16, d.y + 25, status, T_SMALL, ACCENT_LT, 600, anchor="end")
    d.t(PAD + 16, d.y + 47, f"{sub} · {licence}", T_NOTE, MUTED)
    d.y += h + 8


def linechart(d, ylab, xlab, be_title, be_sub, left_lab, right_lab, s1, s1s, s2, s2s):
    T = d.y
    x0, x1, top, bot = 56, W - PAD, T + 16, T + 186
    d.t(PAD, T + 6, ylab, T_NOTE, MUTED)
    d.parts.append(f'  <path d="M{x0},{top} L{x0},{bot} L{x1},{bot}" stroke="{STROKE}" stroke-width="1.5" fill="none"/>')
    # closed API: cost scales with usage; self-hosted: flat once running
    d.parts.append(f'  <path d="M{x0},{bot-20} L{x1},{top+14}" stroke="{ACCENT}" stroke-width="2.5" fill="none"/>')
    d.parts.append(f'  <path d="M{x0},{bot-100} L{x1},{bot-112}" stroke="{BAR_CTX}" stroke-width="2.5" fill="none"/>')
    bx, by = 340, bot - 108   # where the two lines actually cross, not a guess
    d.parts.append(f'  <path d="M{bx},{by} L{bx},{bot}" stroke="{MUTED}" stroke-width="1" stroke-dasharray="3 3"/>')
    d.parts.append(f'  <circle cx="{bx}" cy="{by}" r="5.5" fill="{ACCENT_LT}"/>')
    d.t(bx - 8, by - 14, be_title, T_NOTE, ACCENT_LT, 600, anchor="end")
    d.t(x0 + 8, bot - 8, left_lab, T_NOTE, MUTED)
    d.t(x1 - 4, bot - 8, right_lab, T_NOTE, MUTED, anchor="end")
    d.y = bot + 20
    d.t(W - PAD, d.y, xlab, T_NOTE, MUTED, anchor="end")
    d.y += 20
    d.legend([(ACCENT, s1), (BAR_CTX, s2)])
    d.note(f"{s1}: {s1s}. {s2}: {s2s}.")


# ------------------------------------------------------------ hardware ladder
def ladder(de):
    d = Doc("Übersicht der Hardware-Stufen für offene Modelle: 20 bis 30 Milliarden Parameter quantisiert laufen auf einer Mittelklasse-GPU mit 24 GB für niedrige dreistellige Eurobeträge pro Monat; 120 Milliarden auf einer 80- bis 96-GB-GPU ab rund 900 Euro; 200 Milliarden und mehr auf einem Multi-GPU-Knoten im vierstelligen Bereich."
            if de else
            "Hardware ladder for open models: 20 to 30 billion parameters quantized run on one mid-range 24 GB GPU for low hundreds of euros a month; 120 billion on a single 80 to 96 GB GPU from around 900 euros; 200 billion and above on a multi-GPU node in the four figures.")
    d.head("Worauf es läuft" if de else "What it runs on",
           "Offene Modelle wurden effizient: größere Modelle, weiterhin moderate Hardware" if de else
           "Open models got efficient: bigger models, still modest hardware")
    tiers = ([("20-30B, quantisiert", ["Eine Mittelklasse-GPU: eine einzelne 24-GB-Karte", "Niedrige Hunderte Euro pro Monat"]),
              ("120B, zum Beispiel gpt-oss", ["Eine 80- bis 96-GB-GPU: ein einzelner Server", "Ab rund 900 Euro pro Monat"]),
              ("200B und mehr, größte offene Modelle", ["Multi-GPU-Knoten: acht oder mehr GPUs", "Vierstellig pro Monat"])] if de else
             [("20-30B, quantized", ["One mid-range GPU: a single 24 GB card", "Low hundreds of euros per month"]),
              ("120B, for example gpt-oss", ["One 80 to 96 GB GPU: a single server", "From around 900 euros per month"]),
              ("200B and above, largest open models", ["Multi-GPU node: eight or more GPUs", "Four figures per month"])])
    for i, (eye, rows) in enumerate(tiers):
        d.block(eye, rows, accent=(i == 0))
    d.note("EU-Anbieter: Hetzner, OVHcloud, Scaleway, IONOS. Preise sind Richtwerte, Stand 2026." if de else
           "EU providers: Hetzner, OVHcloud, Scaleway, IONOS. Prices indicative, as of 2026.")
    return d.render(OUT + ("hardware-ladder-de.svg" if de else "hardware-ladder.svg"))


# ------------------------------------------------------------- break-even chart
def breakeven(de):
    d = Doc("Liniendiagramm: Kosten einer geschlossenen API steigen mit der Nutzung pro Token, während selbst gehostete Kosten im Betrieb konstant bleiben. Der Break-even liegt illustrativ bei etwa 10 bis 50 Millionen Token pro Monat; darunter ist die API günstiger, darüber das Self-Hosting."
            if de else
            "Line chart: closed-API cost scales per token with usage while self-hosted cost stays flat once running. The illustrative crossover sits at roughly 10 to 50 million tokens per month; below it the API is cheaper, above it self-hosting is.")
    d.head("Wann sich Self-Hosting lohnt" if de else "When self-hosting starts to pay off",
           "Break-even bei etwa 10 bis 50 Mio. Token pro Monat" if de else
           "Break-even at roughly 10 to 50M tokens per month")
    linechart(d,
              "Monatliche Kosten" if de else "Monthly cost",
              "Monatliche Nutzung (Token)" if de else "Monthly usage (tokens)",
              "Break-even" if de else "break-even", "",
              "API günstiger" if de else "API cheaper",
              "Self-Hosting günstiger" if de else "self-hosting cheaper",
              "Geschlossene API" if de else "Closed API",
              "Kosten skalieren pro Token" if de else "cost scales per token",
              "Selbst gehostet" if de else "Self-hosted",
              "im Betrieb konstant" if de else "flat once running")
    d.note("Illustrativ. Der Schnittpunkt hängt von Modell, Hardware und GPU-Auslastung ab." if de else
           "Illustrative. The crossover depends on your model, your hardware, and how fully the GPUs are used.")
    return d.render(OUT + ("self-hosting-break-even-de.svg" if de else "self-hosting-break-even.svg"))


# --------------------------------------------------------------- top open models
def topmodels(de):
    rows = [("Kimi K3", "Moonshot AI", 57, 0), ("GLM-5.2 (max)", "Z AI", 51, 0),
            ("MiniMax-M3", "MiniMax", 44, 0), ("DeepSeek V4 Pro (max)", "DeepSeek", 44, 0),
            ("DeepSeek V4 Pro (high)", "DeepSeek", 43, 0), ("MiMo-V2.5-Pro", "Xiaomi", 42, 0),
            ("Kimi K2.7 Code", "Moonshot AI", 42, 0), ("Hy3", "Tencent", 41, 0),
            ("Nex-N2-Pro", "Nex AGI", 41, 0), ("Inkling", "Thinking Machines (US)", 41, 1)]
    d = Doc("Balkendiagramm der führenden offenen Modelle nach dem Artificial Analysis Intelligence Index, Stand Juli 2026. Kimi K3 führt mit 57 Punkten. Neun der zehn Modelle stammen aus China; Inkling aus den USA ist der einzige westliche Vertreter."
            if de else
            "Bar chart of the top open-weight models by Artificial Analysis Intelligence Index, as of July 2026. Kimi K3 leads on 57. Nine of the ten are Chinese-made; Inkling from the US is the only Western entry.")
    d.head("Führende offene Modelle nach Intelligenz" if de else "Top open-weight models by intelligence",
           "Artificial Analysis Intelligence Index, offene Gewichte, Stand Juli 2026" if de else
           "Artificial Analysis Intelligence Index, open weights, as of July 2026")
    for name, org, val, west in rows:
        hbar_stacked(d, name, org, val, 57, accent=bool(west))
    d.legend([(BAR_CTX, "Aus China" if de else "Chinese-made"), (ACCENT, "Westlich" if de else "Western")])
    d.note("Neun der zehn führenden offenen Modelle stammen aus China; Inkling (US) ist der einzige westliche Vertreter." if de else
           "Nine of the top ten open models are Chinese-made. Inkling (US) is the only Western entry.")
    d.note("Quelle: Artificial Analysis Intelligence Index, offene Gewichte, Stand Juli 2026 (artificialanalysis.ai). Die Rangfolge ändert sich laufend." if de else
           "Source: Artificial Analysis Intelligence Index, open weights, as of July 2026 (artificialanalysis.ai). Rankings shift over time.")
    return d.render(OUT + ("top-open-models-intelligence-de.svg" if de else "top-open-models-intelligence.svg"))


# ----------------------------------------------------------------- RAG vs LoRA
def raglora(de):
    d = Doc("Diagramm: zwei Schichten machen aus einem offenen Basismodell Ihre eigene KI. Retrieval (RAG) antwortet aus Ihren eigenen Inhalten und ändert, was das Modell weiß. Fine-Tuning (LoRA) übernimmt Ihren Stil, Ihre Formate und Aufgaben und ändert, wie sich das Modell verhält. Beide setzen auf einem gemeinsamen offenen Basismodell auf."
            if de else
            "Diagram: two layers turn an open base model into AI that is yours. Retrieval (RAG) answers from your own content and changes what the model knows. Fine-tuning (LoRA) takes on your style, formats and tasks and changes how it behaves. Both sit on one shared open base model.")
    d.head("Wie aus einem Modell Ihre KI wird" if de else "How a generic model becomes your AI",
           "Zwei Schichten machen aus einem offenen Basismodell Ihre eigene KI" if de else
           "Two layers turn an open base model into AI that is yours")
    d.band("Eingang: Ihre Inhalte und Dokumente, Ihr Ton, Ihre Formate und Aufgaben" if de else
           "Input: your content and documents, your tone, your formats and tasks")
    d.arrow()
    d.block("Retrieval (RAG)",
            ["Antwortet aus Ihren eigenen Inhalten", "Ändert, was das Modell weiß"] if de else
            ["Answers from your own content", "Changes what the model knows"], accent=True)
    d.block("Fine-Tuning (LoRA)" if de else "Fine-tuning (LoRA)",
            ["Ihr Stil, Ihre Formate und Aufgaben", "Ändert, wie sich das Modell verhält"] if de else
            ["Your style, your formats and tasks", "Changes how the model behaves"])
    d.arrow()
    d.band("Beide setzen auf einem gemeinsamen offenen Basismodell auf und ergeben Ihre eigene KI" if de else
           "Both sit on one shared open base model and add up to your own custom AI", accent=True)
    d.note("Ein gemeinsames Basismodell, je Kunde ein LoRA-Adapter und ein RAG-Index: personalisierte KI, Daten getrennt." if de else
           "One shared base, a per-client LoRA adapter and a per-client RAG index: personalized AI, with each client's data kept separate.")
    return d.render(OUT + ("rag-lora-personalization-de.svg" if de else "rag-lora-personalization.svg"))


# ------------------------------------------------------------------- scorecard
def scorecard(de):
    rows = ([("Kimi", "Moonshot AI · China", "Modified MIT", "✓ EU-hostbar", True),
             ("DeepSeek", "DeepSeek · China", "MIT", "✓ EU-hostbar", True),
             ("Qwen", "Alibaba · China", "Apache 2.0", "✓ EU-hostbar", True),
             ("Mistral", "Mistral AI · Frankreich (EU)", "Apache 2.0", "✓ EU-hostbar", True),
             ("gpt-oss", "OpenAI · USA", "Apache 2.0", "✓ EU-hostbar", True),
             ("Gemma", "Google · USA", "Gemma-Lizenz", "✓ EU-hostbar", True),
             ("Llama", "Meta · USA", "Community-Lizenz", "⚠ Eingeschränkt (EU)", False)] if de else
            [("Kimi", "Moonshot AI · China", "Modified MIT", "✓ EU-hostable", True),
             ("DeepSeek", "DeepSeek · China", "MIT", "✓ EU-hostable", True),
             ("Qwen", "Alibaba · China", "Apache 2.0", "✓ EU-hostable", True),
             ("Mistral", "Mistral AI · France (EU)", "Apache 2.0", "✓ EU-hostable", True),
             ("gpt-oss", "OpenAI · US", "Apache 2.0", "✓ EU-hostable", True),
             ("Gemma", "Google · US", "Gemma licence", "✓ EU-hostable", True),
             ("Llama", "Meta · US", "Community licence", "⚠ Restricted for EU firms", False)])
    d = Doc("Übersicht der Lizenzen offener Modelle und ihrer kommerziellen EU-Nutzung: Kimi, DeepSeek, Qwen, Mistral, gpt-oss und Gemma sind in der EU selbst hostbar; Llama unterliegt für EU-Unternehmen Einschränkungen."
            if de else
            "Licence overview for open models and their EU commercial use: Kimi, DeepSeek, Qwen, Mistral, gpt-oss and Gemma are self-hostable in the EU; Llama is restricted for EU firms.")
    d.head("Welche offenen Modelle können Sie in der EU selbst hosten?" if de else
           "Which open models can you self-host in the EU?",
           "Lizenz und kommerzielle EU-Nutzung für die Modelle in diesem Leitfaden" if de else
           "Licence and EU commercial use for the models in this guide")
    for name, sub, lic, st, ok in rows:
        score_row(d, name, sub, lic, st, ok)
    d.note("Permissive Lizenzen (Apache 2.0, MIT) erlauben freies kommerzielles Self-Hosting. Bedingungen je Modellversion prüfen." if de else
           "Permissive licences (Apache 2.0, MIT) allow free commercial self-hosting. Verify terms per model version.")
    return d.render(OUT + ("eu-selfhost-scorecard-de.svg" if de else "eu-selfhost-scorecard.svg"))


for fn in (ladder, breakeven, topmodels, raglora, scorecard):
    for de in (True, False):
        made.append(fn(de))
for m in made:
    print(m.split("/")[-1])
