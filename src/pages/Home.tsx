import { HeroSection } from "@/components/HeroSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* About Preview Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <h2 className="text-display mb-6">{t("about.title")}</h2>
              <p className="text-subheading mb-6">{t("about.subtitle")}</p>
              <p className="text-body mb-8 leading-relaxed">
                {t("about.description")}
              </p>

              {/* Skills Preview */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-text-primary">
                    Cloud & DevOps
                  </h4>
                  <ul className="text-small space-y-1">
                    <li>AWS (EC2, Lambda, CloudWatch)</li>
                    <li>Docker & Kubernetes</li>
                    <li>Terraform & CI/CD Pipelines</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-text-primary">
                    Wed Design & Development
                  </h4>
                  <ul className="text-small space-y-1">
                    <li>React & TypeScript</li>
                    <li>Node.js & Python</li>
                    <li>UI UX on Figma</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 shadow-large overflow-hidden">
                  <img
                    src="/A7C01847.jpg"
                    alt="Mohan Babujii"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">☁️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProjects />
    </div>
  );
};

export default Home;
