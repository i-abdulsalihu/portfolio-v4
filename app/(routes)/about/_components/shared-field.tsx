import { PortableText } from "next-sanity";

import { SHARED_ABOUT_QUERY } from "@/lib/groq";
import { sanityFetch } from "@/lib/live";
import { formatDate } from "@/lib/utils";
import { Wrapper } from "@/components/shared/wrapper";
import SectionHeading from "@/app/_components/section-heading";

const SharedField: React.FC<SharedFieldProps> = async ({
  title,
  type,
  limit,
  path,
  subtitle,
}) => {
  if (!type) return;

  const { data: response } = await sanityFetch({
    query: SHARED_ABOUT_QUERY(type, limit),
  });

  if (!response.length) return null;

  return (
    <Wrapper grid className="border-b lg:!py-20">
      <SectionHeading title={title} path={path} subtitle={subtitle} />

      <div className="flex flex-col gap-6 sm:gap-8">
        {response.map(
          ({
            fromDate,
            toDate,
            description,
            keyPoints,
            title: label,
            _id,
          }: SharedFieldsType) => {
            return (
              <div key={_id} className="flex flex-col gap-3 lg:gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-base font-medium tracking-wide md:text-lg">
                    {label}
                  </p>
                  {fromDate && (
                    <p className="text-xs font-medium uppercase tracking-wider opacity-80">
                      <span>{formatDate(fromDate)}</span>
                      {toDate ? (
                        <span> - {formatDate(toDate)}</span>
                      ) : (
                        <span> - Till Date</span>
                      )}
                    </p>
                  )}
                </div>
                <div className="text-base font-normal leading-7 tracking-wide sm:leading-6">
                  {Array.isArray(description) && (
                    <PortableText value={description} />
                  )}
                </div>

                {keyPoints && (
                  <ul className="flex flex-col pl-4">
                    {keyPoints?.map((point, _index) => (
                      <li
                        key={_index}
                        className="list-disc text-base font-normal leading-6 tracking-wide"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          },
        )}
      </div>
    </Wrapper>
  );
};

export default SharedField;
