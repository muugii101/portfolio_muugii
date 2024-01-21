"use client";
import React from "react";
import { Cursor } from "react-custom-cursors";

export function CustomCursor() {
  return (
    <Cursor
      hasDot
      isHollow
      color={"#fff"}
      dotColor={"#fff"}
      size="xl"
      hoveringAnimation="magnify"
    />
  );
}
