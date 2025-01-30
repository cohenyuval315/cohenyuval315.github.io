import type { Metadata } from "next";
import "../styles/globals.css";
import { Suspense } from "react";
import ProgressBar from "@/components/progressbar/ProgressBar";
import AppFooter from "@/components/AppFooter";
import LogoWithName from "@/components/header/LogoWithName";

import {
  FOOTER_TEXT,
  INTER,
  LOGO_ALT,
  LOGO_IMAGE,
  LOGO_TEXT,
  MENU_ITEMS,
  METADATA,
} from "@/constants";
import AppHeader from "@/components/header/AppHeader";
import NavigationBar from "@/components/header/NavigationBar";

const inter = INTER;
export const metadata: Metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-900 text-white min-h-screen font-sans">
          <AppHeader>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <LogoWithName alt={LOGO_ALT} name={LOGO_TEXT} src={LOGO_IMAGE} />
              <NavigationBar menuItems={MENU_ITEMS} />
            </div>
          </AppHeader>
          <main>
            <Suspense>
              {children}
              <ProgressBar />
            </Suspense>
          </main>
          <AppFooter text={FOOTER_TEXT} />
        </div>
      </body>
    </html>
  );
}
