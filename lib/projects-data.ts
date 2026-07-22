export interface ProjectData {
  slug: string;
  client: string;
  type: string;
  area: string;
  timeline: string;
  tech: string;
  detail: string;
  image: string;
  accentColor: string;
  challenge: string[];
  srpDifference: string[];
  gallery?: string[];
}

export const PROJECTS: ProjectData[] = [
  {
    slug: "blinkit",
    client: "Blinkit",
    type: "Dark Store Network",
    area: "100,000+ sqft",
    timeline: "8 Days / site",
    tech: "Complete Electrical / Partition work / Fabrication work",
    detail: "25+ stores delivered across South India.",
    image: "/projects/blinkit.png",
    accentColor: "#F8CA15",
    challenge: [
      "Quick-commerce relies purely on speed—not just in delivery, but in expansion. Blinkit required a network of 25+ dark stores across highly congested metro areas.",
      "The challenge wasn't just building one store quickly; it was creating a hyper-scalable deployment template that could be executed simultaneously across multiple unpredictable real estate spaces without a drop in quality or regulatory compliance.",
    ],
    srpDifference: [
      "While a typical contractor struggles to coordinate multiple agencies across cities, SRP utilized our Turnkey Delivery model to handle MEP, specialized heavy-load flooring, racking systems, and exterior branding under one unified contract.",
      "By eliminating the 'subcontractor gap'—the notorious delay when trades wait for each other—we compressed the commercial build cycle down to just 8 days per site, enabling Blinkit to capture market share and go live ahead of schedule.",
      "Our technicians are multi-skilled in both electrical and fabrication work, ensuring a rapid turnaround time on site with zero inter-trade dependencies.",
    ],
  },
  {
    slug: "zepto",
    client: "Zepto",
    type: "Quick-Commerce Fit-out",
    area: "12,000 sqft",
    timeline: "4 weeks / site",
    tech: "Cold Storage MEP · Epoxy Flooring · Signage",
    detail: "20+ dark stores executed with same-week electrical commissioning.",
    image: "/projects/zepto.png",
    accentColor: "#752BFF",
    challenge: [
      "Operating at the bleeding edge of the 10-minute delivery promise, Zepto's infrastructure requirements are intensely specialized. Their facilities demand extreme electrical loads for extensive cold storage and flawlessly durable flooring to withstand constant heavy cart traffic.",
      "The timeline mandated was punishing: 4 weeks from bare shell to fully operational facility, repeated across 20+ locations.",
    ],
    srpDifference: [
      "Our in-house MEP engineering team redesigned the standard load-distribution models to accommodate massive refrigeration arrays without tripping city grids, successfully achieving same-week electrical commissioning.",
      "Instead of standard commercial flooring, our factory-trained teams poured high-grade industrial epoxy specifically cured for rapid turnaround. Traditional interior designers outsource these technical complexities; at SRP, it's our core in-house capability, guaranteeing Zepto's 4-week launch cadence.",
    ],
  },
  {
    slug: "tata-1mg",
    client: "Tata 1mg",
    type: "Retail Pharmacy Interior",
    area: "3,200 sqft",
    timeline: "3 weeks",
    tech: "Retail Fixtures · Branding · Lighting",
    detail: "Brand-consistent retail interior for a national pharmacy rollout.",
    image: "/projects/tata1mg.png",
    accentColor: "#FF5E4D",
    challenge: [
      "Tata 1mg required a physical retail environment that translated their massive digital trust into a tangible, brick-and-mortar pharmacy experience. The design had to feel clinical yet approachable, highly functional for pharmacists, and flawlessly consistent with their national brand guidelines.",
      "They needed a rollout partner who could deliver a premium retail finish within a strict 3-week window to minimize rent burn before opening.",
    ],
    srpDifference: [
      "Unlike generic retail fit-outs, SRP integrated the branding directly into the architectural shell. Illuminated fascias and directional signage were pre-wired during the dry-walling phase, not tacked on as an afterthought.",
      "Our dedicated joinery workshop pre-fabricated all retail fixtures and dispensing counters off-site. When our installation team arrived, it was an assembly operation rather than a construction site, allowing us to hit the 3-week target with a surgical level of precision.",
    ],
  },
  {
    slug: "weschool",
    client: "WeSchool",
    type: "Institutional Interior",
    area: "40,000 sqft",
    timeline: "10 weeks",
    tech: "MEP · Acoustic Flooring · Furniture",
    detail: "A full academic campus interior built for daily high-footfall use.",
    image: "/projects/weschool.png",
    accentColor: "#003B5C",
    challenge: [
      "Educational institutions face a unique set of stresses: thousands of students, massive acoustic challenges in large lecture halls, and the need for environments that foster intense focus while enduring decades of heavy daily wear.",
      "WeSchool needed to transform a massive 40,000 sqft space into a state-of-the-art academic campus within a rigid 10-week summer break window. Missing the deadline meant disrupting the academic year.",
    ],
    srpDifference: [
      "SRP took complete ownership of the campus transformation. We deployed specialized acoustic flooring and ceiling baffles to drastically reduce echo in cavernous lecture spaces, something standard designers often overlook.",
      "Our turnkey approach meant civil works, massive HVAC ducting, and custom student furniture procurement happened in parallel, not sequentially. We didn't just design a beautiful campus; we engineered an environment built for institutional endurance, delivered exactly on time for the new semester.",
    ],
  },
  {
    slug: "gwalia",
    client: "Gwalia",
    type: "Luxury Residential",
    area: "6,800 sqft",
    timeline: "16 weeks",
    tech: "Bespoke Joinery · Stone Flooring · MEP",
    detail: "A private residence finished to a fully bespoke luxury standard.",
    image: "/projects/gwalia.png",
    accentColor: "#C9A66B",
    challenge: [
      "Luxury residential projects require an obsessive level of detail that commercial spaces rarely demand. The Gwalia residence, spanning 6,800 sqft, called for fully bespoke finishes, complex smart-home MEP integrations, and flawless execution of rare natural stone.",
      "The client demanded absolute perfection in material transitions and a deeply personalized aesthetic that felt both opulent and intimately comfortable.",
    ],
    srpDifference: [
      "Most high-end interior designers act only as consultants, leaving the client at the mercy of unpredictable local contractors. SRP deployed our elite finishing teams—craftsmen who specialize purely in luxury residential execution.",
      "From perfectly book-matched marble flooring to custom millwork crafted in our own facilities, we maintained uncompromising quality control. Our integrated MEP team hid all climate control and smart-home wiring invisibly within the architecture, delivering a seamless, turnkey luxury experience.",
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
