import { Button } from "antd";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

interface Framework {
  name?: string;
}

interface Props {
  data?: {
    name?: string;
    desc?: string;
    image?: string | any;
    framework?: Framework[];
    backColor?: string;
    circleColor?: string;
    web?: boolean;
    weburl?: string;
    appstore?: string;
    playstore?: string;
  };
}

export function WorkCard({ data }: Props) {
  return (
    <div
      className="card"
      style={{ backgroundColor: data?.backColor }}
      //   className={`card ${detail ? "see-detail" : ""}`}
      //   onClick={() => setDetail(!detail)}
    >
      <div className="circle" style={{ backgroundColor: data?.circleColor }} />
      <h1>{data?.name}</h1>
      <p>{data?.desc}</p>
      <div className="tags">
        {data?.framework?.map((item, idx: number) => (
          <span key={idx}>{item.name}</span>
        ))}
      </div>
      <Button
        shape="circle"
        className="more-button"
        icon={
          <Image
            height={34}
            width={34}
            alt="icon"
            src="/assets/images/icons/plus.svg"
          />
        }
      />
      <Image
        height={343}
        width={467}
        alt="work image"
        src={data?.image}
        className={`work-image ${data?.web ? "web" : ""}`}
      />
      <a className="detail">
        <h1>{data?.name}</h1>
        <p>{data?.desc}</p>
        <div className="tags">
          {data?.framework?.map((item, idx: number) => (
            <span key={idx}>{item.name}</span>
          ))}
        </div>
        <div className="buttons">
          <Button
            shape="round"
            type="primary"
            icon={
              <Image
                height={24}
                width={24}
                alt="icon"
                src="/assets/images/icons/globe.svg"
              />
            }
            target="_blank"
            href={data?.weburl}
          >
            Website
          </Button>
          {data?.appstore && (
            <Button
              shape="round"
              type="primary"
              icon={
                <Image
                  height={24}
                  width={24}
                  alt="icon"
                  src="/assets/images/icons/app.svg"
                />
              }
              target="_blank"
              href={data?.appstore}
            >
              App store
            </Button>
          )}
          {data?.playstore && (
            <Button
              shape="round"
              type="primary"
              icon={
                <Image
                  height={24}
                  width={24}
                  alt="icon"
                  src="/assets/images/icons/play.svg"
                />
              }
              target="_blank"
              href={data?.playstore}
            >
              Play store
            </Button>
          )}
        </div>
      </a>
    </div>
  );
}
