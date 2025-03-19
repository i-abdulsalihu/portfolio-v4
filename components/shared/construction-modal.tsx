"use client";

import { CSSProperties, useEffect, useState } from "react";
import { Code, Cog, Layers, X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";

export function ConstructionModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if the user has seen the modal before
    const hasSeenModal = localStorage.getItem("hasSeenConstructionModal");

    if (!hasSeenModal) {
      setOpen(true);
      // Mark that the user has seen the modal
      localStorage.setItem("hasSeenConstructionModal", "true");
    }
  }, []);

  // Add this above return
  const spinStyle: CSSProperties = {
    ["--tw-spin-duration" as string]: "15s",
  };
  const reverseSpinStyle: CSSProperties = {
    ["--tw-spin-duration" as string]: "12s",
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg overflow-hidden !rounded-2xl border-0 bg-transparent p-0 shadow-none">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle />
            <DialogDescription />
          </DialogHeader>
        </VisuallyHidden>
        <div className="relative overflow-hidden !rounded-2xl border border-blue-700 bg-blue-900 text-blue-50 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          {/* Blueprint grid background */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(#4299e1 1px, transparent 1px), linear-gradient(90deg, #4299e1 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-3 top-3 z-10 text-blue-300 transition-colors hover:text-white"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>

          {/* Header with animated cog */}
          <div className="relative px-6 pt-8">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <Cog
                  className="animate-spin-slow h-12 w-12 text-blue-300"
                  style={spinStyle}
                />
                <Cog
                  className="animate-spin-reverse-slow absolute left-6 top-6 h-8 w-8 text-blue-400"
                  style={reverseSpinStyle}
                />
              </div>
            </div>

            <h2 className="flex items-center justify-center gap-2 text-center font-mono text-lg font-bold tracking-tight text-blue-100 sm:text-2xl">
              <Code className="size-5 text-blue-300" />
              <span>SITE.STATUS = &quot;IN_PROGRESS&quot;</span>
            </h2>

            <div className="mt-4 rounded-xl border border-blue-700/50 bg-blue-800/50 p-4 font-mono text-sm">
              <div className="flex items-start gap-3">
                <Layers className="mt-0.5 size-5 flex-shrink-0 text-blue-300" />
                <div>
                  <p className="mb-2 text-blue-100">
                    {"// Portfolio compilation in progress"}
                  </p>
                  <p className="text-xs leading-relaxed text-blue-300 sm:text-sm">
                    This portfolio is currently being assembled. Some components
                    may appear incomplete or function unexpectedly while
                    development continues.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 px-6 py-4">
            <div className="h-2 w-full overflow-hidden rounded-full bg-blue-800">
              <div className="h-full w-[65%] rounded-full bg-blue-400"></div>
            </div>
            <div className="mt-1 flex justify-between text-xs text-blue-400">
              <span>Development: 65%</span>
              <span>ETA: Soon™</span>
            </div>
          </div>

          {/* Footer */}
          <DialogFooter className="flex items-center justify-end bg-blue-950 p-5">
            <DialogClose
              onClick={() => setOpen(false)}
              className={buttonVariants({
                className:
                  "z-20 border-0 bg-blue-600 px-4 font-mono font-medium tracking-wide text-white hover:bg-blue-500",
              })}
            >
              Acknowledge
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
