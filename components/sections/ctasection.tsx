import Section from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";
import Link from "next/link";

const CtaSection = () => {
  return (
    <Section id="cta" className="pb-32">
      <div className="glass-card relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/30 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#043AAE]/20 blur-[80px] translate-y-1/2 -translate-x-1/2" />

        <div className="relative flex flex-col items-center text-center space-y-8 py-10">
          <Heading as="h2" className="text-white max-w-2xl">
            Ready to Build Your <br />
            <span className="text-blue-400">Next Great Idea?</span>
          </Heading>

          <Text className="max-w-xl text-white/60">
            Let's collaborate to create a digital experience that stands out.
            Industry-level code meets creative design.
          </Text>

          <Link href="#contact" className="btn-premium text-white px-10">
            Get In Touch
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default CtaSection;
