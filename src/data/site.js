/**
 * All site content lives here. Edit this file to update text, links,
 * prices, projects and reviews — the components read from it.
 */

export const profile = {
  name: "Pijon Sarker",
  initials: "PS",
  role: "Lead Generation & Web Specialist",
  // Put your photo in /public (e.g. public/profile.jpg) and set photo: "./profile.jpg"
  photo: "",
  available: true,
};

export const links = {
  // Your public Fiverr profile or gig URL
  fiverr: "https://www.fiverr.com/",
  email: "hello@pijonsarker.com",
  // International format without "+" or spaces, e.g. "8801XXXXXXXXX". Leave "" to hide.
  whatsapp: "",
  linkedin: "",
  facebook: "",
  // Free form backend: create a form at https://formspree.io and paste the endpoint,
  // e.g. "https://formspree.io/f/abcdwxyz". When empty, the form opens the visitor's email app.
  formEndpoint: "",
};

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

// Update these to match your real Fiverr stats
export const stats = [
  { value: 7, suffix: "", label: "Core services" },
  { value: 24, suffix: "h", label: "Typical response time" },
  { value: 100, suffix: "%", label: "Manually checked data" },
  { value: 7, suffix: " days", label: "A week availability" },
];

export const services = [
  {
    icon: "building",
    title: "B2B Lead Generation",
    text: "Targeted decision-maker lists by industry, company size, job title and location, with verified business emails, phone numbers and LinkedIn profiles.",
    points: ["LinkedIn & Sales Navigator research", "Email finding & verification", "CRM-ready CSV / Excel / Google Sheets"],
  },
  {
    icon: "users",
    title: "B2C Lead Generation",
    text: "Consumer and local-business leads for real estate, e-commerce, coaching, home services and more, collected from public sources and cleaned for outreach.",
    points: ["Local business & Google Maps data", "Niche audience research", "Duplicate-free, segmented lists"],
  },
  {
    icon: "target",
    title: "Lead Generation & Prospect Research",
    text: "Custom prospect lists built around your ideal customer profile, so your sales team spends time selling instead of searching.",
    points: ["Ideal customer profile mapping", "Company & contact enrichment", "Web research & list building"],
  },
  {
    icon: "table",
    title: "Data Entry",
    text: "Fast, accurate data entry and data processing: copy-paste, PDF to Excel, product uploads, web research and spreadsheet cleanup.",
    points: ["Excel & Google Sheets", "PDF / image to spreadsheet", "Data cleaning & formatting"],
  },
  {
    icon: "megaphone",
    title: "Facebook Ads",
    text: "Facebook & Instagram ad campaigns that reach the right audience and drive leads and sales, set up, optimized and reported clearly.",
    points: ["Campaign & audience setup", "Pixel & conversion tracking", "A/B testing & optimization"],
  },
  {
    icon: "layout",
    title: "Website Design",
    text: "Modern, mobile-first website and landing page designs that look professional and are built to turn visitors into customers.",
    points: ["Landing pages & business sites", "Responsive on every device", "Clear, conversion-focused layout"],
  },
  {
    icon: "code",
    title: "Web Development",
    text: "Fast, secure and SEO-friendly websites built with React, HTML, CSS, JavaScript or WordPress, ready to launch.",
    points: ["React, JavaScript & WordPress", "Speed & on-page SEO basics", "Bug fixes & site updates"],
  },
];

export const tools = [
  "LinkedIn Sales Navigator",
  "Apollo.io",
  "Hunter.io",
  "ZoomInfo",
  "Google Maps",
  "Meta Ads Manager",
  "Excel",
  "Google Sheets",
  "WordPress",
  "React",
  "Figma",
  "Canva",
];

export const workFilters = [
  { id: "all", label: "All" },
  { id: "leads", label: "Lead Generation" },
  { id: "data", label: "Data Entry" },
  { id: "ads", label: "Facebook Ads" },
  { id: "web", label: "Web" },
];

// Replace these with your real work samples.
// Optional: add `image: "./work/my-project.jpg"` (file in /public/work) and `link: "https://..."`
export const projects = [
  {
    category: "leads",
    icon: "building",
    tag: "B2B Lead Generation",
    title: "SaaS decision-maker list",
    text: "Built a list of C-level and VP contacts at US software companies (50–500 employees) with verified emails and LinkedIn URLs.",
    tools: ["Sales Navigator", "Apollo", "Email verification"],
  },
  {
    category: "leads",
    icon: "users",
    tag: "B2C Lead Generation",
    title: "Local business leads for an agency",
    text: "Collected and cleaned contact data for restaurants, salons and clinics across multiple cities for a marketing agency's outreach campaign.",
    tools: ["Google Maps", "Web research", "Google Sheets"],
  },
  {
    category: "data",
    icon: "table",
    tag: "Data Entry",
    title: "Product catalog upload",
    text: "Converted supplier PDFs into a structured spreadsheet and uploaded products with titles, prices, SKUs and images to an online store.",
    tools: ["Excel", "PDF conversion", "E-commerce"],
  },
  {
    category: "ads",
    icon: "megaphone",
    tag: "Facebook Ads",
    title: "Lead-form campaign for a local service",
    text: "Set up pixel tracking, audiences and lead-form ads, then tested creatives and copy to lower the cost per lead over the campaign.",
    tools: ["Meta Ads Manager", "Pixel", "A/B testing"],
  },
  {
    category: "web",
    icon: "layout",
    tag: "Website Design",
    title: "Landing page for a consulting firm",
    text: "Designed a clean, conversion-focused landing page with clear service sections, trust signals and a lead-capture form.",
    tools: ["Figma", "Responsive design", "Copy layout"],
  },
  {
    category: "web",
    icon: "code",
    tag: "Web Development",
    title: "Small business website build",
    text: "Developed a fast, mobile-friendly business website with a contact form, on-page SEO and easy-to-update content.",
    tools: ["React", "WordPress", "SEO basics"],
  },
];

export const reasons = [
  { icon: "shield", title: "Accuracy first", text: "Data is researched and checked by hand, with duplicates and invalid contacts removed before delivery." },
  { icon: "clock", title: "On-time delivery", text: "Realistic deadlines that I meet, with progress updates on larger orders." },
  { icon: "chat", title: "Clear communication", text: "Quick replies, simple English and no surprises. You always know where your project stands." },
  { icon: "refresh", title: "Revisions included", text: "If something isn't right, I'll fix it. Your satisfaction is the goal of every order." },
];

export const steps = [
  { title: "Share your goal", text: "Message me with your target audience, project details and deadline." },
  { title: "Get a plan", text: "I confirm the scope, sources, format and delivery date before any work starts." },
  { title: "I get to work", text: "Research, data collection, ads or development, done carefully with updates along the way." },
  { title: "Delivery & support", text: "You receive ready-to-use files or a live result, plus revisions if anything needs changing." },
];

// Update prices and features to match your Fiverr gig packages
export const packages = [
  {
    name: "Basic",
    price: 15,
    desc: "Great for testing a new market.",
    features: ["100 targeted leads", "Name, title, company, email", "LinkedIn profile URLs", "Excel / CSV / Google Sheets", "2-day delivery"],
  },
  {
    name: "Standard",
    price: 40,
    desc: "For steady outreach campaigns.",
    featured: true,
    features: ["300 targeted leads", "Verified business emails", "Phone numbers where available", "Company website & size", "3-day delivery"],
  },
  {
    name: "Premium",
    price: 80,
    desc: "For sales teams that need volume.",
    features: ["700 targeted leads", "Verified emails & phones", "Full company enrichment", "Segmented & CRM-ready", "5-day delivery"],
  },
];

// Add your REAL Fiverr reviews here, for example:
// { name: "client_username", country: "United States", service: "B2B Lead Generation", rating: 5, text: "..." }
// The section shows a "See reviews on Fiverr" button until you add some.
export const reviews = [];

export const faqs = [
  {
    q: "Where do your leads come from?",
    a: "I research leads manually from public and professional sources such as LinkedIn, Sales Navigator, company websites, business directories and Google Maps, then verify contact details with trusted tools.",
  },
  {
    q: "Are the emails verified?",
    a: "Yes. Emails are checked with verification tools and invalid or risky addresses are removed before delivery, so your bounce rate stays low.",
  },
  {
    q: "What format will I receive the data in?",
    a: "Excel, CSV or Google Sheets, whichever you prefer. I can also match the column layout of your CRM (HubSpot, Salesforce, Pipedrive and others).",
  },
  {
    q: "Can I get a free sample before ordering?",
    a: "Yes. Send me your target criteria and I'll share a small sample so you can check the quality before placing a bigger order.",
  },
  {
    q: "Do you manage Facebook Ads budgets?",
    a: "Your ad budget is paid directly to Meta from your own ad account. I handle the setup, targeting, creatives, optimization and reporting.",
  },
  {
    q: "How long does a website take?",
    a: "A landing page usually takes 3–5 days and a multi-page business website 1–2 weeks, depending on content and features.",
  },
];

export const contactServices = [
  "B2B Lead Generation",
  "B2C Lead Generation",
  "Data Entry",
  "Facebook Ads",
  "Website Design",
  "Web Development",
  "Something else",
];
