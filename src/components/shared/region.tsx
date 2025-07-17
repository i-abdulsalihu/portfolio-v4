"use client";

import * as React from "react";
import MotionTrigger from "./trigger";

const Region = () => {
  const [currentTime, setCurrentTime] = React.useState("");
  const [currentDate, setCurrentDate] = React.useState("");
  const [currentRegion, setCurrentRegion] = React.useState("");

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const time = now.toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      const date = now.toLocaleDateString("en-GB", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Lagos",
        timeZoneName: "shortOffset",
      });

      const offset =
        formatter
          .formatToParts(now)
          .find((part) => part.type === "timeZoneName")?.value || "";

      setCurrentRegion(`WAT ${offset}`);
      setCurrentTime(time);
      setCurrentDate(date);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <MotionTrigger
      y={0}
      className="flex flex-wrap items-center gap-x-2 text-[13px] font-normal sm:text-sm"
    >
      {!currentRegion || !currentTime || !currentDate ? (
        <span className="tracking-wide">...</span>
      ) : (
        <span className="tracking-wide">
          <time dateTime={new Date().toISOString()}>
            {currentDate} {currentTime} {currentRegion}
          </time>
        </span>
      )}
    </MotionTrigger>
  );
};

export default Region;
