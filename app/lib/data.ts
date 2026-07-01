export type Service = {
  slug: string;
  title: string;
  short: string;
  body: string;
  tone: string;
  image?: string;
};

export type Project = {
  no: string;
  title: string;
  tag: string;
  tone: string;
  image?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  tone: string;
};

export type Post = {
  category: string;
  title: string;
  excerpt: string;
  tone: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const SERVICES: Service[] = [
  {
    slug: "residential",
    title: "Residential Interior Design",
    short:
      "Homes that balance warmth and function — living rooms, bedrooms, kitchens, and everything between.",
    body: "We design homes around the way you actually live. From the first mood board to the final cushion, every room is shaped to your rhythm, your light, and your taste — warm, functional, and unmistakably yours.",
    tone: "from-[#b69b73] to-[#8a6f48]",
    image: "/service_residential_cutout.png",
  },
  {
    slug: "commercial",
    title: "Commercial Interior Design",
    short:
      "Offices, retail, and hospitality spaces designed to impress clients and energize teams.",
    body: "Spaces that work as hard as you do. We craft offices, stores, and hospitality interiors that reflect your brand, support your team, and leave a lasting impression on everyone who walks in.",
    tone: "from-[#9a8a76] to-[#6b5d4c]",
    image: "/service_commercial_cutout.png",
  },
  {
    slug: "space-planning",
    title: "Space Planning & Layout Design",
    short:
      "Smart floor plans that maximize every square foot, with flow and natural light at the core.",
    body: "Great interiors start with a great plan. We study how you move, gather, and rest, then design layouts that make every square foot count — with flow, natural light, and storage at the heart of it.",
    tone: "from-[#c2a888] to-[#947a58]",
    image: "/service_space_cutout.png",
  },
  {
    slug: "turnkey",
    title: "Turnkey Interior Solutions",
    short:
      "We handle design, sourcing, and execution end-to-end. You get the keys to a finished space.",
    body: "One team, start to finish. We manage design, sourcing, vendors, and on-site execution so you don't have to coordinate a thing. You simply walk into a finished, move-in-ready space.",
    tone: "from-[#a8927a] to-[#71604c]",
    image: "/service_turnkey_cutout.png",
  },
  {
    slug: "custom-furniture",
    title: "Custom Furniture & Styling",
    short:
      "Bespoke pieces and curated styling that give your space a signature, one-of-a-kind character.",
    body: "The finishing touch that makes a space sing. We design bespoke furniture and curate styling — art, textiles, lighting — that give your interiors a signature character no catalogue can match.",
    tone: "from-[#b9a17f] to-[#86714f]",
    image: "/service_furniture_cutout.png",
  },
];

export const PROJECTS: Project[] = [
  { no: "01", title: "Gupta Residence", tag: "Drawing Room", tone: "from-[#7a6248] to-[#3f3327]", image: "/project-gupta.jpg" },
  { no: "02", title: "Aurelia Cafe", tag: "Hospitality", tone: "from-[#8a7256] to-[#4a3a2b]", image: "/project-cafe.jpg" },
  { no: "03", title: "Bliss Studio", tag: "Makeup & Salon", tone: "from-[#9d8466] to-[#534333]", image: "/project-bliss.jpg" },
  { no: "04", title: "The Plant Story", tag: "Retail", tone: "from-[#6f7a5a] to-[#3a4030]", image: "/project-cafe.jpg" },
  { no: "05", title: "Sunrise Villa", tag: "Residential", tone: "from-[#b59a76] to-[#6b5742]", image: "/project-gupta.jpg" },
  { no: "06", title: "Meridian Offices", tag: "Commercial", tone: "from-[#8a7d6a] to-[#4a4135]", image: "/project-bliss.jpg" },
];

export const TEAM: TeamMember[] = [
  { name: "Aarti Sharma", role: "Founder & Principal Designer", tone: "from-[#a8927a] to-[#6b5742]" },
  { name: "Imran Sheikh", role: "Director of Architecture", tone: "from-[#8a7d6a] to-[#54493b]" },
  { name: "Priya Nair", role: "Lead Interior Stylist", tone: "from-[#b59a76] to-[#7a6248]" },
  { name: "Karan Singh", role: "Project & Execution Head", tone: "from-[#9d8a72] to-[#5f5040]" },
  { name: "Divya Rao", role: "Space Planning Specialist", tone: "from-[#bda584] to-[#85714e]" },
  { name: "Aman Gupta", role: "Client Relations", tone: "from-[#a39079] to-[#665544]" },
];

export const POSTS: Post[] = [
  {
    category: "Tips & Tricks",
    title: "Five small changes that make a room feel twice as large",
    excerpt:
      "Light, mirrors, and the right scale of furniture can transform how spacious a room feels — without knocking down a single wall.",
    tone: "from-[#b69b73] to-[#7a6248]",
  },
  {
    category: "Company Insights",
    title: "How we plan a turnkey project from brief to handover",
    excerpt:
      "A look behind the scenes at our process — the steps, the decisions, and the people that take a project from idea to finished space.",
    tone: "from-[#8a7256] to-[#4a3a2b]",
  },
  {
    category: "Trends",
    title: "Warm minimalism: the look defining homes this year",
    excerpt:
      "Pared-back, but never cold. We unpack the materials, tones, and textures behind the warm-minimalist look everyone's asking for.",
    tone: "from-[#9d8466] to-[#534333]",
  },
  {
    category: "Tips & Tricks",
    title: "Choosing a colour palette you won't tire of",
    excerpt:
      "Trends fade, but a well-built palette lasts. Here's how we layer neutrals and accents for interiors that age gracefully.",
    tone: "from-[#a8927a] to-[#71604c]",
  },
  {
    category: "Office",
    title: "Designing workspaces people actually want to return to",
    excerpt:
      "The post-remote office has to earn the commute. We share what makes a workspace feel worth showing up for.",
    tone: "from-[#8a7d6a] to-[#4a4135]",
  },
  {
    category: "Global",
    title: "Lessons in craft from interiors around the world",
    excerpt:
      "From Japanese joinery to Mediterranean light, a few ideas we keep coming back to in our own work.",
    tone: "from-[#bda584] to-[#85714e]",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Aarti transformed our apartment into a home that feels like us. The process was calm, organized, and genuinely enjoyable.",
    name: "Ananya Mehta",
    role: "Homeowner",
  },
  {
    quote:
      "They understood our brand instantly and designed an office our team loves walking into every morning.",
    name: "Rahul Verma",
    role: "Startup Founder",
  },
  {
    quote:
      "From layout to the last cushion, every choice felt intentional. Worth every rupee and every minute.",
    name: "Sneha Kapoor",
    role: "Boutique Owner",
  },
];

export const ROADMAP = [
  { title: "You found us!", body: "It starts here. You reach out, and we begin to understand what you're looking for." },
  { title: "Let's talk", body: "A relaxed conversation about your space, your needs, your budget, and your vision." },
  { title: "Site visit & evaluation", body: "We see the space in person, take measurements, and study the light and flow." },
  { title: "Concept, proposal & agreement", body: "We present a direction, a clear proposal, and a transparent agreement." },
  { title: "Design development", body: "Layouts, materials, and 3D views come together into a final, detailed design." },
  { title: "Execution begins", body: "Our team manages vendors, craftsmen, and timelines on the ground." },
  { title: "Handover & final styling", body: "We style the finished space and hand you the keys to a room that feels complete." },
];

export const STATS = [
  { end: 9, suffix: "+", label: "design specialists" },
  { end: 10, suffix: "+", label: "years of experience" },
  { end: 94, suffix: "+", label: "projects done" },
];

export const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Projects", href: "/projects" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const CONTACT = {
  phone: "+91 82096 48144",
  phoneHref: "tel:+918209648144",
  email: "hello@aartifurniture.com",
  location: "Jaipur, Rajasthan, India",
};
