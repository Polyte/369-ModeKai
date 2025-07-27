/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata, Viewport } from "next";
import { Inter, PT_Sans } from "next/font/google";
import { cookies } from "next/headers";

import TanstackProvider from "@/components/providers/tanstack-query-provider";
import "@/assets/globals.css";
import { Toaster } from "@/components/ui/sonner";
import MY_TOKEN_KEY from "@/lib/get-cookie-name";
import { apiServer } from "@/lib/api";
import AppContext from "@/components/contexts/app-context";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const ptSans = PT_Sans({
  variable: "--font-ptSans-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "369ModekAi | Build with AI ✨",
  description:
    "369ModekAi is a web development tool that helps you build websites with AI, no code required. Let's deploy your website with 369ModekAi and enjoy the magic of AI.",
  openGraph: {
    title: "369ModekAi | Build with AI ✨",
    description:
      "369ModekAi is a web development tool that helps you build websites with AI, no code required. Let's deploy your website with 369ModekAi and enjoy the magic of AI.",
    url: "https://369ai.com",
    siteName: "369K",
    images: [
      {
        url: "#",
        width: 1200,
        height: 630,
        alt: "369ModekAi Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "369ModekAi | Build with AI ✨",
    description:
      "369Mode-Kai is a web development tool that helps you build websites with AI, no more bullshit of waiting time, just get it done.",
    images: [""],
  },
  appleWebApp: {
    capable: true,
    title: "369ModekAi",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

async function getMe() {
  const cookieStore = await cookies();
  const token = cookieStore.get(MY_TOKEN_KEY())?.value;
  if (!token) return { user: null, errCode: null };
  try {
    const res = await apiServer.get("/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { user: res.data.user, errCode: null };
  } catch (err: any) {
    return { user: null, errCode: err.status };
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getMe();
  return (
    <html lang="en">
      <Script
        defer
        data-domain="369modekai.hf.co"
        src="https://plausible.io/js/script.js"
      ></Script>
      <body
        className={`${inter.variable} ${ptSans.variable} antialiased bg-black dark h-[100dvh] overflow-hidden`}
      >
        <Toaster richColors position="bottom-center" />
        <TanstackProvider>
          <AppContext me={data}>{children}</AppContext>
        </TanstackProvider>
      </body>
    </html>
  );
}
