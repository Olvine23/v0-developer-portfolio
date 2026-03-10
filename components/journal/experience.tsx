"use client"

const experiences = [
  {
    company: "StockApp",
    location: "Mombasa",
    role: "Software Developer",
    period: "Nov 2023 — May 2025",
    description:
      "Working on mobile and web platforms to build reliable tools that improve business workflows and user experience.",
    highlights: [
      "Developed mobile applications using Ionic to improve user engagement and feature delivery.",
      "Architected web applications using Angular, improving performance and responsiveness.",
      "Designed and integrated backend APIs using ASP.NET to support scalable data processing.",
    ],
  },
  {
    company: "Easyness",
    location: "Ghana",
    role: "Mobile App Developer Relations Engineer",
    period: "Mar 2023 — Jun 2024",
    description:
      "Focused on developer engagement, product adoption, and knowledge sharing within the developer ecosystem.",
    highlights: [
      "Built relationships with developers to gather feedback and improve product direction.",
      "Worked closely with product teams to translate developer insights into platform improvements.",
      "Delivered workshops and technical presentations on eCommerce solutions and emerging technologies.",
    ],
  },
  {
  company: "Surestep Systems & Solutions",
  location: "Nairobi",
  role: "Software Developer",
  period: "Jun 2023 — Sep 2023",
  description:
    "Worked on enterprise business systems using Microsoft Dynamics 365 Business Central (NAV), helping organizations adapt ERP workflows to their operational needs.",
  highlights: [
    "Customized and implemented business solutions using Microsoft Dynamics 365 Business Central (NAV).",
    "Collaborated with cross-functional teams to translate business requirements into functional system features.",
    "Integrated Business Central modules to ensure consistent data flow and system reliability.",
    "Developed internal software tools to support organizational processes.",
    "Trained end users on using the customized systems effectively."
  ]
},
  {
    company: "Tajilabs",
    location: "Nairobi",
    role: "Software Developer",
    period: "May 2022 — Nov 2022",
    description:
      "Worked on modern web applications and backend integrations while collaborating across design and development teams.",
    highlights: [
      "Built web applications using Angular, Ionic, and Node.js.",
      "Integrated third-party APIs and implemented MongoDB for efficient data management.",
      "Collaborated with designers and developers to build intuitive user interfaces.",
    ],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 px-6 py-32 md:px-12 lg:px-24"
    >
      {/* Chapter header */}
      <div className="mb-16 flex items-center gap-4">
        <span className="font-mono text-sm text-muted-foreground">03</span>
        <div className="h-px w-12 bg-border" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Where I&apos;ve Worked
        </span>
      </div>

      {/* Title */}
      <h2 className="mb-6 max-w-3xl text-balance text-3xl font-medium tracking-tight md:text-4xl">
        The places that shaped how I build software
      </h2>

      <p className="mb-16 max-w-2xl text-lg leading-relaxed  text-foreground/80">
        Over the past few years I've worked across mobile, web, and developer
        ecosystems, building products, supporting developers, and learning how
        good software teams operate.
      </p>

      {/* Experience list */}
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-t border-border pt-8 first:border-t-0 first:pt-0"
          >
            <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-12">
              
              {/* Timeline */}
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">
                  {exp.period}
                </p>
                <p className="mt-1 text-sm  text-foreground/80">
                  {exp.location}
                </p>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-medium">
                  {exp.role}{" "}
                  <span className="text-muted-foreground">
                    · {exp.company}
                  </span>
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed  text-foreground/80">
                  {exp.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-secondary-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}