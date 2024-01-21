import React from "react";
import { TypeAnimation } from "react-type-animation";

interface Props {
  end?: boolean;
}

export function Loading({ end }: Props) {
  return (
    <div className={`loading ${end ? "end" : ""}`}>
      <TypeAnimation
        sequence={[
          "Сайн уу!",
          100,
          "Hello!",
          100,
          "Hola!",
          100,
          "Bonjour!",
          100,
          "こんにちは!",
          100,
        ]}
        wrapper="span"
        speed={55}
      />
    </div>
  );
}
