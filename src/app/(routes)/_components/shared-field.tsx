import { FC } from "react";
import { PortableText, PortableTextMarkComponentProps } from "next-sanity";

import { Wrapper } from "@/components/shared/wrapper";
import Subheading from "@/app/(routes)/_components/subheading";
import { sanityFetch } from "@/sanity/lib/live";
import MotionTrigger from "@/components/shared/trigger";
import { sharedAboutQuery } from "@/lib/queries";
import { formatDate } from "@/lib/utils";

const components = {
  marks: {
    link: ({ value, children }: PortableTextMarkComponentProps<any>) => {
      const { href, blank } = value;
      return (
        <a
          href={href}
          target={blank ? "_blank" : "_self"}
          rel={blank ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
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
        }: {
          _id: string;
          title: string;
          description: string;
          fromDate?: string;
          toDate?: string;
          keyPoints?: string[];
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
            <div className="bg-secondary flex flex-col gap-3 rounded-md p-4 sm:bg-transparent sm:p-0 lg:gap-4">
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
          </MotionTrigger>
        ),
      )}
    </Wrapper>
  );
};

export default SharedField;
