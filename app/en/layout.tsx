import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AERO3760 Quiz Lab · From Zero to 20 Questions",
  description: "Interactive orbital manoeuvres revision for Space Engineering 2 Lectures 1–3. Learn the concepts from zero, then practise with 20 multiple-choice questions.",
  openGraph: {
    title: "AERO3760 Quiz Lab · From Zero to 20 Questions",
    description: "Interactive orbital manoeuvres revision for Space Engineering 2 Lectures 1–3.",
    images: [{ url: "/og.png", width: 1536, height: 1024 }],
  },
  twitter: { card: "summary_large_image", title: "AERO3760 Quiz Lab · From Zero to 20 Questions", description: "Interactive orbital manoeuvres revision for Lectures 1–3.", images: ["/og.png"] },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
