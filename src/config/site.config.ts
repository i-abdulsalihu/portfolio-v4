import { assertValue } from "@/lib/utils";

const siteUrl = assertValue(
  process.env.NEXT_PUBLIC_BASE_URL,
  "Missing environment variable: NEXT_PUBLIC_BASE_URL",
);

export const siteConfig = {
  default: {
    title: "Web3 Frontend Developer",
    description:
      "Providing frontend solutions that connect smoothly with smart contracts. I specialise on scalable, maintainable architectures for both Web2 and Web3 environments.",
  },
  about: {
    title: "Code, Context, Craft",
    description:
      "A deeper look into my technical background, tools of choice, and the mindset I bring to Frontend Development in the Blockchain ecosystem and beyond.",
  },
  projects: {
    title: "Proof of Work",
    description:
      "A selected collection of Web2 and Web3 projects showcasing practical uses of smart contract interaction, UI performance, and interface design.",
  },
  contact: {
    title: "Open to Collaborate",
    description:
      "Whether it's product development, technical consultancy, or interface design for dApps (Decentralized Applications), I'm open to new opportunities and challenges.",
  },
  url: siteUrl,
  handle: "i_abdulsalihu",
  favicon: "/images/logo-white-tb.png",
};
