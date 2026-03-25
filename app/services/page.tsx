import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Section from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description: "Custom-coded, high-performance websites built with modern frameworks like Next.js and React tailored to your brand.",
      icon: "💻"
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and beautiful user interfaces designed with user experience in mind, ensuring your customers love your product.",
      icon: "🎨"
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and increase organic traffic with our comprehensive SEO strategies.",
      icon: "🚀"
    }
  ];

  return (
    <div className="flex min-h-screen bg-[#050505]">
      <main className="w-full relative flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col justify-center pt-24 min-h-[80vh]">
          <Section id="services">
            <div className="text-center space-y-6">
              <Heading as="h1" className="text-white">
                Our <span className="text-[#1A14A5]">Services</span>
              </Heading>
              <Text className="text-lg max-w-2xl mx-auto">
                We provide high-quality digital solutions to help you grow your business and stand out in the competitive digital landscape.
              </Text>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {services.map((service, i) => (
                  <div key={i} className="glass-card p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center text-center space-y-4 hover:bg-white/10 transition-colors">
                    <div className="text-5xl mb-2">{service.icon}</div>
                    <Heading as="h3" className="text-2xl text-white">
                      {service.title}
                    </Heading>
                    <Text className="text-white/70">
                      {service.description}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
        <Footer />
      </main>
    </div>
  );
}
