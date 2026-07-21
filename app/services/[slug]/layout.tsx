import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getServiceBySlug } from "@/lib/services-data";

interface Props {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} — SRP | Space Right Projects`,
    description: service.description[0],
  };
}

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grain relative bg-matte text-pearl">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
