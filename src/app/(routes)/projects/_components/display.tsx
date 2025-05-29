"use client";

import { CiGrid31 } from "react-icons/ci";
import { LuListTree } from "react-icons/lu";
import { type FC, useState } from "react";

import { Wrapper } from "@/components/shared/wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ImgModal from "./img-modal";
import ProjectList from "../../_components/project-list";
import ProjectCard from "../../_components/project-card";
import MotionTrigger from "@/components/shared/trigger";

const triggers = [
  {
    label: "List View",
    value: "list",
    icon: LuListTree,
  },
  {
    label: "Grid View",
    value: "grid",
    icon: CiGrid31,
  },
];

interface DisplayProps {
  projects: ProjectProps[];
}

const Display: FC<DisplayProps> = ({ projects }) => {
  const [imageModal, setImageModal] = useState<tImageModal>({
    active: false,
    index: 0,
  });

  return (
    <Wrapper className="border-b py-12 md:py-16 lg:py-20">
      <Tabs defaultValue="list" className="hidden md:block">
        <MotionTrigger y={10}>
          <TabsList className="border dark:border-transparent">
            {triggers.map((trigger, index) => (
              <TabsTrigger
                key={index}
                className="cursor-pointer"
                value={trigger.value}
              >
                <trigger.icon className="!size-4" />
                <span>{trigger.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </MotionTrigger>

        <div className="pt-10">
          <TabsContent value="grid">
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {projects.map((project, index) => (
                <MotionTrigger key={index} custom={index}>
                  <ProjectCard project={project} />
                </MotionTrigger>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="list">
            <div className="relative flex flex-col">
              {projects.map((project, index) => (
                <MotionTrigger
                  key={index}
                  custom={index}
                  className="border-b last-of-type:border-b-0"
                >
                  <ProjectList
                    project={project}
                    setModal={setImageModal}
                    index={index}
                  />
                </MotionTrigger>
              ))}
            </div>
            <ImgModal modal={imageModal} projects={projects} />
          </TabsContent>
        </div>
      </Tabs>

      <div className="grid w-full grid-cols-1 gap-6 md:hidden md:grid-cols-2 md:gap-8">
        {projects.map((project, index) => (
          <MotionTrigger key={index} custom={index}>
            <ProjectCard project={project} />
          </MotionTrigger>
        ))}
      </div>
    </Wrapper>
  );
};

export default Display;
