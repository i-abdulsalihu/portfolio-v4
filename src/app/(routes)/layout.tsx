import { Fragment, ReactNode } from "react";

import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import Cursor from "@/components/shared/cursor";

export default function AppLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Fragment>
      <Header />
      <Cursor />
      <main className="flex-1">{children}</main>
      <Footer />
    </Fragment>
  );
}
