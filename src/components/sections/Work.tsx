/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useRef, useEffect } from "react";
import { WorkCard } from "..";

const workData = [
  {
    id: 0,
    name: "Job&Work",
    desc: "Job matching application in Japan.",
    framework: [
      { id: 0, name: "Figma" },
      { id: 1, name: "React native" },
      { id: 2, name: "NextJS" },
    ],
    image: "/assets/images/jaw.png",
    backColor: "#e2e8fc",
    circleColor: "#0057ff",
    weburl: "www.jobandwork.jp",
    appstore: "https://apps.apple.com/us/app/job-work-japan/id1450742786",
    playstore:
      "https://play.google.com/store/apps/details?id=com.tabbaitomobile",
  },
  {
    id: 1,
    name: "ONEDAYJOB",
    desc: "Job matching application in Mongolia.",
    framework: [
      { id: 0, name: "Figma" },
      { id: 1, name: "React native" },
      { id: 2, name: "NextJS" },
    ],
    image: "/assets/images/one.png",
    backColor: "#E1F4FD",
    circleColor: "#05A6EF",
    weburl: "https://www.onedayjob.mn/",
    appstore: "https://apps.apple.com/us/app/oneday-job/id1514533374",
    playstore: "https://play.google.com/store/apps/details?id=com.onedayjob",
  },
  {
    id: 2,
    name: "ROMUTEN",
    desc: "Labor management system.",
    framework: [
      { id: 0, name: "Figma" },
      { id: 1, name: "React native" },
      { id: 2, name: "NextJS" },
    ],
    image: "/assets/images/romu.png",
    backColor: "#E0EBFF",
    circleColor: "#0057FF",
    weburl: "https://www.romuten.jp/",
    appstore:
      "https://apps.apple.com/jp/app/%E3%83%AD%E3%83%A0%E3%83%86%E3%83%B3/id1527510811?ign-mpt=uo%3D4",
    playstore:
      "https://play.google.com/store/apps/details?id=com.romu.jobandwork",
  },
  {
    id: 3,
    name: "DAYBAITO",
    desc: "Job matching application in Japan",
    framework: [
      { id: 0, name: "Figma" },
      { id: 1, name: "React native" },
      { id: 2, name: "NextJS" },
    ],
    image: "/assets/images/baito.png",
    backColor: "#F0F9FB",
    circleColor: "#A1D6E6",
    weburl: "https://www.daybaito.jp/",
    appstore:
      "https://apps.apple.com/jp/app/%E3%82%A8%E3%83%8A%E3%83%96%E3%83%AB/id1332585409",
    playstore:
      "https://play.google.com/store/apps/details?id=com.companyname.EnabullMobile",
  },
  {
    id: 4,
    name: "OG Wellness",
    desc: "Monitoring app for BE-Well",
    framework: [
      { id: 0, name: "Figma" },
      { id: 1, name: "React native" },
    ],
    image: "/assets/images/og.png",
    backColor: "#E4EBF4",
    circleColor: "#1D55A1",
    web: true,
    weburl: "https://www.og-wellness.jp/app/",
    appstore: "https://apps.apple.com/jp/app/og-data-link/id1575333689",
  },
  {
    id: 5,
    name: "OG Wellness IVES",
    desc: "Monitoring app for IVES",
    framework: [
      { id: 0, name: "Figma" },
      { id: 1, name: "React native" },
    ],
    image: "/assets/images/og2.png",
    backColor: "#E3E4E4",
    circleColor: "#181A20",
    web: true,
    weburl: "https://www.og-wellness.jp/app/",
    appstore:
      "https://apps.apple.com/jp/app/ives%E3%82%A2%E3%83%97%E3%83%AA-for-ipad/id6458647577",
  },
  {
    id: 6,
    name: "GENOVA",
    desc: "Hospital appointment system",
    framework: [
      { id: 0, name: "Figma" },
      { id: 1, name: "NextJS" },
    ],
    image: "/assets/images/genevo.png",
    backColor: "#F0F9FB",
    circleColor: "#A1D6E6",
    web: true,
    weburl: "https://nomoca.net/",
  },
  {
    id: 7,
    name: "JTK world",
    desc: "Japan traditional karate association website",
    framework: [
      { id: 0, name: "Figma" },
      { id: 1, name: "React" },
    ],
    image: "/assets/images/karate.png",
    backColor: "#F6F3EB",
    circleColor: "#B19F59",
    web: true,
    weburl: "https://www.jtk-world.jp/",
  },
  {
    id: 8,
    name: "KINTAI KANRI SYSTEM",
    desc: "Construction attendance management system",
    framework: [
      { id: 0, name: "Figma" },
      { id: 1, name: "React native" },
      { id: 2, name: "NextJS" },
    ],
    image: "/assets/images/kks.png",
    backColor: "#E9F2FF",
    circleColor: "#003344",
    web: true,
    weburl: "https://kks-web-rnffdc3d4q-an.a.run.app/",
  },
  {
    id: 9,
    name: "CHILD LAB",
    desc: "For child, mothers news web, app",
    framework: [
      { id: 0, name: "Figma" },
      { id: 1, name: "React native" },
      { id: 2, name: "NextJS" },
    ],
    image: "/assets/images/child.png",
    backColor: "#E0F5FB",
    circleColor: "#00B1E1",
    weburl:
      "https://www.figma.com/file/fn1qqjjWrqHsVmm65kYDd6/COTOKONO---Design?type=design&node-id=444%3A16551&mode=design&t=aq9gGJsgrZvTOprf-1",
  },
];

export function Work() {
  const element: HTMLElement | null = document.querySelector("#container");

  if (element) {
    element.addEventListener("wheel", (event: WheelEvent) => {
      event.preventDefault();

      if (element.scrollBy) {
        element.scrollBy({
          left: event.deltaY < 0 ? -1.5 : 1.5,
        });
      }
    });
  }

  return (
    <div className="work">
      <div className="work-container">
        <div className="title">
          <h1>Some of my works</h1>
          <p>
            I have introduced all foreign and domestic projects to the market
            using various technologies and tools including Figma, Adobe XD,
            React native, ReactJS, and NextJS.
          </p>
        </div>
        <div className="card-container" id="container">
          <div className="card-container-body">
            {workData.map((item, idx) => (
              <WorkCard key={idx} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
