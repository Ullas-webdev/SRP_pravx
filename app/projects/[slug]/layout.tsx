import PageShell from "@/components/PageShell";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    // Skip loading animation on individual project pages
    <PageShell>
      <Nav />
      <main className="min-h-screen bg-matte text-pearl relative z-10 selection:bg-gold/30 selection:text-pearl">
        {children}
      </main>
      <Footer />
    </PageShell>
  );
}
