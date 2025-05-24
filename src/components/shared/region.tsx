"use client";

import { Fragment, useEffect, useState } from "react";

import MotionTrigger from "./trigger";

const Region = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentRegion, setCurrentRegion] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const time = now.toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      const timeZone = "Africa/Lagos";
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone,
        timeZoneName: "shortOffset",
      });

      const regionWithOffset = formatter
        .formatToParts(now)
        .reduce((acc, part) => {
          if (part.type === "timeZoneName") {
            return part.value;
          }
          return acc;
        }, "");

      setCurrentRegion(`West Africa Standard Time (${regionWithOffset})`);
      setCurrentTime(time);
    };
    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <MotionTrigger
      y={0}
      className="flex flex-wrap items-center gap-x-2 text-xs font-normal sm:text-sm"
    >
      {!currentRegion || !currentTime ? (
        <span className="tracking-wide">...</span>
      ) : (
        <Fragment>
          <span className="tracking-wide">{currentRegion}</span>
          <span className="tracking-wide uppercase">{currentTime}</span>
        </Fragment>
      )}
    </MotionTrigger>
  );
};

export default Region;
