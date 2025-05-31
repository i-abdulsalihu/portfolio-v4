import { Wrapper } from "@/components/shared/wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-dvh items-center justify-center">
      <Wrapper className="flex flex-col items-center justify-center gap-10 pt-10 pb-12 text-center sm:pb-16 lg:pt-20 lg:pb-32">
        <h1 className="font-['Cabin_Sketch'] text-[12vw] leading-[12vw] sm:text-[8vw] sm:leading-[8vw] md:text-[4vw] md:leading-[4vw]">
          404 <br />
          <small>Page Not Found</small>
        </h1>
        <Link href="/">
          <Button variant={"secondary"} size={"lg"}>
            Go Home
          </Button>
        </Link>
      </Wrapper>
    </div>
  );
}
