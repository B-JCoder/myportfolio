import Section from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";

const AboutSection = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="glass-card aspect-square relative z-10 p-0 overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
              alt="Workspace"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/30 blur-[60px]" />
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#043AAE]/20 blur-[60px]" />
        </div>

        <div className="space-y-8">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <Text className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              Professional Background
            </Text>
          </div>

          <Heading as="h2" className="text-white">
            Founder & CEO <span className="text-[#1A14A5]">BSH SOLUTIONS</span>
          </Heading>

          <Text className="text-lg">
            I'm a Full Stack Developer dedicated to engineering high-performance
            web ecosystems. As the Founder and CEO of BSH SOLUTIONS, I lead
            digital transformation projects from conceptual design to
            enterprise-level deployment.
          </Text>

          <div className="space-y-6">
            <Heading
              as="h6"
              className="text-white/40 uppercase tracking-widest text-[10px] mb-4"
            >
              Core Tech Stack
            </Heading>
            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JS",
                "EXPRESS",
                "REACTJS",
                "NEXTJS",
                "NEST JS",
                "SUPABASE",
                "FIREBASE",
                "WORDPRESS",
                "ELEMENTOR",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-white/70 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-6">
            <div className="space-y-3">
              <Heading as="h4" className="text-white mb-0">
                Strategy
              </Heading>
              <Text className="text-sm">
                Building scalable architectures for long-term growth.
              </Text>
            </div>
            <div className="space-y-3">
              <Heading as="h4" className="text-white mb-0">
                Precision
              </Heading>
              <Text className="text-sm">
                Writing clean, maintainable, and industry-standard code.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
