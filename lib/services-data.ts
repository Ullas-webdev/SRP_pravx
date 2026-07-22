export interface ServiceData {
  slug: string;
  n: string;
  title: string;
  tagline: string;
  description: string[];
  deliverables: string[];
  stats: { value: string; label: string }[];
  accentColor: string;
  bgImage: string;
  related: string[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "interiors",
    n: "01",
    title: "Interiors",
    tagline: "Spaces that command presence.",
    description: [
      "SRP's interior design practice operates at the intersection of aesthetic ambition and operational precision. We don't simply furnish spaces — we architect environments that reflect brand identity, elevate employee experience, and endure the rigours of commercial use.",
      "Our in-house team of designers, project managers and craftsmen work in close collaboration from the first brief through to final snagging. Every material specification, lighting scheme and furniture selection is guided by both visual intent and long-term practicality.",
      "From boutique executive suites to multi-floor corporate campuses, our portfolio spans diverse typologies and scales — each delivered to the same exacting standard.",
    ],
    deliverables: [
      "Concept development & mood boarding",
      "Space planning & workflow optimisation",
      "Custom joinery and millwork",
      "Lighting design integration",
      "Furniture procurement & installation",
      "Final snagging and handover",
    ],
    stats: [
      { value: "200+", label: "Interior projects" },
      { value: "8 wks", label: "Average turnaround" },
      { value: "100%", label: "In-house execution" },
    ],
    accentColor: "#C9A66B",
    bgImage: "/services/interiors.jpg",
    related: ["commercial-spaces", "flooring", "turnkey-solutions"],
  },
  {
    slug: "commercial-spaces",
    n: "02",
    title: "Commercial Spaces",
    tagline: "Fit-outs built for how business actually works.",
    description: [
      "Modern commercial environments demand more than aesthetics — they must support evolving workflows, express brand culture and flex as organisations grow. SRP's commercial fit-out service delivers on all three dimensions simultaneously.",
      "We begin with a deep-dive discovery session to understand your operational model, headcount projections and brand positioning. This intelligence drives every decision — from structural modifications to furniture zoning and technology integration.",
      "Our end-to-end accountability means a single point of contact manages design, construction, MEP and compliance. You focus on business continuity while we deliver your space on time and within budget.",
    ],
    deliverables: [
      "Workplace strategy consulting",
      "Open-plan and cellular office design",
      "Partition and glazing systems",
      "Brand integration throughout",
      "AV and technology rough-ins",
      "Compliance and fire-safety coordination",
    ],
    stats: [
      { value: "150+", label: "Commercial fit-outs" },
      { value: "12 wks", label: "Typical programme" },
      { value: "Zero", label: "Cost overruns guarantee" },
    ],
    accentColor: "#8BAFC9",
    bgImage: "/services/commercial.jpg",
    related: ["interiors", "mep-solutions", "turnkey-solutions"],
  },
  {
    slug: "dark-stores",
    n: "03",
    title: "Dark Stores",
    tagline: "Engineered for throughput. Built for speed.",
    description: [
      "Quick commerce runs on operational velocity. SRP builds dark stores and fulfilment facilities that are purpose-engineered for the demands of 10-minute delivery — from racking layout to cold chain integration and staff flow optimisation.",
      "Our rapid-deploy methodology compresses the typical facility build timeline without compromising on compliance, safety or durability. We have delivered fully operational dark stores in as few as four weeks from lease signing.",
      "With experience across Tier-1 and Tier-2 cities, we understand the local regulatory landscape, landlord nuances and supply-chain constraints that can derail a fast-moving rollout programme.",
    ],
    deliverables: [
      "Site feasibility and rapid assessment",
      "Racking and shelving layout design",
      "Cold chain and refrigeration integration",
      "Staff and picker flow optimisation",
      "Fire suppression and compliance fitout",
      "Fast-track handover under 6 weeks",
    ],
    stats: [
      { value: "80+", label: "Dark stores delivered" },
      { value: "4 wks", label: "Minimum build time" },
      { value: "15+", label: "Cities operational" },
    ],
    accentColor: "#6BB5C9",
    bgImage: "/services/darkstores.jpg",
    related: ["mep-solutions", "commercial-spaces", "turnkey-solutions"],
  },
  {
    slug: "mep-solutions",
    n: "04",
    title: "MEP Solutions",
    tagline: "The systems that make a building perform.",
    description: [
      "Mechanical, electrical and plumbing engineering sits at the heart of every functioning building. SRP's in-house MEP division designs, procures and installs all building services — removing the coordination risk that plagues projects relying on multiple specialist subcontractors.",
      "Our engineers work alongside architects and interior designers from the earliest design stages, ensuring MEP routes, capacity and aesthetics are resolved before a single wall is opened. This integrated approach eliminates costly retrofits and delays.",
      "From complex HVAC systems and HT/LT power distribution to plumbing, drainage and BMS integration, our MEP capability covers the full spectrum of building services for commercial, retail and industrial typologies.",
    ],
    deliverables: [
      "HVAC design, supply and installation",
      "Electrical load calculation and distribution",
      "Plumbing, drainage and sanitation",
      "Fire detection and suppression systems",
      "Building Management System (BMS) integration",
      "Testing, commissioning and handover docs",
    ],
    stats: [
      { value: "300+", label: "MEP installations" },
      { value: "In-house", label: "Fully certified team" },
      { value: "0", label: "Third-party MEP contractors" },
    ],
    accentColor: "#C97B6B",
    bgImage: "/services/mep.png",
    related: ["commercial-spaces", "dark-stores", "turnkey-solutions"],
  },
  {
    slug: "flooring",
    n: "05",
    title: "Flooring",
    tagline: "Every surface finished to a premium standard.",
    description: [
      "Flooring anchors the entire aesthetic of a space while enduring the highest daily wear of any interior element. SRP's flooring division handles specification, procurement and installation of the full material range — from high-traffic epoxy industrial floors to bespoke luxury stone in executive environments.",
      "Our installation teams are factory-trained on every system they lay. Surface preparation is treated as a discipline in its own right: proper substrate assessment, moisture control and priming are non-negotiable steps that distinguish a fifteen-year floor from one that fails in fifteen months.",
      "We supply and install in volumes that deliver commercial pricing advantages — savings we pass directly to our clients without compromising on the brands or quality of materials specified.",
    ],
    deliverables: [
      "Substrate assessment and preparation",
      "Epoxy and polyurethane industrial floors",
      "Vitrified and ceramic tile installation",
      "Luxury vinyl tile (LVT) and SPC systems",
      "Natural stone and engineered wood",
      "Skirting, transition strips and edge detail",
    ],
    stats: [
      { value: "500k+", label: "Sq ft installed" },
      { value: "6", label: "Flooring system types" },
      { value: "15 yr", label: "Design life standard" },
    ],
    accentColor: "#C9B96B",
    bgImage: "/services/flooring.jpg",
    related: ["interiors", "painting", "turnkey-solutions"],
  },
  {
    slug: "painting",
    n: "06",
    title: "Painting",
    tagline: "Surface and finish, perfected.",
    description: [
      "Paint is the skin of a building — the element visitors read first and remember longest. SRP's painting division treats surface preparation and finish application as precision crafts, not afterthoughts.",
      "Our teams are trained in the full spectrum of architectural coatings: from standard emulsions and protective industrial paints to texture finishes, anti-bacterial formulations for healthcare environments and high-gloss lacquers for joinery and millwork.",
      "We work to tight quality standards on every project, with a multi-step inspection protocol that checks surface prep, priming, intermediate coats and final finish before any space is signed off.",
    ],
    deliverables: [
      "Surface inspection, filling and sanding",
      "Primer selection and application",
      "Interior emulsion and distemper",
      "Exterior weather-shield coatings",
      "Texture and decorative finish systems",
      "High-gloss joinery lacquer finishes",
    ],
    stats: [
      { value: "2M+", label: "Sq ft painted" },
      { value: "3-coat", label: "Minimum standard" },
      { value: "ISO", label: "Approved coating brands" },
    ],
    accentColor: "#C9886B",
    bgImage: "/services/painting.jpg",
    related: ["interiors", "flooring", "turnkey-solutions"],
  },
  {
    slug: "branding-solutions",
    n: "07",
    title: "Branding Solutions",
    tagline: "Identity built into every surface.",
    description: [
      "Effective commercial branding is not a vinyl sticker applied at the end of a project. SRP integrates signage, wayfinding and spatial branding into the build process itself — ensuring brand elements are structurally supported, electrically powered and positioned for maximum visual impact from day one.",
      "Our branding team works from your brand guidelines or directly with your identity agency to translate two-dimensional assets into three-dimensional spatial experiences. Illuminated fascias, dimensional lettering, branded feature walls and programmatic LED installations are all within our scope.",
      "In retail and hospitality environments where brand recognition is a commercial advantage, our integrated approach consistently outperforms solutions where branding is treated as a separate procurement.",
    ],
    deliverables: [
      "Signage strategy and wayfinding design",
      "Illuminated fascia and channel lettering",
      "Dimensional brand installations",
      "Vinyl graphics and wall murals",
      "Reception and lobby feature branding",
      "Programmatic LED and light box systems",
    ],
    stats: [
      { value: "120+", label: "Brand rollouts" },
      { value: "Pan-India", label: "Install coverage" },
      { value: "Integrated", label: "With core build" },
    ],
    accentColor: "#A36BC9",
    bgImage: "/services/branding.png",
    related: ["interiors", "commercial-spaces", "turnkey-solutions"],
  },
  {
    slug: "turnkey-solutions",
    n: "08",
    title: "Turnkey Solutions",
    tagline: "One team. One contract. Zero gaps.",
    description: [
      "The greatest risk in any complex construction project is the gap between disciplines — the moment where the interior designer points at the MEP contractor who points at the civil contractor and no one owns the problem. SRP's turnkey model eliminates that gap entirely.",
      "A single SRP project director holds accountability for design, civil works, interiors, MEP, flooring, painting and branding. One contract. One programme. One point of escalation. This structure has consistently delivered projects faster and under budget compared to the fragmented multi-contractor model.",
      "From project initiation through to key handover, our turnkey offering gives clients the clarity of a single relationship and the depth of a full-spectrum delivery organisation operating under one roof.",
    ],
    deliverables: [
      "Single-contract project delivery",
      "Design through to handover accountability",
      "Civil, interior and MEP integration",
      "Programme and budget ownership",
      "Weekly progress reporting dashboard",
      "Post-handover defect liability management",
    ],
    stats: [
      { value: "50+", label: "Turnkey projects" },
      { value: "100%", label: "On-time delivery record" },
      { value: "1", label: "Point of contact" },
    ],
    accentColor: "#C9A66B",
    bgImage: "/services/turnkey.png",
    related: ["interiors", "commercial-spaces", "mep-solutions"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return slugs
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter(Boolean) as ServiceData[];
}
