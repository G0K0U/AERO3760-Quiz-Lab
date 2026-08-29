import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AERO3760 Quiz Lab · From Zero to 20 Questions",
  description: "Interactive revision for Space Engineering 2 Lectures 1–6: manoeuvres, plane changes, lunar transfers and spheres of influence. Learn from zero, then practise with 40 multiple-choice questions targeting the Week 8 quiz.",
  openGraph: {
    title: "AERO3760 Quiz Lab · From Zero to 20 Questions",
    description: "Interactive revision for Space Engineering 2 Lectures 1–6.",
    images: [{ url: "/og.png", width: 1536, height: 1024 }],
  },
  twitter: { card: "summary_large_image", title: "AERO3760 Quiz Lab · From Zero to 20 Questions", description: "Interactive revision for Lectures 1–6, targeting the Week 8 quiz.", images: ["/og.png"] },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
