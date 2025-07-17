import { Fragment, ReactNode } from "react";

import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export default function AppLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Fragment>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </Fragment>
  );
}
