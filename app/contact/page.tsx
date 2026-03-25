import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ContactSection from "@/components/sections/contactsection";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen bg-[#050505]">
      <main className="w-full relative">
        <Header />
        <div className="pt-24 min-h-[80vh] flex flex-col justify-center">
          <ContactSection />
        </div>
        <Footer />
      </main>
    </div>
  );
}
