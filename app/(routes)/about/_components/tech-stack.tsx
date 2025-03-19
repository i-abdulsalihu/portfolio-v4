import SectionHeading from "@/app/_components/section-heading";
import Img from "@/components/shared/img";
import { Wrapper } from "@/components/shared/wrapper";
import { sanityFetch } from "@/lib/live";
import { cn, urlFor } from "@/lib/utils";
import Link from "next/link";

const TechStack = async ({ title }: { title: string }) => {
  const result = await sanityFetch({
    query: `*[_type == "techStack"]{
                _id,
                name,
                techItems[]{
                    _key,
                    name,
                    icon,
                    url
                }
            }`,
  });

  const response: StackProps[] = result.data;

  if (!response.length) return null;

  const sortedResponse = response.sort((a, b) => {
    if (a.name.toLowerCase() === "apis") return 1;
    if (b.name.toLowerCase() === "apis") return -1;
    return a.name.localeCompare(b.name);
  });

  return (
    <Wrapper grid className="border-b lg:!py-20">
      <SectionHeading title={title} />

      <div className="flex flex-col gap-8">
        <div className="grid w-full grid-cols-1 gap-8 xl:grid-cols-2">
          {sortedResponse.map((stack: StackProps) => (
            <div
              key={stack._id}
              className={cn("flex flex-col gap-2", {
                "xl:col-span-2": stack.name.toLowerCase() === "apis",
              })}
            >
              <div className="group relative flex h-12 items-center justify-center border-x border-foreground/30 bg-secondary">
                {Array.from({ length: 4 }).map((_, _key) => (
                  <span
                    key={_key}
                    className="absolute h-px w-2 bg-foreground/30 [&:nth-child(1)]:left-0 [&:nth-child(1)]:top-0 [&:nth-child(2)]:bottom-0 [&:nth-child(2)]:left-0 [&:nth-child(3)]:bottom-0 [&:nth-child(3)]:right-0 [&:nth-child(4)]:right-0 [&:nth-child(4)]:top-0"
                  />
                ))}
                <p className="text-xs font-medium uppercase tracking-wider">
                  {stack.name}
                </p>
              </div>

              <div
                className={cn(
                  "grid grid-cols-5 gap-2 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4",
                  {
                    "xl:grid-cols-8": stack.name.toLowerCase() === "apis",
                  },
                )}
              >
                {stack.techItems.map((item) => {
                  const imageIcon = item.icon ? urlFor(item.icon)?.url() : null;

                  return (
                    <Link
                      target="_blank"
                      key={item._key}
                      data-cursor="pointer"
                      href={item.url ?? "/"}
                      title={item.name}
                      className="group relative flex aspect-square w-full flex-col items-center justify-center gap-1.5 bg-secondary px-1 py-2 md:gap-2"
                    >
                      {Array.from({ length: 4 }).map((_, _key) => (
                        <span
                          key={_key}
                          className="absolute h-px w-2 bg-foreground/30 [&:nth-child(1)]:left-0 [&:nth-child(1)]:top-0 [&:nth-child(2)]:bottom-0 [&:nth-child(2)]:left-0 [&:nth-child(3)]:bottom-0 [&:nth-child(3)]:right-0 [&:nth-child(4)]:right-0 [&:nth-child(4)]:top-0"
                        />
                      ))}
                      <Img
                        src={imageIcon ?? "/svg/placeholder.svg"}
                        alt={item.name}
                        width={32}
                        height={32}
                        priority
                        quality={100}
                        className="pointer-events-none size-8 origin-top object-contain transition-transform duration-300 lg:scale-110 lg:group-hover:scale-75 xl:scale-100"
                      />
                      <p className="whitespace-nowrap text-[10px] font-medium leading-none tracking-wide transition-transform duration-300 md:text-xs lg:absolute lg:bottom-3 lg:scale-0 lg:group-hover:scale-100 xl:bottom-1 xl:text-[10px]">
                        {item.name}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs font-medium uppercase leading-5 tracking-wider opacity-80">
          Just a heads-up-I haven&apos;t used most of these in my projects{" "}
          <br />
          but I do have experience with them.
        </p>
      </div>
    </Wrapper>
  );
};

export default TechStack;
