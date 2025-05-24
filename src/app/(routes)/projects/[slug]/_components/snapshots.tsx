"use client";

import { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Img from "@/components/shared/img";
import { Wrapper } from "@/components/shared/wrapper";

// Dynamic import of LightGallery to avoid server-side overhead
const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

// Styles
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";

// Plugins
import { urlFor } from "@/sanity/lib/image";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

interface SnapshotsProps {
  snapshots: SanityImageAsset[];
}

const Snapshots: FC<SnapshotsProps> = ({ snapshots }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Wrapper className="border-b py-12 md:py-16 lg:py-20">
      {mounted && (
        <LightGallery
          mode="lg-fade"
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="columns-1 gap-4 md:columns-2 lg:columns-3"
        >
          {snapshots.map((snapshot, index) => {
            const snapshotUrl = snapshot ? urlFor(snapshot)?.url() : null;

            return (
              <a href={snapshotUrl ?? "/svg/placeholder.svg"} key={index}>
                <div
                  data-cursor="pointer"
                  className="group dark:bg-secondary shadow-foreground/15 relative mb-4 w-full break-inside-avoid overflow-hidden rounded-[30px] border p-1 shadow-lg transition-all duration-300 dark:shadow-black"
                >
                  <div className="group bg-secondary relative overflow-hidden rounded-[25px]">
                    <Img
                      src={snapshotUrl ?? "/svg/placeholder.svg"}
                      alt="snapshot"
                      width={1200}
                      height={1200}
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </LightGallery>
      )}
    </Wrapper>
  );
};

export default Snapshots;
