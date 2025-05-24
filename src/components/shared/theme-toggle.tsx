"use client";

import * as React from "react";
import { FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { PiDevices } from "react-icons/pi";
import { PiCloudMoonDuotone } from "react-icons/pi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/mobile";
import { cn } from "@/lib/utils";
import MotionTrigger from "./trigger";

const themeItems = [
  {
    value: "light",
    label: "Light Theme",
    icon: FiSun,
  },
  {
    value: "dark",
    label: "Dark Theme",
    icon: PiCloudMoonDuotone,
  },
  {
    value: "system",
    label: "System Theme",
    icon: PiDevices,
  },
];

const ThemeToggle = () => {
  const isMobile = useIsMobile();

  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MotionTrigger y={0}>
          <Button
            variant={"outline"}
            size="icon"
            className="size-11 rounded-full"
          >
            <FiSun className="!size-[18px] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <PiCloudMoonDuotone className="absolute !size-[18px] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </MotionTrigger>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isMobile ? "center" : "end"}
        className={cn("mt-2", { "mr-5": isMobile })}
      >
        {themeItems.map((item) => (
          <DropdownMenuCheckboxItem
            key={item.value}
            checked={theme === item.value}
            onCheckedChange={() => setTheme(item.value)}
          >
            <item.icon className="mr-2 !size-5" />
            {item.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
