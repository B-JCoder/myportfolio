import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Section from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen bg-[#050505]">
      <main className="w-full relative flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col justify-center pt-24 min-h-[80vh]">
          <Section id="projects">
            <div className="text-center space-y-6">
              <Heading as="h1" className="text-white">
                Our <span className="text-[#1A14A5]">Projects</span>
              </Heading>
              <Text className="text-lg max-w-2xl mx-auto">
                Discover our latest work and case studies. Our portfolio will be updated here shortly. We are working hard to showcase our best creations!
              </Text>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Placeholder for project cards */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="glass-card aspect-video flex items-center justify-center text-white/50 bg-white/5 border border-white/10 rounded-2xl">
                    <Text>Project {i} Coming Soon</Text>
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
