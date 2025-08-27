import { HeroSection } from '@/components/HeroSection';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { useLanguage } from '@/contexts/LanguageContext';

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
              <h2 className="text-display mb-6">
                {t('about.title')}
              </h2>
              <p className="text-subheading mb-6">
                {t('about.subtitle')}
              </p>
              <p className="text-body mb-8 leading-relaxed">
                {t('about.description')}
              </p>
              
              {/* Skills Preview */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-text-primary">Cloud & DevOps</h4>
                  <ul className="text-small space-y-1">
                    <li>AWS (EC2, Lambda, S3)</li>
                    <li>Docker & Kubernetes</li>
                    <li>CI/CD Pipelines</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-text-primary">Development</h4>
                  <ul className="text-small space-y-1">
                    <li>React & TypeScript</li>
                    <li>Node.js & Python</li>
                    <li>Database Design</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 shadow-large">
                  <div className="w-full h-full bg-surface rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">M</span>
                      </div>
                      <p className="font-mono text-text-secondary">Cloud Engineer</p>
                      <p className="font-mono text-text-secondary">Japan 🇯🇵</p>
                    </div>
                  </div>
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