import type { Metadata } from "next";
import { BaliFAQ } from "@/components/bali-faq"

export const metadata: Metadata = {
  title: "Bali FAQ | Photo Shoot",
  description: "Frequently asked questions about our professional photography services in Bali",
};

export default function BaliFAQPage() {
  return <BaliFAQ />;
}
