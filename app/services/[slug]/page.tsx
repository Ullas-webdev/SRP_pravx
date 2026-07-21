import { notFound } from "next/navigation";
import { SERVICES, getServiceBySlug, getRelatedServices } from "@/lib/services-data";
import ServiceHero from "@/components/ServiceHero";
import ServiceBody from "@/components/ServiceBody";
import ServiceRelated from "@/components/ServiceRelated";

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-generate all 8 static routes at build time
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.related);

  return (
    <>
      <ServiceHero service={service} />
      <ServiceBody service={service} />
      {related.length > 0 && (
        <ServiceRelated services={related} accentColor={service.accentColor} />
      )}
    </>
  );
}
