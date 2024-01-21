import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { CustomCursor } from "@/components";
import "react-horizontal-scrolling-menu/dist/styles.css";

import theme from "@/utils/themeConfig";
import "../styles/main.scss";
import "react-custom-cursors/dist/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio of Product designer & Developer Munkh-Erdene",
  description: "a UI/UX designer & Developer based in Ulaanbaatar, Mongolia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
          name="viewport"
        />
      </head>
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <div className="layout">{children}</div>
          </ConfigProvider>
        </AntdRegistry>
        <CustomCursor />
      </body>
    </html>
  );
}
