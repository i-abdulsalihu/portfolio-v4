Portfolio v4 — Abdullahi Salihu

Personal portfolio showcasing Web2 and Web3 frontend development work. Built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Sanity CMS.

Features
• App Router (Next.js 15)
• Server Actions & Streaming
• Type-safe forms with react-hook-form and zod
• Theme support via next-themes
• Motion using framer-motion and gsap
• CMS-backed content via Sanity Studio v3
• Optimized SEO, metadata, and Open Graph config
• Responsive, accessible UI with Radix UI

Getting Started

Clone the repo and install dependencies:

git clone https://github.com/i-abdulsalihu/portfolio-v4.git
cd portfolio-v4

# Install with your preferred package manager

npm install

# or

yarn

# or

pnpm install

# or

bun install

Run the development server:

npm run dev

Open http://localhost:3000 to view it in the browser.

Edit the content in app/, components in components/, and Sanity content in the connected Studio.

Environment Variables

Create a .env.local file in the root:

GMAIL_HOST=<your_gmail_host>
GMAIL_USER=<your_gmail_address>
GMAIL_PASS=<your_gmail_password>
DEMO_MAILTRAP=<mailtrap_url>

SANITY_API_READ_TOKEN=<your_sanity_token>
NEXT_PUBLIC_SANITY_PROJECT_ID=<your_sanity_project_id>
NEXT_PUBLIC_SANITY_DATASET=<your_sanity_dataset> # development or production

NEXT_PUBLIC_BASE_URL=<your_site_url>

Deployment

Deployed on Vercel. See Next.js deployment docs for configuration steps.

License

MIT

⸻

Built by Holiday
