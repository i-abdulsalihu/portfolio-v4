export const staggerAnimation = (y?: number) => ({
  initial: { opacity: 0, y: y ?? 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.9,
      type: "spring" as const,
    },
  }),
});

export const socials = [
  {
    label: "X (Twitter)",
    title: "View updates on X",
    url: "https://x.com/i_abdulsalihu",
    icon: "/svg/socials/twitter-x.svg",
  },
  {
    label: "LinkedIn",
    title: "Connect professionally on LinkedIn",
    url: "https://www.linkedin.com/mynetwork/discovery-see-all/?usecase=PEOPLE_FOLLOWS&followMember=abdullahisalihu",
    icon: "/svg/socials/linkedin.svg",
  },
  {
    label: "Facebook",
    title: "Follow my activity on Facebook",
    url: "https://web.facebook.com/i.abdulsalihu",
    icon: "/svg/socials/facebook.svg",
  },
  {
    label: "Telegram",
    title: "Start a conversation on Telegram",
    url: "https://t.me/i_abdulsalihu",
    icon: "/svg/socials/telegram.svg",
  },
  {
    label: "Instagram",
    title: "See photos and stories on Instagram",
    url: "https://www.instagram.com/i_abdulsalihu",
    icon: "/svg/socials/instagram.svg",
  },
];
