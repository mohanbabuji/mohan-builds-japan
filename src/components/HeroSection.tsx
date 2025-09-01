import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-20 pb-10">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full py-8">
        <div className="text-center">
          {/* Massive Awwwards-style Title */}
          <div className="animate-fade-up">
            <h1 className="text-hero mb-8 select-none">{t("hero.title")}</h1>
          </div>

          {/* Subtitle - Clean & Minimal */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              {t("hero.subtitle")}
            </h2>
          </div>

          {/* Description */}
          <div
            className="animate-fade-up max-w-2xl mx-auto mb-16"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
              {t("hero.description")}
            </p>
          </div>

          {/* Minimal CTA Buttons */}
          <div
            className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
            style={{ animationDelay: "0.3s" }}
          >
            <Link to="/works">
              <Button className="btn-primary group">
                {t("hero.cta.primary")}
                <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link to="/contact">
              <Button className="btn-secondary group">
                {t("hero.cta.secondary")}
              </Button>
            </Link>
          </div>

          {/* Professional Tags - Minimal Grid */}
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 max-w-4xl mx-auto">
              {[
                "AWS CERTIFIED",
                "CLOUD ENGINEER",
                "FULL-STACK DEVELOPER",
                "BASED IN JAPAN",
              ].map((tag) => (
                <div key={tag} className="bg-white px-6 py-4 text-center">
                  <span className="text-xs font-medium tracking-widest uppercase text-gray-600">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-gray-400" />
      </div>
    </section>
  );
};
