import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Section from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";

export default function BlogsPage() {
  return (
    <div className="flex min-h-screen bg-[#050505]">
      <main className="w-full relative flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col justify-center pt-24 min-h-[80vh]">
          <Section id="blogs">
            <div className="text-center space-y-6">
              <Heading as="h1" className="text-white">
                Our <span className="text-[#1A14A5]">Blog</span>
              </Heading>
              <Text className="text-lg max-w-2xl mx-auto">
                Read our insights, updates, and thoughts on web development and design. We actively publish insightful articles, so stay tuned!
              </Text>
              <div className="mt-12 space-y-8 max-w-4xl mx-auto text-left">
                {/* Placeholder for blog posts */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="glass-card p-8 bg-white/5 border border-white/10 rounded-2xl space-y-4 hover:border-blue-500/50 transition-colors cursor-pointer">
                    <div className="flex justify-between items-center text-sm text-white/50">
                      <span>Article Category</span>
                      <span>Oct {i + 10}, 2026</span>
                    </div>
                    <Heading as="h3" className="text-2xl text-white">
                      Blog Post Title {i}: A Dive into Modern UI Development
                    </Heading>
                    <Text className="text-white/70 line-clamp-2">
                      This is a short preview of the blog post content. It describes the main ideas discussed in this article about web development, design patterns, and crafting the perfect user experience.
                    </Text>
                    <span className="text-blue-400 font-bold uppercase tracking-wider text-sm mt-4 inline-block">Read More &rarr;</span>
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
