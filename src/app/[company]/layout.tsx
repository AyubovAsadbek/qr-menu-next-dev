// Components
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>{children}</main>
      <Footer />
      <BottomNav />
    </div>
  );
}
