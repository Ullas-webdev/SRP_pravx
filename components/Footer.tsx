import Link from "next/link";

const COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Interiors", href: "/services/interiors" },
      { label: "Commercial Spaces", href: "/services/commercial-spaces" },
      { label: "Dark Stores", href: "/services/dark-stores" },
      { label: "MEP Solutions", href: "/services/mep-solutions" },
      { label: "Turnkey Solutions", href: "/services/turnkey-solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Projects", href: "/#projects" },
      { label: "Careers", href: "/careers" },
      { label: "Clients", href: "/#clients" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/spacerightprojects?igsh=MTJqMzdlenY1YXA1eQ==" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/praveengshetty?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
];

export default function Footer() {
  return (
    <footer className="relative bg-matte pt-24">
      <div className="container-x">
        <div className="grid md:grid-cols-[1.4fr,1fr,1fr,1fr] gap-12 pb-16">
          <div>
            <p className="font-display text-2xl mb-4">Space Right Projects</p>
            <p className="text-pearl/55 text-sm leading-relaxed max-w-xs font-light">
              Premium infrastructure and turnkey interior company delivering
              commercial, retail and luxury residential spaces across India.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="eyebrow text-gold mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-pearl/55 text-sm hover:text-pearl transition-colors duration-300 font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="eyebrow text-gold mb-5">Follow</p>
            <ul className="space-y-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pearl/55 text-sm hover:text-pearl transition-colors duration-300 font-light"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline" />

        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-pearl/35 text-xs">
            © {new Date().getFullYear()} Space Right Projects. All rights reserved.
          </p>
          <p className="eyebrow text-pearl/30">Building Spaces That Perform</p>
        </div>
      </div>
    </footer>
  );
}
