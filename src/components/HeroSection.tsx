import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Title */}
          <div className="animate-fade-up">
            <h1 className="text-hero mb-4">
              {t('hero.title')}
            </h1>
            <div className="h-2 w-32 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full mb-8"></div>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-display mb-6 max-w-4xl mx-auto">
              <span className="gradient-text">{t('hero.subtitle')}</span>
            </h2>
          </div>

          {/* Description */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-body text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-6" style={{ animationDelay: '0.6s' }}>
            <Link to="/works">
              <Button className="btn-primary group">
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button className="btn-secondary group">
                {t('hero.cta.secondary')}
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </Button>
            </Link>
          </div>

          {/* Professional Tags */}
          <div className="animate-fade-up mt-16" style={{ animationDelay: '0.8s' }}>
            <div className="flex flex-wrap items-center justify-center gap-4 text-small">
              <span className="px-3 py-1 bg-surface border border-gray-200 rounded-full">AWS Certified</span>
              <span className="px-3 py-1 bg-surface border border-gray-200 rounded-full">Cloud Engineer</span>
              <span className="px-3 py-1 bg-surface border border-gray-200 rounded-full">Full-Stack Developer</span>
              <span className="px-3 py-1 bg-surface border border-gray-200 rounded-full">Based in Japan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-muted rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};