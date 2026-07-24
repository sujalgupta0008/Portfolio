from pathlib import Path
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

OUT_DIR = Path(__file__).resolve().parent.parent / "assets"
OUT_DIR.mkdir(exist_ok=True)
OUT_PATH = OUT_DIR / "Sujal_Gupta_Resume.pdf"

styles = getSampleStyleSheet()
name_style = ParagraphStyle("Name", parent=styles["Title"], fontSize=22, textColor=colors.HexColor("#0f172a"))
role_style = ParagraphStyle("Role", parent=styles["Normal"], fontSize=12, textColor=colors.HexColor("#3B82F6"), spaceAfter=10)
h2 = ParagraphStyle("H2", parent=styles["Heading2"], fontSize=13, textColor=colors.HexColor("#3B82F6"), spaceBefore=14, spaceAfter=6)
body = ParagraphStyle("Body", parent=styles["Normal"], fontSize=10, leading=14)

doc = SimpleDocTemplate(str(OUT_PATH), pagesize=LETTER, topMargin=0.7 * inch, bottomMargin=0.7 * inch)
flow = []

flow.append(Paragraph("Sujal Gupta", name_style))
flow.append(Paragraph("Data Analyst · BI Developer · AI Enthusiast", role_style))
flow.append(Paragraph("sujalgupta0008@gmail.com &nbsp;|&nbsp; github.com/sujalgupta0008 &nbsp;|&nbsp; linkedin.com/in/sujalgupta0008", body))

flow.append(Paragraph("Education", h2))
flow.append(Paragraph("<b>Dr. A.P.J. Abdul Kalam Technical University (AKTU)</b> — B.Tech, CGPA 7.7/10 (Aug 2024 – Aug 2027)", body))
flow.append(Paragraph("<b>Indian Institute of Technology, Patna</b> — Advanced Certification in Data Science & AI (2024)", body))

flow.append(Paragraph("Experience", h2))
for title, sub in [
    ("Tata GenAI — GenAI Powered Data Analytics Job Simulation (2025)", "Applied prompt engineering and LLM-driven analysis on a simulated business analytics case."),
    ("JPMorgan Chase & Co. — Data Analytics Virtual Job Simulation (2024)", "Cleaned and modeled structured financial data; built summary visualizations for a client case."),
    ("Deloitte — Data Analytics Job Simulation (2024)", "Delivered an executive-ready insight deck from a consulting-style analytics case."),
]:
    flow.append(Paragraph(f"<b>{title}</b><br/>{sub}", body))
    flow.append(Spacer(1, 4))

flow.append(Paragraph("Projects", h2))
projects = [
    "Sales Analytics Dashboard — Power BI, DAX, SQL",
    "LinkaLyze — LinkedIn Job Market Analytics on 122K+ listings (Python, NLP)",
    "Fraud Detection Engine — ML on 6.36M+ transactions (Scikit-learn, XGBoost)",
    "Insurance Claims Analytics Dashboard — Power BI, SQL",
    "SmartLend — Loan Analytics Dashboard (SQL, Power BI, Python)",
    "AI Career Navigator — GenAI-powered career guidance tool",
]
flow.append(ListFlowable([ListItem(Paragraph(p, body)) for p in projects], bulletType="bullet"))

flow.append(Paragraph("Skills", h2))
flow.append(Paragraph(
    "Power BI, Tableau, SQL, Python, R, Pandas, NumPy, Scikit-learn, XGBoost, GenAI/LLMs, Prompt Engineering, "
    "Statistics (Hypothesis Testing, Regression, A/B Testing), Git/GitHub, Azure, AWS",
    body,
))

flow.append(Paragraph("Certifications", h2))
certs = [
    "Google Data Analytics Professional Certificate",
    "Microsoft Power BI Data Analyst (PL-300)",
    "SQL for Data Science — UC Davis",
]
flow.append(ListFlowable([ListItem(Paragraph(c, body)) for c in certs], bulletType="bullet"))

doc.build(flow)
print(f"Resume generated at {OUT_PATH}")
