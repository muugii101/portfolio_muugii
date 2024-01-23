"use client";
import React, { useState, useEffect } from "react";
import { Cursor } from "react-custom-cursors";
import { isMobile } from "react-device-detect";

export function CustomCursor() {
  const [cursorShow, setCursorShow] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCursorShow(true);
    }, 500);

    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <>
      {cursorShow && (
        <>
          {!isMobile && (
            <Cursor
              hasDot
              isHollow
              color={"#fff"}
              dotColor={"#fff"}
              size="xl"
              hoveringAnimation="magnify"
            />
          )}
        </>
      )}
    </>
  );
}
