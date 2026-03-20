import Section from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";

const ContactSection = () => {
  return (
    <Section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8 h-full flex flex-col justify-center">
          <Heading as="h2" className="text-white">
            Let's Start Your <br />
            <span className="text-[#1A14A5]">Journey</span> Today
          </Heading>
          <Text className="text-lg">
            Have a project in mind? We'd love to hear from you. Fill out the
            form or reach out through our social channels.
          </Text>

          <div className="space-y-6 pt-6">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <Heading as="h6" className="mb-0 text-white/40">
                  Email
                </Heading>
                <Text className="text-white font-medium">
                  bilalcodes777@gmail.com
                </Text>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              {[
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/bilal-jadi/",
                  icon: "LN",
                },
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/bilaljadi_/",
                  icon: "IG",
                },
                {
                  name: "GitHub",
                  url: "https://github.com/B-JCoder",
                  icon: "GH",
                },
                {
                  name: "Facebook",
                  url: "https://www.facebook.com/bilal.jadi.946/",
                  icon: "FB",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white/60 hover:text-blue-400 hover:border-blue-400/50 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-600 transition-colors resize-none"
              ></textarea>
            </div>
            <button className="btn-premium text-white w-full py-4 text-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
