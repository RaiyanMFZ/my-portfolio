function parseInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors">$1</a>'
    );
}

function parseTableRow(line) {
  return line
    .split("|")
    .slice(1, -1)
    .map((cell) => cell.trim());
}

export function LegalMarkdown({ content }) {
  const lines = content.split("\n");
  const elements = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("# ")) {
      elements.push(
        <h1
          key={key++}
          className="font-display text-4xl md:text-5xl font-normal tracking-tight mb-8"
          dangerouslySetInnerHTML={{ __html: parseInline(line.slice(2)) }}
        />
      );
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="font-display text-2xl md:text-3xl font-normal mt-12 mb-4 text-white"
          dangerouslySetInnerHTML={{ __html: parseInline(line.slice(3)) }}
        />
      );
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          className="text-lg md:text-xl font-semibold mt-8 mb-3 text-white/90"
          dangerouslySetInnerHTML={{ __html: parseInline(line.slice(4)) }}
        />
      );
      i++;
      continue;
    }

    if (line.trim() === "---") {
      elements.push(<hr key={key++} className="border-white/10 my-10" />);
      i++;
      continue;
    }

    if (line.startsWith("> ")) {
      const quoteLines = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <blockquote
          key={key++}
          className="border-l-2 border-white/20 pl-4 my-6 text-white/70 italic"
          dangerouslySetInnerHTML={{
            __html: quoteLines.map(parseInline).join("<br />"),
          }}
        />
      );
      continue;
    }

    if (line.startsWith("|")) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        rows.push(parseTableRow(lines[i]));
        i++;
      }
      if (rows.length >= 2) {
        const header = rows[0];
        const body = rows.slice(2);
        elements.push(
          <div key={key++} className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/15">
                  {header.map((cell, idx) => (
                    <th
                      key={idx}
                      className="text-left py-3 pr-4 font-semibold text-white/80"
                      dangerouslySetInnerHTML={{ __html: parseInline(cell) }}
                    />
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, rowIdx) => (
                  <tr key={rowIdx} className="border-b border-white/10">
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className="py-3 pr-4 text-white/60 align-top"
                        dangerouslySetInnerHTML={{ __html: parseInline(cell) }}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    if (line.startsWith("- ")) {
      const items = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="list-disc pl-5 my-4 space-y-2 text-white/70">
          {items.map((item, idx) => (
            <li
              key={idx}
              dangerouslySetInnerHTML={{ __html: parseInline(item) }}
            />
          ))}
        </ul>
      );
      continue;
    }

    if (line.trim() === "") {
      i++;
      continue;
    }

    elements.push(
      <p
        key={key++}
        className="text-white/70 leading-relaxed my-4"
        dangerouslySetInnerHTML={{ __html: parseInline(line) }}
      />
    );
    i++;
  }

  return <article className="legal-content">{elements}</article>;
}
