const COLUMNS = [
  {
    title: "Services",
    links: ["Interiors", "Commercial Spaces", "Dark Stores", "MEP Solutions", "Turnkey Solutions"],
  },
  {
    title: "Company",
    links: ["Projects", "Careers", "Clients", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

const SOCIALS = ["Instagram", "LinkedIn", "YouTube"];

export default function Footer() {
  return (
    <footer className="relative bg-matte pt-24">
      <div className="container-x">
        <div className="grid md:grid-cols-[1.4fr,1fr,1fr,1fr] gap-12 pb-16">
          <div>
            <p className="font-display text-2xl mb-4">Space Right Projects</p>
            <p className="text-pearl/50 text-sm leading-relaxed max-w-xs">
              Premium infrastructure and turnkey interior company delivering
              commercial, retail and luxury residential spaces across India.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="eyebrow text-gold mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-pearl/55 text-sm hover:text-pearl transition-colors duration-300"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="eyebrow text-gold mb-5">Follow</p>
            <ul className="space-y-3">
              {SOCIALS.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-pearl/55 text-sm hover:text-pearl transition-colors duration-300"
                  >
                    {s}
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
