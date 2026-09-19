"use client";

import {
  Atom,
  Award,
  BookOpen,
  Building2,
  Calendar,
  Download,
  ExternalLink,
  FileText,
  FlaskConical,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Medal,
  Microscope,
  Phone,
  Printer,
  Sigma,
  Sparkles,
  Users,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */

const PROFILE = {
  name: "Samuel Bicalho Henriques",
  title: "Materials Engineering Student | Crystallography & Materials Characterization",
  location: "Metz, France",
  email: "samuca.henriques@gmail.com",
  phone: "+33 7 61 41 04 32",
  cv: "/Samuel_Henriques_CV.pdf",
  about:
    "Materials Engineering student at UFMG (5-year program), currently based in Metz, France. Specialized in crystallography, materials characterization, magnetic materials and phase transformations. Solid background across industrial R&D (ArcelorMittal), nuclear research centres (CDTN) and biomaterials characterization.",
};

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/samuel-bicalho-henriques", icon: Linkedin },
  { label: "Lattes CV", href: "http://lattes.cnpq.br/8472019357461028", icon: FileText },
  { label: "GitHub", href: "https://github.com/samuelbhenriques", icon: Github },
];

const EDUCATION = {
  degree: "B.Sc. Materials Engineering",
  program: "5-year program",
  school: "Universidade Federal de Minas Gerais (UFMG)",
  place: "Belo Horizonte, Brazil",
  status: "In progress",
  focus: "Crystallography, materials characterization, magnetic materials, phase transformations.",
};

const EXPERIENCE = [
  {
    role: "R&D Intern — Process Modelling and Development",
    org: "ArcelorMittal France",
    place: "Maizières-lès-Metz Global R&D",
    period: "May 2026 — Nov 2026",
    current: true,
    bullets: [
      "Experimental characterization of a bench-scale gravity separation unit for mineral processing.",
      "Design of experiments (DOE), mass balance analysis and statistical modelling of process data.",
      "Technical reporting and coordination of test campaigns with the laboratory team.",
    ],
  },
  {
    role: "Undergraduate Researcher — Magnetic Materials",
    org: "CDTN — Nuclear Technology Development Center",
    place: "Belo Horizonte, Brazil · CAPES Fellowship",
    period: "Aug 2025 — Jul 2026",
    bullets: [
      "Structural and magnetic study of rare-earth doped nickel ferrite nanoparticles by XRD and Mössbauer spectroscopy.",
      "Rietveld refinement (FullProf) for phase quantification and crystallographic parameters.",
      "Synchrotron beamtime proposal submitted to CNPEM/Sirius, combining high-resolution XRD with maximum-entropy electron density mapping and XMCD.",
    ],
  },
  {
    role: "Undergraduate Researcher — Biomaterials",
    org: "UFMG — Biomaterials Laboratory",
    place: "Belo Horizonte, Brazil · CAPES Fellowship",
    period: "Jan 2024 — Jan 2025",
    bullets: [
      "Characterization of hybrid scaffolds by XRD and FTIR.",
      "Comparative analysis of analytical methods for polymer characterization.",
    ],
  },
  {
    role: "Extension Scholar — VALE Technical Expertise Program",
    org: "UFMG / VALE Partnership",
    place: "Belo Horizonte, Brazil",
    period: "Jan 2024 — Jan 2025",
    bullets: [
      "Coordinated and hosted a technical training program in mining and geometallurgy for VALE employees, managing scheduling, sessions and logistics.",
    ],
  },
  {
    role: "Extension Scholar — Industrial Characterization Services",
    org: "Fundação Christiano Ottoni (FCO) / UFMG",
    place: "Belo Horizonte, Brazil",
    period: "Jan 2023 — Dec 2023",
    bullets: [
      "Commercial XRD and XRF analyses for external industrial clients, including preparation of certification reports.",
    ],
  },
];

const PUBLICATIONS = [
  {
    authors:
      "Martins, T., Henriques, S. B., Reis, G. K. O., Amaral, M. M. S., Guimarães, M. F., Oliveira, G. L., Santos, A. O., Nunes, E. H. M.",
    year: "2026",
    title: "A Novel Green Method for Producing Medical-Grade Chitosan From Loligo plei Squid Pens",
    venue: "Journal of Applied Polymer Science, 143(25)",
    doi: "10.1002/app.70790",
  },
  {
    authors: "Martins, T., Oliveira, G. L., Henriques, S. B., Nunes, E. H. M.",
    year: "2025",
    title:
      "Comparative Analysis of Analytical Methods for Quantifying the Deacetylation Degree in Chitosan Polymer Chains",
    venue: "Materials Research, 28",
    doi: "10.1590/1980-5373-MR-2025-0108",
  },
  {
    authors: "Mendonça, T. V., Henriques, S. B., et al.",
    year: "2024",
    title: "Characterization of Apatite Floatability",
    venue: "ABM Week",
    doi: null,
  },
  {
    authors: "Morais, F. R. M., Henriques, S. B., et al.",
    year: "2024",
    title: "Gold Recovery from Copper Waste",
    venue: "ABM Week",
    doi: null,
  },
];

const SKILLS = [
  {
    label: "Characterization",
    icon: Microscope,
    items: ["XRD (Rietveld refinement)", "Mössbauer spectroscopy", "XRF", "FTIR", "SEM/EDS"],
  },
  {
    label: "Crystallography",
    icon: Atom,
    items: [
      "FullProf Suite",
      "HighScore",
      "Profex",
      "VESTA",
      "Electron density mapping",
      "Fourier analysis",
    ],
  },
  {
    label: "Data & Modelling",
    icon: Sigma,
    items: ["Design of Experiments (factorial DOE)", "Regression modelling", "Mass balance analysis"],
  },
  {
    label: "Software & Tools",
    icon: FlaskConical,
    items: ["OriginLab", "LaTeX", "Microsoft Office Suite"],
  },
];

const AWARDS = [
  {
    title: "Waelzholz Brasmetal Award 2025",
    detail: "Industrial Excellence — ABM · Co-recipient",
  },
  {
    title: "Bronze Medal — Olimpíada Mineira de Química",
    detail: "State Chemistry Olympiad, 2019",
  },
];

const COURSES = [
  { title: "XRD & XRF Equipment Training", org: "ThermoFisher Scientific", year: "2024" },
  { title: "Thermodynamics", org: "HarvardX", year: "2023" },
  { title: "Nuclear Energy Systems", org: "MITx", year: "2022" },
];

const LANGUAGES = [
  { name: "Portuguese", level: "Native", value: 100 },
  { name: "English", level: "C1 — CENEX/FALE-UFMG, 90/100 (Oct 2025)", value: 90 },
  { name: "French", level: "In progress — living in France", value: 45 },
];

const LEADERSHIP = [
  "Member of the Materials Engineering Student Council (Diretório Acadêmico), UFMG — 2 years.",
  "Director of Assets (Diretor de Património) — 1 year.",
  "Organizing committee, UFMG Mining & Metallurgy Symposium — 2 editions.",
  "Organizing team, ore characterization event for industry — DEMIN/UFMG.",
];

/* -------------------------------------------------------------------------- */
/*                                 PRIMITIVES                                 */
/* -------------------------------------------------------------------------- */

function SectionTitle({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-center gap-3 print:mb-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 print:h-6 print:w-6 print:border-slate-300 print:bg-transparent print:text-slate-900">
        <Icon className="h-[18px] w-[18px] print:h-3.5 print:w-3.5" strokeWidth={1.75} />
      </span>
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200 print:text-[11px] print:tracking-[0.12em] print:text-black">
        {children}
      </h2>
      <span className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent print:bg-slate-300" />
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-slate-700/60 bg-slate-800/40 px-2.5 py-1 text-[12.5px] leading-none text-slate-300 transition-colors duration-200 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300 print:border-slate-300 print:bg-transparent print:px-1.5 print:py-0.5 print:text-[9px] print:text-black">
      {children}
    </span>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <article
      className={
        "avoid-break group relative rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:bg-slate-900/70 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_18px_40px_-24px_rgba(34,211,238,0.45)] print:rounded-none print:border-0 print:border-l print:border-slate-300 print:bg-transparent print:p-0 print:pl-3 " +
        className
      }
    >
      {children}
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    PAGE                                    */
/* -------------------------------------------------------------------------- */

export default function Page() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-300 antialiased selection:bg-cyan-500/25 selection:text-cyan-100 print:min-h-0 print:bg-white print:text-black">
      <PrintStyles />

      {/* Ambient background — hidden on print */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden print:hidden" aria-hidden>
        <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      </div>

      {/* Floating print button */}
      <button
        type="button"
        onClick={() => window.print()}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2.5 text-sm font-medium text-slate-200 shadow-lg shadow-black/40 backdrop-blur transition-all duration-200 hover:border-cyan-400/60 hover:text-cyan-300 active:scale-95 print:hidden"
        aria-label="Print or export this page as PDF"
      >
        <Printer className="h-4 w-4" strokeWidth={1.75} />
        <span className="hidden sm:inline">Print / Export PDF</span>
      </button>

      <div className="relative mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:py-24 print:max-w-none print:px-0 print:py-0">
        <Header />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14 print:mt-5 print:block">
          {/* ------------------------------ MAIN COLUMN ----------------------------- */}
          <div className="space-y-14 print:space-y-5">
            <About />
            <Education />
            <Experience />
            <Publications />
          </div>

          {/* -------------------------------- SIDEBAR ------------------------------- */}
          <aside className="space-y-12 print:mt-5 print:space-y-5">
            <Skills />
            <AwardsAndCourses />
            <LanguagesAndLeadership />
          </aside>
        </div>

        <Footer />
      </div>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  SECTIONS                                  */
/* -------------------------------------------------------------------------- */

function Header() {
  return (
    <header className="avoid-break">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-400 print:hidden">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </span>
            Open to R&amp;D opportunities
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl print:text-[26px] print:text-black">
            {PROFILE.name}
          </h1>

          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-cyan-400/90 print:mt-1 print:text-[11px] print:text-slate-700">
            {PROFILE.title}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[13.5px] text-slate-400 print:mt-2 print:gap-x-3 print:gap-y-1 print:text-[10px] print:text-black">
            <ContactItem icon={MapPin} label={PROFILE.location} />
            <ContactItem icon={Mail} label={PROFILE.email} href={`mailto:${PROFILE.email}`} />
            <ContactItem
              icon={Phone}
              label={PROFILE.phone}
              href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5 print:mt-2 print:gap-3">
            {LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-1.5 text-[13px] text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:text-cyan-300 print:rounded-none print:border-0 print:bg-transparent print:px-0 print:py-0 print:text-[9px] print:text-slate-700"
              >
                <Icon className="h-3.5 w-3.5 print:h-2.5 print:w-2.5" strokeWidth={1.75} />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Primary CTA */}
        <a
          href={PROFILE.cv}
          download
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_-12px_rgba(34,211,238,0.8)] transition-all duration-200 hover:bg-cyan-400 hover:shadow-[0_14px_40px_-12px_rgba(34,211,238,0.9)] active:scale-95 print:hidden"
        >
          <Download
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
            strokeWidth={2}
          />
          Download CV (PDF)
        </a>
      </div>

      <div className="mt-10 h-px w-full bg-gradient-to-r from-cyan-500/40 via-slate-800 to-transparent print:mt-3 print:bg-slate-300" />
    </header>
  );
}

function ContactItem({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ElementType;
  label: string;
  href?: string;
}) {
  const content = (
    <span className="inline-flex items-center gap-2">
      <Icon
        className="h-3.5 w-3.5 text-cyan-500/80 print:h-2.5 print:w-2.5 print:text-slate-500"
        strokeWidth={1.75}
      />
      {label}
    </span>
  );

  if (!href) return content;

  return (
    <a href={href} className="transition-colors duration-200 hover:text-cyan-300 print:text-black">
      {content}
    </a>
  );
}

function About() {
  return (
    <section className="avoid-break">
      <SectionTitle icon={Sparkles}>About</SectionTitle>
      <p className="max-w-3xl text-[15px] leading-[1.85] text-slate-400 print:text-[10.5px] print:leading-relaxed print:text-black">
        {PROFILE.about}
      </p>
    </section>
  );
}

function Education() {
  return (
    <section className="avoid-break">
      <SectionTitle icon={GraduationCap}>Education</SectionTitle>

      <Card>
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
          <div className="min-w-0">
            <h3 className="text-[15.5px] font-medium text-white transition-colors duration-200 group-hover:text-cyan-300 print:text-[11.5px] print:text-black">
              {EDUCATION.degree}
              <span className="text-slate-500 print:text-slate-700"> · {EDUCATION.program}</span>
            </h3>
            <p className="mt-1 text-[13.5px] text-cyan-400/80 print:mt-0.5 print:text-[10px] print:text-slate-700">
              {EDUCATION.school}
            </p>
            <p className="mt-0.5 text-[12.5px] text-slate-500 print:text-[9px] print:text-slate-600">
              {EDUCATION.place}
            </p>
          </div>

          <span className="shrink-0 whitespace-nowrap text-[12.5px] italic text-slate-500 print:text-[9px] print:text-black">
            {EDUCATION.status}
          </span>
        </div>

        <p className="mt-4 text-[13.5px] leading-relaxed text-slate-400 print:mt-1.5 print:text-[10px] print:leading-snug print:text-black">
          <span className="text-slate-500 print:text-slate-700">Focus: </span>
          {EDUCATION.focus}
        </p>
      </Card>
    </section>
  );
}

function Experience() {
  return (
    <section>
      <SectionTitle icon={Building2}>Experience &amp; Research</SectionTitle>

      <div className="space-y-4 print:space-y-3">
        {EXPERIENCE.map((job) => (
          <Card key={job.role}>
            <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
              <div className="min-w-0">
                <h3 className="text-[15.5px] font-medium text-white transition-colors duration-200 group-hover:text-cyan-300 print:text-[11.5px] print:text-black">
                  {job.role}
                </h3>
                <p className="mt-1 text-[13.5px] text-cyan-400/80 print:mt-0.5 print:text-[10px] print:text-slate-700">
                  {job.org}
                </p>
                <p className="mt-0.5 text-[12.5px] text-slate-500 print:text-[9px] print:text-slate-600">
                  {job.place}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                {job.current && (
                  <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[10.5px] font-medium uppercase tracking-wider text-cyan-400 print:hidden">
                    Current
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[12.5px] text-slate-500 print:text-[9px] print:text-black">
                  <Calendar className="h-3.5 w-3.5 print:hidden" strokeWidth={1.75} />
                  {job.period}
                </span>
              </div>
            </div>

            <ul className="mt-4 space-y-2 print:mt-1.5 print:space-y-1">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="relative pl-5 text-[13.5px] leading-relaxed text-slate-400 print:pl-3 print:text-[10px] print:leading-snug print:text-black"
                >
                  <span className="absolute left-0 top-[0.58em] h-1.5 w-1.5 rounded-full bg-slate-600 transition-colors duration-300 group-hover:bg-cyan-400 print:top-[0.45em] print:h-1 print:w-1 print:bg-slate-500" />
                  {bullet}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Publications() {
  return (
    <section>
      <SectionTitle icon={BookOpen}>Publications</SectionTitle>

      <div className="space-y-4 print:space-y-2.5">
        {PUBLICATIONS.map((pub) => (
          <Card key={pub.title}>
            <div className="flex items-start gap-4 print:gap-2">
              <span className="mt-0.5 shrink-0 rounded-md border border-slate-700/60 bg-slate-800/50 px-2 py-1 text-[11px] font-medium tabular-nums text-slate-400 transition-colors duration-200 group-hover:border-cyan-500/40 group-hover:text-cyan-400 print:rounded-none print:border-0 print:bg-transparent print:px-0 print:py-0 print:text-[9px] print:text-black">
                {pub.year}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="text-[14.5px] font-medium leading-snug text-white transition-colors duration-200 group-hover:text-cyan-300 print:text-[10.5px] print:text-black">
                  {pub.title}
                </h3>
                <p className="mt-1.5 text-[12.5px] text-slate-500 print:mt-0.5 print:text-[9px] print:text-slate-700">
                  {pub.authors}
                </p>
                <p className="mt-0.5 text-[12.5px] italic text-slate-400 print:text-[9px] print:text-black">
                  {pub.venue}
                </p>

                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-slate-700/60 px-2.5 py-1 text-[11.5px] font-medium text-slate-300 transition-all duration-200 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-300 print:mt-1 print:rounded-none print:border-0 print:px-0 print:py-0 print:text-[8.5px] print:text-slate-600"
                  >
                    <ExternalLink className="h-3 w-3 print:hidden" strokeWidth={1.75} />
                    DOI: {pub.doi}
                  </a>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="avoid-break">
      <SectionTitle icon={Microscope}>Technical Skills</SectionTitle>

      <div className="space-y-6 print:grid print:grid-cols-2 print:gap-x-8 print:gap-y-3 print:space-y-0">
        {SKILLS.map(({ label, icon: Icon, items }) => (
          <div key={label} className="avoid-break">
            <div className="mb-3 flex items-center gap-2 print:mb-1">
              <Icon className="h-3.5 w-3.5 text-cyan-500 print:hidden" strokeWidth={1.75} />
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-300 print:text-[9.5px] print:text-black">
                {label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 print:gap-1">
              {items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AwardsAndCourses() {
  return (
    <section className="avoid-break">
      <SectionTitle icon={Award}>Awards &amp; Training</SectionTitle>

      <div className="space-y-3 print:space-y-1.5">
        {AWARDS.map((item) => (
          <div
            key={item.title}
            className="avoid-break group flex gap-3 rounded-lg border border-slate-800 bg-slate-900/40 p-3.5 transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/70 print:gap-2 print:rounded-none print:border-0 print:bg-transparent print:p-0"
          >
            <Medal
              className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500 transition-transform duration-300 group-hover:scale-110 print:hidden"
              strokeWidth={1.75}
            />
            <div>
              <p className="text-[13.5px] font-medium text-slate-200 print:text-[10px] print:text-black">
                {item.title}
              </p>
              <p className="mt-0.5 text-[12px] text-slate-500 print:text-[9px] print:text-slate-700">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ul className="mt-5 space-y-2.5 print:mt-2 print:space-y-1">
        {COURSES.map((course) => (
          <li
            key={course.title}
            className="flex items-baseline justify-between gap-3 border-b border-slate-800/70 pb-2.5 text-[13px] last:border-0 print:border-0 print:pb-0 print:text-[9.5px]"
          >
            <span className="text-slate-300 print:text-black">
              {course.title}
              <span className="text-slate-500 print:text-slate-700"> · {course.org}</span>
            </span>
            <span className="shrink-0 tabular-nums text-slate-600 print:text-slate-700">
              {course.year}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function LanguagesAndLeadership() {
  return (
    <>
      <section className="avoid-break">
        <SectionTitle icon={Languages}>Languages</SectionTitle>

        <div className="space-y-4 print:space-y-1">
          {LANGUAGES.map((lang) => (
            <div key={lang.name}>
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-[13.5px] font-medium text-slate-200 print:text-[10px] print:text-black">
                  {lang.name}
                </span>
                <span className="text-[11.5px] text-slate-500 print:text-[9px] print:text-slate-700">
                  {lang.level}
                </span>
              </div>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-slate-800 print:hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  style={{ width: `${lang.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="avoid-break">
        <SectionTitle icon={Users}>Leadership &amp; Involvement</SectionTitle>

        <ul className="space-y-2.5 print:space-y-1">
          {LEADERSHIP.map((entry) => (
            <li
              key={entry}
              className="relative pl-5 text-[13px] leading-relaxed text-slate-400 print:pl-3 print:text-[9.5px] print:text-black"
            >
              <span className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-cyan-500/60 print:top-[0.45em] print:h-1 print:w-1 print:bg-slate-500" />
              {entry}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800/70 pt-6 text-[12px] text-slate-600 print:mt-4 print:border-slate-300 print:pt-2 print:text-[8.5px] print:text-slate-600">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span>
          {PROFILE.name} · {PROFILE.location}
        </span>
        <span className="print:hidden">Built with Next.js, Tailwind CSS &amp; Lucide.</span>
        <span className="hidden print:inline">
          {PROFILE.email} · {PROFILE.phone}
        </span>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*                            PRINT / A4 STYLESHEET                           */
/* -------------------------------------------------------------------------- */

function PrintStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          .avoid-break {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          @media print {
            @page {
              size: A4 portrait;
              margin: 12mm 14mm;
            }

            html,
            body {
              background: #ffffff !important;
              color: #000000 !important;
            }

            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              box-shadow: none !important;
              text-shadow: none !important;
              transform: none !important;
              animation: none !important;
              transition: none !important;
            }

            h1,
            h2,
            h3 {
              break-after: avoid;
              page-break-after: avoid;
            }

            li {
              break-inside: avoid;
              page-break-inside: avoid;
            }

            /* Do not append raw URLs after links on paper */
            a[href]::after {
              content: "" !important;
            }
          }
        `,
      }}
    />
  );
}
