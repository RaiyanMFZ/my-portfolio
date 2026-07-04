import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LegalMarkdown } from "@/components/legal/legal-markdown";

const LEGAL_PAGES = {
  privacy: {
    title: "Privacy Policy",
    file: "privacy-policy.md",
    description: "How personal data is collected and processed on this website.",
  },
  imprint: {
    title: "Legal Notice",
    file: "imprint.md",
    description: "Legal notice and imprint information.",
  },
  terms: {
    title: "Terms of Use",
    file: "terms-of-use.md",
    description: "Terms governing use of this website.",
  },
  disclaimer: {
    title: "Disclaimer",
    file: "disclaimer.md",
    description: "Limitations of liability and content accuracy.",
  },
  copyright: {
    title: "Copyright & Licenses",
    file: "copyright-licenses.md",
    description: "Copyright, open-source licences, and third-party attributions.",
  },
};

export function generateStaticParams() {
  return Object.keys(LEGAL_PAGES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const page = LEGAL_PAGES[params.slug];
  if (!page) return {};

  return {
    title: `${page.title} | Raiyan Mahfuz`,
    description: page.description,
  };
}

export default function LegalPage({ params }) {
  const page = LEGAL_PAGES[params.slug];
  if (!page) notFound();

  const filePath = path.join(process.cwd(), "content", "legal", page.file);
  const content = fs.readFileSync(filePath, "utf8");

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors mb-12"
        >
          ← Back to Portfolio
        </Link>

        <LegalMarkdown content={content} />

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4">
            Legal
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50">
            {Object.entries(LEGAL_PAGES).map(([slug, { title }]) => (
              <Link
                key={slug}
                href={`/legal/${slug}`}
                className={`hover:text-white transition-colors ${
                  slug === params.slug ? "text-white" : ""
                }`}
              >
                {title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
