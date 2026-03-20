import Section from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";

const MetricItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center text-center space-y-4">
    <div className="text-5xl md:text-7xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
      {value}
    </div>
    <div className="h-[2px] w-12 bg-blue-600" />
    <Heading
      as="h6"
      className="text-white/60 mb-0 font-medium tracking-widest uppercase text-xs"
    >
      {label}
    </Heading>
  </div>
);

const MetricsSection = () => {
  return (
    <Section id="metrics" className="bg-white/[0.02]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        <MetricItem value="98%" label="Success Rate" />
        <MetricItem value="150+" label="Projects Done" />
        <MetricItem value="12" label="Global Awards" />
        <MetricItem value="24/7" label="Support" />
      </div>
    </Section>
  );
};

export default MetricsSection;
