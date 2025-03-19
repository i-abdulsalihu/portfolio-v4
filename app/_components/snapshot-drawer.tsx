import { FC, ReactNode } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Wrapper } from "@/components/shared/wrapper";
import { urlFor } from "@/lib/utils";
import Img from "@/components/shared/img";

interface SnapshotDrawerProps {
  children: ReactNode;
  project: ProjectPropType;
  snapshot: {
    _key: string;
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
    alt: string;
  };
}

const SnapshotDrawer: FC<SnapshotDrawerProps> = ({ children, snapshot }) => {
  const shot = snapshot ? urlFor(snapshot)?.url() : null;

  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="h-[90vh] overflow-y-auto">
        <Wrapper grid>
          <VisuallyHidden>
            <DrawerHeader>
              <DrawerTitle />
              <DrawerDescription />
            </DrawerHeader>
          </VisuallyHidden>

          <div className="group relative mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-xl border md:mb-6">
            <Img
              src={shot ?? "/svg/placeholder.svg"}
              alt={snapshot.alt}
              width={1200}
              height={1200}
            />
          </div>

          <div className="flex flex-col">
            <p className="text-base font-normal leading-7 tracking-wide">
              {snapshot.alt}
            </p>
          </div>
        </Wrapper>
      </DrawerContent>
    </Drawer>
  );
};

export default SnapshotDrawer;
