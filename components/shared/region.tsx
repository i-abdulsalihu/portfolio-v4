"use client";

import { Fragment, useEffect, useState } from "react";

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
    <p className="flex items-center flex-wrap gap-x-2 text-sm font-medium">
      {!currentRegion || !currentTime ? (
        <span className="tracking-wide">...</span>
      ) : (
        <Fragment>
          <span className="tracking-wide">{currentRegion}</span>
          <span className="uppercase tracking-wide">{currentTime}</span>
        </Fragment>
      )}
    </p>
  );
};

export default Region;
