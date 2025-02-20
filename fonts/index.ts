import localFont from "next/font/local";

export const fontSans = localFont({
  src: [
    {
      path: "./RebondGrotesque/ESRebondGrotesqueTRIAL-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./RebondGrotesque/ESRebondGrotesqueTRIAL-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./RebondGrotesque/ESRebondGrotesqueTRIAL-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./RebondGrotesque/ESRebondGrotesqueTRIAL-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./RebondGrotesque/ESRebondGrotesqueTRIAL-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

export const fontSerif = localFont({
  src: [
    {
      path: "./Signifier/Signifier-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Signifier/Signifier-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Signifier/Signifier-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Signifier/Signifier-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-serif",
});

export const fontLogo = localFont({
  src: [
    {
      path: "./Caveat/Caveat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Caveat/Caveat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Caveat/Caveat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Caveat/Caveat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-logo",
});
