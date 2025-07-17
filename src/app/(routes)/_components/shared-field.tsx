import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineDownload } from "react-icons/hi";
import { PortableText, PortableTextMarkComponentProps } from "next-sanity";

import { formatDate } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/live";
import { sharedAboutQuery } from "@/lib/queries";
import { Wrapper } from "@/components/shared/wrapper";
import MotionTrigger from "@/components/shared/trigger";
import Subheading from "@/app/(routes)/_components/subheading";
import { glimpse } from "@/components/ui/kibo-ui/glimpse/server";
import {
  Glimpse,
  GlimpseContent,
  GlimpseDescription,
  GlimpseImage,
  GlimpseTitle,
  GlimpseTrigger,
} from "@/components/ui/kibo-ui/glimpse";

const components = {
  marks: {
    link: async ({ value, children }: PortableTextMarkComponentProps<any>) => {
      const { href, blank } = value;
      const data = await glimpse(href);

      return (
        <Glimpse closeDelay={0} openDelay={0}>
          <GlimpseTrigger asChild>
            <a
              href={href}
              target={blank ? "_blank" : "_self"}
              rel={blank ? "noopener noreferrer" : undefined}
              className="md:!cursor-none"
            >
              {children}
            </a>
          </GlimpseTrigger>
          <GlimpseContent className="w-80">
            {data.image && (
              <GlimpseImage
                src={data.image as string}
                alt={data.title as string}
              />
            )}
            <GlimpseTitle>{data.title}</GlimpseTitle>
            <GlimpseDescription>{data.description}</GlimpseDescription>
          </GlimpseContent>
        </Glimpse>
      );
    },
  },
};

const SharedField: FC<SharedFieldProps> = async ({
  title,
  subtitle,
  path,
  limit,
  type,
}) => {
  if (!type) return;

  const { data: response } = await sanityFetch({
    query: sharedAboutQuery(type, limit),
  });

  if (!response.length) return null;

  return (
    <Wrapper grid className="border-b py-12 md:py-16 lg:py-20">
      <Subheading title={title} subtitle={subtitle} path={path} />

      {response.map(
        ({
          fromDate,
          toDate,
          description,
          keyPoints,
          title: label,
          _id,
          documents,
        }: {
          _id: string;
          title: string;
          description: string;
          fromDate?: string;
          toDate?: string;
          keyPoints?: Array<string>;
          documents?: Array<{
            _key: string;
            asset: {
              _id: string;
              url: string;
            };
          }>;
        }) => (
          <MotionTrigger key={_id} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5 sm:gap-1">
              <p className="text-base font-medium tracking-wide md:text-lg">
                {label}
              </p>

              {fromDate && (
                <p className="text-xs font-medium uppercase opacity-80">
                  <span>{formatDate(fromDate)}</span>
                  {toDate ? (
                    <span> - {formatDate(toDate)}</span>
                  ) : (
                    <span> - Till Date</span>
                  )}
                </p>
              )}
            </div>
            <div className="bg-secondary flex flex-col gap-3 rounded-xl p-4 sm:bg-transparent sm:p-0 lg:gap-4">
              <div className="text-sm leading-6 font-normal tracking-wide sm:text-base sm:leading-7">
                {Array.isArray(description) && (
                  <PortableText value={description} components={components} />
                )}
              </div>

              {keyPoints && (
                <ul className="flex flex-col gap-1 pl-4">
                  {keyPoints?.map((point, index) => (
                    <li
                      key={index}
                      className="list-disc text-sm leading-6 font-normal tracking-wide sm:text-base sm:leading-7"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {documents && documents?.length > 0 && (
              <div className="grid max-w-xs grid-cols-2 gap-x-0.5 gap-y-1.5 sm:!gap-0">
                {documents.map((document, index) => (
                  <Link
                    target="_blank"
                    href={document?.asset?.url}
                    key={document._key ?? index}
                    className="group relative -mt-4 -mb-[22px] -ml-1.5 size-auto"
                  >
                    <Image
                      src="/svg/certificate.svg"
                      alt={title}
                      width={1100}
                      height={800}
                      priority
                      quality={100}
                      className="pointer-events-none select-none"
                    />

                    <div className="absolute top-0 left-0 flex size-full items-center justify-center bg-transparent backdrop-blur-none transition-all duration-200 sm:group-hover:backdrop-blur-[2px] dark:group-hover:bg-black/30">
                      <div className="flex size-14 items-center justify-center rounded-full bg-black/50 transition-all delay-75 duration-200 group-hover:scale-100 sm:scale-0">
                        <HiOutlineDownload className="!size-6 text-white" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </MotionTrigger>
        ),
      )}
    </Wrapper>
  );
};

export default SharedField;
