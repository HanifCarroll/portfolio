from __future__ import annotations

from pathlib import Path
from textwrap import wrap

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "redacted" / "product-surface.png"
W, H = 1200, 760


def font(size: int, *, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        "/System/Library/Fonts/Avenir Next.ttc",
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
    ]
    for candidate in candidates:
        try:
            return ImageFont.truetype(candidate, size=size)
        except OSError:
            continue
    return ImageFont.load_default(size=size)


def serif(size: int, *, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Iowan Old Style.ttc",
        "/System/Library/Fonts/Supplemental/Georgia Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Georgia.ttf",
    ]
    for candidate in candidates:
        try:
            return ImageFont.truetype(candidate, size=size)
        except OSError:
            continue
    return font(size, bold=bold)


def rounded(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], radius: int, fill: str, outline: str | None = None, width: int = 1) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def text(draw: ImageDraw.ImageDraw, xy: tuple[int, int], value: str, size: int, fill: str = "#14211c", *, bold: bool = False, family: str = "sans") -> None:
    draw.text(xy, value, fill=fill, font=serif(size, bold=bold) if family == "serif" else font(size, bold=bold))


def wrapped_text(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    value: str,
    size: int,
    width: int,
    fill: str = "#14211c",
    *,
    bold: bool = False,
    line_height: int | None = None,
) -> None:
    words_per_line = max(16, width // max(size // 2, 8))
    y = xy[1]
    for line in wrap(value, width=words_per_line):
        text(draw, (xy[0], y), line, size, fill=fill, bold=bold)
        y += line_height or int(size * 1.35)


def input_box(draw: ImageDraw.ImageDraw, x: int, y: int, w: int, label: str, value: str, *, h: int = 34, multiline: bool = False) -> int:
    text(draw, (x, y), label, 11, fill="#637169", bold=True)
    top = y + 18
    rounded(draw, (x, top, x + w, top + h), 7, "#fbfcf9", "#d5ded6")
    if multiline:
        wrapped_text(draw, (x + 10, top + 10), value, 12, w - 20, bold=True, line_height=16)
    else:
        text(draw, (x + 10, top + 10), value, 12, bold=True)
    return top + h + 10


def main() -> None:
    img = Image.new("RGB", (W, H), "#eef3ee")
    draw = ImageDraw.Draw(img)

    rounded(draw, (34, 34, 1166, 726), 28, "#f5f8f4", "#d5ded6")
    draw.ellipse((-50, -80, 500, 360), fill="#e2efe8")
    draw.ellipse((670, 390, 1300, 980), fill="#d8eae1")
    rounded(draw, (34, 34, 1166, 726), 28, "#f5f8f4", "#d5ded6")

    side = (110, 52, 540, 812)
    dash = (525, 86, 1085, 502)
    rounded(draw, side, 12, "#fbfcf9", "#cfdad2")
    rounded(draw, dash, 12, "#fbfcf9", "#cfdad2")

    # Side panel.
    x, y = 126, 70
    text(draw, (x, y), "Job application assistant", 18, bold=True)
    text(draw, (x, y + 23), "Draft ready.", 12, fill="#52625a")
    rounded(draw, (388, 69, 456, 101), 7, "#fbfcf9", "#d5ded6")
    text(draw, (406, 79), "Settings", 12, bold=True)
    rounded(draw, (462, 69, 526, 101), 7, "#fbfcf9", "#d5ded6")
    text(draw, (480, 79), "Extract", 12, bold=True)
    rounded(draw, (126, 114, 524, 119), 3, "#1f6f55")
    text(draw, (126, 129), "Done", 11, fill="#52625a", bold=True)
    text(draw, (500, 129), "142s", 11, fill="#52625a", bold=True)

    rounded(draw, (126, 151, 524, 226), 8, "#f8faf7", "#cfdad2")
    text(draw, (136, 171), "7", 28, bold=True)
    text(draw, (157, 179), "applied today", 13, bold=True)
    text(draw, (136, 198), "Saved 2 min ago.", 12, fill="#52625a")
    text(draw, (422, 165), "Days", 11, fill="#637169", bold=True)
    rounded(draw, (422, 181, 514, 215), 7, "#fbfcf9", "#d5ded6")
    text(draw, (432, 190), "1", 13, bold=True)

    y = 241
    y2 = input_box(draw, 126, y, 194, "Source", "dice")
    input_box(draw, 330, y, 194, "Employment type", "Contract")
    y = y2
    y = input_box(draw, 126, y, 398, "Source URL", "https://www.dice.com/job-detail/sample")
    y = input_box(draw, 126, y, 398, "Role title", "Senior Full Stack Engineer")
    y2 = input_box(draw, 126, y, 194, "Company", "Acme Systems")
    input_box(draw, 330, y, 194, "Location", "Remote")
    y = y2
    y = input_box(draw, 126, y, 398, "Skills", "React, TypeScript, FastAPI, PostgreSQL")
    y = input_box(
        draw,
        126,
        y,
        398,
        "Description",
        "Build customer-facing workflow tools and improve async jobs.",
        h=82,
        multiline=True,
    )
    input_box(draw, 126, y, 398, "Notes for this draft", "Use product engineering examples.", h=54, multiline=True)

    # Dashboard.
    for i in range(3):
        draw.ellipse((538 + i * 16, 99, 547 + i * 16, 108), fill="#ccd6ce")
    rounded(draw, (594, 94, 1072, 115), 10, "#fbfcf9", "#d5ded6")
    text(draw, (608, 99), "127.0.0.1:8787/dashboard", 11, fill="#52625a")
    text(draw, (548, 147), "Application history", 22, bold=True)
    wrapped_text(draw, (548, 170), "Saved applications with draft links and dates.", 13, 500, fill="#52625a")

    mx = 548
    for value, label in [("184", "Total"), ("7", "Today"), ("22", "This week")]:
        rounded(draw, (mx, 212, mx + 164, 276), 8, "#fbfcf9", "#d5ded6")
        text(draw, (mx + 12, 228), value, 28, bold=True)
        text(draw, (mx + 12, 254), label, 11, fill="#52625a", bold=True)
        mx += 174

    rounded(draw, (548, 290, 1062, 479), 8, "#fbfcf9", "#d5ded6")
    draw.rectangle((549, 291, 1061, 322), fill="#eef3ee")
    for px, label in [(560, "ROLE"), (737, "COMPANY"), (861, "SOURCE"), (960, "STATUS")]:
        text(draw, (px, 304), label, 9, fill="#637169", bold=True)
    rows = [
        ("Senior Full Stack Engineer", "Acme Systems", "Dice", "Applied"),
        ("Frontend Product Engineer", "Orbit Labs", "LinkedIn", "Applied"),
        ("Automation Builder", "Northstar", "Indeed", "Applied"),
        ("React Platform Engineer", "SignalWorks", "Upwork", "Draft"),
    ]
    y = 333
    for role, company, source, status in rows:
        draw.line((548, y - 10, 1062, y - 10), fill="#e1e7e1", width=1)
        text(draw, (560, y), role, 12)
        text(draw, (737, y), company, 12)
        text(draw, (861, y), source, 12)
        rounded(draw, (962, y - 3, 1015, y + 19), 10, "#dfeee7")
        text(draw, (969, y + 1), status, 11, fill="#1f6f55", bold=True)
        y += 38

    text(draw, (590, 590), "One local workflow", 36, bold=True, family="serif")
    wrapped_text(
        draw,
        (590, 642),
        "Capture job details, draft a cover letter, save the PDF, and track the application.",
        16,
        500,
        fill="#52625a",
        line_height=22,
    )

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUTPUT)


if __name__ == "__main__":
    main()
